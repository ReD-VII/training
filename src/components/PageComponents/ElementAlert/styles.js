import { styled } from "styled-components";



export const ElementAlertConteinerStyle = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: auto;
    margin: 20px 0;
    padding: 10px;
    padding-left: 20px;
    border-radius: 8px;
    background: rgb(236, 236, 236);
    /* box-shadow: 2px 2px 5px rgba(0,0,0,0.1); */

    text-align: left;
    line-height: 25px;
    text-decoration: none;

    .iconBox{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 10%;
        height: 100%;
        margin: auto;
        margin-right: 10px;
        /* background: red; */
        
        .icon{
            font-size: 2em;
            transform: scaleX(-1);
            color: red;
        }
    }
`