import { styled } from "styled-components";


export const FloatingBarConteiner = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height:30px;
    /* background: #ccc; */
    margin: auto;
    margin-bottom: 20px;
    
    border: 1px solid #ccc;
    border-left: none;
    border-right: none;



    /* CONFIGURAÇÃO GERAL */
    .barBoxes{
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%; 
        font-size: 1.3em;

        // ICONES
        .icons{
            cursor: pointer;
        }
    }

    /* CONFIGURAÇÃO INDIVIDUAL */
    .barBoxes:nth-child(1){
        width: 10%;
        /* background: turquoise; */
    }
    .barBoxes:nth-child(2){
        justify-content: flex-start;
        width: 10%;  
        /* background: yellowgreen; */
    }
    .barBoxes:nth-child(3){
        width: 60%;  
    }
    .barBoxes:nth-child(4){
        justify-content: flex-end;
        width: 10%;  
        /* background: rebeccapurple; */
    }
    .barBoxes:nth-child(5){
        width: 10%;  
        /* background: saddlebrown; */
    }





`