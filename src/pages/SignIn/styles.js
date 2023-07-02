import { styled } from "styled-components";


export const ConteinerSignIn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    background: ${({ props }) => props ? props.bg : '#fff'};

    .boxsConteiner:nth-child(1){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60%;
        height: 100%;
        /* background: #000; */
        margin: auto;
        margin-left: 0;
        img{
            width: 90%;
            margin: auto;
        }
    }
    .boxsConteiner:nth-child(2){
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40%;
        height: 100%;
        /* background: #000; */
        margin: auto;
        margin-right: 0;

        .form {

            background: ${({ props }) => props ? props.blsInputs : '#f4f4f4'};
            display: block;
            padding: 1rem;
            max-width: 350px;
            margin-top: 10%;
            border-radius: 0.5rem;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }

        .form-title {
            font-size: 1.25rem;
            line-height: 1.75rem;
            font-weight: 600;
            text-align: center;
            color: ${({ props }) => props ? props.color : '#000'};
        }

        .input-container {
            position: relative; 
        }

        .input-container input, .form button {
            outline: none;
            border: ${({ props }) => props ? props.lineColor : 'solid 1px rgba(242, 242, 242, 1)'};
            margin: 8px 0;
        }

        .input-container input {
            background-color: #fff;
            padding: 1rem;
            padding-right: 3rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            width: 300px;
            border-radius: 0.5rem;
            box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        }

        .input-container span {
            display: grid;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0;
            padding-left: 1rem;
            padding-right: 1rem;
            place-content: center;
        }

        .input-container span svg {
            color: ${({ props }) => props ? props.color : '#000'};
            width: 1rem;
            height: 1rem;
        }

        .submit {
            display: block;
            padding-top: 0.75rem;
            padding-bottom: 0.75rem;
            padding-left: 1.25rem;
            padding-right: 1.25rem;
            background-color: red;
            color: #ffffff;
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 500;
            width: 100%;
            border-radius: 0.5rem;
            text-transform: uppercase;
            border: 0;
        }

        .signup-link {
            color: #6B7280;
            font-weight: 700;
            font-size: 0.875rem;
            line-height: 1.25rem;
            text-align: center;
            color: ${({ props }) => props ? props.color : '#000'};
        }

        .signup-link a {
            text-decoration: none;
            color: ${({ props }) => props ? props.color : '#000'};
        }
    }

    
    @media only screen and (max-device-width: 768px) {
        .boxsConteiner:nth-child(1){
            display: none;
            background: red;
            width: 0;
        }
        .boxsConteiner:nth-child(2){
            width: 100%;
            height: 100% !important;
            padding: 0;
            /* background: #050505; */


            .form {
                width: 100%;
                margin: 0;
                /* width: 100vw !important;
                height: 100%; */
                /* background: yellowgreen; */

                input{
                    margin: 25px auto;

                }
                .form-title{
                    margin-bottom: 50px;
                    /* background: yellowgreen; */
                }
                .signup-link{
                    margin-top: 50px;
                }
            }

        }
    }

`