import React from 'react'

import emp from "../assets/Employee.jpg"
const HomeSection4 = () => {
    return (


        <div>


            <div className='homeSectionFourMainDiv' >



                <div className='homeSection4PartOne'  >

                    <img src={emp} alt="" className='homeSection4PartOneImg' />

                </div>



                <div className=' homeSection4PartTwo  '  >



                    <div>

                        <h2 className='homytwoMainh2'  >Grow with Us</h2>
                    </div>


                    <div className="homeSection4PartTwoFlexi">
                        <div className="">
                            <p className='homytwoMainOneText ' >Community Kind</p>
                            <p className="">At Liberty Bank, we know kindness starts with us.</p>
                        </div>
                        <div className="">
                            <button className='homePageImgDivBtn ' >  Spread Kindness   </button>

                        </div>
                    </div>
                     


                    <div className="homeSection4PartTwoFlexi">
                        <div className="">
                            <p className='homytwoMainOneText ' >Community Kind</p>
                            <p className="">At Liberty Bank, we know kindness starts with us.</p>
                        </div>
                        <div className="">
                            <button className='homePageImgDivBtn ' >  Spread Kindness   </button>

                        </div>
                    </div>



                    <div className="homeSection4PartTwoFlexi">
                        <div className="">
                            <p className='homytwoMainOneText ' >Learning Center</p>
                            <p className="">Visit the Liberty Bank Financial Wellness Academy.</p>
                        </div>
                        <div className="">
                            <button className='homePageImgDivBtn ' >  Spread Kindness   </button>

                        </div>
                    </div>
                </div>


            </div>


        </div>
    )
}

export default HomeSection4