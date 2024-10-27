// 
// _dirname -current dir
// __filename -current filename
// module –მოდულები არიან ყველა ფოლდერი თუ ფაილი: commonjs
const {name1, name2, myFunc} = require("./app-module");

console.log(name1, name2)

console.log(myFunc("daviti"))

console.log(__dirname)
console.log(__filename)
// console.log(module)