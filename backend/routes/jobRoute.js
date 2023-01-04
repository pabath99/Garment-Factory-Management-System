const router = require('express').Router();
let JobModel = require('../model/JobModel');

//Create 
//http://localhost:8070/Job/add
router.route("/add").post((req,res)=>{
  
  const OrderID = req.body.OrderID;
  const Cut= req.body.Cut;
  const Cutperiod=req.body.Cutperiod;
  const Saw=req.body.Saw;
  const Sawperiod=req.body.Sawperiod;
  const Laund=req.body.Laund;
  const Laundperiod=req.body.Laundperiod;
  const Fold=req.body.Fold;
  const Foldperiod=req.body.Foldperiod;
  const Pack=req.body.Pack;
  const Packperiod=req.body.Packperiod;

  //const age=Number(req.body.age);

  const newJob= new JobModel({
     OrderID,
     Cut,
     Cutperiod,
     Saw,
     Sawperiod,
     Laund,
     Laundperiod, 
     Fold,
     Foldperiod,
     Pack,
     Packperiod,
     
  })

   newJob.save().then(()=>{
      res.json("Job Added")
   }).catch(()=>{
        console.log(err);
   })

})

// read

router.route("/view").get((req,res)=>{
    
  JobModel.find().then((job)=>{
    res.json(job)
  }).catch((err)=>{
    console.log(err)
  })

})

// http//loclhost:5000/Job/update/

//Update
router.route("/update/:jobid").put(async (req,res)=>{
  let jobId=req.params.jobid;
  const {OrderID,Cut,Cutperiod,Saw,Sawperiod,Laund,Laundperiod,Fold,Foldperiod,
    Pack,Packperiod}=req.body;

    const updatejob={
      OrderID,
      Cut,
      Cutperiod,
      Saw,
      Sawperiod,
      Laund,
      Laundperiod,
      Fold,
      Foldperiod,
      Pack,
      Packperiod
    }

    const update = await JobModel.findByIdAndUpdate(jobId,updatejob)
    .then(()=>{
      res.status(200).send({status:"Job updated"})
    }).catch((err)=>{
      console.log(err);
      res.status(500).send({status:"Error with updating data",error:err.message});
    })  
})

//Delete

router.route("/delete/:id").delete(async(req,res)=>{
   let jobId= req.params.id;

   await JobModel.findByIdAndDelete(jobId)
   .then(()=>{
    res.status(200).send({status:"Job deleted"});
   }).catch((error)=>{
    console.log(err.message);
    res.status(500).send({status: "Error with delete job",error:err.message});
   })


})


//fetch

router.route("/get/:id").get(async(req,res)=>{
  let jobId=req.params.id;
  const work = await JobModel.findById(jobId)
  .then((JobModel) => {
    //res.status(200).send({status:"Job fetched" })
    res.json(JobModel)
  }).catch(()=>{
    console.log(err.message);
    res.status(500).send({status:"Error with get job",error:err.message});
  })
})

module.exports=router;
