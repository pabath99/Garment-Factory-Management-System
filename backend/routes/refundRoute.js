const router = require("express").Router();
let Refund = require("../model/Refund");

router.route("/add").post((req,res)=>{

    const RefundID = req.body.RefundID;
    const CustomerID = req.body.CustomerID;
    const OrderID = req.body.OrderID;
    const RequestedDate = Date(req.body.RequestedDate);
    const Amount_LKR = Number(req.body.Amount_LKR);
    const Reason = req.body.Reason;
    const PaymentSlip = req.body.PaymentSlip;
    const Status = req.body.Status;

    const newRefund = new Refund({

        RefundID,
        CustomerID,
        OrderID,
        RequestedDate,
        Amount_LKR,
        Reason,
        PaymentSlip,
        Status

    })

    newRefund.save().then(()=>{
        res.json("Refund Added Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/").get((req,res)=>{

    Refund.find().exec((err, refund) =>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingRefunds:refund
        });
    });
        
    });


    router.get("/post/:id",(req,res)=>{

        let postID = req.params.id;

        Refund.findById(postID, (err,refund) =>{
            if(err){
                return res.status(400).json({success:false, err});
            }
            return res.status(200).json({
                success:true,
                refund
            });
        });
    });         






router.put("/update/:id",(req,res)=>{
    Refund.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err, refund)=>{
            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({
                success:"Refund updated successfully"
            });
        });
});


router.route("/delete/:id").delete(async(req,res)=>{

    let refundDeleteID = req.params.id;
    
    await Refund.findByIdAndDelete(refundDeleteID)
    .then(()=>{
        res.status(200).send({status: "Refund deleted"});
    }).catch((errr)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete refund"});
    })

})
    




module.exports = router;