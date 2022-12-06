import axios from 'axios'
import React from 'react'

import LoadSvg from '../assets/loadSvg.svg'
import { login } from '../store/authSlice'
import { useAppDispatch } from '../store/hooks'

const Login: React.FC = () => {
    const dispatch = useAppDispatch()
    const [type, setType] = React.useState<string>("SIGNIN_USER")

    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [isLoading, setIsLoading] = React.useState<boolean>(false) 

    const createRequestToLogin = (type: string) => {
        setIsLoading(true)
        axios({
            url: import.meta.env.SERVER_URI,
            method: "POST",
            data: {
                type: type,
                email,
                password
            }
        }).then(res => {
            if (res.data.status) {
                dispatch(login({id: res.data.user.id, email}))
            } else {
                setTimeout(() => {
                    setIsLoading(false)
                    alert('User didnt find')
                }, 500)
            }
        })
    }

    return (
        <div className='login-container'>
            <div className="login-container__content">
                <p className="login-container__title">{type === 'SIGNIN_USER' ? 'Sign in' : 'Sing up'}</p>
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
                        createRequestToLogin(type)
                    } else alert("You didnt fill all fields")
                }}> { isLoading ? <img src={LoadSvg} /> : (type === 'SIGNIN_USER' ? 'Sign in' : 'Sing up') } </button>
                <div className="login-container__propose">
                    {type === 'SIGNIN_USER' ? 
                        <React.Fragment>
                            <p>Don't have an account?</p>
                            <button onClick={() => setType('SIGNUP_USER')}>Sing up</button>
                        </React.Fragment>
                    :
                        <React.Fragment>
                            <p>Already have an account?</p>
                            <button onClick={() => setType('SIGNIN_USER')}>Sign in</button>
                        </React.Fragment>
                    }
                </div>
            </div>
        </div>
    )
}

export default Login