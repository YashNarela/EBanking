import React from 'react'
import girl from "../assets/girlphone.jpg"
const HomeSection5 = () => {
    return (


        <div>
              

              <div  className='homySection5Main' >  
 

                     <div className='homySection5MainOne' >

                         
                         <div>
                        <h3 className='homePageImgDivInsideTwoHeading' >Find a Branch</h3>
                         </div>

                         <div>
                        <p className="">
                            With 55+ locations, kindness is right around the corner.
                        </p>
                         </div>
                         <div>
                        <button>View Locations</button>
                         </div>
 


                     </div>


                <div className='homySection5MainTwo' >
                        
                    <img src={girl} alt="" className='homySection5MainTwoImg' />
                     </div>


              </div>


        </div>
    )
}

export default HomeSection5