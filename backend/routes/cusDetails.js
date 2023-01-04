const router = require("express").Router();
const CusDetails = require("../model/customerdetails");
let Customer = require("../model/customerdetails");

//backend add
router.route("/add").post((req,res)=>{
   
    const CustomerID = req.body.CustomerID;
    const ShopName = req.body.ShopName;
    const ShopNumber = req.body.ShopNumber;
    const ManagerName = req.body.ManagerName;
    const ManagerNumber =req.body.ManagerNumber;
    const Address = req.body.Address;
    const Email = req.body.Email;

    const newCustomer = new Customer({
        CustomerID,
        ShopName,
        ShopNumber,
        ManagerName,
        ManagerNumber,
        Address,
        Email
    }) 
//add customer details
    newCustomer.save().then(()=>{
        res.json("Customer Added")
    }).catch((err)=>{
        console.log(err);
    })

})
//view customer details
router.route("/view").get((req,res)=>{
    Customer.find().then((Customer)=>{
        res.json(Customer)   
    }).catch((err)=>{
        console.log(err)
    })
})
//update customer details
router.route("/update/:customerid").put(async (req, res) => {
    let cusID = req.params.customerid;
    const {CustomerID, ShopName, ShopNumber, ManagerName, ManagerNumber, Address, Email } = req.body;

    const updateCustomer = {
        CustomerID,
        ShopName,
        ShopNumber,
        ManagerName,
        ManagerNumber,
        Address,
        Email  
    }

    const update = await CusDetails.findByIdAndUpdate(cusID, updateCustomer)
    .then(() => {
        res.status(200).send({status: "Customer Upadated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})


//Delete customer details
router.route("/delete/:customerid").delete(async (req,res) => {
   let cusID = req.params.customerid;

   await CusDetails.findByIdAndDelete(cusID)
   .then(() => {
    res.status(200).send({status: "Customer Deleted"});
   }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status: "Error with delete user"/*, error: err.message*/});
   })
})
//backend fetch
router.route("/get/:id").get(async (req,res) => {
 let cusID = req.params.id; 
 const user = await CusDetails.findById(cusID)
 .then((CusDetails) => {
   res.json(CusDetails)
 }).catch(() => {
    console.log(err.message);
    res.status(500).send({status: "Error with get customer", error: err.message});
 })
})


module.exports = router;