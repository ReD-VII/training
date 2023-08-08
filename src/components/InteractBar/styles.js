import { styled } from "styled-components";





export const ContentInteract = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 30px;
    margin: 40px auto;
    background: yellowgreen;    
    /* padding: 5px; */




    /* border-top: 1px solid #ccc; */
    border-top:  ${({ props }) => props ? props.lineColor : 'solid 1px rgba(242, 242, 242, 1)'};
    /* border-bottom: 1px solid #ccc; */
    border-bottom: ${({ props }) => props ? props.lineColor : 'solid 1px rgba(242, 242, 242, 1)'};

    .boxes_interact{
        display: flex;
        align-items: center;
        
        position: relative;
        height: 30px;
    }
    .boxes_interact:nth-child(1){
        justify-content: center;
        width: 10%;
        /* background: yellow; */
    }
    .boxes_interact:nth-child(2){
        justify-content: left;
        width: 10%;
        /* background: yellowgreen; */
    }
    .boxes_interact:nth-child(3){
        width: 60%;
        /* background: tomato; */
    }
    .boxes_interact:nth-child(4){
        justify-content: center;
        width: 10%;
        /* background: springgreen; */
    }
    .boxes_interact:nth-child(5){
        width: 10%;
        /* background: sienna; */
    }


    .icon_interact{
        font-size: 1.4em;
    }



    @media only screen and (max-device-width: 768px) {
        .boxes_interact:nth-child(1){
            width: 10%;
            justify-content: left;
        }
        .boxes_interact:nth-child(2){
            width: 20%;
            justify-content: center;
        }
        .boxes_interact:nth-child(3){
            width: 40%;
        }
        .boxes_interact:nth-child(4){
            width: 20%;
            justify-content: center;
        }
        .boxes_interact:nth-child(5){
            width: 10%;
            justify-content: right;        }
    }
  
    
`