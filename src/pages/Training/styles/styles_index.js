import { styled } from "styled-components";

export const Conteiner = styled.div`
    max-width: 100%;
    height: auto;
    padding: 30px 50px;
    margin: auto;
    margin-bottom: 100px;
    /* color: red; */

    h1{
        margin-bottom: 150px;
        text-align: left;
        color: #292929;
        font-size: 42px;
    }
    h2{
        text-align: left;
        margin: 10px auto;
        margin-top: 50px;
    }
    p{
        text-align: left;
        word-wrap: break-word;
    }

    section{
        padding: 0 20px;
        width: 100%;
        /* background: black; */
    }




     /* Estilos para dispositivos móveis */
     @media only screen and (max-device-width: 768px) {
        padding: 30px 5px;

        section{
            text-align: left;
            margin: 10px auto;
            margin-top: 50px;
        }
     }




`

export const ConteinerPost = styled.div`
    width: 100%;
    height: 100%;
    background: #527864;


`