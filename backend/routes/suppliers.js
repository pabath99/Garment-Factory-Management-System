const router = require("express").Router();
let Supplier = require("../models/supplier");


//add product
router.route("/add").post((req,res) =>{
    //formal method
    const name = req.body.name;
    const phone = Number(req.body.phone);
    const productname = (req.body.productname);
    const category = (req.body.category);
    const price = Number(req.body.price);

    const newProduct = new Supplier({

        productname,
        name,
        phone,
        price,
        category
    })

    //validation
    newProduct.save().then(()=>{
        res.json("Supplier Added to DB")
    }).catch((err)=>{
        console.log(err);
    })
})

//view all products
router.route("/view").get(function(req,res) {
    Supplier.find().then((supplier)=>{
        res.json(supplier)
     }).catch((err)=>{
        console.log(err);
    })

})


//update product details
router.route("/update/:id").put(async (req,res) =>{
    let supplierID = req.params.id;
    //destructure
    const{ productname,
        name,
        phone,
        price,
        category} = req.body;

    const updateProduct = {
        productname,
        name,
        phone,
        price,
        category
    }
    const update = await Supplier.findByIdAndUpdate(supplierID, updateProduct)
    //validation
    .then(() =>{
    res.status(200).send({status:" details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating supplier"});
    })
})

//delete product from DB
router.route("/delete/:id").delete(async (req,res) =>{
    let supplierID = req.params.id;

    await Supplier.findByIdAndDelete(supplierID)
    //validation
    .then(() =>{
        res.status(200).send({status:"Supplier deleted from DB"});
        }).catch((err)=>{
            console.log(err.messprice);
            res.status(500).send({status:"error deleting from DB"});
        })
})

router.route("/get/:id").get(async (req,res) =>{
    let supplierID = req.params.id;

    await Supplier.findById(supplierID)
    //validation
    .then(() =>{
        res.status(200).send({status:"Supplier fetched"});
    })
})

module.exports = router;