import { useContext } from 'react'

import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import AboutUs from '../AboutUs/AboutUs'
import OurTradition from '../OurTradition/OurTradition'

import { UserContext } from '../Context/UserContext'

export default function Home(props) {
    // const {isLoggedIn} = props;

    const {userContextData, isLoggedIn} = useContext(UserContext)
    
    return (
        <> 
            <Header isLoggedIn={isLoggedIn} />
            <Hero /> 
            <AboutUs />
            <OurTradition />
        </>
    )
}