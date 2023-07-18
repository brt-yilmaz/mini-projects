/*
* The strict flag in the CLI, or "strict": true in a tsconfig.json toggles them all on simultaneously, but we can opt out of them individually. The two biggest ones you should know about are "noImplicitAny" and "strictNullChecks".

* Turning on the "noImplicitAny" flag will issue an error on any variables whose type is implicitly inferred as any.

* The "strictNullChecks" flag makes handling null and undefined more explicit, and spares us from worrying about whether we forgot to handle null and undefined

* Array.isArray(arr) you can use that to check a variable

* You can use 'as const' to make object read-only

*/