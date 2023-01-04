import { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import FinanceSideMenu from './FinanceSideMenu';

 const AddYearly=()=>{

    const [yearly,SetYearly] = useState((
        {
            'Year' : '',
            'Profit_LKR' : '',
            'Expenditure_LKR' : '',
            'Description' : '',
            'Status' : '',
        }
    ))

    const [message, setMessage] = useState();

    const{Year, Profit_LKR, Expenditure_LKR, Description, Status} = yearly;

    const HandleChange = ((e)=>{
        SetYearly({...yearly,[e.target.name]: e.target.value})
    })



    const submitForm = async(e)=>{
        e.preventDefault()

        await axios.post('http://localhost:8070/yearly/add', yearly)
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
    <div className='col-md-12 text-center'><h2>Add Yearly Finance</h2></div>
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
<label htmlFor="Month">Profit_LKR</label>
<input
type="Number"
className="form-control"
name="Profit_LKR"
placeholder="Enter Profit"
value={Profit_LKR}
onChange={e=>HandleChange(e)}
/>
</div>

<div className="form-group">
<label htmlFor="Month">Expenditure_LKR</label>
<input
type="Number"
className="form-control"
name="Expenditure_LKR"
placeholder="Enter Expenditure"
value={Expenditure_LKR}
onChange={e=>HandleChange(e)}
/>
</div>

<div className="form-group">
<label htmlFor="TransportBudget_LKR">Description</label>
<input
type="Text"
className="form-control"
name="Description"
placeholder="Enter Description"
value={Description}
onChange={e=>HandleChange(e)}
/>
</div>

<div className="form-group">
<label htmlFor="StockBudget_LKR">Status</label>
<input
type="Text"
className="form-control"
name="Status"
placeholder="Enter Status"
value={Status}
onChange={e=>HandleChange(e)}
/>
</div>


<br></br>

<button type="submit" className="btn btn-primary">
Add Finance
</button>
</form>


</div>
</div>

    )}

export default AddYearly;
