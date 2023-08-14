import { styled } from "styled-components";


export const GraficoPontosConteiner = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
    padding-top: 25px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background: #fff;
    box-shadow:  5px 5px 10px #cacaca99,
        -5px -5px 50px #f6f6f699;
    overflow: hidden;


    /* AREA DA DIREITA VERTICAL <-- */
    .box_content:nth-child(1){
        width: 25px;
        height: 100%;
        /* background: orange; */
        


        .grafico_x{
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
            height: calc(100% - 25px);
            /* background: red; */



            p{
                color: #ccc;
                font-size: .7em;
                text-align: right;
                margin-right: 4px;
            }
        }

    }


    /* AREA DA ESQUERDA HORIZONTAL ---- */
    .box_content:nth-child(2){
        width: 100%;
        height: 100%;
        margin-right: 15px;
        

        /* GERAL */
        .grafico_x{
            display: flex;
            width: calc(100% - 10px);
        }

        /* PIRMEIRO QUADRO */
        .grafico_x:nth-child(1){
            justify-content: space-between;
            align-items: flex-end;
            height: calc(100% - 25px);
            /* background: violet; */
            border-left: 1px dashed #ccc;
            border-bottom: 1px dashed #ccc;
            
            
            /* LINHAS DO GRAFICO VERTICAL */
            .--i{
                position: relative;
                width: 10px;
                height: 100%;
                margin: 0 5px;
                margin-bottom: 0;
                background: #254852;
                border-radius: 50px;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
            }
            .--i:nth-child(1){
                height: 50%;
            }
            .--i:nth-child(2){
                height: 20%;
            }
            .--i:nth-child(3){
                height: 80%;
            }
            .--i:nth-child(4){
                height: 60%;
            }
            .--i:nth-child(5){
                height: 10%;
            }
            .--i:nth-child(6){
                height: 90%;
            }
            .--i:nth-child(7){
                height: 70%;
            }
            .--i::after{
                content: '';
                position: absolute;
                width: 6px;
                margin: auto;
                left: 0;
                right: 0;
                border-radius: 50px;
                border-bottom-left-radius: 0;
                border-bottom-right-radius: 0;
                border-right: 1px solid #fff;
                height: 100% !important;
                background: transparent;
                filter: blur(.07em);
            }


        }

        /* SEGUNDO GRAFICO, INFERIOR */
        .grafico_x:nth-child(2){
            height: 25px;
            align-items: center;
            justify-content: space-between;
            font-size: .7em;
            color: #ccc;
            

            /* ULTIMOS MESES DO ANO */
            p:last-child {
                padding: 0px 2px;
                border-radius: 4px;
                background: #254852;
            }
        }
    }

    


`