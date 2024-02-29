import { useState } from 'react'


import backgroundImage from '../../images/joao-vitor-duarte-k4Lt0CjUnb0-unsplash.jpg'

import { menuArray } from '../../utils/menuArray'
import Header from '../Header/Header'
import MenuItem from '../MenuItem/MenuItem'
import FoodCard from '../FoodCard/FoodCard'
import EditCartPopup from '../EditCartPopup/EditCartPopup'

// import { currentOrder } from '../../utils/currentOrder'

export default function Menu(props) {
    const {isLoggedIn} = props
    const[currentCategory, setCurrentCategory] = useState(menuArray[0]);
    const [isPopupActive, setIsPopupActive] = useState(false);
    const [isEditCartOpen, setIsEditCartOpen] = useState(true);
    const [currentOrder, setCurrentOrder] = useState([]) 
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
        setItemData(item)
        setIsPopupActive(prevState => !prevState)
    }

    function addToCart(item) {
        const newCurrentOrder = [...currentOrder, item]
        setCurrentOrder(newCurrentOrder)
    }

    function calculateTotalPrice() {
        let totalPrice = 0;
        currentOrder.forEach(item => {
          totalPrice += item.price;
        });
        return totalPrice;
    }

    const handleEditCartPopup = (item) => {
        setIsEditCartOpen(prevState => !prevState)
    }

    const handleRemoveItem = (item) => {
        const index = currentOrder.indexOf(item);
        setCurrentOrder((currentOrder) => currentOrder.filter((_,index) => index !==0))
    }

    return(
        <>
             {isPopupActive && <FoodCard handlePopup={handlePopup} item={itemData} addToCart={addToCart}/>}
             {isEditCartOpen && <EditCartPopup
                                handleEditCartPopup={handleEditCartPopup}
                                currentOrder={currentOrder}
                                calculateTotalPrice={calculateTotalPrice()}
                                handleRemoveItem={handleRemoveItem}
                                />}
            

            <div className="menu">
                <img className='menu__background' src={backgroundImage} alt="background image of paper texture" />
               
                <Header isLoggedIn = {isLoggedIn} menuArray={menuArray} setCurrentCategory={setCurrentCategory}/>

                <div className="menu__main">
                    <ul className='menu__items'>
                        {currentCategory.items.map((item) => (
                            <MenuItem
                                key={item.id} 
                                item={item} 
                                handlePopup={handlePopup} 
                                isPopupActive={isPopupActive}
                            />
                        ))}
                    </ul>
                    <div className='menu__right-column'>
                        <h2>{currentCategory.category}</h2>
                        <img className='menu__category-image' src={currentCategory.image} alt="picture of a plate of italian bruschetta" />
                    </div>
                </div>
                <div className='menu__footer'>
                    <div className='menu__footer-wrapper'>
                        <p>Current Order: {currentOrder.length} items</p>
                        <p>TOTAL: US${calculateTotalPrice()}</p>
                        <button onClick={handleEditCartPopup} >Edit Cart</button>
                        <p>or</p>
                        <button>CHECKOUT</button>
                    </div>

                </div>
            </div>
        </>
    )
}