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

        .boxes--i{
            width: 100%;
            height: 300px;
            margin-top: 10px;
            background: #e2e2e2;
            border-radius: 8px;
        }
   
    }

    @media only screen and (max-device-width: 768px) {
        padding: 20px 10px;
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

