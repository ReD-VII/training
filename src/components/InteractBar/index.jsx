import React, { useContext } from 'react'
import { ContentInteract } from './styles'
import { IoHeartOutline, IoHeartSharp, IoChatbubbleOutline, IoExpandSharp, IoPlayCircleOutline } from "react-icons/io5";


import ThemeContext from '../../context/ThemeContext';



const InteractBar = () => {
  const StyleContext = useContext(ThemeContext)
  
  
  return (
    <ContentInteract props={StyleContext}>
      <div className='boxes_interact'>
        <IoHeartSharp className='icon_interact' color='red' />
      </div>
      <div className='boxes_interact'>
        <IoChatbubbleOutline className='icon_interact' size={20}/>
      </div>
      <div className='boxes_interact'>

      </div>
      <div className='boxes_interact'>
        <IoExpandSharp className='icon_interact' size={20}/>
      </div>
      <div className='boxes_interact'>
        <IoPlayCircleOutline className='icon_interact'  />
      </div>
    </ContentInteract>
  )
}

export default InteractBar