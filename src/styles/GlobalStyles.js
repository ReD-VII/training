import { styled } from "styled-components";


import bgBannerHome from '../assets/svg/banner_home.svg'

// HOME
export const HomeContent = styled.div`
    width: 100%;
    height: 100%;
    /* overflow-x: hidden;
    overflow-y: hidden; */
    text-align: left;
    /* background: blanchedalmond; */


    /* CONTEINER */
    .box_conteiner{
        display: flex;
        width: 100%;
    }


    /* Header BANNERS PRINCIPAIS */
    .box_conteiner:nth-child(1){
        align-items: center;
        height: 35%;
        /* background: blueviolet; */



        /* GERAL */
        .banner_conteiner{
            display: flex;
            margin: 5px;
            /* margin-top: 10px; */
            height: 90%;
            border-radius: 4px;
   
        }

        /* PRIMEIRO QUADRO */
        .banner_conteiner:nth-child(1){
            width: calc(30% - 5px);
            /* background: cadetblue; */
            
        }

        //Bloco direito "MAIOR"
        .banner_conteiner:nth-child(2){
            width: calc(70% - 5px);
            background: slateblue;
            background-image: url(${bgBannerHome}); /* Substitua pelo caminho da sua imagem */
            background-position: right top; /* Posiciona a imagem à direita e no topo */
            background-size: auto; /* Mantém o tamanho natural da imagem */
            background-repeat: no-repeat;
            z-index: 2;
            box-shadow:  5px 5px 10px #cacaca99,
                -5px -5px 50px #f6f6f699;

            .content_box{
                height: 100%;
            }

            /* QUADRO MAIOR PERFIL */
            .content_box:nth-child(1){
                display: flex;
                flex-direction: column;
                width: 50%;
                /* background: turquoise; */
                padding: 10px 25px;

                h2{
                    color: white;
                }
                p{
                    font-size: .9em;
                    color: #fff;
                }



                .rakin{
                    display: flex;
                    justify-content: space-between;
                    width: 90px;
                    height: 30px;
                    background: white;
                    padding: 2px;
                    margin: auto;
                    margin-left: 0;
                    margin-bottom: 0;
                    border-radius: 50px;
                    overflow: hidden;


                    .rakin_box{
                        display: flex;
                        height: 100%;
                    }

                    .rakin_box:nth-child(1){
                        justify-content: center;
                        align-items: center;
                        width: calc( 100% - 26px);
                        /* background: red; */
                        p{
                            align-items: center;
                            color: #ccc;
                            font-size: .8em;
                        }

                    }

                    .rakin_box:nth-child(2){
                        justify-content: center;
                        align-items: center;
                        width: 26px;
                        border-radius: 50px;
                        background: #254852;
                    }
                }



            }
            .content_box:nth-child(2){
                width: 50%; 
                /* background: slategray; */
            }





        }




    }

    .box_conteiner:nth-child(2){
        height: 65%;
        /* background: tomato; */
    }




















    @media only screen and (max-device-width: 768px) {
        padding: 10px 10px;




        .box_conteiner:nth-child(1){
            flex-direction: column;
            height: 50%;
            
            .banner_conteiner:nth-child(1){
                order: 2;
                width: 100% !important;
                /* display: none; */
            }
            
            .banner_conteiner:nth-child(2){
                order: 1;
                width: 100% !important;
                background-position: right -50px bottom !important; /* Posiciona a imagem à direita e no topo */
                background-size: 70%; /* Mantém o tamanho natural da imagem */
                background-repeat: no-repeat;
            }
        }
    }







`