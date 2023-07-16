interface Human {
  readonly id: number;
  first: string;
  last: string;
  age?: number;
  getInfo: (greet:string) => string; // getInfo():string
}

interface Human { // Add children to Human, but use extend 
  children: number
}

const john:Human = {
  id: 135412342354, 
  first: 'John',
  last: 'Yilmaz',
  children: 3,
  getInfo(greeting):string {
      return greeting + this.first + this.last ;
  },
}

john.getInfo('I am');

interface SuperPower {
  superPower: string
}

interface SuperHuman extends Human,SuperPower {
  attack: string
}

const myKid:SuperHuman = {
  id: 1,
  first: 'jessica',
  last: 'yilmaz',
  age: 3,
  children: 0,
  superPower: 'time bending',
  attack: 'crying',
  getInfo() {
    return 'what she wants is what she wants.'
  }
}

console.log(myKid.getInfo('hi'))