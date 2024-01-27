 
import{ useState } from "react";
 import './ExpenseItem.css'
 import ExpenseDate from './ExpenseDate'; 
 import ExpenseDetails from './ExpenseDetails';
 import Card from '../UI/Card';
import './ExpenseList.css'
function ExpenseItem(props){

  const [amount,setAmount] = useState(props.amount);

  const ChangeExp =()=>{setAmount("100")}

  const deleteExp =()=>{ console.log("Expense Deleted")}
    return (
      <li className="expenses-list">
        <Card className="expense-item">
          <ExpenseDate date={props.date} />
          <ExpenseDetails
            title={props.title}
            amount={amount}
            location={props.location}
          />
          <button onClick={ChangeExp}>Change-Expense</button>
          <button onClick={deleteExp}>Delete-Expense</button>
        </Card>
      </li>
    );
}

export default ExpenseItem