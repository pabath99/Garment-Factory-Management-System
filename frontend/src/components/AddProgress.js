import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import JobHeader from './JobHeader';
import JobSideMenu from './JobSIdeMenu';

export default function AddProgress(){

    const navigate=useNavigate();

    const[OrderIDPro,setOrderIDPro] = useState("");
    const[CutPro,setCutPro] = useState("");
    const[SawPro,setSawPro] = useState("");
    const[LaundPro,setLaundPro]=useState("");
    const[FoldPro,setFoldPro]=useState("");
    const[QualityPro,setQualityPro]=useState("");
    const[PackPro,setPackPro]=useState("");
    const[U_DatePro,setU_DatePro]=useState("");
    
    function sendData(e){
        e.preventDefault();

        const newprog={OrderIDPro,CutPro,SawPro,LaundPro,FoldPro,QualityPro,
            PackPro,U_DatePro}

       axios.post("http://localhost:8070/progress/add",newprog).then(()=>{
           alert("Progress Added");
           navigate("/progress");
       }).catch((err)=>{
          alert(err)
       })

    }



    return(
      <div>
        <JobSideMenu/>
        
    <div className="container">
        <form onSubmit={sendData}>
      <br/><br/><br/>
      <center><h1 class ="Fheader">Add New Order Progress</h1></center><br></br><br></br>
      <div className="form-group">
      <label for="OrderIDPro" >Order ID</label>
           <input type="text" class="form-control" id="OrderIDPro" placeholder="Enter Order ID"
           onChange={(e)=>{
            setOrderIDPro(e.target.value);
           }} />
      </div><br/>
      <div className="form-group">
           <label for="CutPro" >Cutting Progress</label>
           <input type="text" class="form-control" id="CutPro" placeholder="Enter Cut Progress"
           onChange={(e)=>{
            setCutPro(e.target.value);
           }} />
      </div><br/>
      <div className="form-group">
           <label for="SawPro" >Sawing Progress</label>
           <input type="text" class="form-control" id="SawPro" placeholder="Enter Saw Progress"
           onChange={(e)=>{
            setSawPro(e.target.value);
           }}/>
      </div><br/>
      <div className="form-group">
           <label for="LaundPro" >Laundering Progress</label>
           <input type="text" class="form-control" id="LaundPro" placeholder="Enter Laundering Progress"
            onChange={(e)=>{
             setLaundPro(e.target.value);
            }}/>
      </div><br/>
      <div className="form-group">
           <label for="FoldPro" >Folding Progress</label>
           <input type="text" class="form-control" id="FoldPro" placeholder="Enter Folding Progress"
            onChange={(e)=>{
                setFoldPro(e.target.value);
            }}/>
      </div><br/>
      <div className="form-group">
           <label for="QualityPro" >Quality Controlling Progress</label>
           <input type="text" class="form-control" id="QualityPro" placeholder="Enter Quality Controlling Progress"
        onChange={(e)=>{
            setQualityPro(e.target.value);
        }} />
      </div><br/>
      <div className="form-group">
           <label for="PackPro" >Packing Progress</label>
           <input type="text" class="form-control" id="PackPro" placeholder="Enter Packing Progress"
         onChange={(e)=>{
            setPackPro(e.target.value);
        }}  />
      </div><br/>
      <div className="form-group">
           <label for="U_DatePro" >Updating Date</label>
           <input type="date" class="form-control" id="U_DatePro" placeholder="Enter Updating Date"
         onChange={(e)=>{
            setU_DatePro(e.target.value);
        }}  />
      </div><br/>
      
      <div class="col-auto">
       <center><button type="submit" class="btn btn-primary">Submit</button></center>
      </div></form><br/>
    </div>
</div>


    )
 }