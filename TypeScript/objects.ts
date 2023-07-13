const person:{first:string, last:string, age:number} = {
  first: 'berat',
  last: 'yilmaz',
  age: 34,
}

// Type Alias

type Person = {
  first: string,
  last: string,
  age: number
}

const berat:Person = {
  first: 'berat',
  last: 'yilmaz',
  age: 34
}

// Nested Objects

type familyTree = {
  father: Person,
  mother: Person,
  //etc
}

const familyYilmaz:familyTree = {
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