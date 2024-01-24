 import './ExpenseItem.css'

function ExpenseItem(){

  const expenseDate = new Date(2024,0,24);
  const expenseName = 'Car Insurance';
  const expensePrice = "10 rs";
  const expenseLocation = "Delhi"
    return (
      <div className="expense-item">
        <div>{expenseDate.toDateString()}</div>
        <div className="expense-item__description">
          <h2>{expenseName} </h2>
          <div className='expense-item__location'>{expenseLocation}</div>
          <div className="expense-item__price ">{expensePrice} </div>
        </div>
      </div>
    );
}

export default ExpenseItem