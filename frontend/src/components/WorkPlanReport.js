import React, { useState, useEffect } from "react";
import axois from "axios";
import { Link } from "react-router-dom";
import { Button, Container, Modal, Table } from "react-bootstrap";
import JobHeader from './JobHeader';

const Report = () => {
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [work, setwork] = useState([]);
  useEffect(() => {
    function getwork() {
      axois
        .get("http://localhost:8070/job/view")
        .then((res) => {
          console.log(res.data);
          setwork(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }
    getwork();
  }, []);

  return (
    <div>
        <JobHeader/>
    <div>
      <br></br>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-md-10"></div>
        <div className='col-lg-9 mt-2 mb-2'><br></br><br></br>
                <center><h1 class ="Fheader">Production Workplan</h1></center><br></br><br></br>
            
          
            </div>
            
        <div className="col">
        <br></br>
            <br></br>
            <br></br>
            <br></br>
          <Button
            variant="primary"
            onClick={() => {
              window.print();
            }}>
            Print Report
          </Button>
        </div>
      </div>
      <br></br>
      <table className="table table-hover" style={{ marginTop: "40px" }}>
      <thead>
             <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Cutting Section</th>
                        <th scope="col">Required Time Period</th>
                        <th scope="col">Sawing Section</th>
                        <th scope="col">Required Time Period</th>
                        <th scope="col">Laundering Section</th>
                        <th scope="col">Required Time Period</th>
                        <th scope="col">Folding Section</th>
                        <th scope="col">Required Time Period</th>
                        <th scope="col">Packing Section</th>
                        <th scope="col">Required Time Period</th>
          </tr>
        </thead>

        <tbody>
          {work.map((e, i) => (
            <tr>
                <td>{e.OrderID}</td>
                <td>{e.Cut}</td>
                <td>{e.Cutperiod}</td>
                <td>{e.Saw}</td>
                <td>{e.Sawperiod}</td>
                <td>{e.Laund}</td>
                <td>{e.Laundperiod}</td>
                <td>{e.Fold}</td>
                <td>{e.Foldperiod}</td>
                <td>{e.Pack}</td>
                <td>{e.Packperiod}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};
export default Report;