import { styled } from "styled-components";




export const TrainigStyleConfig = styled.div`
    width: 100%;
    height: auto;
    padding: 40px; 

    
    header{

        text-align: left;
        
        h1{
            text-align: left;
            margin: 0px 0px 20px 0px;
            text-transform: uppercase;
            
        }
        p{
            margin: 10px 0px 20px 0px;
        }
    }


    main{
        section{
            
            margin: 20px 0;
            text-align: left;


            h2{
                /* text-transform: uppercase; */
            }


            img{
                width: 100%;
                margin: 20px 0;
            }

            .modalImage{
                /* background: red; */
                margin: auto;
                width: 20%;
            }

            p{
                margin: 10px 0px 20px 0px;

            }
            .lista{
                text-align: left;
                margin: 20px;
                margin-left: 50px;
                margin-right: 10px;
    
                li{
                    margin: 10px auto;
                }
            }
        }


    }

    footer{
        height: 100px;
        /* background: red; */
    }








    @media only screen and (max-device-width: 768px) {
        text-align: justify;
        padding-left: 10px;
        padding-right: 10px;


        header{

                
                
            h1{
                text-align: left;
                margin: 0px 0px 20px 0px;
                
                
            }
            p{
                margin: 0px 0px 20px 0px;
            }
        }

        main{
            section{
                .modalImage{
                    /* background: red; */
                    margin: auto;
                    width: 70%;
                } 
            }
        }
        

        footer{

        }

    }



`