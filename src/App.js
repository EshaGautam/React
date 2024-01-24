
import ExpenseItem from "./component/ExpenseItem";

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location:"New Delhi"
    },
    { id: 'e2',
     title: 'New TV', 
     amount: 799.49, 
     date: new Date(2021, 2, 12) ,
     location:"Mumbai"
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location:"Banglore"
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2024, 0, 24),
      location:"Chennai"
    },
  ];

  return (
    <div >
    <h1>
      started Learning react
    </h1>
    <ExpenseItem title ={expenses[0].title} amount = {expenses[0].amount}  location={expenses[0].location}date = {expenses[0].date}></ExpenseItem>
    <ExpenseItem title ={expenses[1].title} amount = {expenses[1].amount}  location={expenses[1].location}date = {expenses[1].date}></ExpenseItem>
    <ExpenseItem title ={expenses[2].title} amount = {expenses[2].amount}  location={expenses[2].location}date = {expenses[2].date}></ExpenseItem>
    <ExpenseItem title ={expenses[3].title} amount = {expenses[3].amount}  location={expenses[3].location}date = {expenses[3].date}></ExpenseItem>
      


    </div>
  );
}

export default App;
