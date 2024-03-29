 import './ExpenseFilter.css'
 function ExpenseFilter(props){
    const dropDownChangeHandler =(event)=>{
 props.onYearChange(event.target.value);
    }
    return(
        <div className='expense-filter'>
            <label>Filter By Year</label>
            <select value={props.selected} onChange={dropDownChangeHandler}>
                <option value ="2024">2024</option>
                <option value ="2023">2023</option>
                <option value ="2022">2022</option>
                <option value ="2021">2021</option>
                <option value ="2020">2020</option>
            </select>

        </div>
    )
 }

 export default ExpenseFilter