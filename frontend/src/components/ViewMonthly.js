import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import FinanceSideMenu from "./FinanceSideMenu";

const ViewMonthly=()=>{

    const [monthly,SetMonthly] = useState([])


    useEffect(()=>{
        loadMonthly();
    },
    []
    )

    const loadMonthly = async()=>{
        const result = await axios.get('http://localhost:8070/monthly/');
        SetMonthly(result.data)
    }


   const deletemonthly=async(id)=>{
        const result = await axios.delete('http://localhost:8070/monthly/delete/'+id)
        .then((result)=>{
          loadMonthly()
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

<h1>Monthly Finance</h1>

<h6>View and edit monthly finance</h6>

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
      <th scope="col">Year</th>
      <th scope="col">Month</th>
      <th scope="col">TransportCost_LKR</th>
      <th scope="col">StockCost_LKR</th>
      <th scope="col">SalaryCost_LKR</th>
      <th scope="col">OtherCost_LKR</th>
      <th scope="col">TotalCost_LKR</th>
      <th scope="col">OrderPayments_LKR</th>
      <th scope="col">Profit_LKR</th>
      
    </tr>
    
  </thead>
  
  <tbody>
    {monthly.map((monthly,index)=>(
    <tr>
      <th scope="row">{index+1}</th>
      <td>{monthly.Year}</td>
      <td>{monthly.Month}</td>
      <td>{monthly.TransportCost_LKR}</td>
      <td>{monthly.StockCost_LKR}</td>
      <td>{monthly.SalaryCost_LKR}</td>
      <td>{monthly.OtherCost_LKR}</td>
      <td>{monthly.TotalCost_LKR}</td>
      <td>{monthly.OrderPayments_LKR}</td>
      <td>{monthly.Profit_LKR}</td>
      
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

<button className = "btn btn-success"><a href="#" style={{ textDecoration: "none", color: "white" }}> Add Yearly Finance</a></button>
</div>




            </div>



            </div>


    )


}

export default ViewMonthly;