import React, { useState } from 'react'
import { AiOutlineHome } from "react-icons/ai";
import { TbPigMoney } from "react-icons/tb";
import { CiBadgeDollar } from "react-icons/ci";
import { GrNotes } from "react-icons/gr";
const HomeSection2 = () => {


    const [data,setData]=useState(null)

    return (
        <div>


            <h2 className='homytwoMainh2'  >I'm looking to:</h2>

            <div className='homytwoMain'  >




                <div className="homytwoMainOne">


                    <div className='homyOneMainDivWithCircle'  >

                        <div className='homyOneMainDiv' >

                            <div className='homytwoMainOneIcon'  >
                                <AiOutlineHome />
                            </div>
                            <div className='homytwoMainOneText' >
                                Explore mortgage options
                            </div>
                        </div>

                        <div>

                            <div className='homePageImgDivInsideOne'  >


                                <div className='  homePageImgDivInsideOneLine '   >


                                </div>

                                <div className='homePageImgDivInsideOneCircle' >

                                    <div className='homePageImgDivInsideOneCircleInside' ></div>

                                </div>


                            </div>


                        </div>
                    </div>


                    <div className='homyOneMainDiv'  >

                        <div className='homytwoMainOneIcon'  >
                            <CiBadgeDollar />

                        </div>
                        <div className='homytwoMainOneText' >
                            Get the funds I need, fast
                        </div>


                           


                    </div>
                    <div className='homyOneMainDiv'  >

                        <div className='homytwoMainOneIcon'  >
                            <TbPigMoney />

                        </div>
                        <div className='homytwoMainOneText' >
                            Earn a great rate
                        </div>
                    </div>
                    <div className='homyOneMainDiv'  >

                        <div className='homytwoMainOneIcon'  >
                            <GrNotes />

                        </div>
                        <div className='homytwoMainOneText' >
                            Find the right checking account
                        </div>
                    </div>




                </div>






                <div className="homyTwoMainTwo">

                    <div className='homyTwoMainTwoOne' >

                        <p className='homyTwoMainTwoPara' >Let us help you get started with selecting the right checking account</p>

                        <p  >Liberty Bank has the kindest kind of checking account for you and your family – plus no minimum balance fees. We even refund other banks' ATM fees on select business and personal accounts.</p>

                        <p> Explore Mortgages</p>
                        <p>Apply Online</p>
                    </div>

                </div>

            </div>





        </div>
    )
}

export default HomeSection2