import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import FinanceSideMenu from './FinanceSideMenu';

 const AddBudget=()=>{

    const [budget,SetBudget] = useState((
        {
            'Year' : '',
            'Month' : '',
            'TransportBudget_LKR' : '',
            'StockBudget_LKR' : '',
            'SalaryBudget_LKR' : '',
            'OtherCostsBudget_LKR' : '',
            'TotalBudget_LKR' : '',
        }
    ))

    const [message, setMessage] = useState();

    const{Year, Month, TransportBudget_LKR, StockBudget_LKR, SalaryBudget_LKR, OtherCostsBudget_LKR, TotalBudget_LKR} = budget;

    const HandleChange = ((e)=>{
        SetBudget({...budget,[e.target.name]: e.target.value})
    })



    const submitForm = async(e)=>{
        e.preventDefault()

        await axios.post('http://localhost:8070/budget/add', budget)
        .then((result) => {

            setMessage("Budget has been added successfully!");

        }).catch((err) => {
            alert('Something went wrong!')
        });

    }



    return(

<div>
<FinanceSideMenu/>

 
 <div className = "container" style={{width: "30%" }}>
 <br></br><br></br><br></br><br></br>

<form onSubmit={e=>submitForm(e)}>

<div className="form-group">
    <div className='col-md-12 text-center'><h2>Add Budget</h2></div>
</div>
<div className="form-group">
    <div className='col-md-12 text-center'><h2>{message}</h2></div>
</div>


<div className="form-group">
<label htmlFor="Year">Year</label>
<input
type="Number"
className="form-control"
name="Year"
placeholder="Enter Year"
value={Year}
onChange={e=>HandleChange(e)}
/>
</div>

<div className="form-group">
<label htmlFor="Month">Month</label>
<input
type="Number"
className="form-control"
name="Month"
placeholder="Enter Month"
value={Month}
onChange={e=>HandleChange(e)}
/>
</div>

<div className="form-group">
<label htmlFor="TransportBudget_LKR">TransportBudget_LKR</label>
<input
type="Number"
className="form-control"
name="TransportBudget_LKR"
placeholder="Enter Transport Budget"
value={TransportBudget_LKR}
onChange={e=>HandleChange(e)}
/>
</div>

<div className="form-group">
<label htmlFor="StockBudget_LKR">StockBudget_LKR</label>
<input
type="Number"
className="form-control"
name="StockBudget_LKR"
placeholder="Enter Stock Budget"
value={StockBudget_LKR}
onChange={e=>HandleChange(e)}
/>
</div>

<div className="form-group">
<label htmlFor="SalaryBudget_LKR">SalaryBudget_LKR</label>
<input
type="Number"
className="form-control"
name="SalaryBudget_LKR"
placeholder="Enter Salary Budget"
value={SalaryBudget_LKR}
onChange={e=>HandleChange(e)}
/>
</div>

<div className="form-group">
<label htmlFor="OtherCostsBudget_LKR">OtherCostsBudget_LKR</label>
<input
type="Number"
className="form-control"
name="OtherCostsBudget_LKR"
placeholder="Enter Other Costs Budget"
value={OtherCostsBudget_LKR}
onChange={e=>HandleChange(e)}
/>
</div>

<div className="form-group">
<label htmlFor="TotalBudget_LKR">TotalBudget_LKR</label>
<input
type="Number"
className="form-control"
name="TotalBudget_LKR"
placeholder="Enter Total Budget"
value={TotalBudget_LKR}
onChange={e=>HandleChange(e)}
/>
</div>

<br></br>

<button type="submit" className="btn btn-primary">
Add Budget
</button>
</form>


</div>
</div>
    )}

export default AddBudget;
