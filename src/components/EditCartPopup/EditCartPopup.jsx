import { Link } from 'react-router-dom';

import bruschetta from '../../images/photo-1599387417822-5b7359f520be.jpg'

export default function EditCartPopup(props) {
    const {currentOrder, handleEditCartPopup, handleRemoveItem, calculateTotalPrice} = props;
    console.log(currentOrder)

    const ListItem = (props) => {
        const {item} = props
        return(
            <li className='editCartPopup__item'>
                <img src={item.link} />
                <p><b>{item.name} </b><br></br>
                    Quantity: 1 <br></br>
                    Price: US${item.price}</p>
                <button onClick={() => {handleRemoveItem(item)}}>Remove</button>
                <div className='editCartPopup__divider'></div>
            </li>

        )
    }

    return(
       <div className='editCartPopup'>
            <div className='editCartPopup__card'>
                <h2 className='editCartPopup__title'>Edit your order</h2>
                <ul className='editCartPopup__items'>
                    {currentOrder.map((item) => (
                        <ListItem key={item.id} item={item}/>
                    ))}
                </ul>
                <div className="editCartPopup__footer">
                    <h3>TOTAL: US${calculateTotalPrice}</h3>
                    <div>
                        <button className='editCartPopup__button' onClick={handleEditCartPopup}>VOLTAR</button>
                        <Link to="/checkout"><button className='editCartPopup__checkout-button'>CHECKOUT</button></Link>
                    </div>

                </div>
                
            </div>
       </div>
    )
}