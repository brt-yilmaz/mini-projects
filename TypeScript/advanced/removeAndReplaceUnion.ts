type Country = 'us' | 'uk' | 'france' | 'germany' | 'russia';

type RemoveRussia<T> = T extends 'russia' ? 'The world is better place' : T;

type CountryWithoutRussia = RemoveRussia<Country>

// you can not refine the type
type BetterWorld = Exclude<Country, 'russia'>
