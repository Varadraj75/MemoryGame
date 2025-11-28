// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MemoryGame {
    // The correct hidden sequence (you can change these numbers)
    uint8[3] private secretSequence = [1, 3, 2];

    // Maximum allowed attempts (glass limit)
    uint public maxAttempts = 5;

    // Track attempts made by each player
    mapping(address => uint) public attempts;

    // Event to notify if user guessed correctly or wrong
    event GuessResult(address player, bool correct, uint attemptsUsed);

    // User submits their guess
    function guess(uint8[3] memory userGuess) public {
        require(attempts[msg.sender] < maxAttempts, "Guess limit reached!");

        attempts[msg.sender]++;

        bool correct = true;
        for (uint i = 0; i < 3; i++) {
            if (userGuess[i] != secretSequence[i]) {
                correct = false;
                break;
            }
        }

        emit GuessResult(msg.sender, correct, attempts[msg.sender]);
    }

    // Check attempts remaining for current player
    function attemptsLeft(address player) public view returns (uint) {
        return maxAttempts - attempts[player];
    }
}
