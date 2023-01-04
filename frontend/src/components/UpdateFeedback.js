import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CustomerSideMenu from "./CustomerSideMenu";

function UpdateFeedback() { 
  const navigate=useNavigate();

    const [CustomerID, setcustomerid] = useState("");
  const [CustomerName, setcustomername] = useState("");
  const [OrderType, setordertype] = useState("");
  const [Feedback, setfeedback] = useState("");
  const [Suggestions, setsuggestions] = useState("");
    
    const {id} = useParams();
    
    const getFeedback = () => {
        axios.get("http://localhost:8070/FeedbackRoute/get/"+id)
        .then((res) => {
            const updateCustomer = {
                CustomerID: res.data.CustomerID,
                CustomerName: res.data.CustomerName,
                OrderType: res.data.OrderType,
                Feedback: res.data.Feedback,
                Suggestions: res.data.Suggestions,
            }

            // console.log(res.data);
            setcustomerid(updateCustomer.CustomerID);
            setcustomername(updateCustomer.CustomerName);
            setordertype(updateCustomer.OrderType);
            setfeedback(updateCustomer.Feedback);
            setsuggestions(updateCustomer.Suggestions);
        })
        .catch((err) => {
          
            alert(err.message);
        });
    }

    useEffect(() => getFeedback(), []);

    return ( 
      <div>
  <CustomerSideMenu/>
        <div className="container"> <br></br> <br></br> <br></br>
            <h1>Update Feedback</h1>
            <form onSubmit={(e) => {
                e.preventDefault();

                
            const newfeedback = {
                CustomerID, 
                CustomerName,
                OrderType,
                Feedback,
                Suggestions,
                }
                        
                axios.put("http://localhost:8070/FeedbackRoute/update/"+id, newfeedback)
                .then(() => {
                    alert("Customer feedback updated");
                    navigate("/viewfeedback");
                })
                .catch((err) => {
                    alert(err);
                })
            }}>

           <div className="mb-3">
            <label for="CustomerID" className="form-label">Customer ID</label>
            <input type="text" value={CustomerID}  className="form-control" id="CustomerID" placeholder="Enter customer ID"
            onChange={(e)=>{

              setcustomerid(e.target.value);

            }} />
          
          </div>
          <div className="mb-3">
            <label for="CustomerName" className="form-label">Customer Name</label>
            <input type="text" value={CustomerName} className="form-control" id="CustomerName" placeholder="Enter Customer Name"
            onChange={(e)=>{

                setcustomername(e.target.value);

            }} />
          
          </div>
          <div className="mb-3">
            <label for="OrderType" className="form-label">Order Type</label>
            <input type="text" value={OrderType}  className="form-control" id="OrderType" placeholder="Enter Order Type"
             onChange={(e)=>{

                setordertype(e.target.value);

            }} />
          </div>
          <div className="mb-3">
            <label for="Feedback" className="form-label">Feedback</label>
            <input type="text" value={Feedback}  className="form-control" id="Feedback" placeholder="Enter Feedback"
             onChange={(e)=>{

                setfeedback(e.target.value);

            }} />
          </div>
          <div className="mb-3">
            <label for="Suggestions" className="form-label">Suggestions</label>
            <input type="text" value={Suggestions}  className="form-control" id="Suggestions" placeholder="Enter Suggestions"
              onChange={(e)=>{

                setsuggestions(e.target.value);
  
              }} />
          </div>

            <center><button type="submit" className="btn btn-primary" >update</button></center>
        </form>
        </div>
        </div>
    );
};

export default UpdateFeedback;