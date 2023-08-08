import React, { useContext, useEffect, useState } from 'react'
import { ConteinerSignIn } from './styles'




import backImg from '../../assets/svg/bgSignIn.svg'
import ThemeContext from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useUserFirebase';



const SignIn = () => {

    const [showPassword, setShowPassword] = useState(false);
    const themeCurrent = useContext(ThemeContext)
    const [error, setError] = useState('')
    const [formData, setFormData] = useState({
        passWord: '',
        userMail: ''
    })
    const { login, loading, error: authError } = useAuthentication()








    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(formData)
        const resp = login(formData)
    }


    useEffect(() => {
        setError(authError)
        console.log(error)
    }, [authError])









    return (
        <ConteinerSignIn props={themeCurrent}>
            <div className='boxsConteiner'>
                <img src={backImg} alt="bg" />
            </div>
            <div className='boxsConteiner'>
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form-title">Sign in to your account</p>
                    <div className="input-container">
                        <input placeholder="Enter email" type="email" onChange={(e) => setFormData({ ...formData, userMail: e.target.value })} />
                        <span>
                            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                                ></path>
                            </svg>
                        </span>
                    </div>
                    <div className="input-container">
                        <input placeholder="Enter password" type={showPassword ? "text" : "password"} onChange={(e) => setFormData({ ...formData, passWord: e.target.value })} />
                        <span onClick={handleTogglePassword}>
                            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                {showPassword ? (
                                    <path
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                                    ></path>
                                ) : (
                                    <path
                                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                                    ></path>
                                )}
                                <path
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                    strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                                ></path>
                            </svg>
                        </span>
                    </div>
                    <button className="submit" type="submit">
                        Sign in
                    </button>
                    <p className="signup-link">
                        No account?
                        <Link to={'/register'}>
                            Sign up
                        </Link>

                    </p>
                </form>
                <div className='erro_msg'>
                    {authError &&
                        <p >{authError}</p>
                    }
                </div>

            </div>
        </ConteinerSignIn>
    )
}

export default SignIn