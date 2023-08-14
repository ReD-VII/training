import React, { useContext } from 'react'
import { ShortProfileConteynerStyle } from './styles'


import ThemeContext from '../../context/ThemeContext'




import avatar from '../../assets/svg/avatar.svg'
import { useAuthValue } from '../../context/UserAuthContext'
import { useAuthentication } from '../../hooks/useUserFirebase'

const ShortProfile = () => {

  const currenTheme = useContext(ThemeContext)
  const { user } = useAuthValue()
  const { logout } = useAuthentication()
  console.log(user)



  return (
    <>
      <ShortProfileConteynerStyle props={currenTheme}>
        <div className='avatar_conteiner'>
          <img src={avatar} alt="avatar" />
        </div>
        <div className='info_conteiner_profile'>
          <p>
            <li>{user ? user.displayName : <>usuario deslogado</>}</li>
          </p>
          <p>
            <li>{user ? user.email : <>usuario deslogado</>}</li>
          </p>
          <button
            style={{
              border: 'none',
              width: '20%',
              background: 'orange',
              marginLeft: '5px',
              borderRadius: '4px',
              color: '#fff',
            }}
            onClick={() => logout()}>
            Sair
          </button>
        </div>
      </ShortProfileConteynerStyle>
    </>
  )
}

export default ShortProfile