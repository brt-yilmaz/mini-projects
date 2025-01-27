type Country = 'us' | 'uk' | 'france' | 'germany' | 'russia';

type RemoveRussia<T> = T extends 'russia' ? 'The world is better place' : T

type CountryWithoutRussia = RemoveRussia<Country>

// you can not refine the type
type BetterWorld = Exclude<Country, 'russia'>

// you can use multiple extends
type RemoveRussiaOrGermany<T> = 
  T extends 'russia' ? 'The world is better place' :
  T extends 'germany' ? 'A beer heaven' :
  T;

type CountryWithoutRussiaOrGermany = RemoveRussiaOrGermany<Country>;

// a better approach
interface CountryReplacements {
  russia: 'The world is better place';
  germany: 'A beer heaven';
}

type BetterWorld2<T extends Country> = T extends keyof CountryReplacements ? CountryReplacements[T] : T
type CountryWithoutRussiaOrGermany2 = BetterWorld2<Country>;
