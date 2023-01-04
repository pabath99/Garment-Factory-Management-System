import React,{useState} from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import CustomerSideMenu from "./CustomerSideMenu";



export default function AddNonShopCustomerDetails(){
        const navigate=useNavigate();
      
        const [NonShopCustomerID, setshopid] = useState("");
        const [OrganizationName, setorganizationname] = useState("");
        const [OwnerName, setownername] = useState("");
        const [OwnerNumber, setownernumber] = useState("");
        const [Address, setaddress] = useState("");
        const [Email, setemail] = useState("");

        function sendData(e){
            e.preventDefault();
              
            const newNonShopCustomer ={
              NonShopCustomerID,
              OrganizationName,
              OwnerName,
              OwnerNumber,
              Address,
              Email
            }
            console.log(newNonShopCustomer)
            axios.post("http://localhost:8070/NonShopCustomer/add",newNonShopCustomer).then(()=>{
              alert("Non-Shop Customer Added")
              navigate("/viewnoncus");
              setshopid("");
              setorganizationname("");
              setownername("");
              setownernumber("");
              setaddress("");
              setemail("");
        
        
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
            <label for="CustomerID" className="form-label">Non Shop Customer ID</label>
            <input type="text" className="form-control" id="CustomerID" placeholder="Enter Shop ID"
            onChange={(e)=>{

              setshopid(e.target.value);

            }} />
          
          </div>
          <div className="mb-3">
            <label for="OrganizationName" className="form-label">Organization Name</label>
            <input type="text" className="form-control" id="OrganizationName" placeholder="Enter Organization Name"
            onChange={(e)=>{

              setorganizationname(e.target.value);

            }} />
          
          </div>
          <div className="mb-3">
            <label for="OwnerName" className="form-label">Owner Name</label>
            <input type="text" className="form-control" id="OwnerName" placeholder="Enter Owner Name"
             onChange={(e)=>{

              setownername(e.target.value);

            }} />
          </div>
          <div className="mb-3">
            <label for="OwnerNumber" className="form-label">Owner Number</label>
            <input type="text" className="form-control" id="OwnerNumber" placeholder="Enter Owner tel-phone"
              onChange={(e)=>{

                setownernumber(e.target.value);
  
              }} />
          </div>
          <div className="mb-3">
            <label for="Address" className="form-label">Address</label>
            <input type="text" className="form-control" id="Address" placeholder="Enter Address"
              onChange={(e)=>{

               setaddress(e.target.value);
  
              }} />
          </div>
          <div className="mb-3">
            <label for="Email" className="form-label">Email Address</label>
            <input type="email" className="form-control" id="Email" placeholder="Enter E-mail Address"
              onChange={(e)=>{

                setemail(e.target.value);
  
              }} />
          </div>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
      </div>
    )

}