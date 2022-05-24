import React, { useState } from "react";
import styled from 'styled-components'
import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const div=styled.div`
  
`

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const goalInputChangeHandler = (event) => {
    const value =event.target.value;
    if(value.trim().length > 0){
      setIsValid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    setEnteredValue('')
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} value={enteredValue}/>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
