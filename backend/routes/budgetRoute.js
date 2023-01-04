const router = require("express").Router();
let Budget = require("../model/Budget");

router.route("/add").post((req,res)=>{


    const Year = Number(req.body.Year);
    const Month = Number(req.body.Month);
    const TransportBudget_LKR = Number(req.body.TransportBudget_LKR);
    const StockBudget_LKR = Number(req.body.StockBudget_LKR);
    const SalaryBudget_LKR= Number(req.body.SalaryBudget_LKR);
    const OtherCostsBudget_LKR = Number(req.body.OtherCostsBudget_LKR);
    const TotalBudget_LKR = Number(req.body.TotalBudget_LKR);

    const newBudget = new Budget({

        Year,
        Month,
        TransportBudget_LKR,
        StockBudget_LKR,
        SalaryBudget_LKR,
        OtherCostsBudget_LKR,
        TotalBudget_LKR

    })

    newBudget.save().then(()=>{
        res.json("Budget Added Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/").get((req,res)=>{

    Budget.find().then((budget)=>{
        res.json(budget)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route('/post/:id').get((req,res)=>{
    Budget.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route("/update/:id").put(async(req, res)=>{

    let budgetUpdateID = req.params.id;
    const {Year, Month, TransportBudget_LKR, StockBudget_LKR, SalaryBudget_LKR, OtherCostsBudget_LKR, TotalBudget_LKR} = req.body;

    const updateBudget = {

        Year,
        Month,
        TransportBudget_LKR,
        StockBudget_LKR,
        SalaryBudget_LKR,
        OtherCostsBudget_LKR,
        TotalBudget_LKR

    }

    const update = await Budget.findByIdAndUpdate(budgetUpdateID, updateBudget)
    .then(()=>{
        res.status(200).send({status: "Budget updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})


router.route("/delete/:id").delete(async(req,res)=>{

    let deleteBudget = req.params.id;
    
    await Budget.findByIdAndDelete(deleteBudget)
    .then(()=>{
        res.status(200).send({status: "Budget deleted"});
    }).catch((errr)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete refund"});
    })

})
    




module.exports = router;