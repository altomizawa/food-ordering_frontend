import { useContext } from 'react'

import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import AboutUs from '../AboutUs/AboutUs'
import OurTradition from '../OurTradition/OurTradition'

import { UserContext } from '../Context/UserContext'
import { AuthContext } from '../Context/AuthContext'
export default function Home() {
    // const {isLoggedIn} = props;

    // // const {userContextData, isLoggedIn} = useContext(UserContext)
    // const {isLoggedIn} = useContext(AuthContext);

    return (
        <> 
            <Header />
            <Hero /> 
            <AboutUs />
            <OurTradition />
        </>
    )
}