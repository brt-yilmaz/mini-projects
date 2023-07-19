container();

function container():void {
  const [, , functionName, ...args] = process.argv;
  const isValidFunctionName = functionName === 'sum' || functionName === 'avg' || functionName === 'med';
  const inValidArgs = args.filter((arg) => isInvalidNumber(arg))
  console.log(inValidArgs)

  if(!isValidFunctionName) return console.log('I cannot calculate that, please type "sum" (to calculate the sum) or "avg" (To calculate the Average) or "med" (to calculate median)')

  if(inValidArgs.length > 0) return console.log(`Sorry, the argument ${inValidArgs.join(", ")} is not a number, please try again `); 
  
  const argsNumber = args.map(Number);

  switch(functionName) {
    case 'sum': 
      return console.log(sum(argsNumber));
    case 'avg':
      return console.log(avg(argsNumber));
    case 'med':
      return console.log(med(argsNumber));
  }

}


function sum(args:number[]):number {
  return args.reduce((acc, curr) => acc + curr);
}

function avg(args:number[]):number {
  return sum(args) / args.length
}

function med(args: number[]): number {
  const sortedArgs = [...args].sort((a, b) => a - b); // make a copy and than sort
  const medIndex = Math.floor(sortedArgs.length / 2);
  
  if (sortedArgs.length % 2 === 0) {
    return (sortedArgs[medIndex - 1] + sortedArgs[medIndex]) / 2;
  } else {
    return sortedArgs[medIndex];
  }
}

function isInvalidNumber(arg:unknown) {
  return isNaN(Number(arg))
}