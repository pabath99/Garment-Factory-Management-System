import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import JobHeader from './JobHeader';
//import * as Icon from 'react-bootstrap-icons';
import JobSideMenu from './JobSIdeMenu';


export default function WorkPlan() {

    const [Work, setWork] = useState([]);
    useEffect(() => {
        function getWork() {
            axios.get("http://localhost:8070/job/view").then((res) => {
                console.log(res.data);
                setWork(res.data);

            }).catch((err) => {
                alert(err.message);
            })
        }
        getWork();
    }, [])
    const deleteData = (e) =>{

        var result = window.confirm("Are you sure?");
    
      if(result == true){
    
        axios.delete(`http://localhost:8070/job/delete/${e._id}`).then((res)=>{
            alert("Job Deleted Successfuly");
          }).catch(e =>{
    
              alert(e)
    
          })
    
      }else{
    
          e.preventDefault();
    
      }
    
    
    }

    //Search
    const [serQuary,setSerQuary]=useState("");



    function searchIncome(event){

          setSerQuary(event.target.value);

    }





    console.log(serQuary);

    return (

        <div>
        <JobSideMenu/>

        <div className='container'><br></br>
            <div className='row'>
                <div className='col-lg-10 mt-2 mb-2'><br></br><br></br><br></br>
                <center><h1 class ="Fheader">Production Workplan</h1></center><br></br><br></br>
            
          
            <div >
             <input onChange={searchIncome}  placeholder="Search....."/>
            </div>
            <br></br><br></br>
            </div>

                <div className='col-lg-2 mt-2 mb-1'>
                    <br></br>
                    <br></br><br></br>
                    <br></br><br></br>
                    <div> <Link to="/WorkPlanReport">
                        <button type="button2"
                        class="btn btn-info">Generate Report</button></Link></div>
                </div>
                <br></br>
                <br></br>

               <center> <div className='buttons'>
                <Link to="addwork"><button type="button2" className="btn btn-warning" >Add New Work Plan</button></Link>
                
            </div></center>
            </div>
            
            <table className="table table-hover" style={{ marginTop: "40px" }}><center>
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Cutting Section</th>
                        <th scope="col">Required Time Period</th>
                        <th scope="col">Sawing Section</th>
                        <th scope="col">Required Time Period</th>
                        <th scope="col">Laundering Section</th>
                        <th scope="col">Required Time Period</th>
                        <th scope="col">Folding Section</th>
                        <th scope="col">Required Time Period</th>
                        <th scope="col">Packing Section</th>
                        <th scope="col">Required Time Period</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        Work.filter(e=>



                            e.OrderID.toLowerCase().includes(serQuary) 
                            //||
                            //e.date.toLowerCase().includes(serQuary)
                        )
                        
                        
                        
                        .map((e, i) => (
                            <tr>
                                <td>{e.OrderID}</td>
                                <td>{e.Cut}</td>
                                <td>{e.Cutperiod}</td>
                                <td>{e.Saw}</td>
                                <td>{e.Sawperiod}</td>
                                <td>{e.Laund}</td>
                                <td>{e.Laundperiod}</td>
                                <td>{e.Fold}</td>
                                <td>{e.Foldperiod}</td>
                                <td>{e.Pack}</td>
                                <td>{e.Packperiod}</td>

                                {/*<td className="middle"> <Link to={"updatework/"+e._id}><button className="btn btn-warning" >Update</button></Link></td>*/}
                                <td className="middle"> <Link to={"updatework/"+e._id}><button className="btn btn-primary">Update</button></Link></td>
                                <td >  <button className="btn btn-danger" onClick={() => {deleteData(e)}}>Delete</button></td>

                            </tr>
                        ))
                    }
                </tbody></center>
            </table>
           
        </div>
</div>
    )
}

