interface Human {
  readonly id: number;
  first: string;
  last: string;
  age?: number;
  getInfo: (greet:string) => string; // getInfo():string
}

const john:Human = {
  id: 135412342354,
  first: 'John',
  last: 'Yilmaz',
  getInfo(greeting) {
      return greeting + this.first + this.last ;
  },
}

john.getInfo('I am');
