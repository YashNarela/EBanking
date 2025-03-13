import React from 'react'
import Navbar from './Components/Navbar'
import { Outlet } from 'react-router'
import Footer from './Components/Footer'

const Layout = () => {
    return (
        <>


            <Navbar />


              <div>
            <Outlet/>
            </div> 

            <div>
                <Footer />
            </div>

          

        </>
    )
}

export default Layout
