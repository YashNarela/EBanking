import React from 'react'
import couple from "../assets/Couple.jpg"
import Login from './Login'
import HomeSection2 from './HomeSection2'
import HomeSection3 from './HomeSection3'
import HomeSection4 from './HomeSection4'
import HomeSection5 from './HomeSection5'
const Home = () => {
  return (
    <>
      <div>


        <div className='homePageContainer' >


          <div className='homePageImg' >



            <img  className='homePageImage'   src={couple} alt="" />

            <div className='homePageImgDiv'>



              <div className='homePageImgDivInsideOne'  >


                <div className='  homePageImgDivInsideOneLine '   >


                </div>

                <div className='homePageImgDivInsideOneCircle' >

                  <div className='homePageImgDivInsideOneCircleInside' ></div>

                </div>


              </div>
              <div className='homePageImgDivInsideTwo'  >


                <div>
                  <h1 className='homePageImgDivInsideTwoHeading' >   Reward yourself with 4.00% APY </h1>

                  <p className=' homePageImgDivInsideTwoPara '  >Reach your savings goals with a high yield savings account. Earn up to 4.00% Annual Percentage Yield on certain balance tiers.&nbsp;</p>

                  <button className='homePageImgDivBtn'  >  Discover High Yield Savings</button>
                </div>


              </div>

            </div>


          </div>

          <div className='homePageLogin' >

            <Login />

            <div className='homeloginTresaury'  >

              <h4 className='treasuryheading'   >Treasury Management Services Login </h4>
            </div>
          </div>



        </div>







      </div>

      <div className='heightGap' >

      </div>

      <div>

        <HomeSection2 />
      </div>

      <div>
        <HomeSection3 />
      </div>

      <div>
        <HomeSection4 />
      </div>

      <div className='homeSectionOuterDiv'  >
        <HomeSection5 />
      </div>

    </>
  )
}

export default Home
