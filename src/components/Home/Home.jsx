import { useState } from 'react'

import Hero from '../Hero/Hero'
import AboutUs from '../AboutUs/AboutUs'
import Footer from '../Footer/Footer'

export default function Home() {
    return (
        <>
           <Hero /> 
           <AboutUs />
           <Footer /> 
        </>
    )
}