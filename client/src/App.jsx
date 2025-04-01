import { useState } from 'react'
import './App.css'

import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './Layout';
import Home from './Pages/Home';
import Insert from './Pages/Insert';
import Display from './Pages/Display';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './Pages/Register';
import AccountType from './Pages/AccountType';
import PageAfterLogin from './Pages/MainPage';
import BalanceCheckPin from './Pages/BalanceCheckPin';
import BalanceCard from './Pages/BalanceCard';
import AccountDetails from './Pages/AccountDetails';
import Transcition from './Pages/Transcition';
import Transfer from './Pages/Transfer';
import AddMoeny from './Pages/AddMoeny';
import UserInfoPage from './Pages/UserInfoPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>


        <Routes>

          <Route path='/' element={<Layout />}>

            <Route index element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='insert' element={<Insert />} />
            <Route path='display' element={<Display />} />
            <Route path='login' element={<Login />} />
            <Route path='logout' element={<Logout />} />
            <Route path='register' element={<Register />} />
            <Route path='accounttype' element={<AccountType />} />

            <Route path='userpage' element={<PageAfterLogin />} >


              <Route path='balance' element={<BalanceCheckPin />} />
              <Route path='pin' element={<BalanceCard />} />
              <Route path='account' element={<AccountDetails />} />
              <Route path='trans' element={<Transcition />} />
              <Route path='transfer' element={<Transfer />} />
              <Route path='addmoney' element={<AddMoeny />} />
              <Route path='userinfo' element={<UserInfoPage />} />


            </Route>


          </Route>
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App
