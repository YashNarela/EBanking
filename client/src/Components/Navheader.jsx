import React ,{useEffect,useState} from 'react'

import "../css/Navheader.css"

const Navheader = ({ hoverEffect }) => {


    
    
    


    return (


        <div>




            <div    style={{ display: hoverEffect ?"flex":"none"}}    class="dropdown-menu show" id="navbarDropdownMenu0-1" aria-label="Dropdown Menu for Personal" data-bs-popper="static">
                <div class="dropdown-menu-back">
                  
                </div>
                <div class="subnav-items ">

               <div className='NavTitleHighLight'  >
                        Banking
               </div>
                   

                    <ul className='navHeaderUlList'  >
                        <li>
                            Checking
                        </li>
                        <li>
                            Savings
                        </li>
                        <li>
                            High Yield Savings
                        </li>
                        <li>
                            Certificate of Deposit
                        </li>
                        <li>
                            Money Market
                        </li>
                        <li>
                            IRA
                        </li>
                        <li>
                            Health Savings
                        </li>
                        <li>
                            Greenlight
                        </li>
                        <li>
                            Open an Account
                        </li>

                    </ul>
                </div>
                <div class="subnav-items ">

                   

                    <div className='NavTitleHighLight'  >
                        Loans
                    </div>


                    <ul className='navHeaderUlList'  >
                        <li>
                            Mortgages
                        </li>
                        <li>
                            Home Equity
                        </li>
                        <li>
                            Personal Loans
                        </li>
                        <li>
                            Student Loans
                        </li>
                        <li>
                            Credit Building
                        </li>
                        <li>
                            Contact A Loan Officer
                        </li>

                    </ul>
                </div>
                <div class="subnav-items ">


                    <div className='NavTitleHighLight'  >

                        Personal Digital Banking
                    </div>


                    <ul className='navHeaderUlList'   >
                        <li>
                            Alerts
                        </li>
                        <li>
                            Bill Pay
                        </li>
                        <li>
                            Card Controls
                        </li>
                        <li>
                            Credit Score Monitoring
                        </li>
                        <li>
                            eStatements
                        </li>
                        <li>
                            Mobile Deposit
                        </li>
                        <li>
                            Pay a Person
                        </li>
                        <li>
                            Track Your Spending
                        </li>

                    </ul>
                </div>
                <div class="subnavgroup">



                    <span className='subnavgroupPara' >
                        Credit Cards
                    </span>

                    <span className='subnavgroupPara' > 
                        Rates
                    </span>

                    <span className='subnavgroupPara' >
                        Fraud Protection
                    </span>

                </div>
            </div>





        </div>
    )
}

export default Navheader