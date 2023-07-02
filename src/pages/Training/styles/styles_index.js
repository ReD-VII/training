import { styled } from "styled-components";




















export const ConteinerTraining = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    padding: 20px 30px;
    padding-bottom: 0;
    /* background: red; */
    color: ${({ props }) => props ? props.color : '#000'};


    .boxes_conteiner{
        width: 100%;
        /* background: chartreuse; */
    }
    .boxes_conteiner:nth-child(1){
        width: 100%;
        height: auto;
        /* background: chartreuse; */
    }
    .boxes_conteiner:nth-child(2){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        /* background: mediumorchid; */
        padding-top: 10px;

        .training_screen{
            width: 100%;
            height: 250px;
            background: tomato;
            border-radius: 8px;
        }

        .boxes--i_Conteiner{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
            width: 100%;
            height: auto;
            margin-top: 10px;   
            background: ${({ props }) => props ? props.blsInputs : '#f4f4f4'};
            border-radius: 8px;
            padding: 10px 15px;

            @media only screen and (max-device-width: 768px) {
                background: transparent;
            }






            .--f{
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 100%;
                height: 30px;
                /* background: red; */
                
                p{
                    font-weight: 700;

                }

                /* select{
                    appearance: none;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    background-color: #f2f2f2;
                    width: 150px;
                    margin-left: 10px;
                    padding: 3px 10px;
                    
                    font-size: 12px;
                    color: #333;
                } */
                .selectOpt {
                    height: 30px;
                    margin-left: 10px;
                    padding-right: 30px; /* Para deixar espaço para o ícone */
                    padding-left: 30px; /* Para deixar espaço para o ícone */
                    background: ${({ props }) => props ? props.blsInputs : '#f4f4f4'};
                    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
                    /* border: 1px solid #cccccc; */
                    border: none;
                    border-radius: 4px;

                    color: ${({ props }) => props ? props.color : '#f4f4f4'};
                    /* color: #4F4F4F; */
                    font-weight: 700;
                    font-family: sans-serif;
                }
                select:active{
                    /* border: 1px solid #e2e2e2; */
                    border: none;
                }
                select option {
                    border-radius: 5px; /* Ajuste o valor conforme necessário */
                    /* color: #333333; */
                }
                option:checked {
                    background-color: #333333;
                    /* color: #ffffff; */
                }

                input:focus {
                    border: none;
                    outline: none;
                }
            }
            .--iConteiner{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
                height: auto;
                margin-top: 10px;
                /* background: red; */
                border-radius: 8px;

                





                @media only screen and (max-device-width: 768px) {
                    flex-direction: column;
                }
            }






                
        }
   
    }


    @media only screen and (max-device-width: 768px) {
        padding: 20px 10px;
        .selectOpt {
            /* width: 100%; */
            height: 30px;
            margin-left: 10px;
            padding-right: 5px; /* Para deixar espaço para o ícone */
            padding-left: 10px; /* Para deixar espaço para o ícone */
        }

    }





























   



`
export const ConteinerTags = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 30px;
    /* background: #ccc; */
    p{
        font-size: 14px;
        color: ${({ props }) => props ? props.tagColor : '#000'};
        font-weight: 700;
        /* margin-right: 20px; */
    }
    .icon{
        margin-right: 10px;
    }
`

