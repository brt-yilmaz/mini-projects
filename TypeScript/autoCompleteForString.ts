// not working example 
type ColorWithoutAutocomplete = "primary" | "secondary" | string

// working example 
type ColorWithAutocomplete = "primary" | "secondary" | (string & {});

