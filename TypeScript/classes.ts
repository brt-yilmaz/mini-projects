interface Human_ {
  first: string,
  last: string,
  age: number
}

interface Kid extends Human_ {
  school : boolean;
}

// ----------------------------------- implements

class Person_ implements Human_ {
  private id:number = 9834123412341234123; // you can use vanilla Js #
  constructor(
    public first:string= 'berat', 
    public last:string='yilmaz',
    public age:number = 34 // you can access that value in child class
    
    ){ // that is a shortcut, you don't need to write first: first: this.first etc.

  }
}

class Kids  extends Person_ implements Kid{
  school:boolean;

  constructor(public age = 6, school:boolean) {
    super();
    this.school = school; // or you can write in constructor with public suffix

  }
}

const firstKid = new Kids(5,true);

// ---------------------------------------


// -------------------------------------- abstract
abstract class God {  // You can not make instance from abstracted class
  private id = 1;
  private power = 100;

  constructor(public first: string, public last: string, public birthDay: Date) {}

  abstract whenWillIDie(): string; // this method must be used child of this class
}

class Mortal extends God {
  currentAge: number;

  constructor(first: string, last: string, birthDay: Date, currentAge: number) {
    super(first, last, birthDay);
    this.currentAge = currentAge;
  }

  whenWillIDie() {
    const remainingYears = 80 - this.currentAge; // Assuming the average human lifetime is 80 years
    const today = new Date();
    const deathDate = new Date(today.getFullYear() + remainingYears, today.getMonth(), today.getDate());
    const formattedDeathDate = `${deathDate.getDate()}/${deathDate.getMonth() + 1}/${deathDate.getFullYear()}`;
    return `You will die on ${formattedDeathDate}.`;
  }
}

const hansi = new Mortal("John", "Doe", new Date(1990, 0, 1), 30);
console.log(hansi.whenWillIDie());


// --------------------------------------