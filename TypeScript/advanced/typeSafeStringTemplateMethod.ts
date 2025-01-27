type MapFormatType = {
  string: string;
  number: number;
  boolean: boolean;
  [x: string]: any;
};

type FormatObj<
  T extends string
> = T extends `${string}{${infer Key}}${infer Rest}`
  ? Key extends `${infer KeyPart}:${infer TypePart}`
  ? { [K in KeyPart]: MapFormatType[TypePart] } & FormatObj<Rest>
  : { [K in Key]: { toString(): string } } & FormatObj<Rest>
  : {};


function format<T extends string, K extends FormatObj<T>>(
  formatString: T,
  params: K
) {

  let result: string = formatString;

  for (const k in params) {
    let value = `${params[k]}`;
    let searchPattern = new RegExp(`{${k}:?.*?}`, "g");
    result = result.replaceAll(searchPattern, value);
  }

  return result;
}

const testString = "Hello {name:string}, you are {age:number} years old and you are {isStudent:boolean}. This is {typeOptional}";

const formatted = format(testString, {
  name: "John",
  age: 25,
  isStudent: true,
  typeOptional: "optional"
});