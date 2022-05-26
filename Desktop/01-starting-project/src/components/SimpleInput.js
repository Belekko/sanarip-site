import React, { useState, useRef } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const inputNameRef = useRef("");

  const nameInputChangeHandler = (e) => {
    const value = e.target.value;
    setEnteredName(value);
    if (enteredName.trim() !== "") {
      setIsValid(true);
      setEnteredNameTouched(true);
    }
    console.log(enteredName);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim() === "") {
      setIsValid(true);
      return;
    }

    setIsValid(false);
    setEnteredNameTouched(false);
    //fetch request to server
  };
  const nameInputIsValid = isValid && enteredNameTouched;
  const nameInputClasses = nameInputIsValid
    ? "form-control invalid"
    : "form-control";

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
    if (enteredName.trim() === "" && !enteredName.includes("@")) {
      setIsValid(true);
      return;
    }

    setEnteredNameTouched(false);
  };

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          value={enteredName}
          ref={inputNameRef}
          type="text"
          id="name"
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputIsValid && <p>Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled={true}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
