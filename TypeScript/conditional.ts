type StringFromType<T> = T extends string
  ? 'string'
  : T extends boolean
  ? 'boolean'
  : T extends Error
  ? 'error'
  : never

type lorem = StringFromType<'lorem ipsum'> // 'string'
type isActive = StringFromType<false> // 'boolean'
type unassignable = StringFromType<TypeError> // 'error'

type GetFirstArgumentOfAnyFunction<T> = T extends (
  first: infer FirstArgument,
  ...args: any[]
) => any
  ? FirstArgument
  : never

type t = GetFirstArgumentOfAnyFunction<(name: string, age: number) => void> // string

type GetSecondArgumentOfAnyFunction<T> = T extends (
  first: infer FirstArgument,
  second: infer SecondArgument,
  ...args: any[]
) => any
  ? FirstArgument extends number
    ? SecondArgument
    : FirstArgument
  : never

type tf = GetSecondArgumentOfAnyFunction<(name: string, age: number) => void> // string

type PromiseReturnType<T> = T extends Promise<infer Return> ? Return : T
type tp = PromiseReturnType<Promise<string>> // string 

type ArrayType<T> = T extends (infer Item)[] ? Item : T
type ta = ArrayType<[string, number]> // string | number
