import React from 'react';
import './Jobcss/Jstyle.css';
import JobHeader from './JobHeader';
//import Train from "../img/train.jpg";
import JobSideMenu from './JobSIdeMenu';

export default function JobDash() {
    return(
        <div>
        <JobSideMenu/>
        
        <div class="container-xxl position-relative bg-white d-flex p-0">
        {/*<!-- Spinner Start -->*/}
            <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
                </div>
            </div>{/*<!-- Spinner End -->*/}
          
            {/*Content Start */}
            <div class="content">
                <div class="container-fluid pt-4 px-3">
                    <div class="row g-4">
                        <div class="col-sm-6 col-xl-3">
                            <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <i class="fas fa-file-alt fa-3x text-primary"></i>
                                <div class="ms-3">
                                   <p class="mb-2">New Full Orders</p>
                                   <h6 class="mb-0">01</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-3">
                            <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <i class="far fa-file-alt fa-3x text-primary"></i>
                                <div class="ms-3">
                                    <p class="mb-2">New Sample Orders</p>
                                    <h6 class="mb-0">02</h6>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6 col-xl-5">
                            <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                                <i class="fa fa-chart-pie fa-3x text-primary"></i>
                                <div class="ms-3">
                                    <p class="mb-2">Today Production Summary</p>
                                    <h6 class="mb-0">Commplete,Incomplete & Damage Products </h6>
                                </div>
                            </div>
                        </div>
                    </div>
           
                </div>



            </div>

        </div>

        </div>


    );
}