import { styled } from "styled-components";



export const Conteiner = styled.div`
    width: 100%;
    height: 100%;
    
    .image-container {
        position: relative;
        overflow: hidden;
    }

    .image-container img {
        width: 100%;
        transition: transform 0.3s ease-in-out;
        cursor: zoom-in;
    }

    .zoomed {
        transform: scale(1.6); /* Ajuste o valor conforme necessário para ampliação desejada */
        opacity: 1;
        background: rgba(0, 0, 0, 0.7); /* Fundo escuro com opacidade */
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999; /* Para garantir que esteja acima de outros elementos */
    }

    .zoomed img {
        max-width: 60%;
        max-height: 60%;
        object-fit: contain; /* Garante que a imagem seja exibida completamente */
    }

    @media only screen and (max-device-width: 768px) {
        .zoomed {
            transform: scale(6); /* Ajuste o valor conforme necessário para ampliação desejada */
            opacity: 1;
            background: rgba(0, 0, 0, 0.7); /* Fundo escuro com opacidade */
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 999; /* Para garantir que esteja acima de outros elementos */
        }
    }

`