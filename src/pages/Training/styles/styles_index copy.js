import { styled } from "styled-components";

export const ConteinerTraining = styled.div`
    max-width: 100%;
    height: auto;
    padding: 30px 50px;
    margin: auto;
    margin-bottom: 100px;
    

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
















     BACKUP
     header{
        width: 100%;
        height: auto;
        /* background: blue; */
        padding: 10px 0;
        margin-bottom: 0px;

        
        h1{
            font-weight: 900;
            font-size: 42px;
            color: ${({ props }) => props ? props.titleColor : '#000'};
        }
        p{
            font-size: 22px;
            font-weight: 600;
            color: ${({ props }) => props ? props.headerP : '#000'};
        }
    }

    main{
        width: 100%;

    }

    .titleImage{
        max-width: 100%;
        /* margin: 10px auto; */
        margin-bottom: 15px;
    }
    
    .exImage{
        display: flex;
        justify-content: center;
        max-width: 100%;
        margin: 15px auto;
        /* margin-bottom: 15px; */
    }

    section{
        margin-bottom: 50px;
    }

    .tagCode{
        display: flex;
        align-items: center;
        width: 100%;
        height: auto;
        background: ${({props}) => props ? props.tacCodeBG : '#fff'};
        border-radius: 4px;
        margin: 30px 0px;
        padding: 20px 20px;
        white-space: pre-wrap;
        overflow: auto;
    }

    footer{
        height: 500px;
    }



    .boxes_Training{
        background: red;
    }

     /* Estilos para dispositivos móveis */
     @media only screen and (max-device-width: 768px) {
        padding: 30px 20px;;
     }



`
