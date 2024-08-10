// not working example 
type Color = "primary" | "secondary" | string // type color = string

// working example 
type Color = "primary" | "secondary" | (string & {}); // type color = "primary" | "secondary" | string

