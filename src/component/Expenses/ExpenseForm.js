import React from 'react';
import{useState} from 'react';
import './ExpenseForm.css'


function ExpenseForm(){
    const[enteredtitle,setTitle]= useState('');
    const[enteredamount,setAmount]= useState('');
    const[entereddate,setDate]= useState('');

const handleTitleChange = (event) =>{

    let newTitle = event.target.value;
    setTitle(newTitle)
}

const handleAmountChange = (event) =>{

    let newAmount = event.target.value;
    setAmount(newAmount)
}

const handleDateChange = (event) =>{

    let newDate = event.target.value;
     setDate(newDate);
}
    return (
      <form className="new-expense">
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={handleTitleChange} />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
          
              min="0.01"
              step="0.01"
              onChange={handleAmountChange}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
             
              min="2019-01-01"
              max="2020-12-31"
              onChange={handleDateChange}
            />
          </div>
        </div>
        <button>Add-Expense</button>
      </form>
    );
}

export default ExpenseForm