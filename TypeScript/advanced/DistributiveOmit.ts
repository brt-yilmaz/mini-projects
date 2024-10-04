// this gives you much more predictable result
type DistributiveOmit<T, K extends PropertyKey> = T extends any ? Omit<T, K> : never;