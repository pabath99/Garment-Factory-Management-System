import React, { useState, useEffect } from "react"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FaBalanceScale, FaShoppingCart, FaDonate, FaSyncAlt, FaMoneyBillAlt, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function JobSideMenu() {

    return (
        <div >
            <SideNav style={{
                background: '#192841', width: '25vh'
            }}
            >
                <div style={{ paddingTop: '2vh', paddingLeft: '1vh' }}><h6 style={{color:'white'}}><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>Lakishika Fashion Garments</h6>
                </div>


                <div style={{ paddingTop: '3vh', paddingLeft: '2vh' }}>

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/Jdash",
                        }}
                    >
                        <NavItem eventKey="dashboard">


                            <NavIcon>
                                <FaBalanceScale style={{ width: '1.75em' }} /> Dashboard
                            </NavIcon>

                        </NavItem>
                    </Link><br />

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/workplan",
                        }}
                    >
                        <NavItem eventKey="workplan">
                            <NavIcon>
                                <FaMoneyBillAlt style={{ width: '1.75em' }} /> Workplan
                            </NavIcon>


                        </NavItem>
                    </Link><br />



                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/progress",
                        }}
                    >
                        <NavItem eventKey="progress">
                            <NavIcon>
                                <FaDollarSign style={{ width: '1.75em' }} />Progress

                            </NavIcon>


                        </NavItem>
                    </Link><br />

                    
                
                </div>
            </SideNav>

        </div>
    );
}
