import'./Expenses.css';
import ExpenseList from './ExpenseList.js';
import Card from '../UI/Card';
import { useState } from 'react';
import ExpenseFilter from './ExpenseFilter';
import ExpenseChart from './ExpenseChart'

function Expenses(props){

  const [filteredYear,setFilteredYear] = useState('2020')

   const filterChangedHandler = (selectedYear) =>{
    setFilteredYear(selectedYear)
    }
      const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear
    })



    return (
      <Card className="expenses">
      <ExpenseFilter selected ={filteredYear} onYearChange={filterChangedHandler}/>
      <ExpenseChart expenses={filteredExpenses}/>
      <ExpenseList items ={filteredExpenses}/>
      </Card>
    );
}

export default Expenses