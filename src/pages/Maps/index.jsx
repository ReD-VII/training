import React from 'react'
import { MapConteinerStyles } from './styles'

const Maps = () => {
  return (
    <MapConteinerStyles>
        <div className='maps_conteiner'>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            output="embed"
            src="https://www.google.com/maps/d/u/0/embed?mid=1aySHQJzfaWDcR52oj09Folb6O_deFG0&ehbc=2E312F"  
            ></iframe></div>
    </MapConteinerStyles>
  )
}

export default Maps