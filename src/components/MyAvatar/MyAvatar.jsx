import { useState, useContext, useEffect } from "react"

import validator from 'validator';

import api from "../../utils/api";
import { AuthContext } from "../Context/AuthContext";


export default function MyAvatar(props) {
    const [linkInput, setLinkInput] = useState('');
    const [linkInputError, setLinkInputError] = useState('')
    const [isFormValid, setIsFormValid] = useState(false)


    const {user, setUser} = useContext(AuthContext);


    const {isEditAvatarActive, setIsEditAvatarActive} = props;

    const validateFields = () => {
        setLinkInputError('');
        if (linkInput.length>0 && !validator.isURL(linkInput)) {
            setIsFormValid(false)
           return setLinkInputError('Insert a valid http image address')
        } if (validator.isURL(linkInput)) {setIsFormValid(true)} else {return setIsFormValid(false)}
    }

    const handleInputChange = (e) => {
        setLinkInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // // SEND CHANGE TO SERVER
        api.editProfilePhoto(linkInput, user)
        // UPDATE PROFILE CONTEXT
        .then((updatedUser) => setUser(updatedUser))
        // // RESET FIELD
        setLinkInput('')        
        // CLOSE FORM
        setIsEditAvatarActive(false)
    }
    useEffect(() => {
        validateFields();
    }, [linkInput])


    return (
        <form onSubmit={handleSubmit} className={isEditAvatarActive ? 'myProfile myProfile_active' : 'myProfile'}>
            <input className='myProfile__input' placeholder="https://myimage..." onChange={handleInputChange} value={linkInput}></input>
            {linkInputError && <p style={{color: 'red', textAlign: 'center', fontSize: '0.8rem'}}>Insert a valid image address</p>}
            <div className='myProfile__button-wrapper'>
                <button type="button" onClick={() => {
                    // CLOSE EDIT MODE
                    setIsEditAvatarActive(false)
                    // RESET FIELD
                    setLinkInput('')  
                    }} className="myProfile__button">cancel</button>
                <button type="submit" className={isFormValid ? "myProfile__button" : 'myProfile__button myProfile__button_inactive'}>change</button>
            </div>
        </form>
        
    )
}