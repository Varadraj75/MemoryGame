# Memory Game – Smart Contract + Frontend Integration

## **Contract Address**
**0xeE33eaeD97D3e4f89Ca60901e927b6a9c68d25c6**  
https://coston2-explorer.flare.network/address/0xeE33eaeD97D3e4f89Ca60901e927b6a9c68d25c6

---

## **Project Description**
The Memory Game is a blockchain-based on-chain guessing game built on the Flare Network.  
Players attempt to guess a fixed hidden sequence of three numbers. Each guess is sent as an on-chain transaction, and the contract validates whether the guess matches the secret sequence. The contract also enforces a maximum number of attempts ("glass limit") per player.

This project provides:
- A minimalistic smart contract
- A fully functional React/Next.js frontend
- Wallet integration via Wagmi + Viem
- Real-time attempt tracking and status updates

This lightweight structure allows easy expansion into a full gamified DApp with animations, rewards, or randomized sequences.

---

## **Features**
### **Smart Contract**
- ✔️ Hidden memory sequence stored on-chain  
- ✔️ Player-specific attempt tracking  
- ✔️ Hardcoded attempt limit (`maxAttempts`)  
- ✔️ `GuessResult` event emitted for UI feedback  
- ✔️ Stateless architecture with no constructor inputs  
- ✔️ Lightweight & gas-efficient logic  

### **Frontend**
- ✔️ Built with Next.js + Wagmi  
- ✔️ Wallet-based authentication  
- ✔️ Read player’s remaining attempts  
- ✔️ Submit a guess (3-number input)  
- ✔️ Loading, pending, confirmation UI states  
- ✔️ Realtime transaction status (hash + confirmation)  
- ✔️ Full error handling  

---

## **How It Solves the Problem**
Traditional online memory or guessing games rely on centralized servers, making fairness and transparency questionable. This project solves that by:

### **1. Ensuring Transparency**
Every guess is recorded on-chain, guaranteeing:
- Immutable game history  
- Transparent rules  
- Public verifiability of attempts  

### **2. Enforcing Fairness**
Attempt limits are enforced at the smart-contract level.  
Players cannot bypass the "glass limit" by refreshing or spoofing requests.

### **4. On-Chain Game Logic**
Since the validation happens on-chain:
- No off-chain manipulation  
- No backend required  
- Players trust the contract, not a server  

### **5. Easy DApp Expansion**
This contract provides a base for future enhancements:
- Rewards/tokens for winners  
- Randomized sequences  
- Multiplayer competitions  
- Leaderboards  

---

## **Summary**
This project demonstrates a completely on-chain memory puzzle game with a clean frontend integration. With user-friendly interactions, wallet connectivity, and an extensible contract architecture, it serves as a strong starting point for building more advanced blockchain games on Flare or EVM-compatible networks.
