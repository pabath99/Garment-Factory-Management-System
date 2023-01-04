import React,{useState} from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import JobHeader from './JobHeader';
import JobSideMenu from './JobSIdeMenu';


export default function AddWorkPlan(){
  
   const navigate=useNavigate();

    const[OrderID,setOrderID] = useState("");
    const[Cut,setCut] = useState("");
    const[Cutperiod,setCutperiod] = useState("");
    const[Saw,setSaw]=useState("");
    const[Sawperiod,setSawperiod]=useState("");
    const[Laund,setLaund]=useState("");
    const[Laundperiod,setLaundperiod]=useState("");
    const[Fold,setFold]=useState("");
    const[Foldperiod,setFoldperiod]=useState("");
    const[Pack,setPack]=useState("");
    const[Packperiod,setPackperiod]=useState("");
    
    function sendData(e){
        e.preventDefault();

        const newJob={
         OrderID,Cut,Cutperiod,Saw,Sawperiod,Laund,Laundperiod,Fold,Foldperiod,
         Pack,Packperiod
        }

       axios.post("http://localhost:8070/job/add",newJob).then(()=>{
           alert("Job Added");
           navigate("/workplan");
       }).catch((err)=>{
          alert(err)
       })

    }



    return(
      <div>
      <JobSideMenu/>
    <div className="container">
        <form onSubmit={sendData}>
      <br/><br/><br/><br/><br/>
      <center><h1 class ="Fheader">Add a new Workplan</h1></center><br></br><br></br>
      <div className="form-group">
      <label for="OrderID" >Order ID</label>
           <input type="text" class="form-control" id="OrderID" placeholder="Enter Order ID"
           onChange={(e)=>{
            setOrderID(e.target.value);
           }} />
      </div><br/>
      <div className="form-group">
           <label for="Cut" >Cutting Section Employees</label>
           <input type="text" class="form-control" id="Cut" placeholder="Enter Cut Details"
           onChange={(e)=>{
            setCut(e.target.value);
           }} />
      </div><br/>
      <div className="form-group">
           <label for="Cutperiod" >Cutting Period</label>
           <input type="text" class="form-control" id="Cutperiod" placeholder="Enter Cutting Period"
           onChange={(e)=>{
            setCutperiod(e.target.value);
           }}/>
      </div><br/>
      <div className="form-group">
           <label for="Saw" >Sawing Section Employees</label>
           <input type="text" class="form-control" id="Saw" placeholder="Enter Saw Details"
            onChange={(e)=>{
             setSaw(e.target.value);
            }}/>
      </div><br/>
      <div className="form-group">
           <label for="Sawperiod" >Sawing Period</label>
           <input type="text" class="form-control" id="Sawperiod" placeholder="Enter Sawing Period"
            onChange={(e)=>{
                setSawperiod(e.target.value);
            }}/>
      </div><br/>
      <div className="form-group">
           <label for="Laund" >Laundering Section Employees</label>
           <input type="text" class="form-control" id="Laund" placeholder="Enter Laundering Details"
        onChange={(e)=>{
            setLaund(e.target.value);
        }} />
      </div><br/>
      <div className="form-group">
           <label for="Laundperiod" >Laundering Period</label>
           <input type="text" class="form-control" id="Laundperiod" placeholder="Enter Laundering Period"
         onChange={(e)=>{
            setLaundperiod(e.target.value);
        }}  />
      </div><br/>
      <div className="form-group">
           <label for="Fold" >Folding Section Employees</label>
           <input type="text" class="form-control" id="Fold" placeholder="Enter Folding Details"
         onChange={(e)=>{
            setFold(e.target.value);
        }}  />
      </div><br/>
      <div className="form-group">
           <label for="Foldperiod" >Folding Period</label>
           <input type="text" class="form-control" id="Foldperiod" placeholder="Enter Folding Period"
         onChange={(e)=>{
            setFoldperiod(e.target.value);
        }}  />
      </div><br/>
      <div className="form-group">
           <label for="Pack" >Packing Section Employees</label>
           <input type="text" class="form-control" id="Pack" placeholder="Enter Packing Details"
         onChange={(e)=>{
            setPack(e.target.value);
        }}  />
      </div><br/>
      <div className="form-group">
           <label for="Packperiod" >Packing Period</label>
           <input type="text" class="form-control" id="Packperiod" placeholder="Enter Packing Period"
         onChange={(e)=>{
            setPackperiod(e.target.value);
        }}  />
      </div><br/>
      <div class="col-auto">
      <center><button type="submit" class="btn btn-primary">Submit</button></center>
      </div></form><br/>
    </div>

</div>

    )


}