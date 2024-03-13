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

import { UserContext } from '../Context/UserContext';

export default function Menu() {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart'))
    const {cart, setCart, handleRemoveItem} = useContext(UserContext)

    const [currentCart, setCurrentCart] = useState([])

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
    function addToCart({_id: id}) {
        setCurrentCart(currentCart => {
            if (currentCart.find(item => item.id === id) == null) {
                return [...currentCart, { id, quantity: 1}]
            } else {
                return currentCart.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity +1}
                    } else {
                        return item
                    }
                })
            }
        })
        console.log(currentCart)
    }
    // function addToCart(item) {
    //     const repeatedItem = cartFromLocalStorage.find((cartItem) => cartItem._id === item._id)
    //     !repeatedItem ? setCart([...cart, {...item}]) : console.log(repeatedItem)    
    // }

    
 



    // // Remove Item from Cart
    function removeItemFromCart({_id: id}) {
        setCurrentCart(currentCart => {
            const itemToRemove = currentCart.find(item => item.id === id);
            if (itemToRemove.quantity === 1) {
                return currentCart.filter(item => item.id !== id);
            } else {
                return currentCart.map(item => {
                    if (item.id === id) {
                        return {...item, quantity: item.quantity - 1};
                    } else {
                        return item;
                    }
                });
            }
        });
        console.log(currentCart)
    }
    // const handleRemoveItem = (itemToRemove) => {
    //     setCart(cart.filter(item => item !== itemToRemove))
    //     localStorage.setItem('cart', JSON.stringify(cart))
    // }

    //Calculate Total Price
    function calculateTotalPrice() {
        let totalPrice = 0;
        cart.forEach(item => {
          totalPrice += item.price;
        });
        return totalPrice;
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
        setCurrentCategory(category);
        const items = await api.getCurrentCategoryMenu(category.category)
        // .then((items) => {
            setCurrentCategoryItems(items);
        // })
    }


    return(
        <>
             {isPopupActive && <FoodCard handlePopup={handlePopup} item={itemData} addToCart={addToCart}/>}
            <EditCartPopup
                setIsEditCartOpen={setIsEditCartOpen}
                cart={cart}
                calculateTotalPrice={calculateTotalPrice()}
                handleRemoveItem={removeItemFromCart}
                isEditCartOpen={isEditCartOpen}
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
                        <img className='menu__category-image' src={appetizersImg} alt="picture of a plate of italian bruschetta" />
                    </div>
                </div>
                <div className='menu__footer'>
                    <div className='menu__footer-wrapper'>
                        <p>Current Order: {cart.length} items</p>
                        <p>TOTAL: US${calculateTotalPrice()}</p>
                        <button className='menu__checkout-button' onClick={ () => {setIsEditCartOpen(true)} } >Edit Cart</button>
                        <p>or</p>
                        <Link to={'/checkout'}><button className='menu__checkout-button'>CHECKOUT</button></Link>
                    </div>

                </div>
            </div>
        </>
    )
}