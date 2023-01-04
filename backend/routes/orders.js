const router = require("express").Router();
let Order = require("../models/Order");

     
//add order
router.route("/add").post((req,res) =>{
    //formal method
    const orderid = (req.body.orderid);
    const name = req.body.name;
    const category = (req.body.category);
    const price = Number(req.body.price);
    const quantity = Number(req.body.quantity);
    const date = req.body.date;

    const newOrder = new Order({

        orderid,
        name,
        category,
        price,
        quantity,
        date
    })

    //validation
    newOrder.save().then(()=>{
        res.json("Order Added to DB")
    }).catch((err)=>{
        console.log(err);
    })
})

//view all orders
router.route("/view").get(function(req,res) {
     Order.find().then((orders)=>{
        res.json(orders)
     }).catch((err)=>{
        console.log(err);
    })

})


//update order details
router.route("/update/:id").put(async (req,res) =>{
    let orderID = req.params.id;
    //destructure
    const{orderid, name,category,price,quantity,date} = req.body;

    const updateOrder = {
        orderid,
        name,
        category,
        price,
        quantity,
        date
    }
    const update = await Order.findByIdAndUpdate(orderID, updateOrder)
    //validation
    .then(() =>{
    res.status(200).send({status:"Order details updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error updating profile"});
    })
})

//delete order from DB
router.route("/delete/:id").delete(async (req,res) =>{
    let orderID = req.params.id;

    await Order.findByIdAndDelete(orderID)
    //validation
    .then(() =>{
        res.status(200).send({status:"Order deleted from DB"});
        }).catch((err)=>{
            console.log(err.messprice);
            res.status(500).send({status:"error deleting from DB"});
        })
})

router.route("/get/:id").get(async (req,res) =>{
    let orderID = req.params.id;

    await Order.findById(orderID)
    //validation
    .then(() =>{
        res.status(200).send({status:"Order fetched"});
    })
})


















module.exports = router;