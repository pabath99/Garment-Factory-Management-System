import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import FinanceSideMenu from './FinanceSideMenu';

const ViewBudget=()=>{

    const [budget,SetBudget] = useState([])
    const [search, setSearch] = useState("");


    useEffect(()=>{
        loadBudget();
    },
    []
    )

    const loadBudget = async()=>{
        const result = await axios.get('http://localhost:8070/budget/');
        SetBudget(result.data)
    }


   const deletebudget=async(id)=>{
        const result = await axios.delete('http://localhost:8070/budget/delete/'+id)
        .then((result)=>{
          loadBudget()
          alert('delete successful!')
        }).catch(()=>{
          alert('delete unsuccessful')
        })
   }


   const generateReport = () => {
    const doc = new jsPDF();
    const title = "Budgets";
    doc.setFontSize(15);
    doc.setTextColor(128, 0, 0);
    doc.text(title, 100, 10, null, null, "center");
    doc.setTextColor(0);
    doc.setFontSize(12);

    doc.setFontSize(8);
    doc.text(
        `*This Report is automatically generated.`,
        20,
        35,
        null,
        null
    );

    const headers = [
        [   "Index",
            "Year",
            "Month",
            "TransportBudget_LKR",
            "StockBudget_LKR",
            "SalaryBudget_LKR",
            "OtherCostsBudget_LKR",
            "TotalBudget_LKR",

        ],
    ];

    const data = budget.map((reserve, index) => [
        index,
        reserve.Year,
        reserve.Month,
        reserve.TransportBudget_LKR,
        reserve.StockBudget_LKR,
        reserve.SalaryBudget_LKR,
        reserve.OtherCostsBudget_LKR,
        reserve.TotalBudget_LKR,

    ]);
    let contents = {
        startY: 20,
        head: headers,
        body: data,
    };
    doc.autoTable(contents);
    doc.save("Budget_Report.pdf");
};

    return(


<div>
<FinanceSideMenu/>

        <div>

<div  className="container">
  <br></br><br></br><br></br>

<h1>Budgets</h1>

<h6>View and edit past and future budgets</h6>

<br></br>

<div class="input-group rounded"  style={{ height: 30, width: "30%" }}>
<input type="text" placeholder="Search from 'Year' " className="mr-2"
                                            onChange={(e) => {
                                                setSearch(e.target.value);
                                            }} />
  <span class="input-group-text border-0" id="search-addon">
    <i class="fas fa-search"></i>
  </span>{' '} <button className = "btn btn-primary" onClick={() => generateReport()}>Download PDF</button>

</div> 
<br></br>

<table class="table table-striped" style={{ fontSize: "80%" }}>
  <thead>
    <tr>
    <th scope="col">Sr.No.</th>
      <th scope="col">Year</th>
      <th scope="col">Month</th>
      <th scope="col">TransportBudget_LKR</th>
      <th scope="col">StockBudget_LKR</th>
      <th scope="col">SalaryBudget_LKR</th>
      <th scope="col">OtherCostsBudget_LKR</th>
      <th scope="col">TotalBudget_LKR</th>
      
    </tr>
    
  </thead>
  
  <tbody>
    {budget.filter(Budget => {
                if (search === "") {
                  return Budget
                }
                else if (Budget.Year.toString().toLowerCase().includes(search.toString().toLowerCase())) {
                  return Budget
                }
              }).map((Budget,index)=>(
    <tr>
      <th scope="row">{index+1}</th>
      <td>{Budget.Year}</td>
      <td>{Budget.Month}</td>
      <td>{Budget.TransportBudget_LKR}</td>
      <td>{Budget.StockBudget_LKR}</td>
      <td>{Budget.SalaryBudget_LKR}</td>
      <td>{Budget.OtherCostsBudget_LKR}</td>
      <td>{Budget.TotalBudget_LKR}</td>
      
      <td><Link to={`/viewbudget/updatebudget/${Budget._id}`}>
        <a className="btn btn-outline-warning " style={{ height: 30, width: 74 }} href={`/updaterefunds/`}><i class="fa fa-thin fa-pen-to-square" ></i>&nbsp;Edit</a>
        
        </Link></td>

        <td><Link to='' onClick={()=>deletebudget(Budget._id)}>
        <a className="btn btn-outline-danger" href="#" style={{ height: 30, width: 90 }}><i class="fa fa-thin fa-trash" style={{ height: 2, width: 12 }}></i>&nbsp;Delete</a>
        
        </Link></td>

        
    </tr> 
   ))}
  </tbody>
</table>

<button className = "btn btn-success"><a href="/addbudget" style={{ textDecoration: "none", color: "white" }}> Add Budget</a></button>
</div>




            </div>


</div>



    )


}

export default ViewBudget;