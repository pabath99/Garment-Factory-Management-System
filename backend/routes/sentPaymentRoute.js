const router = require("express").Router();
let SentPayment = require("../model/SentPayment");

router.route("/add").post((req,res)=>{


    const EmployeeID = req.body.EmployeeID;
    const Year = Number(req.body.Year);
    const Month = req.body.Month;
    const FinalSalary_LKR = Number(req.body.FinalSalary_LKR);
    const PaymentSlip = req.body.PaymentSlip;
    const SalaryStatus = req.body.SalaryStatus;

    const newSentPayment = new SentPayment({

        EmployeeID,
        Year,
        Month,
        FinalSalary_LKR,
        PaymentSlip,
        SalaryStatus

    })

    newSentPayment.save().then(()=>{
        res.json("Sent Payment Added Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/").get((req,res)=>{

    SentPayment.find().then((sent)=>{
        res.json(sent)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async(req, res)=>{

    let sentUpdateID = req.params.id;
    const {EmployeeID, Year, Month, FinalSalary_LKR, PaymentSlip, SalaryStatus} = req.body;

    const updateSent = {

        EmployeeID,
        Year,
        Month,
        FinalSalary_LKR,
        PaymentSlip,
        SalaryStatus

    }

    const update = await SentPayment.findByIdAndUpdate(sentUpdateID, updateSent)
    .then(()=>{
        res.status(200).send({status: "Sent Payment updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})


router.route("/delete/:id").delete(async(req,res)=>{

    let deleteSent = req.params.id;
    
    await SentPayment.findByIdAndDelete(deleteSent)
    .then(()=>{
        res.status(200).send({status: "Sent Payment deleted"});
    }).catch((errr)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete refund"});
    })

})
    




module.exports = router;