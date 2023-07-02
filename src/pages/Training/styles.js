import { styled } from "styled-components";





// Desktop
import banner from '../../assets/svg/banner_training.svg'

// Mobile
import bannerMobile from '../../assets/svg/banner_training_mobile.svg'






export const TrainingConteiner = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    /* background: papayawhip; */
    padding: 20px;
    padding-bottom: 0;

    .box_training{
        width: 100%;
        margin-bottom: 10px;
    }

    // BARRA DE PESQUISA
    .box_training:nth-child(1){
        height: 40px;
        /* background: red; */
    }

    // BANNER PRINCIPAL
    .box_training:nth-child(2){
        height: auto;
        /* background: greenyellow; */
        background: red;
        /* background: rgba(217, 217, 217, 0.58); */
        border: 1px solid white;
        box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.10);
        border-radius: 8px;

        
        // BOX BANNER
        .box_banner{
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 250px;
            margin-top: 10px;
            border-radius: 8px;
            background-image: url(${banner});
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 120% 0px;
            background-size: 76%;
            padding: 20px;



            
            /* TITULO     */
            h2{
                width: 50%;
                /* background: yellowgreen; */
                color: white;
                font-size: 2.4em;
                text-align: left;
                font-weight: 500;
                
            }
            .-title_big{
                color: white;
                text-align: left;
                font-size: 1em;
                font-weight: 700;
            }
            p{
                margin-top: 10px;
                text-align: left;
                color: white;
                font-size: 1.2em;
                font-weight: 500;
            }

            .-insign{
                display: flex;
                width: auto;
                height: auto;
                /* background: blue; */
                margin: auto;
                margin-bottom: 0;
                margin-left: 0;
                border: 1px solid #fff;
                border-radius: 50px;
                padding: 2px;

                color: white;
                font-size: .8em;
            }
            .-icon{
                margin: 5px;
            }
        }
    }

    // CARDS
    .box_training:nth-child(3){
        height: auto;
        /* background: blueviolet; */
        margin-top: 10px;

        // FEED BARRA DE PESQUISA DO FEED
        .--f{
            display: flex;
            width: 100%;
            height: 20px;
            /* background: red; */
            margin-bottom: 10px;

            p{
                font-weight: 700;
            }
            select{
                margin-left: 10px;
                border-radius: 4px;
                background: transparent;
            }
        }

        
        .--g{
            display: flex;
            flex-wrap: wrap;
            flex-direction: row;
            justify-content: space-between;
            width: 100%;
            height: auto;
            /* background: yellowgreen; */
            
        }
    }









    @media only screen and (max-device-width: 768px) {


        .box_training:nth-child(2){
            margin-top: 20px;


        
            // BANNER 
            .box_banner{
                width: 100%;
                height: 250px;
                margin-top: 10px;
                /* background: greenyellow; */
                border-radius: 8px;

                background-image: url(${bannerMobile});
                background-size: cover;
                background-repeat: no-repeat;
                /* background-position: right; */
                background-position: 0px 30px;
                /* background-size: 200%; */
    
                    /* TITULO     */
                    h2{
                        width: 100%;
                        /* background: yellowgreen; */
                        color: white;
                        font-size: 1.5em;
                        text-align: left;
                        font-weight: 500;
                        
                    }
                    .-title_big{
                        color: white;
                        text-align: left;
                        font-size: 1em;
                        font-weight: 700;
                    }
                    p{
                        width: 50%;
                        margin-top: 10px;
                        text-align: left;
                        color: white;
                        font-size: .9em;
                        font-weight: 500;
                    }

                    .-insign{
                        display: flex;
                        width: auto;
                        height: auto;
                        /* background: blue; */
                        margin: auto;
                        margin-bottom: 0;
                        margin-left: 0;
                        border: 1px solid #fff;
                        border-radius: 50px;
                        padding: 2px;

                        color: white;
                        font-size: .8em;
                    }
                    .-icon{
                        margin: 5px;
                    }
            }

        }  







        // Cards Conteiner
        .box_training:nth-child(3){

            // Area das cards
            .--g{
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
        }



    }



`