const cities: string[] = ['köln', 'berlin']; // you must write type before []j

const truths: boolean[] = [true, false];

type User = {
  first: string; // ; or ,
  last: string;
}

const users:Array<User> = [{first:'Guten',last:'Tag'}] // You can also define an Array type like this.

// Multidimensional Array

const tictoc: string[][][] = [[['X','O','X'],['X','X','O']]]