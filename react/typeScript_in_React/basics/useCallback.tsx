// @ts-nocheck

// Like useMemo, the function’s type is inferred from the return value of the function in the first parameter, and you can be more explicit by providing a type argument to the hook.

const handleClick = useCallback(() => {
  // ...
}, [todos]);

// When working in TypeScript strict mode useCallback requires adding types for the parameters in your callback. This is because the type of the callback is inferred from the return value of the function, and without parameters the type cannot be fully understood.

// Depending on your code-style preferences, you could use the *EventHandler functions from the React types to provide the type for the event handler at the same time as defining the callback:

import { useState, useCallback } from 'react';

export default function Form() {
  const [value, setValue] = useState("Change me");

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>((event) => {
    setValue(event.currentTarget.value);
  }, [setValue])
  
  return (
    <>
      <input value={value} onChange={handleChange} />
      <p>Value: {value}</p>
    </>
  );
}