import React, { useContext, useState } from 'react'
import { ShortProfileConteynerStyle } from './styles'


import ThemeContext from '../../context/ThemeContext'




import avatar from '../../assets/svg/avatar.svg'
import { useAuthValue } from '../../context/UserAuthContext'
import { useAuthentication } from '../../hooks/useUserFirebase'

const ShortProfile = () => {

  const currenTheme = useContext(ThemeContext)
  const { user } = useAuthValue()
  const { logout } = useAuthentication()
  
  const [ userName, setUserName ] = useState(user.displayName.split(' '))
  
  










  return (
    <>
      <ShortProfileConteynerStyle props={currenTheme}>
        <div className='avatar_conteiner'>
          <img src={avatar} alt="avatar" />
        </div>
        <div className='info_conteiner_profile'>
          <p>
            <li>{user ? userName[0] : <> usuario deslogado </>}</li>
          </p>
          <p>
            <li>{user ? user.email : <> usuario deslogado </>}</li>
          </p>
          <button
            style={{
              border: 'none',
              width: '20%',
              background: 'orange',
              marginTop: '5px',
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