function* infiniteNumbers() {
    let num = 0;
    while (true) {
        yield num++;
    }
}

// Example usage:
const numGenerator = infiniteNumbers();
console.log(numGenerator.next().value);
console.log(numGenerator.next().value);