import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import { Button, Container, Modal, Table } from "react-bootstrap";
import CustomerSideMenu from "./CustomerSideMenu";

const Report = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [customer, setcustomer] = useState([]);
  useEffect(() => {
    function getcustomer() {
      axois
        .get("http://localhost:8070/NonShopCustomer/view")
        .then((res) => {
          console.log(res.data);
          setcustomer(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getcustomer();
  }, []);
  return (
    <div>
  <CustomerSideMenu/>
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-md-10"></div>
        <div className="col">
          <Button
            variant="primary"
            onClick={() => {
              window.print();
            }}
          >
            Print Report
          </Button>
        </div>
      </div>
      <br></br>
      <table className="table table-hover" style={{ marginTop: "40px" }}>
        <thead>
          <tr>
            <th scope="col">NonShopCustomerID</th>
            <th scope="col">OrganizationName</th>
            <th scope="col">OwnerName</th>
            <th scope="col">OwnerNumber</th>
            <th scope="col">Address</th>
            <th scope="col">Email</th>
        
            {/* <th scope="col">Vehicle Status</th>
                     <th scope="col">Driver Status</th> */}
          </tr>
        </thead>

        <tbody>
          {customer.map((e, i) => (
            <tr>
              <td>{e.NonShopCustomerID}</td>
              <td>{e.OrganizationName}</td>
              <td>{e.OwnerName}</td>
              <td>{e.OwnerNumber}</td>
              <td>{e.Address}</td>
              <td>{e.Email}</td>
            
        
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
export default Report;
