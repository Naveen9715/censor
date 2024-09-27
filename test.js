var censorify = require('./censorify');

console.log(censorify.censor("The day is mad, and bad."));
censorify.addCensoredWord("angry");
console.log(censorify.censor("He is angry."));
console.log(censorify.getCensoredWords());