const router = require('express').Router();
let ProgressModel= require('../model/ProgressModel');

//insert
router.route("/add").post((req,res)=>{

    const OrderIDPro = req.body.OrderIDPro;
    const CutPro= req.body.CutPro;
    const SawPro=req.body.SawPro;
    const LaundPro=req.body.LaundPro;
    const FoldPro=req.body.FoldPro;
    const QualityPro=req.body.QualityPro;
    const PackPro=req.body.PackPro;
    const U_DatePro=req.body.U_DatePro;

    const newprog= new ProgressModel({
       OrderIDPro,
       CutPro,
       SawPro,
       LaundPro,
       FoldPro,
       QualityPro,
       PackPro,
       U_DatePro
    })
  
     newprog.save().then(()=>{
        res.json("Progress Added")
     }).catch(()=>{
          console.log(err);
     })
  
  })

  //read
  router.route("/view").get((req,res)=>{
  
    ProgressModel.find().then((prog)=>{
        res.json(prog)
    }).catch((err)=>{
      console.log(err)
    })

})

//Update
router.route("/update/:proId").put(async(req,res)=>{
    let proId=req.params.proId;
    const {OrderIDPro,CutPro,SawPro,LaundPro,FoldPro,QualityPro,
      PackPro,U_DatePro}=req.body;
  
      const updatepro={
        OrderIDPro,
        CutPro,
        SawPro,
        LaundPro,
        FoldPro,
        QualityPro,
        PackPro,
        U_DatePro
      }
  
    const update = await ProgressModel.findByIdAndUpdate(proId,updatepro)
      .then(()=>{
        res.status(200).send({status:"Progress updated"})
      }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data",error:err.message});
      })  
  })
  
  //Delete
  
  router.route("/delete/:id").delete(async(req,res)=>{
     let proId= req.params.id;
  
     await ProgressModel.findByIdAndDelete(proId)
     .then(()=>{
      res.status(200).send({status:"Progress deleted"});
     }).catch((error)=>{
      console.log(err.message);
      res.status(500).send({status: "Error with delete progress",error:err.message});
     })
  
  
  })
  
  
  //fetch

    router.route("/get/:id").get(async(req,res)=>{
    let proId =req.params.id;
    const prog = await ProgressModel.findById(proId)
    .then((ProgressModel)=>{
      res.json(ProgressModel)
      //res.status(200).send({status:"Progress fetched"})
    }).catch(()=>{
      console.log(err.message);
      res.status(500).send({status:"Error with get progress",error:err.message});
    })
  })
  
  module.exports=router;
  