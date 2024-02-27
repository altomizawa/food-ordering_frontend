import { useState } from 'react'


import backgroundImage from '../../images/joao-vitor-duarte-k4Lt0CjUnb0-unsplash.jpg'
import bruschettaImage from '../../images/mike-van-den-bos-F4qVqfkG2Aw-unsplash.jpg'

import { menuArray } from '../../utils/menuArray'

import Header from '../Header/Header'
import MenuItem from '../MenuItem/MenuItem'
import FoodCard from '../FoodCard/FoodCard'

export default function Menu({isLoggedIn}) {

    const filteredArray = menuArray.filter((item) => item.price>0)

    const [isPopupActive, setIsPopupActive] = useState(false)
    const [itemData, setItemData] = useState({
        name: '',
        category: '',
        description: '',
        link: '',
        price: 0,
        onSale: false,
        salePrice: 0
    })

    const handlePopup = (item) => {
        console.log(item)
        setItemData(item)
        setIsPopupActive(prevState => !prevState)
    }

    return(
        <>
             {isPopupActive && <FoodCard handlePopup={handlePopup} item={itemData}/>}
            

            <div className="menu">
                <img className='menu__background' src={backgroundImage} alt="background image of paper texture" />
               
                <Header isLoggedIn = {isLoggedIn} menuArray={menuArray}/>

                <div className="menu__main">
                    <ul className='menu__items'>
                        <h2>Appetizers</h2>
                        {filteredArray.map((item) => (
                            <MenuItem key={item.id} item={item} handlePopup={handlePopup} isPopupActive={isPopupActive} />
                        ))}
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