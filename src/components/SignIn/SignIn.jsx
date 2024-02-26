import {useState} from 'react'
import italiaLogo from '../../images/Italia_logo_only.svg'


export default function SignIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('password')
    const [formData, setFormData] = useState({
        name: '',
        passwword: '', 
        confirmPassword: '',
    })

    const handleInput = (e) => {
        setFormData({
          ...formData,
          [e.name]: e.value,
        });
        console.log(formData)
      };

    function handleInputEmail(email){
        console.log(email)
        setEmail(email)
    }

    function handleFormSubmit(e){
        e.preventDefault()
        console.log(email)
    }

    return(
        <>
            <div className='sign-in'>
                <img src={italiaLogo} alt="italia restaurant logo" />
                <div className='sign-in__modal'>
                    <h2>Enter your Account</h2>
                    <form onSubmit={handleFormSubmit}>
                        <input type="e-mail" name="email" id="email" placeholder='Email' onChange={(e)=>{
                            handleInput(e.target)
                        }} value={email}/>
                        <input type="password" name="password" id="password" placeholder='PassWord' />
                        <button className='sign-in__button'>Submit</button>
                    </form>
                    <p>Not a member? <a>Sign up now!</a></p>
                </div>
            </div>
        </>
    )
}