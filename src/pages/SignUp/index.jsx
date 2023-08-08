import React, { useContext, useState } from 'react'
import { ConteinerSignIn } from './styles'




import backImg from '../../assets/svg/bgSignIn.svg'
import ThemeContext from '../../context/ThemeContext';
import { Link, Navigate } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useUserFirebase';



const SignUp = () => {
    const themeCurrent = useContext(ThemeContext)
    const { createUser, error: authError, loading } = useAuthentication()
    const [resp, setResp] = useState(null);



    const [formData, setFormData] = useState({
        userName: '',
        passWord: '',
        confirmPassWord: '',
        userMail: '',
        phoneNumber: ''
    })
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);

        setResp(await createUser(formData));

        if (resp) {
            console.log(`Resposta: ${resp}`);
            console.log(resp);
        }

    };



    return (
        <ConteinerSignIn props={themeCurrent}>
            <div className='boxsConteiner'>
                <img src={backImg} alt="bg" />
            </div>
            <div className='boxsConteiner'>
                <form className="form" onSubmit={handleSubmit}>
                    <p className="form-title">Sign in to your account</p>


                    {/* NOME */}
                    <div className="input-container">
                        <input placeholder="Enter your name" type="name" onChange={(e) => setFormData({ ...formData, userName: e.target.value })} required />

                        <span>
                            <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                                <path d="M2 9.69l7.584 7.585a2 2 0 002.828 0L22 5.697V2H18.303z" />
                            </svg>
                        </span>

                    </div>

                    {/* EMAIL */}
                    <div className="input-container">
                        <input placeholder="Enter email" type="email" onChange={(e) => setFormData({ ...formData, userMail: e.target.value })} required />

                        <span>
                            <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                    strokeWidth="2" strokeLinejoin="round" strokeLinecap="round"
                                ></path>
                            </svg>
                        </span>


                    </div>

                    {/* SENHA */}
                    <div className="input-container">
                        <input placeholder="Enter password" type="password" onChange={(e) => setFormData({ ...formData, passWord: e.target.value })} required />

                        <span>
                            <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </span>

                    </div>

                    {/* REPETIR SENHA */}
                    <div className="input-container">
                        <input placeholder="Repeat password" type="password" onChange={(e) => setFormData({ ...formData, confirmPassWord: e.target.value })} required />

                        <span>
                            <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                            </svg>
                        </span>

                    </div>


                    {/* TELEFONE */}
                    <div className="input-container">
                        <input placeholder="Telefone" type="tel" onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })} required />

                        <span>
                            <i className="fi fi-rr-phone-flip"></i>
                        </span>

                    </div>




                    <button className="submit" type="submit">
                        Sign Up
                    </button>
                    <p className="signup-link">

                        Do you have an account?
                        <Link to={'/signin'}>
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
        </ConteinerSignIn>
    )
}

export default SignUp