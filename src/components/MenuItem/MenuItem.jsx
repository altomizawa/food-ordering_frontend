import Button from '../ui/Button'

export default function MenuItem({item, handlePopup}){
    return (
        <>
            <li className='menuItem'>
                <p>{item.name}</p>
                <div>
                    <p className="menuItem__price">US${item.price}</p>
                    <Button onClick={() => handlePopup(item)} variant='primary'>
                        view / add 
                    </Button>
                </div>
            </li>
            <hr className='menuItem__line'/>
        </>
    )
} 