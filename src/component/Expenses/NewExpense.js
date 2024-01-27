import React from "react";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

function NewExpense(props){
    const[isFormVisible, setFormVisibility] = useState(false)
 
const handleSubmitOfNewData = (enteredData) =>{

    const ExpenseData ={
        ...enteredData,
         id:Math.random().toString()
    }
    props.onAddingData(ExpenseData)
  
}

const handleOnClick =()=>{
    setFormVisibility(true)
}
const handleCancel = () =>{
    setFormVisibility(false)
}
    return (
      <div className="new-expense">
      {!isFormVisible &&<button onClick={handleOnClick}>Add New Expense</button>}
      {isFormVisible && <ExpenseForm onSubmitNewData={handleSubmitOfNewData} onCancel={handleCancel} />}
      </div>
    );
}

export default NewExpense;