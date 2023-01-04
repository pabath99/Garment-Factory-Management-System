import React,{useState} from "react"
import axios from "axios";
import { useNavigate } from 'react-router-dom'; 
import CustomerSideMenu from "./CustomerSideMenu";

//add
export default function AddShopCustomerDetails(){
  const navigate=useNavigate();

  const [CustomerID, setshopid] = useState(""); //set details
  const [ShopName, setshopname] = useState("");
  const [ShopNumber, setshopnumber] = useState("");
  const [ManagerName, setmanagername] = useState("");
  const [ManagerNumber, setmanagernumber] = useState("");
  const [Address, setaddress] = useState("");
  const [Email, setemail] = useState("");

  function sendData(e){
    e.preventDefault();
      
    const newShopCustomer ={
      CustomerID,
      ShopName,
      ShopNumber,
      ManagerName,
      ManagerNumber,
      Address,
      Email
    }
    //phone number validate key
    const ph = /^[0-9\b]+$/;
    
    //check the numbers length
    if ((!ph.test(String(ManagerNumber))) || (ManagerNumber.length != 10)) {

      alert("Invalid Contact Number !", "contact number should be valid pattern", "error");
     
    }else if((!ph.test(String(ShopNumber))) || (ShopNumber.length != 10)) {

      alert("Invalid Shop Number !", "contact number should be valid pattern", "error");
     
    }else{ //if the numbers are in correct range then run the else part
    console.log(newShopCustomer)
    axios.post("http://localhost:8070/CusDetails/add",newShopCustomer).then(()=>{
      alert("Shop Customer Added")
      navigate("/viewcus"); //navigate to same page
      setshopid("");
      setshopname("");
      setshopnumber("");
      setmanagername("");
      setmanagernumber("");
      setaddress("");
      setemail("");


    }).catch((err)=>{
      alert(err)
    })

  }}


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
            <label for="CustomerID" className="form-label">Shop Customer ID</label>
            <input type="text" className="form-control" id="CustomerID" placeholder="Enter Shop ID"
            onChange={(e)=>{

              setshopid(e.target.value);

            }} />
          
          </div>
          <div className="mb-3">
            <label for="ShopName" className="form-label">Shop Name</label>
            <input type="text" className="form-control" id="ShopName" placeholder="Enter Shop Name"
            onChange={(e)=>{

              setshopname(e.target.value);

            }} />
          
          </div>
          <div className="mb-3">
            <label for="ShopNumber" className="form-label">Shop Number</label>
            <input type="text" className="form-control" id="ShopNumber" placeholder="Enter Shop tel-phone"
             onChange={(e)=>{

              setshopnumber(e.target.value);

            }} />
          </div>
          <div className="mb-3">
            <label for="ManagerName" className="form-label">Manager Name</label>
            <input type="text" className="form-control" id="ManagerName" placeholder="Enter Manager Name"
             onChange={(e)=>{

              setmanagername(e.target.value);

            }} />
          </div>
          <div className="mb-3">
            <label for="ManagerNumber" className="form-label">Manager Number</label>
            <input type="text" className="form-control" id="ManagerNumber" placeholder="Enter Manager tel-phone"
              onChange={(e)=>{

                setmanagernumber(e.target.value);
  
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