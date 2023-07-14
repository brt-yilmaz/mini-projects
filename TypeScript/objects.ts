const person:{first:string, last:string, age:number} = {
  first: 'berat',
  last: 'yilmaz',
  age: 34,
}

// Type Alias

type Person = {
  readonly first: string, // After first assign you can not change. 
  last: string,
  age: number,
  grandMother?: string, // Optional
}

const berat:Person = {
  first: 'berat',
  last: 'yilmaz',
  age: 34
}

// Nested Objects

type FamilyTree = {
  father: Person,
  mother: Person,
  //etc
}

const familyYilmaz:FamilyTree = {
  father: {
    first: 'osman',
    last: 'yilmaz',
    age: 65
  },
  mother: {
    first: 'fatma',
    last: 'yilmaz',
    age: 63
  }
}

// Intersection Types

type Animal = {
  animalName : string,
  animalAge: number
}

type AnimalLover = Animal & Person  & {
  address: string,
}; // Combination of three types

const beratYilmaz:AnimalLover = {
  first: 'berat',
  last: 'yilmaz',
  age: 34,
  animalName: 'cat',
  animalAge: 3,
  address: 'Germany'
}

  