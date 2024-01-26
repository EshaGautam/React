import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css'

function ExpenseList(props){
  // Adding some logic and conditions if the year we not made anyexpense in selected year

  //if it has some content this will run

  if (props.items.length === 0) {
    return <h2 className="expense-list__fallback">No Expense Found</h2>
  }

  if (props.items.length === 1) {
    return  <>
    <ul className="expenses-list">
    {props.items.map((item) =>
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        location={item.location}
        date={item.date}
      />
    )
}
  </ul>;
  <p className="expenses-list__fallback">ADD MORE EXPENSE</p>
      </>
    
  }

  return <ul className="expense-list">
    {props.items.map((item) =>
      <ExpenseItem
        key={item.id}
        title={item.title}
        amount={item.amount}
        location={item.location}
        date={item.date}
      />
    )
}
  </ul>;
}

export default ExpenseList