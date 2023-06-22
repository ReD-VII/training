import React from 'react'
import { Conteiner } from './styles'



import { BiSearchAlt } from "react-icons/bi";
const Search = () => {
  return (
    <Conteiner>
        <form>
            <input type="text" placeholder='Pesquisar'/>
        </form>
        <BiSearchAlt className='icon' size={25}/>
    </Conteiner>
  )
}

export default Search