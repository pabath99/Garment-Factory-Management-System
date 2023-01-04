import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import CustomerSideMenu from "./CustomerSideMenu";




export default function ViewFeedback() {

    const [feedback, setFeedback] = useState([]);

    useEffect(() => {
        function getFeedback() {
            axois.get("http://localhost:8070/FeedbackRoute/view").then((res) => {
                console.log(res.data);
                setFeedback(res.data);
            }).catch((err) => {
                alert(err.message);
            })  
        }
        getFeedback();
    }, [feedback])
    
    const deleteData = (e) =>{

        var result = window.confirm("Are you sure?");
    
      if(result == true){
    
        axois.delete(`http://localhost:8070/FeedbackRoute/delete/${e._id}`).then((res)=>{
    
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
                
                    <h4 class="heading">All Customer Feedbacks</h4>
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
                    <div><Link to="/ReportFeed"><button
                        type="button2"
                        class="btn btn-info">Generate Report</button></Link></div>
                </div>
            </div>
            <center> <div className='buttons'>

                <Link to="add"><button type="button2" class="CButton">Add New Feedback</button></Link>

            </div></center>

            <table className="table table-hover" style={{ marginTop: '40px' }}>
                <thead>
                    <tr>
                        <th scope="col">CustomerID</th>
                        <th scope="col">CustomerName</th>
                        <th scope="col">OrderType</th>
                        <th scope="col">Feedback</th>
                        <th scope="col">Suggestions</th>
                    

                    </tr>
                </thead>

                <tbody>
                    {
                        feedback.filter(e=>



                            e.CustomerID.toLowerCase().includes(serQuary)||

                            e.CustomerName.toLowerCase().includes(serQuary)||

                
                            e.OrderType.toLowerCase().includes(serQuary)||

                            
                
                            e.Feedback.toLowerCase().includes(serQuary)||

                            e.Suggestions.includes(serQuary)) 

                
                           
                        
                        
                        .map((e, i) => (
                            <tr>
                                <td>{e.CustomerID}</td>
                                <td>{e.CustomerName}</td>
                                <td>{e.OrderType}</td>
                                <td>{e.Feedback}</td>
                                <td>{e.Suggestions}</td>
                                <td className="middle"><Link to={"/updatefed/"+e._id} className="btn btn-warning">Update</Link></td>

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