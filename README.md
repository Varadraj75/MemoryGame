# MemoryGame
Ultra Basic Memory Game — Solidity Smart Contract
Project Description

This project implements a very simple Memory/Matching Game using Solidity.
The goal is to provide beginners with an easy-to-understand example of how arrays, state, and basic game logic can be implemented inside a smart contract.

The contract allows you to set up a board of cards, flip two positions, check if they match, and track which cards have already been matched.

What It Does

Allows setting a board of numbered cards (e.g., [1, 2, 1, 2])

Lets users flip two card positions

Checks whether the flipped cards match

Marks matched cards so they cannot be reused

Returns true when a match is found and false when not

Provides the current board size

Features

Simple, beginner-friendly codebase

Uses uint8[] for storing card values

Uses bool[] to track matched cards

Validation checks to prevent invalid flips

Useful as a learning project, demo DApp backend, or Web3 tutorial

Deployed Smart Contract

View the deployed contract here:
https://coston2-explorer.flare.network/address/0x5dD6d817206E495bfe5a9dF56888C967558A1635?tab=index

Smart Contract Code
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
