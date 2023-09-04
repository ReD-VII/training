import React, { useEffect, useReducer, useState } from 'react'
import { ProofCreation, divTests } from './styles'











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

  // VALIDAÇÂO DOS CAMPOS DE FORMULARIO
  const [formValidation, setFormValidation] = useState(false)

  // CONTROLE DE FORMULARIO
  const [formControl, setFormControl] = useState({
    previous: false,
    send: false,
    next: false
  })

  // CURRENT STEP
  const [step, setStep] = useState({
    currentStep: 1
  })


  // VALIDAÇÂO DOS CAMPOS DE FORMULARIO
  useEffect(() => {
    // DESTRUCTION
    const { title, resumo, areaApli, qtdPerguntas, tipoResposta } = formData;
    // VALIDAÇÂO
    if (title && resumo && areaApli && qtdPerguntas && tipoResposta) {

      setFormValidation(true);

      // Controle de amostra controle
      setFormControl({ ...formControl, next: true })

      console.log('Formulario validado!')

    } else {
      setFormValidation(false);
      setFormControl({ ...formControl, next: false })
    }
  }, [formData, step]);


  useEffect(() => {
    if(step.currentStep === 2){
      setFormControl({ ...formControl, previous: true })
    }

    console.log('Passou')
  }, [step])



  // CONTROLE DE ENTRADA DE DADOS DO FORMULARIO
  const handleCharge = (e) => {
    const { name, value } = e.target
    setFormData((preventData) => ({
      ...preventData, [name]: value
    }))

  }


  const chargeStep = (e) => {
    setStep({ ...step, currentStep: e.target.value })
  }




  const handleSubmit = (e) => {
    e.preventDefault()

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


          {step.currentStep === 1 ? (

            <form onSubmit={handleSubmit}>


              {/* TITULO */}
              <label>
                <input type="text" placeholder='Escolha um titulo' value={formData.title} onChange={handleCharge} name='title' />
              </label>

              {/* RESUMO DA PROVA */}
              <label>
                <textarea name="resumo" id="" cols="30" rows="10" placeholder='Faça um breve resumo da sua prova' value={formData.resumo} onChange={handleCharge} />
              </label>

              <h3>Opeçoes da prova</h3>
              {/* AREA DE SELECTS */}
              <div className='boxes_selects'>


                {/* CONTEINERS */}
                <div className='min--i'>

                  <p>Selecione a area de aplicação da prova</p>

                  <select id="setor" name="areaApli" className='select' value={formData.areaApli} onChange={handleCharge}>
                    <option value="operacional">Operacional</option>
                    <option value="transportes">Transportes</option>
                    <option value="financeiro">Financeiro</option>
                    <option value="atendimento">Atendimento</option>
                  </select>

                </div>




                <div className='min--i'>

                  <p>Selecione a quantidade de perguntas</p>

                  <select id="perguntas" name="qtdPerguntas" className='select' value={formData.qtdPerguntas} onChange={handleCharge}>
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
          <div className='form_btn_--i'>{formControl.previous  && <button className='btn_form_control' value={1} onClick={chargeStep}>Voltar</button>}</div>
          <div className='form_btn_--i'>{ }</div>
          <div className='form_btn_--i'>{formControl.next && <button className='btn_form_control' value={2} onClick={chargeStep}>Próximo</button>}</div>
        </div>

      </div>



    </ProofCreation>
  )
}

export default index