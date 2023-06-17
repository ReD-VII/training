import React, { useEffect, useState } from 'react'
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom'

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




const Layout = () => {

  const { currentTheme } = useTheme('dark') //dark  light

  const location = useLocation()



  // THEME
  useEffect(() => {
    console.log(currentTheme)

  }, [currentTheme])


  // NAVEGAÇÂO
  // useEffect(() => {
  //   window.scrollTo(0, 0)
  // }, [])




  return (
    <Conteiner props={currentTheme}>

      {/* CABEÇALHO */}
      <div className='boxes'>
        <div className='header_boxes'>
          <img src={logo} alt="" />
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
      <div className='boxes'>
        <Outlet />
      </div>
      <div className='boxes'>
        BOX 4
      </div>

    </Conteiner>
  )
}

export default Layout