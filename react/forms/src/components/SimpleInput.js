import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

  function handleFormSubmit(e) {
    e.preventDefault();
    if (enteredName.trim().length < 3) {
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log(enteredName);
    setEnteredName("");
  }

  function nameInputHandler(e) {
    setEnteredName(e.target.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div
        className={enteredNameIsValid ? "form-control" : "form-control invalid"}
      >
        <label htmlFor="name">Your Name</label>
        <input
          onChange={nameInputHandler}
          type="text"
          id="name"
          value={enteredName}
        />
        {!enteredNameIsValid && (
          <p className="error-text">Name must have at least 3 characters</p>
        )}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
