import { useEffect, useState } from 'react'


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
                category: 'pasta',
                image: {pastaImg}
            },
            {
                id: 3,
                category: 'pizza',
                image: {pizzaImg}
            },
            {
                id: 4,
                category: 'dessert',
                image: {dessertImg}
            },
            {
                id: 5,
                category: 'beverage',
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

    const handlePopup = (item) => {
        setItemData(item)
        setIsPopupActive(prevState => !prevState)
    }

    function addToCart(item) {
        api.addToCart(item)
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


    //Render initial menu: Appetizers
    useEffect(() => {
        api.getCurrentCategoryMenu('appetizers').then((items) => {
            setCurrentCategoryItems(items);
            setCurrentCategory(menuCategories[0])

        });
        api.getAllCartItems().then((items) => {setCurrentOrder(items)})
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
                        <button onClick={handleEditCartPopup} >Edit Cart</button>
                        <p>or</p>
                        <button>CHECKOUT</button>
                    </div>

                </div>
            </div>
        </>
    )
}