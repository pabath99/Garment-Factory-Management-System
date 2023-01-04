
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import ViewRefunds from './components/ViewRefund';
import AddRefund from './components/AddRefund';
import RefundDetails from './components/RefundDetails';
import UpdateRefund from './components/UpdateRefund';
import React from "react";
import ViewBudget from './components/ViewBudget';
import AddBudget from './components/AddBudget';
import UpdateBudget from './components/UpdateBudget';
import AddYearly from './components/AddYearlyFinance';
import ViewYearly from './components/ViewYearly';
import ViewMonthly from './components/ViewMonthly';
import SentPayment from './components/SentPayment';
import Quotaion from './Quotaion';
import Formfun from './Form1';
import ManageOrder from "./MangeOrder";
import AddShopCustomerDetails from "./components/AddShopCustomerDetails";
import AddNonShopCustomerDetails from "./components/AddNonShopCustomerDetails";
import AddFeedback from "./components/AddFeedback";
import AllShopcustomers from "./components/AllShopcustomers";
import ViewNonShopCus from "./components/ViewNonShopCustomers";
import NonShopCusReport from "./components/NonShopCusReport";
import ViewFeedback from "./components/ViewFeedback"
import UpdateCusDeatils from './components/updateShopCusDetails'
import UpdateNonShopCustomer from './components/UpdateNonShopCustomer'
import UpdateFeedback from './components/UpdateFeedback'
import FeedbackReport from './components/FeedbackReport'
import Report from "./components/Report"
import JobDash from './components/JobDash';
import WorkPlan from './components/WorkPlan';
import AddWorkPlan from './components/AddWorkPlan';
import UpdateWork  from './components/UpdateWork';
import Progress from './components/Progress';
import AddProgress from './components/AddProgress';
import UpdateProgress  from './components/UpdateProgress';
import WorkPlanReport  from './components/WorkPlanReport';
import AddProduct from "./screen/AddProduct";
import ViewProduct from "./screen/ViewProduct";
import Main from "./screen/Main";
import AddOrder from "./screen/AddOrder";
import ViewOrder from "./screen/ViewOrder";
import Reports from "./screen/Reports";
import Charts from "./screen/Charts";
import Sidemenu from "./screen/Sidemenu";
import Supplier from "./screen/Supplier";
import MainHeader from './components/MainHeader';
import MainHome from './components/Home1'

import Tablefun from "./ViewTable";




function App() {

  return(

    <Router>
    <MainHeader/>
    <Routes>

    <Route path="/" element={<MainHome/>}/>

    <Route path="/viewrefund" element={<ViewRefunds/>}/>
    <Route path="/addrefunds" element={<AddRefund/>}/>
    <Route path="/viewrefunds/:id" element={<RefundDetails/>}/>
    <Route path="/updaterefunds/:id" element={<UpdateRefund/>}/>
    <Route path="/viewbudget" element={<ViewBudget/>}/>
    <Route path="/addbudget" element={<AddBudget/>}/>
    <Route path="/viewbudget/updatebudget/:id" element={<UpdateBudget/>}/>
    <Route path="/addyearlyfinance" element={<AddYearly/>}/>
    <Route path="/viewyearlyfinance" element={<ViewYearly/>}/>
    <Route path="/viewmonthlyfinance" element={<ViewMonthly/>}/>
    <Route path="/viewsent" element={<SentPayment/>}/>

    <Route path="/view" exact element={ < Tablefun/>} />
    <Route path="/quotaion" exact element={ < Quotaion/>} />
    <Route path="/form" exact element={ <Formfun/>} />
    <Route path="/manage" exact element={ < ManageOrder/>} />

    <Route path="/viewcus/add" element={<AddShopCustomerDetails/>} />
    <Route path="/viewcus"  element={<AllShopcustomers/>} />
    <Route path="/Report"  element={<Report/>} />
    <Route path="/update/:id" element={<UpdateCusDeatils/>} />
    <Route path="/viewnoncus/add" element={<AddNonShopCustomerDetails/>} />
    <Route path="/viewnoncus" element={<ViewNonShopCus/>} />
    <Route path="/updatenon/:id" element={<UpdateNonShopCustomer/>} />
    <Route path="/Reportnonshop" element={<NonShopCusReport/>} />
    <Route path="/viewfeedback/add" element={<AddFeedback/>} />
    <Route path="/viewfeedback" element={<ViewFeedback/>} />
    <Route path="/ReportFeed" element={<FeedbackReport/>} />
    <Route path="/updatefed/:id" element={<UpdateFeedback/>} />

    <Route path="/Jdash" exact element={<JobDash/>}/>
    <Route path="/workplan" exact element={<WorkPlan/>}/>
    <Route path="/WorkPlanReport" exact element={<WorkPlanReport/>}/>
    <Route path="/workplan/addwork" exact element={<AddWorkPlan/>}/>
    <Route path="/workplan/updatework/:id" exact element={<UpdateWork/>}/>
    <Route path="/progress" exact element={<Progress/>}/>
    <Route path="/progress/addprog" exact element={<AddProgress/>}/>
    <Route path="/progress/updateprog/:id" exact element={<UpdateProgress/>}/>

    <Route exact path="/addproduct" element={<AddProduct />} />
    <Route exact path="/viewproduct" element={<ViewProduct/>} />
    <Route exact path="/signup" element={<Main/>} />
    <Route exact path="/addorder" element={<AddOrder/>}/>
    <Route exact path="/vieworder" element={<ViewOrder/>}/>
    <Route exact path="/reports" element={<Reports/>}/>
    <Route exact path="/charts" element={<Charts/>}/>
    <Route exact path="/nav" element={<Sidemenu/>}/>
    <Route exact path="/supplier" element={<Supplier/>}/>
    
    </Routes>

    </Router>

  )

}
  
export default App;
