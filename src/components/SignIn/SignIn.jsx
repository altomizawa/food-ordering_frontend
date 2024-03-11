import {useEffect, useState, useContext} from 'react'
import { Link, useNavigate, Navigate} from 'react-router-dom';
import italiaLogo from '../../images/Italia_logo_only.svg'
import FormInput from '../FormInput/FormInput';
import { authorize, getContent } from '../../utils/auth';

import { UserContext } from '../Context/UserContext';

export default function SignIn({setIsLoggedIn}){

    // DEFINE USE CONTEXT VARIABLES
    const { setUserContextData } = useContext(UserContext)

    const navigate = useNavigate();

    // Check if there's a token and redirect to menu if token=true
    useEffect(()=>{
        tokenCheck();
    }),[]

    // CHECK FOR TOKEN
    const tokenCheck = () => {
        const token = localStorage.getItem('token')
        if(token) {
            handleLogin(token);
        }
        return;
    }

    //HANDLE LOGIN
    const handleLogin = async (token) => {
        try{
            const userData = await getContent(token)
            setUserContextData(userData)
            setIsLoggedIn(true);
            navigate('/menu')
        } catch {console.log('error')}
        
    }
  

    const [formData, setFormData] = useState({
        username: '',
        password: '', 
    })

    //Validate form fields
    const [isFormValid, setIsFormValid] = useState(false);

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

    useEffect(formValidation),[formData]

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
                return console.log('Error during login')
            }
            localStorage.setItem('token', token) // Store token in local Storage
            handleLogin(token);
        } catch(err) {console.log(`Error during login. Error:${err}`)}
        
    }

    return(
        <>
            <div className='sign-in'>
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