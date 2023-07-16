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
    // BOX LIKE E SUMMARY
    .barBoxes:nth-child(2){
        position: relative;
        justify-content: flex-start;
        align-items: flex-start;
        width: 10%;
        padding:0;
        margin: 0;
        /* background: yellowgreen; */



        .icons{
            margin: auto;
            margin-left: 0;
        }
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


    @media only screen and (max-device-width: 768px) {

        .barBoxes:nth-child(2){
            /* position: relative;
            justify-content: flex-start;
            align-items: flex-start;
            width: 10%;
            padding:0;
            margin: 0;
            background: yellowgreen; */



        .icons{
            margin: auto;
            margin-left: 0;
        }
    }


    }


`

export const BoxFloatingBarConteiner = styled.div`
    position: absolute;
    min-width: 14em;
    height: auto;
    margin: auto;
    margin-top: 35px;
    margin-left: 0;
    border-radius: 6px;
    padding: 10px 20px;
    padding-bottom: 20px;
    background: rgba(255, 255, 255, 0.90);
    /* background: #c2c2c2; */
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    border: 1px solid #CCC;
    -webkit-backdrop-filter: blur(5px);
    opacity: ${({ props }) => (props.action ? 1 : 0)};   
    transform: ${({ props }) => (props.action ? 'scale(1)' : 'scale(0)')};
    transition: opacity 0.3s ease, transform 0.3s ease;




    





    nav{

        width: 100%;
        height: 100%;
        /* background: red; */

        ul{
            margin: 10px 0;



            li{
                list-style: none;
                margin: 10px 0;
                
                a{
                    text-transform: capitalize !important;
                    font-size: .8em;
                    margin: 5px 0;
                    text-decoration: none;
                    color: #444;
                    font-weight: 600;
                    
                }
            }
        }
    }



    &::after{
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background: white;
        top: -6px;
        left: 6px;
        transform: rotate(45deg);
        border-left: 1px solid #CCC;
        border-top: 1px solid #CCC;
    }




`