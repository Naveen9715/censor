# 🚫 Censorify (Text Content Filter)

A lightweight Node.js module that detects and censors undesirable or sensitive words within text strings, replacing them with asterisks (****). It also supports dynamically adding custom words to the filter dictionary.

## ✨ Features

- **Default Word Filtering**: Automatically sanitizes commonly filtered words (sad, ad, mad).
- **Dynamic Dictionary Expansion**: Add custom words to the filter blacklist at runtime using ddCensoredWord().
- **Dictionary Inspection**: Retrieve the full list of active censored keywords with getCensoredWords().
- **Zero Dependencies**: Lightweight and fast with pure native JavaScript.

## 📦 Installation

Clone the repository:

``bash
git clone https://github.com/Naveen9715/censor.git
cd censor
``

## 🚀 Usage

``javascript
const censorify = require('./N1'); // or require('./censorify')

// 1. Censor default words
console.log(censorify.censor("The day is mad, and bad."));
// Output: "The day is ****, and ****."

// 2. Add custom censored word
censorify.addCensoredWord("angry");
console.log(censorify.censor("He is angry today."));
// Output: "He is **** today."

// 3. View all active blacklist words
console.log(censorify.getCensoredWords());
// Output: [ 'sad', 'bad', 'mad', 'angry' ]
``

## 📁 Repository Structure

``text
├── N1.js         # Core censoring module implementation and exports
├── test.js       # Test script demonstrating usage and word replacement
├── package.json  # Node.js package configuration
└── README.md     # Documentation
``

## 👨‍💻 Author

**Naveen**  
GitHub: [@Naveen9715](https://github.com/Naveen9715)