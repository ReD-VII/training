import React, { useContext } from 'react'
import { Conteiner } from './styles'

import ThemeContext from '../../context/ThemeContext';

import { BiSearchAlt } from "react-icons/bi";

const Search = () => {

  const currenTheme = useContext(ThemeContext)

  return (
    <Conteiner props={currenTheme}>
        <form>
            <input type="text" placeholder='Pesquisar'/>
        </form>
        <BiSearchAlt className='icon' size={25}/>
    </Conteiner>
  )
}

export default Search