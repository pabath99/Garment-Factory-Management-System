const router = require("express").Router();
const feedbacks = require("../model/Feedback");
let feedback = require("../model/Feedback");

router.route("/add").post((req,res)=>{
   
    const CustomerID = req.body.CustomerID;
    const CustomerName = req.body.CustomerName;
    const OrderType = req.body.OrderType;
    const Feedback = req.body.Feedback;
    const Suggestions =req.body.Suggestions;
    

    const newfeedback = new feedback({
        CustomerID,
        CustomerName,
        OrderType,
        Feedback,
        Suggestions,
       
    })

    newfeedback.save().then(()=>{
        res.json("Customer Feedback Added")
    }).catch((err)=>{
        console.log(err);
    })
     

})

router.route("/view").get((req,res)=>{

    feedback.find().then((feedback)=>{
        res.json(feedback)
    }).catch((err)=>{
        console.log(err)
    }) 

})

router.route("/update/:customerid").put(async (req, res) => {
    let fcusID = req.params.customerid;
    const {CustomerID, CustomerName, OrderType, Feedback, Suggestions} = req.body;

    const updateFeedback = {
        CustomerID, 
        CustomerName,
        OrderType,
        Feedback,
        Suggestions,
    }
    const update = await feedback.findByIdAndUpdate(fcusID, updateFeedback)
    .then(() => {
      res.status(200).send({status: "user updated"});
    }).catch((err) => {
       console.log(err.message);
       res.status(500).send({status: "Error with updating data", error: err.message});
    })

})

router.route("/delete/:customerid").delete(async (req,res) => {
    let fcusID = req.params.customerid;
    
    await feedback.findByIdAndDelete(fcusID)
    .then(() => {
        res.status(200).send({status: "user deleted"});
      }).catch((err) => {
         console.log(err.message);
         res.status(500).send({status: "Error with deleting data", error: err.message});
      }) 
})

router.route("/get/:customerid").get(async (req,res) => {
    let fcusID = req.params.customerid; 
    const user = await feedback.findById(fcusID)
    .then(() => {
    res.status(200).send({status: "Customer feedback fetched", feedback: feedback})
    }).catch(() => {
       console.log(err.message);
       res.status(500).send({status: "Error with get user", error: err.message});
    })
   })
   


module.exports = router;
    
    