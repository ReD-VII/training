import { styled } from "styled-components";




export const ShortProfileConteynerStyle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110px;
    /* background: tomato; */
    padding: 10px;

    border-bottom: ${({ props }) => props ? props.lineColor : 'solid 1px rgba(242, 242, 242, 1)'};



    .avatar_conteiner{
        width: 65px;
        height: 65px;
        background: tomato;
        border-radius: 100px;
    }

    .info_conteiner_profile{
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* align-items: center; */
        width: calc(100% - 65px);
        height: 65px;
        /* background: red; */
        padding: 0 10px;
        text-align: left;

        p{
            font-size: .8em;
            margin: 5px;
            li{
                font-weight: 700;
                list-style: none;
            }
        }
    }
`