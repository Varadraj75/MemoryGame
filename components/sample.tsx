"use client"

import { useState } from "react"
import { useAccount } from "wagmi"
import { useGameContract } from "@/hooks/useGameContract"

const SampleIntregation = () => {
  const { isConnected } = useAccount()
  const { attemptsLeft, makeGuess, guessInput, setGuessInput, state } = useGameContract()

  const handleGuess = async () => {
    try {
      await makeGuess(guessInput)
    } catch (err) {
      console.error("Guess failed:", err)
    }
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="max-w-md w-full">
          <h2 className="text-2xl font-bold mb-3">Memory Game</h2>
          <p>Please connect your wallet.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-6 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Memory Game</h1>

      <div className="border rounded-lg p-4 mb-4">
        <p className="text-sm opacity-70">Attempts Left</p>
        <p className="text-2xl font-semibold">{attemptsLeft}</p>
      </div>

      <div className="space-y-3 mb-6">
        <p className="font-medium">Enter Your Guess (3 numbers):</p>
        <div className="grid grid-cols-3 gap-3">
          {[0, 1, 2].map((i) => (
            <input
              key={i}
              type="number"
              min="0"
              max="9"
              value={guessInput[i]}
              onChange={(e) => {
                const v = Number(e.target.value)
                const arr = [...guessInput] as [number, number, number]
                arr[i] = v
                setGuessInput(arr)
              }}
              className="border rounded-lg p-2 text-center"
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleGuess}
        disabled={state.isLoading || attemptsLeft === 0}
        className="w-full py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
      >
        {state.isLoading ? "Submitting..." : "Submit Guess"}
      </button>

      {state.hash && (
        <div className="mt-4 p-4 border rounded-lg">
          <p className="text-xs opacity-70 mb-1">Transaction Hash:</p>
          <p className="text-sm break-all">{state.hash}</p>
        </div>
      )}

      {state.error && (
        <div className="mt-4 p-4 border border-red-500 rounded-lg text-red-600">
          Error: {state.error.message}
        </div>
      )}
    </div>
  )
}

export default SampleIntregation
