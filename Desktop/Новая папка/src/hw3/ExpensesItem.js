import './ExpensesItem.css';
import ExpensesDate from './ExpensesDate';


function ExpenseItem(props){

return (
  <div className="expense-item">
     <ExpensesDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.text}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
     
 </div>
);
}

export default ExpenseItem