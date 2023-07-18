

// ----------------------------------------------
// you can use ** in ** to check keys in object. If it is necessary use return to continue narrowing type. 

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


// ----------------------