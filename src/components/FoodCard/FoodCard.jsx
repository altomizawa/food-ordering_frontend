import bruschetta from '../../images/mike-van-den-bos-F4qVqfkG2Aw-unsplash.jpg'

export default function FoodCard(props){
    const {handlePopup} = props;

    return(
        <div className="foodCard">
            <div className="foodCard__popup">
                <img src={bruschetta} alt="" />
                <div>
                    <h3>bruschetta</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam natus velit accusamus incidunt hic ipsam.</p>
                    <p>US$15</p>
                    <div className="foodCard__button-wrapper">
                        <button onClick={handlePopup}>VOLTAR</button>
                        <button id='add-to-cart'>Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
    )
}