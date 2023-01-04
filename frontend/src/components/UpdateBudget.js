import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import FinanceSideMenu from './FinanceSideMenu';

 const UpdateBudget=()=>{

    const {id}=useParams();
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

    const [message, setMessage] = useState('');

    const{Year, Month, TransportBudget_LKR, StockBudget_LKR, SalaryBudget_LKR, OtherCostsBudget_LKR, TotalBudget_LKR} = budget;


    useEffect(()=>{
        loadBudget();
    },
    []
    )

    const loadBudget = async()=>{
        const result = await axios.get('http://localhost:8070/budget/post/'+id);
        SetBudget(result.data)
    }

    const HandleChange=((e)=>{
        SetBudget({...budget,[e.target.name]: e.target.value})
    })

   

    const submitForm = async(e)=>{
        e.preventDefault()

        await axios.put('http://localhost:8070/budget/update/'+id, budget)
        .then((result) => {

            alert("Budget has been added successfully!");

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
    <div className='col-md-12 text-center'><h2>Update Budget</h2></div>
</div>
<div className="form-group">
    <div className='col-md-12 text-center'><h2></h2></div>
</div>


<div className="form-group">
<label htmlFor="Year">Year</label>
<input
type="Number"
className="form-control"
name="Year"
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
value={TotalBudget_LKR}
onChange={e=>HandleChange(e)}

/>
</div>

<br></br>

<button type="submit" className="btn btn-primary">
Update Budget
</button>
</form>

</div>
</div>

    )}

export default UpdateBudget;
