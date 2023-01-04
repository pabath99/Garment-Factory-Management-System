import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import CustomerSideMenu from "./CustomerSideMenu";

function UpdateNonShopCustomer() { 
  const navigate=useNavigate();

    const [NonShopCustomerID, setnonshopcustomerid] = useState("");
  const [OrganizationName, setorganizationname] = useState("");
  const [OwnerName, setownername] = useState("");
  const [OwnerNumber, setownernumber] = useState("");
  const [Address, setaddress] = useState("");
  const [Email, setemail] = useState("");
    
    const {id} = useParams();
    
    const getCusDetails = () => {
        axios.get("http://localhost:8070/NonShopCustomer/get/"+id)
        .then((res) => {
            const updateNonCustomer = {
                NonShopCustomerID: res.data.NonShopCustomerID,
                OrganizationName: res.data.OrganizationName,
                OwnerName: res.data.OwnerName,
                OwnerNumber: res.data.OwnerNumber,
                Address: res.data.Address,
                Email: res.data.Email
            }
            console.log(res.data);
            setnonshopcustomerid(updateNonCustomer.NonShopCustomerID);
            setorganizationname(updateNonCustomer.OrganizationName);
            setownername(updateNonCustomer.OwnerName);
            setownernumber(updateNonCustomer.OwnerNumber);
            setaddress(updateNonCustomer.Address);
            setemail(updateNonCustomer.Email);
        })
        .catch((err) => {
          
            alert(err.message);
        });
    }

    useEffect(() => getCusDetails(), []);

    return ( 
      <div>
  <CustomerSideMenu/>
        <div className="container"> <br></br> <br></br> <br></br>
            <h1>Update Non-Shop Customer</h1>
            <form onSubmit={(e) => {
                e.preventDefault();

                
            const newnonshopCustomer = {
                NonShopCustomerID, 
                OrganizationName,
                OwnerName,
                OwnerNumber,
                Address,
                Email
                }
                        
                axios.put("http://localhost:8070/NonShopCustomer/update/"+id, newnonshopCustomer)
                .then(() => {
                  
                    alert("Customer updated");
                    navigate("/viewnoncus");
                })
                .catch((err) => {
                    alert(err);
                })
            }}>

           <div className="mb-3">
            <label for="NonShopCustomerID" className="form-label">Non Shop Customer ID</label>
            <input type="text" value={NonShopCustomerID}  className="form-control" id="NonShopCustomerID" placeholder="Enter Shop ID"
            onChange={(e)=>{

                setnonshopcustomerid(e.target.value);

            }} />
          
          </div>
          <div className="mb-3">
            <label for="OrganizationName" className="form-label">Organization Name</label>
            <input type="text" value={OrganizationName} className="form-control" id="OrganizationName" placeholder="Enter organization Name"
            onChange={(e)=>{

                setorganizationname(e.target.value);

            }} />
          
          </div>
          <div className="mb-3">
            <label for="OwnerName" className="form-label">Owner Name</label>
            <input type="text" value={OwnerName}  className="form-control" id="OwnerName" placeholder="Enter Owner Name"
             onChange={(e)=>{

                setownername(e.target.value);

            }} />
          </div>
          <div className="mb-3">
            <label for="OwnerNumber" className="form-label">Owner Number</label>
            <input type="text" value={OwnerNumber}  className="form-control" id="OwnerNumber" placeholder="Enter Owner Number"
              onChange={(e)=>{

                setownernumber(e.target.value);
  
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

export default UpdateNonShopCustomer;