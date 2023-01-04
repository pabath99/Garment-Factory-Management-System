const router = require("express").Router();
let MonthlyFinance = require("../model/MonthlyFinance");

router.route("/add").post((req,res)=>{


    const Year = Number(req.body.Year);
    const Month = req.body.Month;
    const TransportCost_LKR = Number(req.body.TransportCost_LKR);
    const StockCost_LKR = Number(req.body.StockCost_LKR);
    const SalaryCost_LKR = Number(req.body.SalaryCost_LKR);
    const OtherCost_LKR = Number(req.body.OtherCost_LKR);
    const TotalCost_LKR = Number(req.body.TotalCost_LKR);
    const OrderPayments_LKR = Number(req.body.OrderPayments_LKR);
    const Profit_LKR = Number(req.body.Profit_LKR);

    const newMonthlyFinance = new MonthlyFinance({

        Year,
        Month,
        TransportCost_LKR,
        StockCost_LKR,
        SalaryCost_LKR,
        OtherCost_LKR,
        TotalCost_LKR,
        OrderPayments_LKR,
        Profit_LKR

    })

    newMonthlyFinance.save().then(()=>{
        res.json("Monthly Finance Added Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/").get((req,res)=>{

    MonthlyFinance.find().then((monthly)=>{
        res.json(monthly)
    }).catch((err)=>{
        console.log(err)
    })
})



router.route("/update/:id").put(async(req, res)=>{

    let monthlyFinanceUpdateID = req.params.id;
    const {Year, Month, TransportCost_LKR, StockCost_LKR, SalaryCost_LKR, OtherCost_LKR, TotalCost_LKR, OrderPayments_LKR, Profit_LKR} = req.body;

    const updateMonthlyFinance = {

        Year,
        Month,
        TransportCost_LKR,
        StockCost_LKR,
        SalaryCost_LKR,
        OtherCost_LKR,
        TotalCost_LKR,
        OrderPayments_LKR,
        Profit_LKR

    }

    const update = await MonthlyFinance.findByIdAndUpdate(monthlyFinanceUpdateID, updateMonthlyFinance)
    .then(()=>{
        res.status(200).send({status: "monthly finance updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})


router.route("/delete/:id").delete(async(req,res)=>{

    let deleteMonthlyFinance = req.params.id;
    
    await MonthlyFinance.findByIdAndDelete(deleteMonthlyFinance)
    .then(()=>{
        res.status(200).send({status: "Monthly finance deleted"});
    }).catch((errr)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete refund"});
    })

})
    




module.exports = router;