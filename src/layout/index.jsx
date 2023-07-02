// LAYOUT 


import React, { useContext, useEffect, useRef } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

//Styles
import { Conteiner } from './styles'

// HOOKS
import { useTheme } from '../hooks/useTheme'

// LOGO
import logo from '../assets/svg/logo-57x57.svg'

// ICONS
import { FaHome, FaSitemap, FaStreetView } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";


import ThemeContext from '../context/ThemeContext'


// Components
import ShortProfile from '../components/ShortProfile'









const Layout = () => {

  // RECEBENDO O THEME POR CONTEXTO
  const themeCurrent = useContext(ThemeContext)





  const location = useLocation()
  const scrollableRef = useRef(null);

  useEffect(() => {
    // Obtém o elemento scrollable
    const scrollableElement = scrollableRef.current;

    // Define a posição do scroll para o topo (0)
    scrollableElement.scrollTop = 0;

    // Adicione event listeners ou qualquer lógica adicional aqui, se necessário

    // Limpe o efeito quando o componente for desmontado
    return () => {
      // Faça qualquer limpeza necessária aqui
    };
  }, [location]);





















  return (
    <Conteiner props={themeCurrent}>

      {/* CABEÇALHO */}
      <div className='boxes'>
        <div className='header_boxes'>
          <Link to={'/'}>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className='header_boxes'></div>
        <div className='header_boxes'></div>
      </div>

      <div className='boxes'>
        <nav>
          <ul>
            <li>
              <Link to='/'>
                <FaHome className='icon' />
              </Link>
            </li>
            <li>
              <Link>
                <FaMedal className='icon' />
              </Link>
            </li>
            <li>
              <Link to='training'>
                <FaPlayCircle className='icon' />
              </Link>
            </li>
            <li>
              <Link>
                <FaSitemap className='icon' />
              </Link>
            </li>
            <li>
              <Link>
                <FaStreetView className='icon' />
              </Link>
            </li>
          </ul>
        </nav>

        <div className='btn_config'><IoSettingsOutline className='icon_config' /></div>

      </div>
      <div className='boxes' ref={scrollableRef}>
        <Outlet />
      </div>
      <div className='boxes'>
        <ShortProfile />
      </div>

    </Conteiner>
  )
}

export default Layout