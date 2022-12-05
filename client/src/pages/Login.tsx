import React, { FC } from 'react'
import LoadSvg from '../assets/loadSvg.svg'
import { login } from '../store/authSlice'
import { useAppDispatch } from '../store/hooks'

const Login: FC = () => {
    const dispatch = useAppDispatch()

    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(false) 

    return (
        <div className='login-container'>
            <div className="login-container__content">
                <p className="login-container__title">Chat Login</p>
                <p className="login-container__description">
                    Hey, Enter your details to get sign in <br/> to your account
                </p>
                <input 
                    type="email" 
                    placeholder="Email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <button onClick={() => {
                    if (email && password) {
                        setIsLoading(true)
                        setTimeout(() => dispatch(login(email)), 1000)
                    } else {
                        alert("You didnt fill all fields")
                    }
                }}> { isLoading ? <img src={LoadSvg} /> : 'Sign in' } </button>
            </div>
        </div>
    )
}

export default Login