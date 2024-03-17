import { useNavigate } from "react-router-dom"

export default function SuccessPopup(props) {

    const {isPopupActive, popupMessageStatus} = props;
    
    const navigate = useNavigate();

    return(
        <div className={isPopupActive ? 'success-popup success-popup_active' : 'success-popup'}>
            <div className='success-popup__wrapper'>
                <h2>{popupMessageStatus ? 'Success. Login Now.' : 'User already in Database'}</h2>
                <button onClick={() => {navigate('/signin')}}>Login</button>
            </div>
        </div>
    )
}