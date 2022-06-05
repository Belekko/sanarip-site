import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addExpense, deleteExpense } from "./redux/actions/action";
import styled from "styled-components";

const Section = styled.section`
  width: 600px;
  height: 400px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: #2e729b;
  color: white;
  & h1 {
    text-align: center;
  }
  & form {
    margin: 30px 50px;
    display: flex;

    column-gap: 1rem;
    flex-wrap: wrap;

    & .form-control {
      min-width: 15rem;
      flex: 1;
    }

    & .form-control label {
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    & .form-control input {
      font: inherit;
      padding: 0.5rem;
      border-radius: 4px;
      border: 1px solid #ccc;
      width: 20rem;
      max-width: 100%;
    }

    & #button {
      font: inherit;
      background-color: #240370;
      color: white;
      border: 1px solid #240370;
      padding: 0.1rem 2.5rem;
      border-radius: 4px;
      height: 40px;
      cursor: pointer;
      margin-top: 25px;
    }

    & button:hover,
    & button:active {
      background-color: #33059e;
      border-color: #33059e;
    }
    & .form-control input:focus {
      outline: none;
      border-color: #240370;
      background-color: #e0d4fd;
    }
    & div {
      margin-bottom: 0.5rem;
    }
    &&& label,
    input {
      display: block;
    }
  }

  & ul {
    width: 400px;
    margin: 0 auto;
    background-color: whitesmoke;
    list-style: none;
    border-radius: 13px;
    & li {
      display: flex;
      justify-content: space-between;
    }
    & li span {
      height: 40px;
      color: black;
      font-size: 28px;
    }
  }
`;

function App() {
  const dispatch = useDispatch();

  const { expense } = useSelector((state) => state);

  const [data, setData] = useState({ title: "", price: "", date: "" });
  const inputHandler = (e) => {
    const value = e.target.value;
    setData({ ...data, [e.target.name]: value });
   };

  const submitHandler = (e) => {
    e.preventDefault();
    const dataIsValid = data.title.trim() !== "" && data.price > 0;
    if (!dataIsValid) {
      return;
    }
    dispatch(addExpense(data));
    setData({ title: "", price: "", date: "" });
  };

  const deleteHandler = (id) => {
    dispatch(deleteExpense(id));
  };
  return (
    <Section>
      <h1>Redux Practice</h1>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="title">Title</label>
          <input
            value={data.title}
            type="text"
            id="title"
            name="title"
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="number">Price</label>
          <input
            value={data.price}
            type="number"
            id="number"
            name="price"
            onChange={inputHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input
            value={data.date}
            type="date"
            id="date"
            name="date"
            onChange={inputHandler}
          />
        </div>
        <button id="button">ADD</button>
      </form>
      <ul>
        {expense.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <span>${item.price}</span>
              <span>{item.date.toString()}</span>
              <button onClick={() => deleteHandler(item.id)}>X</button>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}

export default App;
