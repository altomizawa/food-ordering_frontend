import { useEffect, useState , useContext} from 'react'
import { Link } from 'react-router-dom';

import appetizersImg from '../../images/appetizers.jpg';
import pastaImg from '../../images/carbonara.jpg';
import pizzaImg from '../../images/margherita pizza.jpg';
import dessertImg from '../../images/cannoli.jpg';
import beverageImg from '../../images/beverage.jpg'


import api from '../../utils/api'
import MenuItem from '../MenuItem/MenuItem'
import FoodCard from '../FoodCard/FoodCard'
import EditCartPopup from '../EditCartPopup/EditCartPopup'
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../Context/AuthContext';

export default function Menu() {
    const {cart, setCart} = useContext(AuthContext)

    const [selectedCategory, setSelectedCategory] = useState()
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
                image: appetizersImg
            },
            {
                id: 2,
                category: 'pastas',
                image: pastaImg
            },
            {
                id: 3,
                category: 'pizzas',
                image: pizzaImg
            },
            {
                id: 4,
                category: 'desserts',
                image: dessertImg
            },
            {
                id: 5,
                category: 'beverages',
                image: beverageImg
            },
        ]);
    const [isPopupActive, setIsPopupActive] = useState(false);
    const [isEditCartOpen, setIsEditCartOpen] = useState(false);
    const [itemData, setItemData] = useState({
        name: '',
        category: '',
        description: '',
        link: '',
        price: 0,
        onSale: false,
        salePrice: 0
    })

    // Handle Item Detail Popup
    const handlePopup = (item) => {
        setItemData(item)
        setIsPopupActive(prevState => !prevState)
    }

    // Add Item from Cart
    function addToCart(itemToAdd) {
        setCart(currentCart => {
            if (currentCart.find(item => item._id === itemToAdd._id) == null) {
                return [...currentCart, { ...itemToAdd, quantity: 1}]
            } else {
                return currentCart.map(item => {
                    if (item._id === itemToAdd._id) {
                        const quantity = item.quantity ? item.quantity : 0;
                        return {...item, quantity: quantity+1}
                    } else {
                        return item
                    }
                })
            }
        })
        console.log(cart)
    }

    // Remove Item from Cart
    function removeFromCart(itemToRemove) {
        setCart(currentCart => {
            const itemFound = currentCart.find(item => item._id === itemToRemove._id);
            if (itemFound.quantity === 1) {
                return currentCart.filter(item => item._id !== itemToRemove._id);
            } else {
                return currentCart.map(item => {
                    if (item._id === itemToRemove._id) {
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return item;
                    }
                });
            }
        });
    }

    //Render initial menu: Appetizers
    useEffect(() => {
        api.getCurrentCategoryMenu('appetizers').then((items) => {
            setCurrentCategoryItems(items);
            setCurrentCategory(menuCategories[0])
        });
    },[]);

    // MONITOR CART AND SEND IT TO LOCAL STORAGE
    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart))
    }),[cart]

    //Fetch new Category
    const changeCategory = async (category) => {
        //FIND CURRENT CATEGORY AND SET IT IMAGE
        setSelectedCategory(menuCategories.find((item)=> item.category === category.category))
        console.log(selectedCategory.image)

        setCurrentCategory(category);
        const items = await api.getCurrentCategoryMenu(category.category)
        setCurrentCategoryItems(items);
    }

    //Calculate Total Price
    function calculateTotalPrice() {
        let totalPrice = 0;
        cart.forEach((item) => {
        totalPrice += item.price * item.quantity;
        });
        return totalPrice;
    }

    //Calculate Items in Cart
    function calculateCartQuantity() {
        let quantity = 0;
        cart.forEach((item) => {
            quantity += 1 * item.quantity;
            });
            return quantity;
    }

    return(
        <>
             {isPopupActive && <FoodCard handlePopup={handlePopup} item={itemData} addToCart={addToCart}/>}
            <EditCartPopup
                setIsEditCartOpen={setIsEditCartOpen}
                calculateTotalPrice={calculateTotalPrice()}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                isEditCartOpen={isEditCartOpen}
                currentCart={cart}
            />
            

            <div className="menu">               
                <Navbar menuCategories={menuCategories} changeCategory={changeCategory}/>

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
                        <img className='menu__category-image' src={selectedCategory ? selectedCategory.image : appetizersImg} alt="picture of a plate of italian bruschetta" />
                    </div>
                </div>
                <div className='menu__footer'>
                    <div className='menu__footer-wrapper'>
                        <p>Current Order: {calculateCartQuantity()} items</p>
                        <p>TOTAL: US${calculateTotalPrice()}</p>
                        <button className='menu__checkout-button' onClick={ () => {setIsEditCartOpen(true)} } >CART</button>
                        <p>or</p>
                        <Link to={'/checkout'}><button className={cart.length!==0 ? 'menu__checkout-button' : 'menu__checkout-button menu__checkout-button_inactive'}>CHECKOUT</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}