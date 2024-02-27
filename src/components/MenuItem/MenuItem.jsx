import FoodCard from '../FoodCard/FoodCard'


export default function MenuItem({item, handlePopup, isPopupActive}){
    return (
        <>
            <li key={item.id} className='menu__item'>
            {isPopupActive && <FoodCard handlePopup={handlePopup}/>}

                <div>
                    <p>{item.name}</p>
                    <p>US${item.price}</p>
                </div>
                <button onClick={handlePopup}>View/Add</button>
            </li>
            <hr />
        </>
    )
} 