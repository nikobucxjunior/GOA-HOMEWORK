let firstName = "nikolozi";
let lastName = "Butskhrikidze";
let age = 14;
let residence = "USA";
let hobby = "water polo";

function infoJoin(firstName, lastName, age, residence, hobby) {
    return `${firstName} ${lastName} ${age} ${residence} ${hobby}.`;
}

console.log(infoJoin(firstName, lastName, age, residence, hobby));