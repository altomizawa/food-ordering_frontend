import Button from '../ui/Button';

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
                        <Button onClick={handlePopup} variant='secondary'>VOLTAR</Button>
                        <Button onClick={handleAddToCart} variant='primary'>Add to Cart</Button>
                    </div>
                </div>
            </div>

        </div>
    )
}