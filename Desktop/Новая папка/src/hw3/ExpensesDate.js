import './ExpensesDate.css';


function ExspenseDate(props){

    let month = props.date.toLocaleString("en-Us", {month: 'long'});
    let day = props.date.toLocaleString("en-Us",{day:'2-digit'});
    let year = props.date.getFullYear();

    const history= 2022 - year
    
    return(
    <div className='expense-date'>
        <div className='expense-date__month'>{month}</div>
        <div className='expense-date__day'>{day}</div>
        <div className='expense-date__year'>{`${history} year ago`}</div>
    </div>
)
}
export default ExspenseDate