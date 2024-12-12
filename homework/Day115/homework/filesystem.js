const fs = require('fs');
const path = require('path');

const sentences = [
    "Hello World!",
    "Goa best",
    "ixvis tolma",
    "lomi",
    "arwivi"
];

for (let i = 1; i <= 20; i++) {
    const content = sentences[Math.floor(Math.random() * sentences.length)];
    fs.writeFileSync(path.join(__dirname, `file${i}.txt`), content);
}