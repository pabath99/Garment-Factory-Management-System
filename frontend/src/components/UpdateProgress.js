import React,{useState,useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import JobHeader from './JobHeader';
import JobSideMenu from './JobSIdeMenu';

export default function UpdateProgress(){

    const navigate=useNavigate();

    const[OrderIDPro,setOrderIDPro] = useState("");
    const[CutPro,setCutPro] = useState("");
    const[SawPro,setSawPro] = useState("");
    const[LaundPro,setLaundPro]=useState("");
    const[FoldPro,setFoldPro]=useState("");
    const[QualityPro,setQualityPro]=useState("");
    const[PackPro,setPackPro]=useState("");
    const[U_DatePro,setU_DatePro]=useState("");

    const {id} = useParams();
    
    const getprog = () => {
      axios.get("http://localhost:8070/progress/get/"+id )
      .then((res)=>{

        const updateProg={
            OrderIDPro:res.data.OrderIDPro,
            CutPro:res.data.CutPro,
            SawPro:res.data.SawPro,
            LaundPro:res.data.LaundPro,
            FoldPro:res.data.FoldPro,
            QualityPro:res.data.QualityPro,
            PackPro:res.data.PackPro,
            U_DatePro:res.data.U_DatePro
         
        }
     
        //console.log(res.data);
        setOrderIDPro(updateProg.OrderIDPro);
        setCutPro(updateProg.CutPro);
        setSawPro(updateProg.SawPro);
        setLaundPro(updateProg.LaundPro);
        setFoldPro(updateProg.FoldPro);
        setQualityPro(updateProg.QualityPro);
        setPackPro(updateProg.PackPro);
        setU_DatePro(updateProg.U_DatePro);
        
      }).catch((err)=>{
        alert(err.message);
     })

  }
    
  useEffect(() => getprog(), []);


    return(
      <div>
        <JobSideMenu/>
        
        <div className="container">
          <br></br><br></br><br></br><br></br>
          <center><h1 class ="Fheader">Update Order Progress</h1></center>
          <form onSubmit={(e)=>{
            e.preventDefault();

            const updateProg={
                OrderIDPro,
                CutPro,
                SawPro,
                LaundPro,
                FoldPro,
                QualityPro,
                PackPro,
                U_DatePro
            }
    
           axios.put("http://localhost:8070/progress/update/"+id,updateProg).then(()=>{
               alert("Progress Updated")
               navigate("/progress");
           }).catch((err)=>{
              alert(err)
           })
    
        }}>
        <br/><br/><br/>

          <div className="form-group">
          <label for="OrderIDPro" >Order ID</label>
               <input type="text" value={OrderIDPro} class="form-control" id="OrderIDPro" placeholder="Enter Order ID"
               onChange={(e)=>{
                setOrderIDPro(e.target.value);
               }} />
          </div><br/>
          <div className="form-group">
               <label for="CutPro" >Cutting Progress</label>
               <input type="text" value={CutPro} class="form-control" id="CutPro" placeholder="Enter Cut Progress"
               onChange={(e)=>{
                setCutPro(e.target.value);
               }} />
          </div><br/>
          <div className="form-group">
               <label for="SawPro" >Sawing Progress</label>
               <input type="text" value={SawPro} class="form-control" id="SawPro" placeholder="Enter Saw Progress"
               onChange={(e)=>{
                setSawPro(e.target.value);
               }}/>
          </div><br/>
          <div className="form-group">
               <label for="LaundPro" >Laundering Progress</label>
               <input type="text" value={LaundPro} class="form-control" id="LaundPro" placeholder="Enter Laundering Progress"
                onChange={(e)=>{
                 setLaundPro(e.target.value);
                }}/>
          </div><br/>
          <div className="form-group">
               <label for="FoldPro" >Folding Progress</label>
               <input type="text" value={FoldPro} class="form-control" id="FoldPro" placeholder="Enter Folding Progress"
                onChange={(e)=>{
                    setFoldPro(e.target.value);
                }}/>
          </div><br/>
          <div className="form-group">
               <label for="QualityPro" >Quality Controlling Progress</label>
               <input type="text" value={QualityPro} class="form-control" id="QualityPro" placeholder="Enter Quality Controlling Progress"
            onChange={(e)=>{
                setQualityPro(e.target.value);
            }} />
          </div><br/>
          <div className="form-group">
               <label for="PackPro" >Packing Progress</label>
               <input type="text" value={PackPro} class="form-control" id="PackPro" placeholder="Enter Packing Progress"
             onChange={(e)=>{
                setPackPro(e.target.value);
            }}  />
          </div><br/>
          <div className="form-group">
               <label for="U_DatePro" >Updating Date</label>
               <input type="date" value={U_DatePro} class="form-control" id="U_DatePro" placeholder="Enter Updating Date"
             onChange={(e)=>{
                setU_DatePro(e.target.value);
            }}  />
          </div><br/>
          <div class="col-auto">
          <center><button type="submit" class="btn btn-primary">Update</button></center>
      </div></form><br/>
    </div>

</div>

    )


}