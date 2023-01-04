import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CustomerSideMenu from "./CustomerSideMenu";

function UpdateCusDeatils() { 
  const navigate=useNavigate();

    const [CustomerID, setshopid] = useState("");
  const [ShopName, setshopname] = useState("");
  const [ShopNumber, setshopnumber] = useState("");
  const [ManagerName, setmanagername] = useState("");
  const [ManagerNumber, setmanagernumber] = useState("");
  const [Address, setaddress] = useState("");
  const [Email, setemail] = useState("");
    
    const {id} = useParams();
    
    const getNonCusDetails = () => {
        axios.get("http://localhost:8070/cusDetails/get/"+id)
        .then((res) => {
            const updateCustomer = {
                CustomerID: res.data.CustomerID,
                ShopName: res.data.ShopName,
                ShopNumber: res.data.ShopNumber,
                ManagerName: res.data.ManagerName,
                ManagerNumber: res.data.ManagerNumber,
                Address: res.data.Address,
                Email: res.data.Email
            }

           
            setshopid(updateCustomer.CustomerID);
            setshopname(updateCustomer.ShopName);
            setshopnumber(updateCustomer.ShopNumber);
            setmanagername(updateCustomer.ManagerName);
            setmanagernumber(updateCustomer.ManagerNumber);
            setaddress(updateCustomer.Address);
            setemail(updateCustomer.Email);
        })
        .catch((err) => {
          
            alert(err.message);
        });
    }

    useEffect(() => getNonCusDetails(), []);

    return ( 


      <div>
  <CustomerSideMenu/>


        <div className="container"> <br></br> <br></br> <br></br>
            <h1>Update Customer</h1>
            <form onSubmit={(e) => {
                e.preventDefault();

                
            const newCustomer = {
                CustomerID, 
                ShopName,
                ShopNumber,
                ManagerName,
                ManagerNumber,
                Address,
                Email
                }
                        
                axios.put("http://localhost:8070/cusDetails/update/"+id, newCustomer)
                .then(() => {
                    alert("Customer updated");
                    navigate("/viewcus");
                })
                .catch((err) => {
                    alert(err);
                })
            }}>

           <div className="mb-3">
            <label for="CustomerID" className="form-label">Shop Customer ID</label>
            <input type="text" value={CustomerID}  className="form-control" id="CustomerID" placeholder="Enter Shop ID"
            onChange={(e)=>{

              setshopid(e.target.value);

            }} />
          
          </div>
          <div className="mb-3">
            <label for="ShopName" className="form-label">Shop Name</label>
            <input type="text" value={ShopName} className="form-control" id="ShopName" placeholder="Enter Shop Name"
            onChange={(e)=>{

              setshopname(e.target.value);

            }} />
          
          </div>
          <div className="mb-3">
            <label for="ShopNumber" className="form-label">Shop Number</label>
            <input type="text" value={ShopNumber}  className="form-control" id="ShopNumber" placeholder="Enter Shop tel-phone"
             onChange={(e)=>{

              setshopnumber(e.target.value);

            }} />
          </div>
          <div className="mb-3">
            <label for="ManagerName" className="form-label">Manager Name</label>
            <input type="text" value={ManagerName}  className="form-control" id="ManagerName" placeholder="Enter Manager Name"
             onChange={(e)=>{

              setmanagername(e.target.value);

            }} />
          </div>
          <div className="mb-3">
            <label for="ManagerNumber" className="form-label">Manager Number</label>
            <input type="text" value={ManagerNumber}  className="form-control" id="ManagerNumber" placeholder="Enter Manager tel-phone"
              onChange={(e)=>{

                setmanagernumber(e.target.value);
  
              }} />
          </div>
          <div className="mb-3">
            <label for="Address" className="form-label">Address</label>
            <input type="text" value={Address}  className="form-control" id="Address" placeholder="Enter Address"
              onChange={(e)=>{

                setaddress(e.target.value);
  
              }} />
          </div>
          <div className="mb-3">
            <label for="Email" className="form-label">Email Address</label>
            <input type="email" value={Email}  className="form-control" id="Email" placeholder="Enter E-mail Address"
              onChange={(e)=>{

                setemail(e.target.value);
  
              }} />
          </div>

            <center><button type="submit" className="btn btn-primary" >update</button></center>
        </form>
        </div>
        </div>
    );
};

export default UpdateCusDeatils;