function* numericPassword() {
    let digits = '0123456789';
    for (let i = 0; i < 8; i++) {
        yield digits[Math.floor(Math.random() * 10)];
    }
}

const passGen = numericPassword();
let password = "";
for (let i = 0; i < 8; i++) {
    password += passGen.next().value;
}
console.log(password); // Random 8-digit number like "73829401"