// TRAINING

import React, { useContext } from 'react'

// Styles
import { Conteiner, ConteinerTags, ConteinerTraining } from './styles/styles_index'

// CONTEXTO
import ThemeContext from '../../context/ThemeContext'

// ICONES

// COMPONENTS
import Search from '../../components/Search';
import BoxFeedPosts from '../../components/BoxFeedPosts';


// IMG DE TREINAMENTOS
import imgTreiDevol from '../../assets/png/treinamento_devo.png'








const Training = () => {
    const currentTheme = useContext(ThemeContext)

    return (
        <ConteinerTraining props={currentTheme} >

            <div className='boxes_conteiner'>
                <Search />
            </div>
            <div className='boxes_conteiner'>
                <div className='training_screen'></div>


                <div className='boxes--i_Conteiner'>
                    <div className='--f'>
                        <p>FEED</p>
                        <select className='selectOpt'>
                            <option value="opcao1">Operacional</option>
                            <option value="opcao2">Atendimento</option>
                            <option value="opcao3">Outros</option>
                        </select>
                    </div>
                    <div className='--iConteiner'>
                        <BoxFeedPosts img={imgTreiDevol} />
                        <BoxFeedPosts img={imgTreiDevol} />
                        <BoxFeedPosts img={imgTreiDevol} />
                        <BoxFeedPosts img={imgTreiDevol} />
                    








                        {/* <div className='--i'>
                            <div className='    '>
                            </div>
                        </div>
                        <div className='--i'></div>
                        <div className='--i'></div>
                        <div className='--i'></div> */}
                    </div>
                </div>

            </div>

        </ConteinerTraining >
    )
}

export default Training