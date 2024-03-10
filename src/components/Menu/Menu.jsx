import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import myCart from '../../database/mycart.json'

import backgroundImage from '../../images/joao-vitor-duarte-k4Lt0CjUnb0-unsplash.jpg';
import appetizersImg from '../../images/appetizers.jpg';
import pastaImg from '../../images/carbonara.jpg';
import pizzaImg from '../../images/margherita pizza.jpg';
import dessertImg from '../../images/cannoli.jpg';
import beverageImg from '../../images/beverage.jpg'


import api from '../../utils/api'
import Header from '../Header/Header'
import MenuItem from '../MenuItem/MenuItem'
import FoodCard from '../FoodCard/FoodCard'
import EditCartPopup from '../EditCartPopup/EditCartPopup'

export default function Menu(props) {
    const {isLoggedIn} = props;
    const [currentCategoryItems, setCurrentCategoryItems] = useState([]);
    const [currentCategory, setCurrentCategory] = useState([{
        id: '',
        category: '',
        image: ''
    }]);
    const [menuCategories, setMenuCategories] = useState([
            {
                id: 1,
                category: 'appetizers',
                image: '../../images/appetizers.jpg'
            },
            {
                id: 2,
                category: 'pastas',
                image: {pastaImg}
            },
            {
                id: 3,
                category: 'pizzas',
                image: {pizzaImg}
            },
            {
                id: 4,
                category: 'desserts',
                image: {dessertImg}
            },
            {
                id: 5,
                category: 'beverages',
                image: {beverageImg}
            },
        ]);
    const [isPopupActive, setIsPopupActive] = useState(false);
    const [isEditCartOpen, setIsEditCartOpen] = useState(false);
    const [currentOrder, setCurrentOrder] = useState([]);
    const [itemData, setItemData] = useState({
        name: '',
        category: '',
        description: '',
        link: '',
        price: 0,
        onSale: false,
        salePrice: 0
    })

    //GET CURRENT ITEMS IN CART AND UPDATE CART
    // const updateCart = () => {
    //     api.getAllCartItems()
    //     .then(items => setCurrentOrder(items))
    // }
    const updateCart = () => {
        console.log(myCart)
        setCurrentOrder(myCart)
    }

    //Handle Item Detail Popup
    const handlePopup = (item) => {
        setItemData(item)
        setIsPopupActive(prevState => !prevState)
    }

    //Add Item from Cart
    function addToCart(item) {
        api.addToCart(item)
        updateCart()
    }

    //Remove Item from Cart
    const handleRemoveItem = (item) => {
        api.removeFromCart(item)
        .then((item) => {updateCart()}) 
    }

    //Calculate Total Price
    function calculateTotalPrice() {
        let totalPrice = 0;
        currentOrder.forEach(item => {
          totalPrice += item.price;
        });
        return totalPrice;
    }

    //handle Edit Cart Popup
    const handleEditCartPopup = (item) => {
        setIsEditCartOpen(prevState => !prevState)
    }

    //Render initial menu: Appetizers
    useEffect(() => {
        api.getCurrentCategoryMenu('appetizers').then((items) => {
            console.log(items)
            setCurrentCategoryItems(items);
            setCurrentCategory(menuCategories[0])

        });
        updateCart();
    },[]);

    //Fetch new Category
    const changeCategory = (category) => {
        setCurrentCategory(category);
        api.getCurrentCategoryMenu(category.category)
        .then((items) => {
            setCurrentCategoryItems(items);
        })
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
               
                <Header isLoggedIn = {isLoggedIn} menuCategories={menuCategories} changeCategory={changeCategory}/>

                <div className="menu__main">
                    <ul className='menu__items'>
                        {currentCategoryItems.map((item) => (
                            <MenuItem
                                key={item._id} 
                                item={item} 
                                handlePopup={handlePopup} 
                                isPopupActive={isPopupActive}
                            />
                        ))}
                    </ul>
                    <div className='menu__right-column'>
                        <h2>{currentCategory.category}</h2>
                        <img className='menu__category-image' src={appetizersImg} alt="picture of a plate of italian bruschetta" />
                    </div>
                </div>
                <div className='menu__footer'>
                    <div className='menu__footer-wrapper'>
                        <p>Current Order: {currentOrder.length} items</p>
                        <p>TOTAL: US${calculateTotalPrice()}</p>
                        <button className='menu__checkout-button' onClick={handleEditCartPopup} >Edit Cart</button>
                        <p>or</p>
                        <Link to={'/checkout'}><button className='menu__checkout-button'>CHECKOUT</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}