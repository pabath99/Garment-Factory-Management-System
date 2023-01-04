import React, { useState, useEffect } from "react"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FaBalanceScale, FaShoppingCart, FaDonate, FaSyncAlt, FaMoneyBillAlt, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function CustomerSideMenu() {

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
                            pathname: "/viewcus",
                        }}
                    >
                        <NavItem eventKey="viewcus">


                            <NavIcon>
                                <FaBalanceScale style={{ width: '1.75em' }} /> Customer Details
                            </NavIcon>

                        </NavItem>
                    </Link><br />

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/viewnoncus",
                        }}
                    >
                        <NavItem eventKey="viewnoncus">
                            <NavIcon>
                                <FaMoneyBillAlt style={{ width: '1.75em' }} /> Non-Customer Details
                            </NavIcon>


                        </NavItem>
                    </Link><br />



                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/viewfeedback",
                        }}
                    >
                        <NavItem eventKey="viewfeedback">
                            <NavIcon>
                                <FaDollarSign style={{ width: '1.75em' }} />Feedback

                            </NavIcon>


                        </NavItem>
                    </Link><br />

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/report",
                        }}
                    >
                        <NavItem eventKey="report">
                            <NavIcon>
                                <FaDonate style={{ width: '1.75em' }} />Reports
                            </NavIcon>

                        </NavItem>
                    </Link><br />

                    


                
                </div>
            </SideNav>

        </div>
    );
}
