type PrettyType<T> = T extends object
  ? T extends infer O
  ? { [K in keyof O]: PrettyType<O[K]> }
  : never
  : T;
