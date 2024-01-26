import React from "react";
import { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const[enteredtitle,setTitle]= useState('');
  const[enteredamount,setAmount]= useState('');
  const[entereddate,setDate]= useState('');

  // managing multiple states using single use state

//   const [userInput, setInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });

  const handleTitleChange = (event) => {
    let newTitle = event.target.value;
    setTitle(newTitle)
    // setInput({
    //   ...userInput,
    //   enteredTitle: newTitle,
    // });
    // setInput((prevState) => {
    //   return { ...prevState, enteredTitle: newTitle };
    // });
  };

  const handleAmountChange = (event) => {
    let newAmount = event.target.value;
        setAmount(newAmount);
    // setInput({
    //   ...userInput,
    //   enteredAmount: newAmount,
    // })
    // setInput((prevState) =>{return{...prevState,enteredAmount:newAmount}})
  };

  const handleDateChange = (event) => {
    let newDate = event.target.value;
    setDate(newDate);

    // setInput({
    //   ...userInput,
    //   enteredDate: newDate,
    // });

    // if you have to keep track of previous state the arrow function should be used

    //  setInput((prevState) => {
    //    return { ...prevState, enteredDate: newDate};
    //  });
  };

  const SubmitForm = (event) =>{
    event.preventDefault()
  const ExpenseData = {
    title:enteredtitle,
    amount:enteredamount,
    date:new Date(entereddate),
  }      
  console.log(ExpenseData);
 
  }

  return (
    <form onSubmit={SubmitForm} className="new-expense">
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
      <button type="submit">Add-Expense</button>
    </form>
  );
}

export default ExpenseForm;
