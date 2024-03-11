import bruschetta from '../../images/mike-van-den-bos-F4qVqfkG2Aw-unsplash.jpg'

export default function FoodCard(props){
    const {handlePopup, item, addToCart} = props;

    const handleAddToCart = () =>{
        addToCart(item);
        localStorage.setItem('cart', [{item}])
        handlePopup();
    }

    return(
        <div className="foodCard">
            <div className="foodCard__popup">
                <img src={item.link} alt="" />
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