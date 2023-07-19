

// ----------------------------------------------
// you can use ** in ** to check keys in object. If it is necessary use return to continue narrowing type. 

type Fish = { swim: () => void };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}

//-----------------------------
interface TvShows {
  name: string;
  episodes: number;
  duration: number;
}

interface Movie {
  name: string;
  duration:number;
}

function getTotalDuration(media: TvShows | Movie) {
  if("episodes" in media) return media.duration * media.episodes // ? why typescript cant catch if i don't write return, but it is valid in JS.
  return media.duration
}

getTotalDuration({name: 'hababam sinifi', duration:90})

// --------------------------

// you can use ** instanceof ** to narrow type

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());

  } else {
    console.log(x.toUpperCase());
  }
}


// --------------------- Predicate
interface Cat {
  meow():string
}

function isCat(pet: unknown): pet is Cat { // if true type pet is Cat
  return (pet as Cat).meow !== undefined;
}

function makeNoise(animal: unknown) {
  if (isCat(animal)) {
    animal.meow(); // Type narrowing is done, now pet is considered as a Cat.
  } else {
    console.log("This pet cannot meow.");
  }
}


// ---------------------- Discriminated unions

interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type Shape = Circle | Square // if you add | Triangle you will get a warning in default case ;

function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
      default:
      const _exhaustiveCheck: never = shape; // you will get a warning if you don't handle properly 
      return _exhaustiveCheck;
  }
}

// ------------------------------


