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
