import {useEffect, useState, useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom';

//IMPORT IMAGES
import italiaLogo from '../../images/Italia_logo_only.svg'

// IMPORT COMPONENTS
import FormInput from '../FormInput/FormInput';
import { authorize, getContent } from '../../utils/auth';
import LoginErrorPopup from '../LoginErrorPopup/LoginErrorPopup';
import { AuthContext } from '../Context/AuthContext';
 
import * as auth from '../../utils/auth'

export default function SignIn(props){
    // SET USESTATE VARIABLES
    const [isFormValid, setIsFormValid] = useState(false);
    const [isPopupActive, setIsPopupActive] = useState(false)
    const [formData, setFormData] = useState({
        username: '',
        password: '', 
    })

    // DEFINE USE CONTEXT VARIABLES
    const {isLoggedIn} = useContext(AuthContext)

    // PROPS.LOGIN
    const {handleLogin} = props;


    const navigate = useNavigate();

    //Validate form fields
    const formValidation = () => {
        if (formData.username.length>3 && formData.password.length > 3) {
            setIsFormValid(true);
        } else {setIsFormValid(false);}
    }

    const validateEmail = (email) => {
        if (email.length > 0) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email) ? '' : 'Please enter a valid email address.';}
    }

    const inputs = [
        {
            id: 1, 
            name: 'username',
            type: 'text',
            placeholder: 'Username', 
            label: 'Username',
            required: true,
            errorMessage: validateEmail(formData.username)
        },
        {
            id: 2, 
            name: 'password',
            type: 'password',
            placeholder: 'Password', 
            label: 'Password',
            required: true,
        },

    ]

    const onChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    async function handleSubmit(e){
        try{
            e.preventDefault();
            const token = await authorize({email: formData.username, password: formData.password})
            if(!token) {
                setIsPopupActive(true)
                return console.log('Error during login')
            }
            localStorage.setItem('token', token) // Store token in local Storage
            handleLogin();
            
        } catch(err) {console.log(`Error during login. Error:${err}`)}
        
    }

    const handlePopup = () => {
        setIsPopupActive(false)
        setFormData({
            username: '',
            password: '', 
        })

    }

    // Check if there's a token and redirect to menu if token=true
    useEffect(()=>{
        isLoggedIn ? navigate('/menu') : () => {return}
    },[])

    //validate form
    useEffect(formValidation, [formData])

    return(
        <>
            <div className='sign-in'>
                <LoginErrorPopup isPopupActive={isPopupActive} handlePopup={handlePopup}/>
                <img src={italiaLogo} alt="italia restaurant logo" />
                <div className='sign-in__modal'>
                    <h2>Enter your Account</h2>
                    <form onSubmit={handleSubmit}>
                        {inputs.map(input => (
                            <FormInput
                            key={input.id}
                            {...input}
                            value={formData[input.name]}
                            onChange={onChange} />
                        ))}
                        <button className={isFormValid ? 'sign-in__button' : 'sign-in__button sign-in__button_inactive'}>Submit</button>
                    </form>
                    <p>Not a member? <Link to='/signup'>Sign up now!</Link></p>
                </div>
            </div>
        </>
    )
}