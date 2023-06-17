import React from 'react'
import YouTube from 'react-youtube';
const Devolucao = () => {
    const videoId = 'bPkMwN6OWLI';

    const playerOptions = {
        height: '360',
        width: '640',
        playerVars: {
            autoplay: 1,
            controls: 1,
            modestbranding: 1, // 1 para ocultar o logotipo e o título do YouTube
            showinfo: 0, // 0 para ocultar o título e outras informações do vídeo
            color: 'black', // 'red', 'white' ou 'black'         
        },
    };

    return (
        <div>
            <YouTube videoId={videoId} opts={playerOptions} />
        </div>
    )

}

export default Devolucao