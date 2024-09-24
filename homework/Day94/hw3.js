const numbers = [1, 2, 3, 2, 4, 3];
const uniqueNumbers = new Set();

numbers.forEach(num => {
    if (!uniqueNumbers.has(num)) {
        uniqueNumbers.add(num);
    }
});

console.log(uniqueNumbers);