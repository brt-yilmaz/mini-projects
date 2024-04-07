const personDeep = {
  name: {
    first: "John",
    last: "Doe",
  },
  details: {
    address: "123 Main St" ,
    city: "New York",
    country: "USA",
  },
} // if you write as const, you will get last name as 'Doe' instead of string

declare function deepValue<Obj, FirstKey extends keyof Obj, SecondKey extends keyof Obj[FirstKey]>(obj: Obj, firstKey: FirstKey, secondKey:  SecondKey ): Obj[FirstKey][SecondKey] 

const lastName = deepValue(personDeep,'name', 'last' )
