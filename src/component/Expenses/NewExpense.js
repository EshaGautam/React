import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(props){
 
const handleSubmitOfNewData = (enteredData) =>{

    const ExpenseData ={
        ...enteredData,
         id:Math.random().toString()
    }
    props.onAddingData(ExpenseData)
  
}

    return(
        <div className="new-expense">
            <ExpenseForm onSubmitNewData = {handleSubmitOfNewData}/>
        </div>
    )
}

export default NewExpense;