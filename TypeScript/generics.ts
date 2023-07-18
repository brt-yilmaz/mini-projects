const balls: Array<string> = ['hi','berat'];

const button = document.querySelector<HTMLButtonElement>('.btn')!;

function sameThing<T>(arr:T):T {
  return arr ;
}

// ---------------------------
function pickOne<T>(arr:T[]):T {
  const randomNum = Math.floor(Math.random() * arr.length)
  return arr[randomNum];
}

pickOne<string>(['berat','yilmaz']); // you don't have to write string, typescript can understand it most of the time

// --------------------------  extend type

function nameAndAge<T extends object,U extends object>(name:T,age:U){ // you can also use type or interface to extend generic type
  return {
    ...name,
    ...age,
  }
}

nameAndAge({first:'berat'},{age:34})

//------------------------------- generic default value

interface Product {
  id: number;
  name: string;
  price: number;
}

function processProduct<T extends Product = {id: 11111, name:'product not found', price: 0} >(product: T): string {
  const totalPrice = product.price * 1.18; 
  
  return `Processed product: ${product.name}, ID: ${product.id}, Total Price: ${totalPrice} USD`;
}

// Example usage
const laptop: Product = {
  id: 1,
  name: 'Laptop',
  price: 1000
};
// Assuming a tax rate of 18%
processProduct(laptop);

// -------------------- generic with classes

class Auto<T> {

  constructor(private make: string, private model: string, private year: number, private details: T) {
  }

  getCarInfo(): string {
    return `Car: ${this.make} ${this.model}, Year: ${this.year}, Details: ${JSON.stringify(this.details)}`;
  }
}

const car1 = new Auto<string>("Tesla", "Model 3", 2022, "Electric");
const car2 = new Auto<string[]>("Ford", "Mustang", 2022, ['Electric','Hybrid']);


