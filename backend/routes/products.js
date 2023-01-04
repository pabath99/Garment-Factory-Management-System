const router = require("express").Router();
let Product = require("../models/Product");


//add product
router.route("/add").post((req,res) =>{
    //formal method
    const productid = (req.body.productid);
    const name = req.body.name;
    const category = (req.body.category);
    const price = Number(req.body.price);
    const quantity = Number(req.body.quantity);
    const date = req.body.date;

    const newProduct = new Product({

        productid,
        name,
        category,
        price,
        quantity,
        date
    })

    //validation
    newProduct.save().then(()=>{
        res.json("Product Added to DB")
    }).catch((err)=>{
        console.log(err);
    })
})

//view all products
router.route("/view").get(function(req,res) {
     Product.find().then((products)=>{
        res.json(products)
     }).catch((err)=>{
        console.log(err);
    })

})


//update product details
router.route("/update/:id").put(async (req,res) =>{
    let productID = req.params.id;
    //destructure
    const{productid, name,category,price,quantity,date} = req.body;

    const updateProduct = {
        productid,
        name,
        category,
        price,
        quantity,
        date
    }
    const update = await Product.findByIdAndUpdate(productID, updateProduct)
    //validation
    .then(() =>{
    res.status(200).send({status:"Product details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating profile"});
    })
})

//delete product from DB
router.route("/delete/:id").delete(async (req,res) =>{
    let productID = req.params.id;

    await Product.findByIdAndDelete(productID)
    //validation
    .then(() =>{
        res.status(200).send({status:"Product deleted from DB"});
        }).catch((err)=>{
            console.log(err.messprice);
            res.status(500).send({status:"error deleting from DB"});
        })
})

router.route("/get/:id").get(async (req,res) =>{
    let productID = req.params.id;

    await Product.findById(productID)
    //validation
    .then(() =>{
        res.status(200).send({status:"Product fetched"});
    })
})


















module.exports = router;