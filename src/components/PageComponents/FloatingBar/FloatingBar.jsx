import React from 'react'
import { FloatingBarConteiner } from './styles'

// ICONES
import {  
    IoArrowRedoOutline,
    IoBalloonOutline,
    IoHeartOutline,
    IoEllipsisHorizontalOutline,
} from "react-icons/io5";



const FloatingBar = () => {
  return (
    <FloatingBarConteiner>
        <div className='barBoxes'><IoHeartOutline className='icons' /></div>
        <div className='barBoxes'><IoBalloonOutline className='icons' /></div>
        <div className='barBoxes'></div>
        <div className='barBoxes'><IoEllipsisHorizontalOutline className='icons' /></div>
        <div className='barBoxes'><IoArrowRedoOutline className='icons' /></div>
    </FloatingBarConteiner>
  )
}

export default FloatingBar