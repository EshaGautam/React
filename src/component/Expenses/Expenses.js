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
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          location={props.items[0].location}
          date={props.items[0].date}
        />
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          location={props.items[1].location}
          date={props.items[1].date}
        />
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          location={props.items[2].location}
          date={props.items[2].date}
        />
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          location={props.items[3].location}
          date={props.items[3].date}
        />
      </Card>
    );
}

export default Expenses