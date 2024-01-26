import'./Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';

function Expenses(props){

  const [filteredYear,setFilteredYear] = useState('2020')
  
  const filterChangedHandler = (selectedYear) =>{
    setFilteredYear(selectedYear)
  }

    return (
      <Card className="expenses">
      <ExpenseFilter selected ={filteredYear} onYearChange={filterChangedHandler}/>
      {props.items.map((expenses)=><ExpenseItem
        key = {expenses.id}
        title={expenses.title}
        amount={expenses.amount}
        location={expenses.location}
        date={expenses.date}
      />)}
      </Card>
    );
}

export default Expenses