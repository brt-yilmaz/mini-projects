
// just to see all variations 
function add( num1:number = 14, word:string, person:{first:string, last:string}):boolean { /*
  ** Default value after annotation,
  * you don't need also write return value, but it is important for typeScript to catch bug
  ! if you write an variable which is object as a parameter, typeScript check only if there is first and last not whole object , if you want that too , check no-excess-property-checks property
  */
   const sum = num1 + word; // Type Inference , type of sum = string
   return true;
}

/* Return Type
** void = return undefined
** never = for infinite loop, throw error 
*/