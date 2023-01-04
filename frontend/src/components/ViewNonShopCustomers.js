import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import CustomerSideMenu from "./CustomerSideMenu";




export default function ViewNonShopCustomers  () {

    const [nonshopcustomers, setNonShopCustomers] = useState([]);

    useEffect(() => {
        function getNonShopCustomers() {
            axois.get("http://localhost:8070/NonShopCustomer/view").then((res) => {
                console.log(res.data);
                setNonShopCustomers(res.data);
            }).catch((err) => {
                alert(err.message);
            })  
        }
        getNonShopCustomers();
    }, [nonshopcustomers]) 
    
    const deleteData = (e) =>{

        var result = window.confirm("Are you sure?");
    
      if(result == true){
    
        axois.delete(`http://localhost:8070/NonShopCustomer/delete/${e._id}`).then((res)=>{
    
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
                
                    <h4 class="heading">All Non-Shop Customer Details</h4>
                    <div>





<input onChange={searchIncome}  placeholder="Search....."/>





</div>

    {/*<Link to="/Report">
                 <button type="button2" class="btn btn-info" > Generate All Employees Details Report  </button>
                    </Link>*/}


                    <br>
                    </br>
                </div>
                
                <div className='col-lg-3 mt-2 mb-2'>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <div><Link to="/Reportnonshop"><button
                        type="button2"
                        class="btn btn-info">Generate Report</button></Link></div>
                </div>
            </div>
            <center> <div className='buttons'>

                <Link to="add"><button type="button2" class="CButton">Add New Non-Shop Customer</button></Link>

            </div></center>

            <table className="table table-hover" style={{ marginTop: '40px' }}>
                <thead>
                    <tr>
                        <th scope="col">NonShopCustomerID</th>
                        <th scope="col">OrganizationName </th>
                        <th scope="col">OwnerName</th>
                        <th scope="col">OwnerNumber</th>
                        <th scope="col">Address </th>
                        <th scope="col">Email</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        nonshopcustomers.filter(e=>


 
                            e.NonShopCustomerID.toLowerCase().includes(serQuary)||

                            e.OrganizationName.toLowerCase().includes(serQuary)||

                
                            e.OwnerName.toLowerCase().includes(serQuary)||

                            
                
                            e.Address.toLowerCase().includes(serQuary)||

                            e.Email.includes(serQuary)) 

                
                           
                        
                        
                        .map((e, i) => (
                            <tr>
                                <td>{e.NonShopCustomerID}</td>
                                <td>{e.OrganizationName}</td>
                                <td>{e.OwnerName}</td>
                                <td>{e.OwnerNumber}</td>
                                <td>{e.Address}</td>
                                <td>{e.Email}</td>
                                <td className="middle"><Link to={"/updatenon/"+e._id} className="btn btn-warning">Update</Link></td>

                                          <td>  <button className="btn btn-warning" onClick={() => {deleteData(e)}}>Delete</button>

                                            </td>

                                     

                                        

                                        

                                {/* <td><button href="/accepted_orders" type="button2" class="rejectButton">Delete</button></td> */}
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='buttons'>
                {/* <Link to="AddDriver"><button type="button2" class="CButton">Add Drivers</button></Link> */}
                
            </div>
           
        </div>
</div>

    )
                }