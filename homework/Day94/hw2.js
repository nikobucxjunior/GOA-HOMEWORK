class Animal {
    constructor(name, species, color, breed, language) {
      this.name = name;
      this.species = species;
      this.color = color;
      this.breed = breed;
      this.language = language;
    }
  
    bark() {
      return `${this.name} is barking in ${this.language}.`;
    }
  
    description() {
      return `${this.name} is a ${this.color} ${this.breed} of the ${this.species} species.`;
    }
  
    learnLanguage(newLanguage) {
      this.language = newLanguage;
      return `${this.name} has learned a new language: ${this.language}.`;
    }
  }
  
  // Example usage:
  const animal1 = new Animal("Stuby", "dog", "brown", "German Shepherd", "English");
  console.log(animal1.bark());
  console.log(animal1.description());
  console.log(animal1.learnLanguage("Spanish"));
  console.log(animal1.bark());
  