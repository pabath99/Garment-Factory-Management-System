import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import FinanceSideMenu from "./FinanceSideMenu";

const SentPayment=()=>{

    const [sent,SetSent] = useState([])


    useEffect(()=>{
        loadSent();
    },
    []
    )

    const loadSent = async()=>{
        const result = await axios.get('http://localhost:8070/monthly/');
        SetSent(result.data)
    }


   const deletesent=async(id)=>{
        const result = await axios.delete('http://localhost:8070/monthly/delete/'+id)
        .then((result)=>{
          loadSent()
          alert('delete successful!')
        }).catch(()=>{
          alert('delete unsuccessful')
        })
   }




    return(
        <div>
            <FinanceSideMenu/>
      

        <div>

<div  className="container">
  <br></br><br></br><br></br>

<h1>Sent Payments</h1>

<h6>View and add sent payments</h6>

<br></br>

<div class="input-group rounded"  style={{ height: 30, width: "30%" }}>
  <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>
</div> 

<br></br>

<table class="table table-striped" style={{ fontSize: "80%" }}>
  <thead>
    <tr>
    <th scope="col">Sr.No.</th>
      <th scope="col">EmployeeID</th>
      <th scope="col">Year</th>
      <th scope="col">Month</th>
      <th scope="col">FinalSalary_LKR</th>
      <th scope="col">PaymentSlip</th>
      <th scope="col">SalaryStatus</th>
      
    </tr>
    
  </thead>
  
  <tbody>
    {sent.map((sent,index)=>(
    <tr>
      <th scope="row">{index+1}</th>
      <td>{sent.EmployeeID}</td>
      <td>{sent.Year}</td>
      <td>{sent.Month}</td>
      <td>{sent.FinalSalary_LKR}</td>
      <td>{sent.PaymentSlip}</td>
      <td>{sent.SalaryStatus}</td>
      
      <td>
        <a className="btn btn-outline-warning " style={{ height: 30, width: 74 }} href={`/updateyearly`}><i class="fa fa-thin fa-pen-to-square" ></i>&nbsp;Edit</a>
        
    </td>

        <td>
        <a className="btn btn-outline-danger" href="#" style={{ height: 30, width: 90 }}><i class="fa fa-thin fa-trash" style={{ height: 2, width: 12 }}></i>&nbsp;Delete</a>
        
      </td>

        
    </tr> 
   ))}
  </tbody>
</table>

<button className = "btn btn-success"><a href="#" style={{ textDecoration: "none", color: "white" }}> Add Sent</a></button>
</div>




            </div>
            </div>





    )


}

export default SentPayment;