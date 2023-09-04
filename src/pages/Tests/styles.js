import styled from 'styled-components';

export const ProofCreation = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    /* background: purple; */



    


    
    /* DIVISAO ENTRE SETL LIST E AREA DO FORMULARIO */
    //////////////////////////////////////////////////////////////
    .mini_conteiner{
      display: flex;
      height: 100%;
      padding: 10px 15px;



    }
    


    /* COLUNA SET LIST */
    .mini_conteiner:nth-child(1){
      display: flex;
      justify-content: center;
      width: 220px;
      border-right: 1px solid #ccc;
    }



    /* QUADRO DO FORMULARIO */
    .mini_conteiner:nth-child(2){
        display: flex;
        flex-direction: column;
        width: calc(100% - 220px);
        /* background: orange; */


      /* CONFIGURAÇÂO DO FORMULARIO */
      h2{
        margin: 5px auto;
      }

      /* CONTEINER ONDE SE ENCONTRA TODO O FORMULARIO */
      .formConteiner{
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        /* background: tan; */

        h4{
          margin: 10px auto;
          font-weight: 500;
        }

        /* STEP 1 */
        /* FORMULARIO */
        //////////////////////////////////////////////////////////////
        form{
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          /* background: tomato; */


          h3{
            font-size: 1em;
          }



          input{
            width: 70%;
            height: 30px;
            border: 1px solid #ccc;
            padding: 0 10px;
            margin: 10px auto;
            border-radius: 4px;
          }
          
          textarea{
            width: 70%;
            height: 50px;
            padding: 10px 10px;
            margin: 10px auto;
            border-radius: 4px;
            border: 1px solid #ccc;
            resize: none; // Removendo o ajuste de tamanho do textarea
          }
          /* REMOVENDO FOCUS DO INPUT */
          input:focus, textarea:focus {
            outline: none; /* Remove a borda de foco */
            box-shadow: none; /* Remove qualquer sombra de foco */
          }





          .boxes_selects{
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto auto;
            width: 70%;
            height: auto;
            margin: 0 auto;
            margin-top: 10px;
            /* background: red; */

            .min--i{
              margin: 5px;
              border: 1px solid #ccc;
              border-radius: 4px;
              padding: 10px 0;

              p{
                font-size: .9em;
                font-weight: 600;
                margin-bottom: 10px;
              }


              .radio_conteiner{
                display: flex;
                flex-direction: column;
                width: 100%;
                height: auto;
                
                
                label{
                  display: flex;
                  align-items: center;
                  /* background: aqua; */
                  height: 25px;
                  margin-top: 5px;
                  margin-left: 20%;
                  font-size: .9em;
                  line-height: 25px;
                  

                  input[type="radio"]{
                    margin: 0;
                    margin-right: 5px;
                    width: 15px;
                  }
                }




              }
            }

            .min--i:nth-child(1){
              /* background: tomato; */
            }
            .min--i:nth-child(2){
              /* background: bisque; */
            }
            .min--i:nth-child(3){
              /* background: gainsboro;               */
            }

          }





        }
        //////////////////////////////////////////////////////////////


        /* STEP 2 */
        /* FORMULARIO */
        //////////////////////////////////////////////////////////////

      }

      .form_btn_conteiner{
        display: flex;
        justify-content: space-between;
        width: 70%;
        height: 40px;
        margin: 0 auto;
        /* background: orange; */



        /* BOTOES DE CONTROLE DO FORMULARIO STEPS */
        .form_btn_--i{
          width: 20%;
          height: 100%;
          border-radius: 4px;
          /* border: 1px solid #ccc; */


          .btn_form_control{
            width: 100%;
            height: 100%;
            background: #ccc;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.103);
          }
        }
        .form_btn_--i:nth-child(1){
          /* background: greenyellow; */
        }
        .form_btn_--i:nth-child(2){
          /* background: cadetblue; */
        }
        .form_btn_--i:nth-child(3){
          /* background: rebeccapurple; */
        }
      }

    }
    //////////////////////////////////////////////////////////////


















 
`














































































// @media only screen and (max-device-width: 768px) {

    

// }




// width: 100%;
// height: auto;
// grid-template-columns: 1fr;
// /* background: red; */


// .boxes_form_min{

//   /* background: orange; */
//   /* margin: 10px; */


//   .select{
//     margin: 5px;
//   }

//   .radio_input_conteiner{
    
//     /* background: red; */

//     input[type="radio"]{

//     }

//   }

// }





// .proofCreation_conteiner:nth-child(1){
//   display: none;
// }
// .proofCreation_conteiner:nth-child(2){
//   width: 100%;
  
  
  
//   form{
//     width: 100%;

//     label{
//       width: 100%;
//       /* margin: 15px auto; */



//       input{
//         width: 90%;
//         height: 40px;
//         padding: 0 10px;
//       }
      
//       textarea{
//         width: 90%;
//         height: 70px;
//         padding: 10px 10px;
//         outline: none !important;
//       }
//     }



//     //Configuração dos boxs select
//     .boxes_form_selects{
     



//     }
    



//   }
  
  
  
  
  
  

