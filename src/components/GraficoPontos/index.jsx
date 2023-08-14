import React from 'react'
import { GraficoPontosConteiner } from './styles'

const GraficoPontos = ({ months, points }) => {
    return (
        <GraficoPontosConteiner>
                
            {/* LINHA DA ESQUERDA <--  */}
            <div className='box_content'>
                <div className='grafico_x'>
                    <p>10p</p>
                    <p>5p</p>
                    <p>0p</p>
                </div>
            </div>


            {/* LINHA DA DIREITA --> */}
            <div className='box_content'>



                {/* QUADRO DE METRICAS */}
                <div className='grafico_x'>
                    <div className='--i'></div>
                    <div className='--i'></div>
                    <div className='--i'></div>
                    <div className='--i'></div>
                    <div className='--i'></div>
                    <div className='--i'></div>
                    <div className='--i'></div>
                </div>

                {/* QUADRO DE MESES */}
                <div className='grafico_x'>
                    <p>jan</p>
                    <p>fev</p>
                    <p>mar</p>
                    <p>abr</p>
                    <p>mai</p>
                    <p>jun</p>
                    <p>jul</p>

                </div>
            </div>

        </GraficoPontosConteiner>
    )
}

export default GraficoPontos