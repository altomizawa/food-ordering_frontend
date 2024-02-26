import { useState } from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Hero from '../Hero/Hero'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer'
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'


function App() {
  const [orderNow, setOrderNow] = useState(true)
  
  const handleOrderButtonClick = () => {
    setOrderNow(false)
  }

  return (
    <>
    {orderNow && <Hero handleOrderButtonClick={handleOrderButtonClick} />}
    {orderNow && <AboutUs />}
    {orderNow && <Footer />}
    {!orderNow && <SignUp />}
    </>
  )
}

export default App
