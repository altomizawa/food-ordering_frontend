import { useState } from 'react'
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
    {!orderNow && <SignIn />}
    </>
  )
}

export default App
