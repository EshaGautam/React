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
      const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear
    })

  // Adding some logic and conditions if the year we not made anyexpense in selected year

   let expenseContent = <p>No Expense Found</p>

   //if it has some content this will run 

   if(filteredExpenses.length >0){  
    expenseContent = filteredExpenses.map((expenses) => (
       <ExpenseItem
         key={expenses.id}
         title={expenses.title}
         amount={expenses.amount}
         location={expenses.location}
         date={expenses.date}
       />
     ));
   }
 
if (filteredExpenses.length === 1) {
      expenseContent = (
        <>
          {expenseContent}
          <p>Only a single Expense here. Please add more...</p>
        </>
      );
    }
  


    return (
      <Card className="expenses">
      <ExpenseFilter selected ={filteredYear} onYearChange={filterChangedHandler}/>
      {expenseContent}
      </Card>
    );
}

export default Expenses