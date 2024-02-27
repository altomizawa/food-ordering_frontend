import { Link } from 'react-router-dom'

import italiaLogo from '../../images/Italia_logo_only.svg'
import backgroundImage from '../../images/mgg-vitchakorn-98Xi5vMGKck-unsplash.jpg'


export default function Hero() {

    return (
        <>
            <div className='hero'>
                <img className='hero__image' src={backgroundImage} alt="" />
                <header className='hero__header'>
                    <img src={italiaLogo} alt="italia restaurant logo" />
                </header>
                <div className='hero__wrapper'>
                    <h1 className='hero__title'>PERFECT<br></br>ANYTIME</h1>
                    <p className='hero__paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec lobortis augue, nec suscipit felis. Ut tincidunt dignissim orci, eget placerat enim dignissim id. </p>
                    <Link className='hero__button' to='/signin'>ORDER NOW</Link>
                </div>
            </div>
        </>
    )
}