import React, {useState} from "react";
import axios from "axios";
import FinanceSideMenu from './FinanceSideMenu';

export default function AddRefund(){


    const [RefundID, setRefundID] = useState("");
    const [CustomerID, setCustomerID] = useState("");
    const [OrderID, setOrderID] = useState("");
    const [RequestedDate, setRequestedDate] = useState("");
    const [Amount_LKR, setAmountLKR] = useState("");
    const [Reason, setReason] = useState("");
    const [PaymentSlip, setPaymentSlip] = useState("");
    const [Status, setStatus] = useState("");


    function sendData(e){
        e.preventDefault();
        
        const newRefund ={
          RefundID,
          CustomerID,
          OrderID,
          RequestedDate,
          Amount_LKR,
          Reason,
          PaymentSlip,
          Status
        }

        axios.post("http://localhost:8070/refund/add", newRefund).then(()=>{
            alert("Refund added")
        }).catcj((err)=>{
            alert(err)
        })
        
    }


    return(
      <div>
<FinanceSideMenu/>

        <div className = "container" style={{width: "30%" }}>
          <br></br><br></br><br></br><br></br>

<form onSubmit={sendData}>

  <div className="form-group">
    <label htmlFor="RefundID">RefundID</label>
    <input
      type="text"
      className="form-control"
      id="rid"
      placeholder="Enter Refund ID"
      onChange={(e)=>{
        setRefundID(e.target.value);
      }}
    />
  </div>

  <div className="form-group">
    <label htmlFor="CustomerID">CustomerID</label>
    <input
      type="text"
      className="form-control"
      id="cid"
      placeholder="Enter Customer ID"
      onChange={(e)=>{
        setCustomerID(e.target.value);
      }}
    />
  </div>

  <div className="form-group">
    <label htmlFor="OrderID">OrderID</label>
    <input
      type="text"
      className="form-control"
      id="oid"
      placeholder="Enter Order ID"
      onChange={(e)=>{
        setOrderID(e.target.value);
      }}
    />
  </div>

  <div className="form-group">
    <label htmlFor="RequestedDate">Requested Date</label>
    <input
      type="Date"
      className="form-control"
      id="rqd"
      placeholder="Enter Requested Date"
      onChange={(e)=>{
        setRequestedDate(e.target.value);
      }}
    />
  </div>

  <div className="form-group">
    <label htmlFor="AmountLKR">Amount (LKR)</label>
    <input
      type="Number"
      className="form-control"
      id="lkr"
      placeholder="Enter Amount"
      onChange={(e)=>{
        setAmountLKR(e.target.value);
      }}
    />
  </div>

  <div className="form-group">
    <label htmlFor="Reason">Reason</label>
    <input
      type="text"
      className="form-control"
      id="rsn"
      placeholder="Enter Reason"
      onChange={(e)=>{
        setReason(e.target.value);
      }}
    />
  </div>

  <div className="form-group">
    <label htmlFor="PaymentSlip">Payment Slip</label>
    <input
      type="text"
      className="form-control"
      id="pms"
      placeholder="Enter Payment Slip"
      onChange={(e)=>{
        setPaymentSlip(e.target.value);
      }}
    />
  </div>

  <div className="form-group">
    <label htmlFor="Status">Status</label>
    <input
      type="text"
      className="form-control"
      id="sts"
      placeholder="Enter Refund Status"
      onChange={(e)=>{
        setStatus(e.target.value);
      }}
    />
  </div>
  
  <br></br>

  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>


        </div>
</div>
    )

}