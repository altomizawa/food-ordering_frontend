export default function LoginErrorPopup(props) {

    const {isPopupActive, handlePopup} = props;

    return(
        <div className={isPopupActive ? 'login-error__popup login-error__popup_active' : 'login-error__popup'}>
            <div className='login-error__popup__wrapper'>
                <h2>Username or password incorrect</h2>
                <button onClick={handlePopup}>Close</button>
            </div>
        </div>
    )
}