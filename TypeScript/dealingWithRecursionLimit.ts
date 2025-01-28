type RemoveWhiteSpace<T extends string> = T extends `${infer A} ${infer B}`
  ? RemoveWhiteSpace<`${Uncapitalize<A>}${Capitalize<B>}`>
  : T;

type Identifier = RemoveWhiteSpace<" Hello World!">; // "helloWorld!"

type StringSplit<T extends string> = T extends `${infer Char}${infer Rest}`
  ? Capitalize<Char> | Uncapitalize<Char> | StringSplit<Rest>
  : never;

type Chars = StringSplit<"abcdefghijklmnopqrstuvwxyz">;

type CreateIdentifier<T extends string, Acc extends string = ""> =
  RemoveWhiteSpace<T> extends `${infer A extends Chars}${infer Rest}`
  ? CreateIdentifier<Rest, `${Acc}${A}`>
  : RemoveWhiteSpace<T> extends `${infer A}${infer Rest}`
  ? CreateIdentifier<Rest, Acc>
  : Acc;