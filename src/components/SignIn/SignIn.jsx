import {useState} from 'react'
import italiaLogo from '../../images/Italia_logo_only.svg'
import FormInput from '../FormInput/FormInput';


export default function SignIn(){
    const [formData, setFormData] = useState({
        username: '',
        password: '', 
    })

    const inputs = [
        {
            id: 1, 
            name: 'username',
            type: 'text',
            placeholder: 'Username', 
            label: 'Username'
        },
        {
            id: 2, 
            name: 'password',
            type: 'password',
            placeholder: 'Password', 
            label: 'Password'
        },

    ]

    const onChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
        console.log(formData)
      };

    function handleSubmit(e){
        e.preventDefault()
        console.log(email)
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
                        <button className='sign-in__button'>Submit</button>
                    </form>
                    <p>Not a member? <a>Sign up now!</a></p>
                </div>
            </div>
        </>
    )
}