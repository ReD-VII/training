import React, { useContext } from 'react'
import { ShortProfileConteynerStyle } from './styles'


import ThemeContext from '../../context/ThemeContext'




import avatar from '../../assets/svg/avatar.svg'

const ShortProfile = () => {
  
  const currenTheme = useContext(ThemeContext)
  
  return (
    <ShortProfileConteynerStyle props={currenTheme}>
        <div className='avatar_conteiner'>
          <img src={avatar} alt="avatar" />
        </div>
        <div className='info_conteiner_profile'>
            <p>
                <li>Usuario primario</li>
            </p>
            <p>
                <li>mail@mail.com</li>
            </p>
        </div>
    </ShortProfileConteynerStyle>
  )
}

export default ShortProfile