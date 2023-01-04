const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const pdf = require("html-pdf");
const pdfTemplate = require("./models/pdf");
require ("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());



const URL = process.env.MONGODB_URL;
mongoose.connect(URL, {
});



const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Mongodb Connection Success !") ;
})

const refundRouter = require("./routes/refundRoute.js");
app.use("/refund", refundRouter);

const receivedRouter = require("./routes/receivedPaymentRoute.js");
app.use("/received", receivedRouter);

const sentRouter = require("./routes/sentPaymentRoute.js");
app.use("/sent", sentRouter);

const budgetRouter = require("./routes/budgetRoute.js");
app.use("/budget", budgetRouter);

const monthlyRouter = require("./routes/monthlyFinanceRoute");
app.use("/monthly", monthlyRouter);

const yearlyRouter = require("./routes/yearlyFinanceRoute");
app.use("/yearly", yearlyRouter);





connection.once("open", () => {
    //connection eka open krnna, open unanm msg eka pennnanna
    console.log("Mongodb connection Suscess");
  });
  
  const sampleOrderRouter = require("./routes/sampleOrderRoute");
  //rotes
  app.use("/sampleOrder", sampleOrderRouter);
  
  app.post("/create-pdf", (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile("result.pdf", (err) => {
      if (err) {
        res.send(Promise.reject());
      }
  
      res.send(Promise.resolve());
    });
  });
  app.get("/fetch-pdf", (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`);
  });
  



  const CusRouter = require("./routes/CusDetails.js");
app.use("/CusDetails",CusRouter);
/*const Prog = require("./routes/jobRoute");
app.use("/prog",Prog);*/

const NSCusRouter = require("./routes/NonShopCustomer.js");
app.use("/NonShopCustomer",NSCusRouter);

const feedbackRouter = require("./routes/FeedbackRoute.js");
app.use("/FeedbackRoute",feedbackRouter);






const Jobs=require('./routes/jobRoute.js'); 
app.use("/job",Jobs);

const Prog=require('./routes/ProgRoute.js'); 
app.use("/progress",Prog);





const orderRouter = require("./routes/orders.js");
app.use("/order", orderRouter);

const productRouter = require("./routes/products.js");
app.use("/product", productRouter);

const supplierRouter = require("./routes/suppliers.js");
app.use("/supplier", supplierRouter);






app.listen(PORT, () => {
    console.log(`Server is up and running on port number :  ${PORT}`)  
})