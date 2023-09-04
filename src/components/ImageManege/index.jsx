import React, { useState } from 'react'
import { Conteiner } from './styles'

const ImageManege = ({ img }) => { // Correção: Receba a prop "img" diretamente na função de componente

    const [isZoomed, setIsZoomed] = useState(false)

    const handleClickZoom = () => {
        setIsZoomed(!isZoomed)
    }

    return (
        <Conteiner>
            <div className={`image-zoom ${isZoomed ? 'zoomed' : ''}`}>
                <img
                    className=''
                    src={img} // Correção: Use a prop "img" diretamente aqui
                    alt="Imagem"
                    onClick={() => handleClickZoom()}
                />
            </div>
        </Conteiner>
    )
}

export default ImageManege