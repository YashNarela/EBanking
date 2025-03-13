import React from 'react'
import { FaMoneyCheckDollar } from "react-icons/fa6";

import girl from "../assets/Digitalgirl.jpg"

import HomeSection2 from './HomeSection2';
const HomeSection3 = () => {
    return (
        <div>
            <div className='redLine' ></div>


            <div className="homeSection3Main">



                <div className='homeSection3MainDivOne'>

                    <div className='logoIconsBank'  >
                        <FaMoneyCheckDollar />
                    </div>

                    <div>

                        <h3 className='homePageImgDivInsideTwoHeading' >Digital Banking</h3>
                    </div>

                    <div>
                        <p className=' homePageImgDivInsideTwoPara ' >Digital Banking is always on so you can manage your account at any hour. Keep control at your fingertips with financial planning and expense tracking tools.</p>
                    </div>

                    <div>
                        <button className='homePageImgDivBtn' >Learn More</button>
                    </div>

                </div>


                <div className='homeSection3MainDivTwo' >

                    <div >
                        <img src={girl} alt="" className='homeSection3MainDivImage' />
                    </div>


                </div>


            </div>


            <div className='heightGap' >

            </div>



            <div className='' >

             
             <div>

             </div>


            </div>





        </div>

    )
}

export default HomeSection3