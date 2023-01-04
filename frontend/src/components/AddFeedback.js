import React,{useState} from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import CustomerSideMenu from "./CustomerSideMenu";

export default function AddFeedback(){
    const navigate=useNavigate();
  
    const [CustomerID, setshopid] = useState("");
    const [CustomerName, setcustomername] = useState("");
    const [OrderType, setordertype] = useState("");
    const [Feedback, setfeedback] = useState("");
    const [Suggestions, setsuggestions] = useState("");
  

    function sendData(e){
        e.preventDefault();
          
        const newfeedback ={
          CustomerID,
          CustomerName,
          OrderType,
          Feedback,
          Suggestions,
        }
        console.log(newfeedback)
        axios.post("http://localhost:8070/FeedbackRoute/add",newfeedback).then(()=>{
          alert("Feedback Added")
          navigate("/viewfeedback");
          setshopid("");
          setcustomername("");
          setordertype("");
          setfeedback("");
          setsuggestions("");
    
    
        }).catch((err)=>{
          alert(err)
        })
    
      }

return(

<div>
<CustomerSideMenu/>


    <div className="container">
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <form onSubmit ={sendData}>
      <div className="mb-3">
        <label for="CustomerID" className="form-label">Customer ID</label>
        <input type="text" className="form-control" id="CustomerID" placeholder="Enter Shop ID"
        onChange={(e)=>{

          setshopid(e.target.value);

        }} />
      
      </div>
      <div className="mb-3">
        <label for="CustomerName" className="form-label">Customer Name</label>
        <input type="text" className="form-control" id="CustomerName" placeholder="Enter Customer Name"
        onChange={(e)=>{

          setcustomername(e.target.value);

        }} />
      
      </div>
      <div className="mb-3">
        <label for="OrderType" className="form-label">Order Type</label>
        <input type="text" className="form-control" id="OrderType" placeholder="Enter Order Type"
         onChange={(e)=>{

          setordertype(e.target.value);

        }} />
      </div>
      <div className="mb-3">
        <label for="Feedback" className="form-label">Feedback</label>
        <input type="text" className="form-control" id="Feedback" placeholder="Enter Feedback"
          onChange={(e)=>{

            setfeedback(e.target.value);

          }} />
      </div>
      <div className="mb-3">
        <label for="Suggestions" className="form-label">Suggestions</label>
        <input type="text" className="form-control" id="Suggestions" placeholder="Enter Suggestions"
          onChange={(e)=>{

           setsuggestions(e.target.value);

          }} />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  </div>
  </div>
)

}