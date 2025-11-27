# MemoryGame
# Ultra Basic Memory Game — Solidity Smart Contract

## Project Description
This project contains a simple Memory/Matching Game implemented in Solidity.  
It demonstrates how to use arrays, state variables, and basic logic to build a very lightweight game on the blockchain.

The contract allows setting a card board, flipping two card indexes, checking if they match, and marking matched cards.

---

## What It Does
- Lets you set a board of card values (example: `[1, 2, 1, 2]`)
- Allows flipping two card positions
- Checks whether the selected cards match
- Marks matched cards so they cannot be used again
- Returns `true` when there is a match, otherwise `false`
- Provides the size of the board

---

## Features
- Beginner-friendly Solidity code
- Uses `uint8[]` to store card values
- Uses `bool[]` to track matched cards
- Includes basic validation for invalid flips
- Good starting point for learning Web3, solidity logic, or simple DApps

---

## Deployed Smart Contract
Flare Coston2 Explorer:  
https://coston2-explorer.flare.network/address/0x5dD6d817206E495bfe5a9dF56888C967558A1635?tab=index

---

## Smart Contract Code

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// ULTRA BASIC MEMORY GAME
contract MemoryGame {
    uint8[] public board;      // stores card numbers (example: [1,2,1,2])
    bool[] public matched;     // matched or not

    // Set the board (ex: [1,2,1,2])
    function setBoard(uint8[] calldata _board) external {
        board = _board;
        matched = new bool[](_board.length);
    }

    // Check if two cards match
    function flip(uint a, uint b) external returns (bool) {
        if (a >= board.length || b >= board.length) return false;
        if (a == b) return false;
        if (matched[a] || matched[b]) return false;

        if (board[a] == board[b]) {
            matched[a] = true;
            matched[b] = true;
            return true;   // they match
        }

        return false;       // they don't match
    }

    // See board size
    function boardSize() external view returns (uint) {
        return board.length;
    }
}

