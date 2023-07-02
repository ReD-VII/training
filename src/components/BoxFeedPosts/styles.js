import { styled } from "styled-components";



export const BoxFeedPostStyleConteiner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-basis: calc(25% - 20px);
    height: 250px;
    margin: 5px;
    /* background: #d1e1ff; */
    /* border: 1px solid #9b9b9b; */
    border-radius: 8px;
    overflow: hidden;
    
    box-sizing: border-box;
    background: rgba(217, 217, 217, 0.58);
    border: 1px solid white;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.10);
    backdrop-filter: blur(6px);
    cursor: pointer;
    transition: all 0.5s;
    user-select: none;
    font-weight: bolder;
    color: black;

    .box_image_conteiner{
        width: 100%;
        height: 50%;
        background-image: url(${props => props.img});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        overflow: hidden;
    }
    .box_info_conteiner{
        display: flex;
        flex-direction: column;
        height: 50%;
        /* background: pink; */
        padding: 10px;


        h3{
            text-align: left;
            font-size: 1em;
        }
        p{
            width: 100%;
        }
        // Sub Titulo
        .indo_data{
            text-align: left;
            margin-top: 10px;
            /* background: red; */
            font-size: .7em;
            
        }
        // DATA
        .indo_tag{
            text-align: right;
            margin: auto;
            margin-bottom: 10px;
            color: #2a2a2a;
            font-size: .7em;
            /* background: blue; */
        }
    }



    @media only screen and (max-device-width: 768px) {
        width: 100%; ;
        /* height: 250px; */
        margin: 0;
        margin-bottom: 15px;


        .box_image_conteiner{
            width: 100%;
            height: 120px;
        }
    }

`