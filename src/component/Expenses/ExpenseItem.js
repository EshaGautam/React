 import './ExpenseItem.css'
 import ExpenseDate from './ExpenseDate'; 
 import ExpenseDetails from './ExpenseDetails';
 import Card from '../UI/Card';

function ExpenseItem(props){
  const deleteExp =()=>{
    console.log("Expense Deleted")
  }
    return (
   
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <ExpenseDetails
            title={props.title}
            amount={props.amount}
            location={props.location}
          />
          <button onClick={deleteExp}>Delete-Expense</button>
        </Card>
     
    );
}

export default ExpenseItem