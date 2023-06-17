import React from 'react'

// Styles
import { Conteiner } from './styles/styles_index'
import Procv from './Procv'

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';



const Training = () => {
    const location = useLocation();
    const parentRef = useRef(null);
  
    useEffect(() => {
      if (parentRef.current) {
        parentRef.current.scrollTo(0, 0);
      }
    }, [location]); 

    return (
        <Conteiner ref={parentRef}>
            <Procv />
            
        </Conteiner>
    )
}

export default Training