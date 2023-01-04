const router = require("express").Router();
const SampleOrder = require("../models/sampleOrderModel");

router.route("/add").post((req, res) => {
  // /student/add link ekedi wada karana vidiya
  console.log(req.body);
  const { S_orderID, Cus_Id, Cus_Name, Due_date, description, Progress } =
    req.body;
  const newSorder = new SampleOrder({
    S_orderID,
    Cus_Id,
    Cus_Name,
    Due_date,
    description,
    Progress,
  });

  newSorder
    .save()
    .then(() => {
      //database eke save vena eka matha condition
      res.json("Sample order added"); //json format eken
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/").get((req, res) => {
  SampleOrder.find()
    .then((SampleOrder) => {
      res.json(SampleOrder);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.route("/update").put(async (req, res) => {
  const { S_orderID, description, Progress } = req.body;
  const filter = {
    S_orderID: S_orderID,
  };

  const updateSorder = {
    description,
    Progress,
  };

  const update = await SampleOrder.findOneAndUpdate(filter, updateSorder)
    .then(() => {
      res.status(200).send({ status: "order Updated " });
    })
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .send({ status: "Error while updating data", error: err.message });
    });
});

router.route("/delete").delete(async (req, res) => {
  const { S_orderID } = req.body;
  //promise catch kraganna then teka danne
  await SampleOrder.findOneAndDelete(S_orderID)
    .then(() => {
      res.status(200).send({ status: " Sample order deleted" });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error while delete", error: err.message });
    });
});

router.route("/getuser/:id").get(async (req, res) => {
  let S_orderID = req.params.id;

  const user = await SampleOrder.findOne({ S_orderID })
    .then((SampleOrder1) => {
      res.status(200).send({ status: "user fetched", SampleOrder1 });
    })
    .catch((err) => {
      console.log(err.message);
      res
        .status(500)
        .send({ status: "Error while fetching ", error: err.message });
    });
});

module.exports = router;
