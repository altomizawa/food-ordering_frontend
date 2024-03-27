import { useEffect } from 'react';

import bruschetta from '../../images/mike-van-den-bos-F4qVqfkG2Aw-unsplash.jpg'

export default function FoodCard(props){
    const {handlePopup, item, addToCart, closeModal} = props;

    const handleAddToCart = () =>{
        addToCart(item);
        handlePopup();
    }

    return(
        <div onClick={closeModal} className="foodCard">
            <div className="foodCard__popup">
                <img src={item.link} alt={item.name} />
                <div>
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                    <p>US${item.price}</p>
                    <div className="foodCard__button-wrapper">
                        <button onClick={handlePopup}>VOLTAR</button>
                        <button id='add-to-cart' onClick={handleAddToCart}>Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    )
}