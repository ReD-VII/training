import { styled } from "styled-components";



export const Conteiner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100vw;
    height: 100vh;
    

    background: ${({ props }) => props ? props.bg : '#fff'};
    
    .boxes{
        display: flex;
        /* text-align: center;
        justify-content: center; */
        color: ${({ props }) => props ? props.color : '#fff'};
        /* align-items: center; */
        /* border: 1px solid red; */
    }


    .boxes:nth-child(1){
        width: 100%;
        height: 57px;
        background: ${({ props }) => props ? props.bg : '#fff'};
        border-bottom: ${({ props }) => props ? props.lineColor : 'solid 1px rgba(242, 242, 242, 1)'};
        margin-top: 0;
        margin-left: 0;
        .header_boxes{
            height: 100%;
        }
        .header_boxes:nth-child(1){
            display: flex;
            justify-content: center;
            align-items: center;
            width: 57px;
            background: ${({ props }) => props ? props.bg : '#fff'};  
            
            img{
                width: 80%;
            }

        }




        .header_boxes:nth-child(2){
            width: calc(100% - 307px);
            /* background: turquoise;    */
        }





        .header_boxes:nth-child(3){
            width: 250px;
            /* background: yellowgreen;    */
        }
    }


    // Menu lateral esquerdo <--
    .boxes:nth-child(2){
        display: flex;
        /* align-items: center; */
        flex-direction: column;
        width: 57px;
        height: calc(100% - 57px);
        background: ${({ props }) => props ? props.bg : '#fff'};
        border-right: ${({ props }) => props ? props.lineColor : 'solid 1px rgba(242, 242, 242, 1)'};  
        
        nav{
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 80%;
            margin-top: 50%;
            /* background: red; */
        }

        li{
            display: flex;
            justify-content: center;
            align-items: center;
            /* background: white; */
            margin: 2px;
            width: 50px;
            height: 50px;
        }
        .icon{
            font-size: 1.2em;
            color: ${({ props }) => props ? props.color : '#000'};
        }



        .btn_config{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50px;
            height: 50px;
            /* background: tomato; */
            margin: auto;
            margin-bottom: 10px;
            cursor: pointer;
            border-top: ${({ props }) => props ? props.marginTopConf : '#000'};
        }
        .icon_config{
            font-size: 1.8em;
        }

    }

    // CANVAS Area de apresentação ! !
    .boxes:nth-child(3){
        width: calc(100% - 250px - 57px);
        height: calc(100% - 57px);
        background-color: ${({ props }) => props ? props.bg : '#fff'};
        margin: auto;
        margin-left: 0;
        overflow: auto;
        scrollbar-width: none; /* Para navegadores Firefox */
        -ms-overflow-style: none; /* Para navegadores IE/Edge */
    }
    .boxes:nth-child(3)::-webkit-scrollbar {
        display: none; /* Para navegadores Chrome, Safari e Opera */
    }

    // Latelra esquerda --> 
    .boxes:nth-child(4){
        position: absolute;
        width: 250px;
        height: 100%;
        background-color: ${({ props }) => props ? props.bg : '#fff'};
        margin: auto;
        right: 0;
        z-index: 2;
        border-left: ${({ props }) => props ? props.lineColor : 'solid 1px rgba(242, 242, 242, 1)'};


        display: flex;

    }




    /* Estilos para dispositivos móveis */
    @media only screen and (max-device-width: 768px) {

        // Menu inferior 
        .boxes:nth-child(2){
            justify-content: space-around;
            /* align-items: unset; */
            order: 3;
            width: 100%;
            height: 57px;
            margin: auto;
            margin-bottom: 0;
            /* background: blue; */
            border: none;





            nav{
                display: flex;
                flex-direction: row;
                width: 100%;
                height: 57px;
                margin: 0;
                /* background: yellowgreen; */
            }
            ul{
                display: flex;
                justify-content: space-around;
                align-items: center;
                width: 100%;
                height: 100%;
                /* background: tomato; */
            }
            li{
                display: flex;
                flex-direction: row; /* Alinha os itens horizontalmente */
                /* background: blue; */
            }
            .icon{
                font-size: 1.8em    ;
                color: ${({ props }) => props ? props.color : '#000'};
            }

            .btn_config{
                display: none;
            }

        }

        // CANVAS area de apresentação
        .boxes:nth-child(3){
            width: 100%;
            height: calc(100% - 57px - 57px);
        }

        // Desativado
        .boxes:nth-child(4){
            display: none;
        }
    }








`

