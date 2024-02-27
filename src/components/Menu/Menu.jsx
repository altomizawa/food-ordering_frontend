import { useState } from 'react'

import backgroundImage from '../../images/joao-vitor-duarte-k4Lt0CjUnb0-unsplash.jpg'
import bruschettaImage from '../../images/mike-van-den-bos-F4qVqfkG2Aw-unsplash.jpg'
import italiaLogo from '../../images/Italia_logo_dark.svg'

import FoodCard from '../FoodCard/FoodCard'
import Header from '../Header/Header'

export default function Menu({isLoggedIn}) {

    const [isPopupActive, setIsPopupActive] = useState(true)

    const handlePopup = () => {
        setIsPopupActive(prevState => !prevState)
    }



    return(
        <>
            <div className="menu">
                {isPopupActive && <FoodCard handlePopup={handlePopup}/>}
                <img className='menu__background' src={backgroundImage} alt="background image of paper texture" />
               
                <Header isLoggedIn= {isLoggedIn}/>

                <div className="menu__main">
                    <ul className='menu__items'>
                        <h2>Appetizers</h2>
                        <li className='menu__item'>
                            <div>
                                <p>Bruschetta</p>
                                <p>US$15</p>
                            </div>
                            <button>View/Add</button>
                        </li>
                        <hr />
                        <li className='menu__item'><p>Arancini</p><p>US$15</p></li>
                        {/* <hr />
                        <li className='menu__item'><p>Caprese Salad</p><p>US$15</p></li>
                        <hr />
                        <li className='menu__item'><p>Carpaccio</p><p>US$15</p></li>
                        <hr />
                        <li className='menu__item'><p>Insalata Romana</p><p>US$15</p></li>
                        <hr />
                        <li className='menu__item'><p>Antipasto Platter</p><p>US$15</p></li>
                        <hr />
                        <li className='menu__item'><p>Suppli</p><p>US$15</p></li>
                        <hr /> */}
                    </ul>
                    <div className='menu__right-column'>
                        <div className='menu__category-wrapper'><h2>Appetizers</h2></div>
                        
                        <img className='menu__category-image' src={bruschettaImage} alt="picture of a plate of italian bruschetta" />
                    </div>
                </div>
                <div className='menu__footer'>
                    <div className='menu__footer-wrapper'>
                        <p>Current Order: 3 items</p>
                        <p>TOTAL: US$40,00</p>
                        <button>Edit Cart</button>
                        <p>or</p>
                        <button>CHECKOUT</button>
                    </div>

                </div>
            </div>
        </>
    )
}