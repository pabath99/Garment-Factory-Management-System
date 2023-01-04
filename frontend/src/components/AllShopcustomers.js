import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import CustomerSideMenu from "./CustomerSideMenu";




export default function AllShopcustomers() {

    const [shopcustomers, setShopCustomers] = useState([]);

    useEffect(() => {
        function getShopCustomers() {
            axois.get("http://localhost:8070/cusDetails/view").then((res) => {
                console.log(res.data);
                setShopCustomers(res.data);
            }).catch((err) => {
                alert(err.message);
            })  
        }
        getShopCustomers();
    }, [shopcustomers])
    
    //delete
    const deleteData = (e) =>{

        var result = window.confirm("Are you sure?");
    
      if(result == true){
    
        axois.delete(`http://localhost:8070/cusDetails/delete/${e._id}`).then((res)=>{
    
          }).catch(e =>{
    
              alert(e)
    
          })
    
      }else{
    
          e.preventDefault();
    
      }

    
    }
    //search

    const [serQuary,setSerQuary]=useState("");



    function searchIncome(event){

          setSerQuary(event.target.value);

    }





    console.log(serQuary);
    return (

     
<div>
<CustomerSideMenu/>
        
        <div className='container'>
              
            <div className='row'>
                <div className='col-lg-9 mt-2 mb-2'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                
                    <h4 class="heading">All Customer Details</h4>
                    <div>

<input onChange={searchIncome}  placeholder="Search....."/>



</div>



                    <br>
                    </br>
                </div>
                
                <div className='col-lg-3 mt-2 mb-2'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div><Link to="/Report"><button
                        type="button2"
                        class="btn btn-info">Generate Report</button></Link></div>
                </div>
            </div>
            <center> <div className='buttons'>

                <Link to="add"><button type="button2" class="CButton">Add New Customer</button></Link>

            </div></center>

            <table className="table table-hover" style={{ marginTop: '40px' }}>
                <thead>
                    <tr>
                        <th scope="col">CustomerID</th>
                        <th scope="col">ShopName </th>
                        <th scope="col">ShopNumber</th>
                        <th scope="col">ManagerName</th>
                        <th scope="col">ManagerNumber </th>
                        <th scope="col">Address </th>
                        <th scope="col">Email</th>

                    </tr>
                </thead>

                <tbody>  {/*search*/}
                    {
                        shopcustomers.filter(e=>



                            e.CustomerID.toLowerCase().includes(serQuary)||

                            e.ShopName.toLowerCase().includes(serQuary)||

                
                            e.ManagerName.toLowerCase().includes(serQuary)||

                            
                
                            e.Address.toLowerCase().includes(serQuary)||

                            e.Email.includes(serQuary)) 

                
                           //finish search
                        .map((e, i) => (
                            <tr>
                                <td>{e.CustomerID}</td>
                                <td>{e.ShopName}</td>
                                <td>{e.ShopNumber}</td>
                                <td>{e.ManagerName}</td>
                                <td>{e.ManagerNumber}</td>
                                <td>{e.Address}</td>
                                <td>{e.Email}</td>
                                <td className="middle"><Link to={"/update/"+e._id} className="btn btn-warning">Update</Link></td>

                                          <td>  <button className="btn btn-warning" onClick={() => {deleteData(e)}}>Delete</button>

                                            </td>

                                     
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='buttons'>
                
            </div>
           
        </div>
</div>

    )
                }