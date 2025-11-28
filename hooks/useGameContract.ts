"use client"

import { useState, useEffect } from "react"
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi"
import { contractABI, contractAddress } from "@/lib/contract"

export interface ContractState {
  isLoading: boolean
  isPending: boolean
  isConfirming: boolean
  isConfirmed: boolean
  hash: `0x${string}` | undefined
  error: Error | null
}

export const useGameContract = () => {
  const { address } = useAccount()

  const [isLoading, setIsLoading] = useState(false)
  const [guessInput, setGuessInput] = useState<[number, number, number]>([0, 0, 0])

  const { data: attemptsLeft, refetch: refetchAttemptsLeft } = useReadContract({
    address: contractAddress,
    abi: contractABI,
    functionName: "attemptsLeft",
    args: [address!],
    query: { enabled: !!address }
  })

  const { writeContractAsync, data: hash, error, isPending } = useWriteContract()

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({ hash })

  useEffect(() => {
    if (isConfirmed) {
      refetchAttemptsLeft()
    }
  }, [isConfirmed, refetchAttemptsLeft])

  const makeGuess = async (numbers: [number, number, number]) => {
    try {
      setIsLoading(true)
      await writeContractAsync({
        address: contractAddress,
        abi: contractABI,
        functionName: "guess",
        args: [numbers]
      })
    } catch (err) {
      console.error("Guess error:", err)
      throw err
    } finally {
      setIsLoading(false)
    }
  }

  const state: ContractState = {
    isLoading: isLoading || isPending || isConfirming,
    isPending,
    isConfirming,
    isConfirmed,
    hash,
    error,
  }

  return {
    attemptsLeft: attemptsLeft ? Number(attemptsLeft as bigint) : 0,
    makeGuess,
    guessInput,
    setGuessInput,
    state,
  }
}
