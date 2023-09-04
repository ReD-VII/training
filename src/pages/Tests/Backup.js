import React, { useEffect, useReducer, useState } from 'react'
import { ProofCreation, divTests } from './styles'



//PARA EVITAR ERROS DE FIGITALIZAÇÂO
const ACTIONS = {
  PREVIOUS: 'previus',
  SENDER: 'sender',
  NEXT: 'next',
};
// CONTROLE DOS BOTOES DO FORMULARIO
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.PREVIOUS:
      return { ...state, previous: true, send: false, next: false };
    case ACTIONS.SENDER:
      return { ...state, previous: false, send: true, next: false };
    case ACTIONS.NEXT:
      return { ...state, previous: false, send: false, next: true };
    default:
      return state;
  }
};







//COMPONENTE
const index = () => {






  // DADOS DO FORMULARIO
  const [formData, setFormData] = useState({
    title: '',
    resumo: '',
    areaApli: '',
    qtdPerguntas: '',
    tipoResposta: ''
  })

  // REDUCER ESTADO INICIAL DO REDUCER
  const formControl = {
    previous: false,
    send: false,
    next: false
  }
  // REDUCER
  const [state, dispatch] = useReducer(reducer, formControl)

  // VALIDAÇÂO DOS CAMPOS DE FORMULARIO
  const [formValidation, setFormValidation] = useState(false)

  // CONTROLE DE STEPS
  const [stepControl, setStepControl] = useState({ step: 1 })

  // VALIDAÇÂO DOS CAMPOS DE FORMULARIO
  useEffect(() => {
    // DESTRUCTION
    const { title, resumo, areaApli, qtdPerguntas, tipoResposta } = formData;
    // VALIDAÇÂO
    if (title && resumo && areaApli && qtdPerguntas && tipoResposta) {

      setFormValidation(true);
      // REDUCER COM O BOTAO ACIONADO
      dispatch({ type: 'next' })

      console.log('Formulario validado!')

    } else {
      setFormValidation(false);
    }
  }, [formData]);





  // CONTROLE DE ENTRADA DE DADOS DO FORMULARIO
  const handleCharge = (e) => {
    const { name, value } = e.target
    setFormData((preventData) => ({
      ...preventData, [name]: value
    }))

  }


  
  useEffect(() => {

    if(stepControl.step !== 1){
      dispatch({ type: 'previus' })

      console.log('Pagina alterada')
    }



  }, [stepControl.step])



  const handleSubmit = (e) => {
    e.preventDefault()

  }



  const chargeStep = () => {
    setStepControl({...stepControl, step: 2})
  }










  return (
    <ProofCreation>

      <div className='mini_conteiner'>
        <h2>Set list</h2>
      </div>

      <div className='mini_conteiner'>
        <h2>Criação de prova</h2>

        {/* CONTEINER DO FORMULARIO */}
        <div className='formConteiner'>
          <h4>Crie seu formulario de prova e adicione as questoes que precisar! vamos pro etapas...</h4>


          {stepControl.step === 1 ? (

            <form onSubmit={handleSubmit}>


              {/* TITULO */}
              <label>
                <input type="text" placeholder='Escolha um titulo' onChange={handleCharge} name='title' />
              </label>

              {/* RESUMO DA PROVA */}
              <label>
                <textarea name="resumo" id="" cols="30" rows="10" placeholder='Faça um breve resumo da sua prova' onChange={handleCharge} />
              </label>

              <h3>Opeçoes da prova</h3>
              {/* AREA DE SELECTS */}
              <div className='boxes_selects'>


                {/* CONTEINERS */}
                <div className='min--i'>

                  <p>Selecione a area de aplicação da prova</p>

                  <select id="setor" name="areaApli" className='select' onChange={handleCharge}>
                    <option value="operacional">Operacional</option>
                    <option value="transportes">Transportes</option>
                    <option value="financeiro">Financeiro</option>
                    <option value="atendimento">Atendimento</option>
                  </select>

                </div>




                <div className='min--i'>

                  <p>Selecione a quantidade de perguntas</p>

                  <select id="perguntas" name="qtdPerguntas" className='select' onChange={handleCharge}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                  </select>

                </div>





                <div className='min--i'>

                  <p>Selecione o tipo de resposta</p>

                  <div className='radio_conteiner'>
                    <label>
                      <input
                        type='radio'
                        name='tipoResposta'
                        value='multiplaEscolha'
                        onChange={handleCharge}
                        checked={formData.tipoResposta === 'multiplaEscolha'}
                      />
                      Múltipla Escolha
                    </label>

                    <label>
                      <input
                        type='radio'
                        name='tipoResposta'
                        value='escrita'
                        onChange={handleCharge}
                        checked={formData.tipoResposta === 'escrita'}
                      />
                      Escrita
                    </label>

                    <label>
                      <input
                        type='radio'
                        name='tipoResposta'
                        value='verdadeiroFalso'
                        onChange={handleCharge}
                        checked={formData.tipoResposta === 'verdadeiroFalso'}
                      />
                      Verdadeiro ou falso
                    </label>
                  </div>

                </div>


              </div>




            </form>

          ) : (
            <div>
              <h2>SEGUNDO STEP DO FORMULARIO</h2>
            </div>
          )}









        </div>

        {/* BOTOES DE CONTROLE DO FORMULARIO */}
        <div className='form_btn_conteiner'>
          <div className='form_btn_--i'>{
          }</div>
          <div className='form_btn_--i'>{ }</div>
          <div className='form_btn_--i'>{
            state.next && <button className='btn_form_control' onClick={chargeStep}>Próximo</button>
          }</div>
        </div>

      </div>



    </ProofCreation>
  )
}

export default index