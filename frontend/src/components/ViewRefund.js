import React, { Component } from 'react';
import axios from 'axios';
import FinanceSideMenu from './FinanceSideMenu';

export default class ViewRefunds extends Component {

constructor(props){

  super(props);

  this.state={
    refund:[]
  };

}

componentDidMount(){
    this.retrieveRefund();
}

retrieveRefund(){
    axios.get("/refund").then(res =>{
        if(res.data.success){
            this.setState({
                refund:res.data.existingRefunds
            });

            console.log(this.state.refund)
        }
    });
}



render(){
return(
<div>
<FinanceSideMenu/>
            
<div>

<div  className="container">
  <br></br><br></br><br></br>

<h1>Refunds</h1>

<h6>Track the pending and sent refund details</h6>

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
      <th scope="col">RefundID</th>
      <th scope="col">CustomerID</th>
      <th scope="col">OrderID</th>
      <th scope="col">RequestedDate</th>
      <th scope="col">Amount(LKR)</th>
      <th scope="col">Reason</th>
      <th scope="col">PaymentSlip</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
      
    </tr>
    
  </thead>
  
  <tbody>
  {this.state.refund.map((refund, index) =>(
    <tr>
      <th scope="row"><a href={`/viewrefunds/${refund._id}`}>{refund.RefundID}</a></th>
      <td>{refund.CustomerID}</td>
      <td>{refund.OrderID}</td>
      <td>{refund.RequestedDate}</td>
      <td>{refund.Amount_LKR}</td>
      <td>{refund.Reason}</td>
      <td>{refund.PaymentSlip}</td>
      <td>{refund.Status}</td>
      <td>
        <a className="btn btn-outline-warning " style={{ height: 30, width: 74 }} href={`/updaterefunds/${refund._id}`}><i class="fa fa-thin fa-pen-to-square" ></i>&nbsp;Edit</a>
        &nbsp;
        <a className="btn btn-outline-danger" href="#" style={{ height: 30, width: 90 }}><i class="fa fa-thin fa-trash" style={{ height: 2, width: 12 }}></i>&nbsp;Delete</a>
      </td>
    </tr> 
  ))}
  </tbody>
</table>

<button className = "btn btn-success"><a href="/addrefunds" style={{ textDecoration: "none", color: "white" }}> Add Refund</a></button>
</div>




            </div>
            </div>
        )
    }
}

