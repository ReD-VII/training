import React, { useContext, useState } from 'react';
import { ConteinerSignIn } from './styles';
import backImg from '../../assets/svg/bgSignIn.svg';
import ThemeContext from '../../context/ThemeContext';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useUserFirebase';

const SignUp = () => {
  const themeCurrent = useContext(ThemeContext);
  const { createUser, error: authError, loading } = useAuthentication();
  const [resp, setResp] = useState(null);

  const [formData, setFormData] = useState({
    userName: '',
    passWord: '',
    confirmPassWord: '',
    userMail: '',
    phoneNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    setResp(await createUser(formData));

    if (resp) {
      console.log(resp);
    }
    console.log(process.env.REACT_APP_API_KEY);
  };

  return (
    <ConteinerSignIn props={themeCurrent}>
      <div className='boxsConteiner'>
        <img src={backImg} alt='bg' />
      </div>
      <div className='boxsConteiner'>
        <form className='form' onSubmit={handleSubmit}>
          <p className='form-title'>Sign in to your account</p>

          <div className='input-container'>
            <input placeholder='Enter your name' type='name' onChange={(e) => setFormData({ ...formData, userName: e.target.value })} required />
            <span>
              <svg
                width='24'
                height='24'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <path d='M12 19l7-7 3 3-7 7-3-3z' />
                <path d='M2 9.69l7.584 7.585a2 2 0 002.828 0L22 5.697V2H18.303z' />
              </svg>
            </span>
          </div>

          {/* Other input fields */}

          <button className='submit' type='submit'>
            Sign Up
          </button>
          <p className='signup-link'>
            Do you have an account?
            <Link to={'/signin'}>Sign In</Link>
          </p>
        </form>
      </div>
    </ConteinerSignIn>
  );
};

export default SignUp;