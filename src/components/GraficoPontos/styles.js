import { styled } from "styled-components";


export const GraficoPontosConteiner = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: linear-gradient(45deg, rgb(138, 212, 255) 0%, rgb(255, 255, 255) 100%);
    overflow: hidden;
    border: 1px solid #ebebeb;


    &::after{
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        left: -30px;
        top: -30px;
        /* background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='none' stroke='%23333' stroke-width='20' /><circle cx='50' cy='50' r='15' fill='transparent' /></svg>") center center no-repeat; */
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='none' stroke='%239b9b9b' stroke-width='20' /><circle cx='50' cy='50' r='15' fill='transparent' /></svg>") center center no-repeat;
        opacity: .2;
    }
    &::before{
        content: '';
        position: absolute;
        width: 100px;
        height: 100px;
        right: -30px;
        bottom: -30px;
        background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='none' stroke='%23333' stroke-width='20' /><circle cx='50' cy='50' r='15' fill='transparent' /></svg>") center center no-repeat;
        /* background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='none' stroke='%239b9b9b' stroke-width='20' /><circle cx='50' cy='50' r='15' fill='transparent' /></svg>") center center no-repeat; */
        opacity: .05;
    }

`