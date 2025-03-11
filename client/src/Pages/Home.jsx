import React from 'react'
import couple from "../assets/Couple.jpg"
import Login from './Login'
const Home = () => {
  return (
    <div>


      <div className='homePageContainer' >


        <div className='homePageImg' >

          <img src={couple} alt="" />
        </div>

        <div className='homePageLogin' >

          <Login />
        </div>

      </div>




    </div>
  )
}

export default Home
