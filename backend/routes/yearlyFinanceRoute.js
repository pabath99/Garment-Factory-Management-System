const router = require("express").Router();
let YearlyFinance = require("../model/YearlyFinance");

router.route("/add").post((req,res)=>{


    const Year = Number(req.body.Year);
    const Profit_LKR = Number(req.body.Profit_LKR);
    const Expenditure_LKR = Number(req.body.Expenditure_LKR);
    const Description = req.body.Description;
    const Status = req.body.Status;

    const newYearlyFinance = new YearlyFinance({

        Year,
        Profit_LKR,
        Expenditure_LKR,
        Description,
        Status,

    })

    newYearlyFinance.save().then(()=>{
        res.json("Yearly Finance Added Successfully!")
    }).catch((err)=>{
        console.log(err);
    })
})



router.route("/").get((req,res)=>{

    YearlyFinance.find().then((yearly)=>{
        res.json(yearly)
    }).catch((err)=>{
        console.log(err)
    })
})


router.route('/post/:id').get((req,res)=>{
    YearlyFinance.findById(req.params.id,(error,data)=>{
        if(error){
            return next(error)
        } else {
            res.json(data)
        }
    })
})


router.route("/update/:id").put(async(req, res)=>{

    let yearlyFinanceUpdateID = req.params.id;
    const {Year, Profit_LKR, Expenditure_LKR, Description, Status} = req.body;

    const updateYearlyFinance = {

        Year,
        Profit_LKR,
        Expenditure_LKR,
        Description,
        Status,

    }

    const update = await YearlyFinance.findByIdAndUpdate(yearlyFinanceUpdateID, updateYearlyFinance)
    .then(()=>{
        res.status(200).send({status: "Yearly finance updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })

})


router.route("/delete/:id").delete(async(req,res)=>{

    let deleteYearlyFinance = req.params.id;
    
    await YearlyFinance.findByIdAndDelete(deleteYearlyFinance)
    .then(()=>{
        res.status(200).send({status: "Yearly finance deleted"});
    }).catch((errr)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete refund"});
    })

})
    




module.exports = router;