import useInput from "../hooks/use-input.js";
import Input from "./Input.js";

const nameValidation = (val) => {
  return val.trim() !== "";
};

const emailValidation = (val) => {
  return /.{3,}@.{3,}\.com/.test(val);
};

const getForm = (...inputStates) => {
  const formIsValid = inputStates.reduce(
    (prev, curr) => prev && curr.isValid,
    true
  );
  const formReset = () => {
    inputStates.forEach((inputState) => inputState.reset());
  };
  return { formIsValid, formReset };
};

const SimpleInput = (props) => {
  const [nameInputStates, nameProps] = useInput(nameValidation);
  const [lastNameInputStates, lastNameProps] = useInput(nameValidation);
  const [emailInputStates, emailProps] = useInput(emailValidation);

  const { formIsValid, formReset } = getForm(
    nameInputStates,
    emailInputStates,
    lastNameInputStates
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    formReset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        id="name"
        type="text"
        labelText="Name"
        errMsg="Name cannot be empty!"
        {...nameProps}
      />
      <Input
        id="lastName"
        type="text"
        labelText="Last Name"
        errMsg="Last name cannot be empty!"
        {...lastNameProps}
      />
      <Input
        id="email"
        type="text"
        labelText="Email"
        errMsg="Email format is wrong!"
        {...emailProps}
      />
      <div className="form-actions">
        <button type="submit" disabled={!formIsValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default SimpleInput;
