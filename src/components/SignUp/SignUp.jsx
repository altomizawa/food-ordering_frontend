import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import italiaLogo from '../../images/Italia_logo_only.svg'
import FormInput from '../FormInput/FormInput'
import SuccessPopup from '../SuccessPopup/SuccessPopup'

import { register } from '../../utils/auth'
import validator from 'validator'

export default function SignUp(){
    const [isPopupActive, setIsPopupActive] = useState(false)
    const [popupMessageStatus, setPopupMessageStatus] = useState(null)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    //Validate form fields
    const [isFormValid, setIsFormValid] = useState(false);

    const formValidation = () => {
        if (formData.password === formData.confirmPassword && validateEmail(formData.email)==='' && validateName(formData.name)==='' && validatePassword(formData.password)==='') {
            setIsFormValid(true);
        } else {setIsFormValid(false)}
    }

    const validatePasswordMatch = () => {
        if (formData.password !== formData.confirmPassword) {
            return 'passwords do not match'
        }
    }

    const validateEmail = (email) => {
        if (email.length > 0) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email) ? '' : 'Please enter a valid e-mail address.'
    }}

    const validatePassword = (password) => {
        if (password.length >0 ){
        const regex = /^(?=.*\d).{4,8}$/;
        return regex.test(password) ? '' : 'Password must be between 4 and 8 digits long and include at least one numeric digit.'
        }
    }

    const validateName = (name) => {
        if (validator.isEmpty(name)) {
         return ''
        } else if (!validator.isLength(name, {min: 2, max: 30})) {
            return 'Name must be between 2 and 30 characters.'
        } else if (!validator.isAlpha(name, 'en-US', { ignore: ' -'})) {
            return 'Name can only contain letters and spaces'
        } else {return ''}
    };

    useEffect(formValidation),[formData]


    //Create Input object
    const inputs = [
        {
            id: 0, 
            name: 'name',
            type: 'text',
            placeholder: 'Name', 
            label: 'Name',
            required: true,
            errorMessage: validateName(formData.name)
        },
        {
            id: 1, 
            name: 'email',
            type: 'text',
            placeholder: 'Email', 
            label: 'Email',
            required: true,
            errorMessage: validateEmail(formData.email)
        },
        {
            id: 2, 
            name: 'password',
            type: 'password',
            placeholder: 'Password', 
            label: 'Password',
            required: true,
            errorMessage: validatePassword(formData.password)
        },
        {
            id: 3, 
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password', 
            label: 'Confirm Password',
            required: true,
            errorMessage: validatePasswordMatch,


        },

    ]

    //Listen to input changes
    const onChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };

    
    //Send Form
    const handleSubmit = async (e) =>{
        e.preventDefault()
        register(formData)
        .then((data)=>{
            setPopupMessageStatus(true)
            setIsPopupActive(true)
            })
            .catch((err) => {
                console.log('User already exists in database');
                setPopupMessageStatus(false)
                setIsPopupActive(true)
                console.log(err)
            })
        // 
    }

    return(
        <>
            <div className='sign-in'>
                <SuccessPopup isPopupActive={isPopupActive} popupMessageStatus={popupMessageStatus}/>
                <img src={italiaLogo} alt="italia restaurant logo" />
                <div className='sign-in__modal'>
                    <h2>Sign Up</h2>
                    <form onSubmit={handleSubmit}>
                        {inputs.map((input) => 
                            (<FormInput
                                key={input.id}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                                onChange={onChange}
                                errorMessage={input.errorMessage}
                            />)
                        )}              
                        <button className={isFormValid ? 'sign-in__button' : 'sign-in__button sign-in__button_inactive'}>Submit</button>
                    </form>
                    <p>Already a member? <Link to="/signin" className='sign-up__link' id='sign-up__link'>Sign in now</Link></p>
                </div>
            </div>
        </>
    )
}