// TRAINING

import React, { useContext } from 'react'

// Styles
import { Conteiner, ConteinerTags, ConteinerTraining } from './styles/styles_index'

// CONTEXTO
import ThemeContext from '../../context/ThemeContext'

// ICONES


import Search from '../../components/Search';

const Training = () => {
    const currentTheme = useContext(ThemeContext)

    return (
        <ConteinerTraining props={currentTheme}>

            <div className='boxes_conteiner'>
                <Search />
            </div>
            <div className='boxes_conteiner'>
                <div className='training_screen'></div>

                <div className='boxes--i'>
                    <div className='--i'></div>
                    <div className='--i'></div>
                    <div className='--i'></div>
                    <div className='--i'></div>
                </div>
                
            </div>

        </ConteinerTraining >
    )
}

export default Training