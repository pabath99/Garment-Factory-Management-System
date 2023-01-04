import axios from 'axios';
import React, { Component } from 'react'
import FinanceSideMenu from './FinanceSideMenu';

export default class UpdateRefund extends Component {
    
  constructor(props){
    super(props);

    this.state={
      RefundID: "",
      CustomerID: "",
      OrderID: "",
      RequestedDate: "",
      Amount_LKR: "",
      Reason: "",
      PaymentSlip: "",
      Status: ""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })
  }
 
  onSubmit = (e) =>{
    
    e.preventDefault();
    const id = this.props.match.params.id;

    const {RefundID, CustomerID, OrderID, RequestedDate, Amount_LKR, Reason, PaymentSlip, Status} = this.state;

    const data ={
      RefundID:RefundID,
      CustomerID:CustomerID,
      OrderID:OrderID,
      RequestedDate:RequestedDate,
      Amount_LKR:Amount_LKR,
      Reason:Reason,
      PaymentSlip:PaymentSlip,
      Status:Status
    }

    console.log(data)

    axios.put(`refund/update/${id}`, data).then((res) =>{
      if(res.data.success){
        alert("Refund Updated Successfully")
        this.setState(
          {
            RefundID: "",
            CustomerID: "",
            OrderID: "",
            RequestedDate: "",
            Amount_LKR: "",
            Reason: "",
            PaymentSlip: "",
            Status: ""
          }
        )
      }
    })


  }




  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/refund/post/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
                RefundID:res.data.refund.RefundID,
                CustomerID:res.data.refund.CustomerID,
                OrderID:res.data.refund.OrderID,
                RequestedDate:res.data.refund.RequestedDate,
                Amount_LKR:res.data.refund.Amount_LKR,
                Reason:res.data.refund.Reason,
                PaymentSlip:res.data.refund.PaymentSlip,
                Status:res.data.refund.Status
            });

            console.log(this.state.refund);
        }
    });

  } 



    render(){
        return (

          <div>
          <FinanceSideMenu/>
    
    <div className='"col-md-8 mt-4 mx-auto' style={{ width: "30%" }}>
    <h1 className='h3 mb-3 font-weight-normal'>Update Refund</h1>
    <form className="Needs-validation" noValidate>

      <div className='form-group' style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>RefundID</label>
        <input type='text'
        className='form-control'
        name ='RefundID'
        placeholder='Enter RefundID'
        value={this.state.RefundID}
        onChange={this.handleInputChange}/>
      </div>

      <div className='form-group' style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>CustomerID</label>
        <input type='text'
        className='form-control'
        name ='CustomerID'
        placeholder='Enter CustomerID'
        value={this.state.CustomerID}
        onChange={this.handleInputChange}/>
      </div>
    

      <div className='form-group' style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>OrderID</label>
        <input type='text'
        className='form-control'
        name ='OrderID'
        placeholder='Enter OrderID'
        value={this.state.OrderID}
        onChange={this.handleInputChange}/>
      </div>

      <div className='form-group' style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>RequestedDate</label>
        <input type='date'
        className='form-control'
        name ='RequestedDate'
        placeholder='Enter RequestedDate'
        value={this.state.RequestedDate}
        onChange={this.handleInputChange}/>
      </div>

      <div className='form-group' style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Amount_LKR</label>
        <input type='number'
        className='form-control'
        name ='Amount_LKR'
        placeholder='Enter Amount_LKR'
        value={this.state.Amount_LKR}
        onChange={this.handleInputChange}/>
      </div>

      <div className='form-group' style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Reason</label>
        <input type='text'
        className='form-control'
        name ='Reason'
        placeholder='Enter Reason'
        value={this.state.Reason}
        onChange={this.handleInputChange}/>
      </div>

      <div className='form-group' style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>PaymentSlip</label>
        <input type='text'
        className='form-control'
        name ='PaymentSlip'
        placeholder='Enter PaymentSlip'
        value={this.state.PaymentSlip}
        onChange={this.handleInputChange}/>
      </div>

      <div className='form-group' style={{marginBottom:'15px'}}>
        <label style={{marginBottom:'5px'}}>Status</label>
        <input type='text'
        className='form-control'
        name ='Status'
        placeholder='Enter Status'
        value={this.state.Status}
        onChange={this.handleInputChange}/>
      </div>

      <button  type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
        <i className='far fa-check-square'></i>
        &nbsp; Update
      </button>



    </form>
    
</div>
    </div>


        )
    }

}