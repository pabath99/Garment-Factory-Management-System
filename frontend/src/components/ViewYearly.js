import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import FinanceSideMenu from './FinanceSideMenu';


const ViewYearly=()=>{

    const [yearly,SetYearly] = useState([])


    useEffect(()=>{
        loadYearly();
    },
    []
    )

    const loadYearly = async()=>{
        const result = await axios.get('http://localhost:8070/yearly/');
        SetYearly(result.data)
    }


   const deleteyearly=async(id)=>{
        const result = await axios.delete('http://localhost:8070/yearly/delete/'+id)
        .then((result)=>{
          loadYearly()
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

<h1>Yearly Finance</h1>

<h6>View and edit yearly finance</h6>

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
      <th scope="col">Profit_LKR</th>
      <th scope="col">Expenditure_LKR</th>
      <th scope="col">Description</th>
      <th scope="col">Status</th>
      
    </tr>
    
  </thead>
  
  <tbody>
    {yearly.map((yearly,index)=>(
    <tr>
      <th scope="row">{index+1}</th>
      <td>{yearly.Year}</td>
      <td>{yearly.Profit_LKR}</td>
      <td>{yearly.Expenditure_LKR}</td>
      <td>{yearly.Description}</td>
      <td>{yearly.Status}</td>
      
      <td><Link to={`/viewyearlyfinance/updateyearly/${yearly._id}`}>
        <a className="btn btn-outline-warning " style={{ height: 30, width: 74 }} href={`/updateyearly`}><i class="fa fa-thin fa-pen-to-square" ></i>&nbsp;Edit</a>
        
    </Link></td>

        <td><Link to='' onClick={()=>deleteyearly(yearly._id)}>
        <a className="btn btn-outline-danger" href="#" style={{ height: 30, width: 90 }}><i class="fa fa-thin fa-trash" style={{ height: 2, width: 12 }}></i>&nbsp;Delete</a>
        
       </Link></td>

        
    </tr> 
   ))}
  </tbody>
</table>

<button className = "btn btn-success"><a href="/addyearlyfinance" style={{ textDecoration: "none", color: "white" }}> Add Yearly Finance</a></button>
</div>




            </div>

</div>




    )


}

export default ViewYearly;