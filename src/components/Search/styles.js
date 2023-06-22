import { styled } from "styled-components";





export const Conteiner = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    width: 300px;
    height: 35px;
    background: #eaeaea;
    border-radius: 0.3em;
    padding: 5px;
    padding-left: 15px;


    form{
        width: 90%;
        height: 100%;

    }
    input:focus {
        outline: none;
    }
    input{
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
    }

    .icon{
        margin: auto;
        margin-right: 0;
        color: #a5a5a5;
    }

    @media only screen and (max-device-width: 768px) {
        width: 100%;
    }
`