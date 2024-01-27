import './Chart.css'
import ChartBar from './ChartBar'

function Chart(props){
    
    let overallExpense =  props.dataPoints.map(dataPoints => dataPoints.value)
    let maxvalue = Math.max(...overallExpense)



    return(
        <div className='chart'>
         {props.dataPoints.map((dataPoints)=>(<ChartBar
            key={dataPoints.label}
            label={dataPoints.label}
            value={dataPoints.value}
            maxValue={maxvalue}
             />

         ))}
       </div>
    )
         

}

export default Chart