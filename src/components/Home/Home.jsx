import Header from '../Header/Header'
import Hero from '../Hero/Hero'
import AboutUs from '../AboutUs/AboutUs'
import OurTradition from '../OurTradition/OurTradition'

export default function Home(props) {
    const {isLoggedIn} = props;

    return (
        <> 
            <Header isLoggedIn={isLoggedIn} />
            <Hero /> 
            <AboutUs />
            <OurTradition />
        </>
    )
}