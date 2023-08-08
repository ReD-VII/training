import { styled } from "styled-components";



export const RegisterFormStyleConteiner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh; /* Ajuste a altura conforme necessário */

    img{
        /* margin-top: -100px; */
        width: 100px ;
        /* background: red; */
    }

    .form-container {
            /* margin-top: 5%; */
            width: 320px;
            border-radius: 0.75rem;
            background: #FFFFFF;
            box-shadow: 0px 187px 75px rgba(0, 0, 0, 0.01), 0px 105px 63px rgba(0, 0, 0, 0.05), 0px 47px 47px rgba(0, 0, 0, 0.09), 0px 12px 26px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
            padding: 2rem;
            color: rgba(243, 244, 246, 1);
    }

        .title {
            text-align: center;
            font-size: 1.5rem;
            line-height: 2rem;
            font-weight: 700;
            color: #b2b2b2;
        }

        .form {
            margin-top: 1.5rem;
        }

        .input-group {
            margin-top: 0.25rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
        }

        .input-group label {
            display: block;
            color: rgba(156, 163, 175, 1);
            margin-bottom: 4px;
        }

        .input-group input {
            width: 100%;
            border-radius: 0.375rem;
            border: 1px solid rgba(55, 65, 81, 1);
            outline: 0;
            background-color: rgba(17, 24, 39, 1);
            padding: 0.75rem 1rem;
            color: rgba(243, 244, 246, 1);
        }

        .input-group input:focus {
        
        }

        .forgot {
            display: flex;
            justify-content: flex-end;
            font-size: 0.75rem;
            line-height: 1rem;
            color: rgba(156, 163, 175,1);
            margin: 8px 0 14px 0;
        }

        .forgot a,.signup a {
            color: rgba(243, 244, 246, 1);
            text-decoration: none;
            font-size: 14px;
        }

        .forgot a:hover, .signup a:hover {
            text-decoration: underline rgba(167, 139, 250, 1);
        }

        .sign {
            display: block;
            width: 100%;
            background-color: rgba(167, 139, 250, 1);
            padding: 0.75rem;
            text-align: center;
            color: rgba(17, 24, 39, 1);
            border: none;
            border-radius: 0.375rem;
            font-weight: 600;
        }

        .social-message {
            display: flex;
            align-items: center;
            padding-top: 1rem;
        }

        .line {
            height: 1px;
            flex: 1 1 0%;
            background-color: rgba(55, 65, 81, 1);
        }

        .social-message .message {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            color: rgba(156, 163, 175, 1);
        }

        .social-icons {
            display: flex;
            justify-content: center;
        }

        .social-icons .icon {
            border-radius: 0.125rem;
            padding: 0.75rem;
            border: none;
            background-color: transparent;
            margin-left: 8px;
        }

        .social-icons .icon svg {
            height: 1.25rem;
            width: 1.25rem;
            fill: #fff;
        }

        .signup {
            text-align: center;
            font-size: 0.75rem;
            line-height: 1rem;
            color: rgba(156, 163, 175, 1);
        }



        @media only screen and (max-device-width: 768px) {
            img{
                width: 20%;
                margin-top: -100px;
            }
            .form-container {
                /* margin-top: 50%; */
                background: transparent; 
                color: #222;
                box-shadow: none;
            }


            /* ICONE */
            .social-icons .icon svg {
                fill: #222;
            }

            .signup {
               
                color: rgba(156, 163, 175, 1);
            }
        }



`