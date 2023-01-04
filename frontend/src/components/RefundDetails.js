import React, { Component } from 'react'
import axios from 'axios';
import FinanceSideMenu from './FinanceSideMenu';
export default class RefundDetails extends Component {
    
  constructor(props){
    super(props);

    this.state={
        refund:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/refund/update/${id}`).then((res) =>{
        if(res.data.success){
            this.setState({
                refund:res.data.refund
            });

            console.log(this.state.refund);
        }
    });

  }


    render(){

      const {RefundID, CustomerID, OrderID, RequestedDate, Amount_LKR, Reason, PaymentSlip, Status} = this.state.refund;

        return (

          <div>
<FinanceSideMenu/>
   <div className='container' style={{marginTop:'20px'}}>
    <br></br><br></br><br></br>
    <h4>RefundID : {RefundID}</h4>
    <hr></hr>
    <dl className='row'>
      <dt className='col-sm-3'>CustomerID</dt>
      <dd className='col-sm-9'>{CustomerID}</dd>
      <dt className='col-sm-3'>OrderID</dt>
      <dd className='col-sm-9'>{OrderID}</dd>
      <dt className='col-sm-3'>RequestedDate</dt>
      <dd className='col-sm-9'>{RequestedDate}</dd>
      <dt className='col-sm-3'>Amount_LKR</dt>
      <dd className='col-sm-9'>{Amount_LKR}</dd>
      <dt className='col-sm-3'>Reason</dt>
      <dd className='col-sm-9'>{Reason}</dd>
      <dt className='col-sm-3'>PaymentSlip</dt>
      <dd className='col-sm-9'>{PaymentSlip}</dd>
      <dt className='col-sm-3'>Status</dt>
      <dd className='col-sm-9'>{Status}</dd>

      
    </dl>

    </div>
    </div>
        )
    }

}