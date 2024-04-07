type City = 'istanbul' | 'berlin' | LooseAutoComplete<'istanbul' | 'berlin'>

type LooseAutoComplete<T extends string > = T | Omit<string, T>


// now you will have autocomplete
function getCity(city: City) {
  return 'istanbul' 
}
