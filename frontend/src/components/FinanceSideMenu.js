import React, { useState, useEffect } from "react"
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { FaBalanceScale, FaShoppingCart, FaDonate, FaSyncAlt, FaMoneyBillAlt, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function FinanceSideMenu() {

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
                            pathname: "/viewbudget",
                        }}
                    >
                        <NavItem eventKey="budget">


                            <NavIcon>
                                <FaBalanceScale style={{ width: '1.75em' }} /> Budget
                            </NavIcon>

                        </NavItem>
                    </Link><br />

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/viewrefund",
                        }}
                    >
                        <NavItem eventKey="refund">
                            <NavIcon>
                                <FaMoneyBillAlt style={{ width: '1.75em' }} /> Refunds
                            </NavIcon>


                        </NavItem>
                    </Link><br />



                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/viewyearlyfinance",
                        }}
                    >
                        <NavItem eventKey="Newp">
                            <NavIcon>
                                <FaDollarSign style={{ width: '1.75em' }} />Yearly Finance

                            </NavIcon>


                        </NavItem>
                    </Link><br />

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/viewmonthlyfinance",
                        }}
                    >
                        <NavItem eventKey="Newpp">
                            <NavIcon>
                                <FaDonate style={{ width: '1.75em' }} />Monthly Finance
                            </NavIcon>

                        </NavItem>
                    </Link><br />

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/vieworder",
                        }}
                    >
                        <NavItem eventKey="Newoo">
                            <NavIcon>
                                <FaShoppingCart style={{ width: '1.75em' }} /> Sent Payments
                            </NavIcon>

                        </NavItem>
                    </Link><br />

                    <Link
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={{
                            pathname: "/reports",
                        }}
                    >
                        <NavItem eventKey="report">
                            <NavIcon>
                                <FaSyncAlt style={{ width: '1.75em' }} /> Received Payments
                            </NavIcon>

                        </NavItem>
                    </Link><br />


                
                </div>
            </SideNav>

        </div>
    );
}
