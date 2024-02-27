import { useState } from 'react'

import Hero from '../Hero/Hero'
import AboutUs from '../AboutUs/AboutUs'
import OurTradition from '../OurTradition/OurTradition'

export default function Home() {
    return (
        <>
           <Hero /> 
           <AboutUs />
           <OurTradition />
        </>
    )
}