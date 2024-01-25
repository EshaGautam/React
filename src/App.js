import React from "react";
import Expenses from "./component/Expenses/Expenses";
import ExpenseForm from "./component/Expenses/ExpenseForm";

const App = ()=> {

 const expenses = [
   {
     id: "e1",
     title: "Toilet Paper",
     amount: 94.12,
     date: new Date(2020, 7, 14),
     location: "New Delhi",
   },
   {
     id: "e2",
     title: "New TV",
     amount: 799.49,
     date: new Date(2021, 2, 12),
     location: "Mumbai",
   },
   {
     id: "e3",
     title: "Car Insurance",
     amount: 294.67,
     date: new Date(2021, 2, 28),
     location: "Banglore",
   },
   {
     id: "e4",
     title: "New Desk (Wooden)",
     amount: 450,
     date: new Date(2024, 0, 24),
     location: "Chennai",
   },
 ];
  return (
    <div>
 
      <Expenses items={expenses}/>
      <ExpenseForm/>
    </div>
  );
}

export default App;
