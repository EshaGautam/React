import React from "react";
import ExpenseForm from "./ExpenseForm";

function NewExpense(){
 
const handleSubmitOfNewData = (enteredData) =>{

    const ExpenseData ={
        ...enteredData,
         id:Math.random().toString()
    }
    console.log(ExpenseData)
}

    return(
        <div className="new-expense">
            <ExpenseForm onSubmitNewData = {handleSubmitOfNewData}/>
        </div>
    )
}

export default NewExpense;