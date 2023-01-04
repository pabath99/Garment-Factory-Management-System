const router = require("express").Router();
const nonshopcustomer = require("../model/NonShopCustomerdetails");
let nonshopCustomer = require("../model/NonShopCustomerdetails");

router.route("/add").post((req,res)=>{
   
    const NonShopCustomerID = req.body.NonShopCustomerID;
    const OrganizationName = req.body.OrganizationName;
    const OwnerName = req.body.OwnerName;
    const OwnerNumber = req.body.OwnerNumber;
    const Address = req.body.Address;
    const Email = req.body.Email;

    const newnonshopCustomer = new nonshopCustomer({
        NonShopCustomerID,
        OrganizationName,
        OwnerName,
	    OwnerNumber,
        Address,
        Email
    }) 

    newnonshopCustomer.save().then(()=>{
        res.json("Non Shop Customer Added")
    }).catch((err)=>{
        console.log(err);
    })

})

router.route("/view").get((req,res)=>{
    nonshopCustomer.find().then((nonshopCustomer)=>{
        res.json(nonshopCustomer)   
    }).catch((err)=>{
        console.log(err)
    })
})
//Update nonshop customer details
router.route("/update/:nonshopcustomerid").put(async (req, res) => {
    let nscusID = req.params.nonshopcustomerid;
    const {NonShopCustomerID, OrganizationName, OwnerName, OwnerNumber, Address, Email } = req.body;

    const updatenonshopCustomer = {
        NonShopCustomerID,
        OrganizationName,
        OwnerName,
        OwnerNumber,
        Address,
        Email  
    }

    const update = await nonshopCustomer.findByIdAndUpdate(nscusID, updatenonshopCustomer)
    .then(() => {
        res.status(200).send({status: "Non shop Customer Upadated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    })
})


//Delete customer details
router.route("/delete/:nonshopcustomerid").delete(async (req,res) => {
   let nscusID = req.params.nonshopcustomerid;

   await nonshopCustomer.findByIdAndDelete(nscusID)
   .then(() => {
    res.status(200).send({status: "Non shop Customer Deleted"});
   }).catch((err)=>{
    console.log(err.message);
    res.status(500).send({status: "Error with delete user"/*, error: err.message*/});
   })
})

router.route("/get/:nonshopcustomerid").get(async (req,res) => {
 let cusID = req.params.nonshopcustomerid; 
 const user = await nonshopCustomer.findById(cusID)
 .then(() => {
    res.status(200).send({status: "Non shop Customer fetched", nonshopCustomer: nonshopCustomer})
 }).catch(() => {
    console.log(err.message);
    res.status(500).send({status: "Error with get non shop customer", error: err.message});
 })
})


module.exports = router;