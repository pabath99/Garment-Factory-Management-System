import React,{useState,useEffect} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import JobHeader from './JobHeader';
import JobSideMenu from './JobSIdeMenu';

export default function Progress() {

    const [Prog, setProg] = useState([]);
    useEffect(() => {
        function getProg() {
            axios.get("http://localhost:8070/progress/view").then((res) =>{
                console.log(res.data);
                setProg(res.data);

            }).catch((err) => {
                alert(err.message);
            })
        }
        getProg();
    }, [])
    
    const deleteData = (e) =>{

        var result = window.confirm("Are you sure?");
    
      if(result == true){
    
        axios.delete(`http://localhost:8070/progress/delete/${e._id}`).then((res)=>{
            alert("Progress Deleted Successfuly");
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


        <div className='container'>
            <div className='row'>
                <div className='col-lg-9 mt-2 mb-2'><br></br><br></br><br></br>
                <center><h1 class ="Fheader">Order Progress</h1></center><br></br><br></br>
                </div>

            <div>
             <input onChange={searchIncome}  placeholder="Search....."/>
            </div>

               <br></br><br></br>
               <center> <div className='buttons'>
                <Link to="addprog"><button type="button2" className="btn btn-warning" >Add New</button></Link>
                
            </div></center>
            </div>

            <table className="table table-hover" style={{ marginTop: '40px' }}>
                <thead>
                    <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Cutting</th>
                        <th scope="col">Sawing </th>
                        <th scope="col">Laundering </th>
                        <th scope="col">Folding </th>
                        <th scope="col">Quality Controlling</th>
                        <th scope="col">Packing</th>
                        <th scope="col">Update Date</th>

                    </tr>
                </thead>

                <tbody>
                    {
                        Prog.filter(e=>



                            e.OrderIDPro.toLowerCase().includes(serQuary)|| 
                            e.U_DatePro.toLowerCase().includes(serQuary)
                        )
                        .map((e, i) => (
                            <tr>
                                <td>{e.OrderIDPro}</td>
                                <td>{e.CutPro}</td>
                                <td>{e.SawPro}</td>
                                <td>{e.LaundPro}</td>
                                <td>{e.FoldPro}</td>
                                <td>{e.QualityPro}</td>
                                <td>{e.PackPro}</td>
                                <td>{e.U_DatePro}</td>

                                <td className="middle"> <Link to={"updateprog/"+e._id}><button className="btn btn-primary" >Update</button></Link></td>

                               <td >  <button className="btn btn-danger" onClick={() => {deleteData(e)}}>Delete</button></td> 

                                {/*<td className="middle"> <Link to="updateprog"><button className="up_pur" >Update</button></Link>

                                            <button className="de_pur" onClick={() => {deleteData(e)}}>Delete</button>

                        </td>*/}

                            </tr>
                        ))
                    }
                </tbody>
            </table>
           
        </div>
</div>
    )
}

