const router = require("express").Router();
let ReceivedPayment = require("../model/ReceivedPayment");

router.route("/add").post((req,res)=>{


    const CustomerID = req.body.CustomerID;
    const OrderID = req.body.OrderID;
    const ReceivedDate = Date(req.body.ReceivedDate);
    const PaymentType = req.body.PaymentType;
    const Amount_LKR = Number(req.body.Amount_LKR);
    const PaymentSlip = req.body.PaymentSlip;
    const OrderStatus = req.body.OrderStatus;

    const newReceivedPayment = new ReceivedPayment({

        CustomerID,
        OrderID,
        ReceivedDate,
        PaymentType,
        Amount_LKR,
        PaymentSlip,
        OrderStatus

    })

    newReceivedPayment.save().then(()=>{
        res.json("Received Payment Added Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/").get((req,res)=>{

    ReceivedPayment.find().then((received)=>{
        res.json(received)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async(req, res)=>{

    let receivedUpdateID = req.params.id;
    const {CustomerID, OrderID, ReceivedDate, PaymentType, Amount_LKR, PaymentSlip, OrderStatus} = req.body;

    const updateReceived = {

        CustomerID,
        OrderID,
        ReceivedDate,
        PaymentType,
        Amount_LKR,
        PaymentSlip,
        OrderStatus

    }

    const update = await ReceivedPayment.findByIdAndUpdate(receivedUpdateID, updateReceived)
    .then(()=>{
        res.status(200).send({status: "Received Payment updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})


router.route("/delete/:id").delete(async(req,res)=>{

    let deleteReceived = req.params.id;
    
    await ReceivedPayment.findByIdAndDelete(deleteReceived)
    .then(()=>{
        res.status(200).send({status: "Received Payment deleted"});
    }).catch((errr)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete refund"});
    })

})
    




module.exports = router;