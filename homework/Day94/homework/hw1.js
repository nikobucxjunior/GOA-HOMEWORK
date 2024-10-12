class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
  }
  
  // Example usage:
  const person1 = new Person("Nikusha", 14);
  console.log(person1.greet());
  