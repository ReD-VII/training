import React from 'react'



// Hooks
import { useSummary } from '../../hooks/useSummary'

// COMPONENTES
import Table from '../../components/PageComponents/Table/'
import ElemetAlert from '../../components/PageComponents/ElementAlert'
import FloatingBar from '../../components/PageComponents/FloatingBar/FloatingBar'


// iMAGENS
import banner from '../../assets/gif/banner_training_recebimento.gif'
import banner2 from '../../assets/gif/banner_training_recebimento_2.gif'
import img2 from '../../assets/gif/banner_training_devolucao_fluxo.gif'
import img3 from '../../assets/gif/banner_training_devolucao_fluxo_2.gif'
import { TrainigStyleConfig } from './styles/StyledPages'
import ImageManege from '../../components/ImageManege'


import idViagem from '../../assets/doc_pages/recebimento/descri_id_viagem_1027x576.gif'
import iconRecTransf from '../../assets/doc_pages/recebimento/icon_receb_transf.gif'
import bipRecebimento from '../../assets/doc_pages/recebimento/bipagem_de_recebimento_1027x576.gif'
import iconScanPartida from '../../assets/doc_pages/recebimento/icon_escan_partida.png'
import brInScanPartida from '../../assets/doc_pages/recebimento/BR-in-scan_partida.gif'
import doisEmUmApp from '../../assets/doc_pages/recebimento/bip_2_em_1_app.gif'
import DoisEmUmCD from '../../assets/doc_pages/recebimento/bip_2_em_1_app-CD.gif'



const Recebimento = () => {

    //COLETANDO TODAS CLASSES COM O NOME SETADO EM USESUMMARY
    const { elementosClass } = useSummary('box_anchor')
    // DEPOIS DISSO ENVIA PARA O COMPONENTE SUMARRY A VARIAVEL ELEMENTOS    CLASS


    return (
        <TrainigStyleConfig>

            <header>
                <h1>Treinamento de recebimento</h1>
                <p>Nesse treinamento você encontrará informações valiosas para lidar com recebimento de pacotes em base!</p>
                <FloatingBar itens={elementosClass} />
            </header>

            <main>
                <section className='box_anchor' id='COMO RECEBER TRANSFERÊNCIA EM BASE'>
                    <img className='titleImage' src={banner} alt="recebimento" />
                    <h2>COMO RECEBER TRANSFERÊNCIA EM BASE</h2>
                    <p>
                        O procedimento de recebimento de pacotes na base é notavelmente simples, no entanto, requer uma dose significativa de atenção ao longo do processo, a fim de prevenir potenciais inconvenientes durante a trajetória do pacote.
                    </p>
                    <p>
                        O cuidado meticuloso exercido durante cada etapa é crucial para assegurar que o pacote percorra seu caminho sem contratempos indesejados. Portanto, é essencial adotar uma abordagem diligente, desde a identificação do pacote até o seu encaminhamento, visando a garantir a eficácia do processo e a satisfação do remetente e do destinatário.
                    </p>


                    {/* <ImageManege img={banner2} /> */}

                    {/* ELEMENTO DE MSG DE ALERTA */}


                    {/* <ElemetAlert text={'Obs.: Processo de expedição obrigatório.'} /> */}

                    <h3>Fluxograma recebimento de carga</h3>
                    <div style={{ width: '100%', height: '480px', margin: '10px auto', position: 'relative' }}>
                        <iframe
                            allowFullScreen
                            frameBorder="0"
                            style={{ width: '100%', height: '480px' }}
                            src="https://lucid.app/documents/embedded/8404973f-1d16-48ab-bc7e-8fdcbd1955c9"
                            id="aO-q628lNtV5"
                        ></iframe>
                    </div>

                    <div style={{
                        margin: 'auto',
                        marginTop: '90px'
                    }}></div>



                </section>


                <section className='box_anchor' id='CHEGADA DE PACOTES NA BASE'>
                    <h2>CHEGADA DE PACOTES NA BASE</h2>

                    <p>Assim que o transporte chegar à base com a carga, o motorista deverá apresentar o cartão de identificação da viagem.</p>


                    <ImageManege img={idViagem} />

                    {/* <p>Se a sua base for a última parada, é obrigatório realizar o deslacramento sistemático do veículo para concluir o MDF-e corretamente. No entanto, se a sua base não for a última parada, evite realizar o deslacramento no sistema. Em vez disso, notifique a equipe de transporte assim que receber o veículo para que eles possam encerrar o MDF-e manualmente.</p> */}

                    <ElemetAlert text={'Se a sua base for a última parada, é obrigatório realizar o deslacramento sistemático do veículo para concluir o MDF-e corretamente. No entanto, se a sua base não for a última parada, evite realizar o deslacramento no sistema. Em vez disso, notifique a equipe de transporte assim que receber o veículo para que eles possam encerrar o MDF-e manualmente.'} />


                </section>






                <section className='box_anchor' id='RECEBIMENTO DA CARGA'>
                    <h2>RECEBIMENTO DA CARGA</h2>
                    <p>Após o recebimento físico da carga, é necessário realizar o registro do recebimento no sistema.</p>
                    <p style={{
                        display: 'flex',
                        flexDirection: (window.innerWidth <= 700 ? 'column' : 'row'),
                    }}>Vamos iniciar escolhendo a opção  "Receber transferencia" <img src={iconRecTransf} alt='icon' style={{
                        width: '30px',
                        margin: (window.innerWidth <= 700 ? '10px 5px' : '0 5px'),
                    }} /></p>


                    <ImageManege img={bipRecebimento} />


                    <p>Além da bipagem de recebimento demonstrada anteriormente, é possível realizar o recebimento 2 em 1, onde o HUB (DC) é capaz de receber a carga e, ao mesmo tempo, preparar sua expedição para a base de entrega.</p>
                    <p>Esse processo deve ser realizado apenas em contas DC.</p>



                    <p style={{
                        display: 'flex',
                        flexDirection: (window.innerWidth <= 700 ? 'column' : 'row'),
                    }}>Esse processo deve ser realizado apenas em contas DC. Veja como o icone e:<img src={iconScanPartida} alt='icon' style={{
                        width: '30px',
                        margin: (window.innerWidth <= 700 ? '10px 5px' : '0 5px'),
                    }} /></p>


                    <ImageManege img={brInScanPartida} />

                    <p>
                        Após o deslacramento, acesse a função 'Escaneamento de Partida'. Nesta função, com apenas um único bip, você poderá receber a mercadoria no Centro de Distribuição (CD) e prepará-la para a expedição.
                    </p>
                    <p>
                        Observação: Qualquer viagem de transferência entre o Centro de Distribuição (CD) e o Centro de Distribuição (DC) deve ser solicitada à equipe de transporte.
                    </p>
                    <p>
                        Lembre-se: É importante que a mercadoria <strong>seja triada antes de iniciar o processo de recebimento</strong> com dupla bipagem no BR-IN.
                    </p>



                </section>


                <section className='box_anchor' id='BIPAGEM 2 EM 1 - DC'>
                    <h2>BIPAGEM 2 EM 1 - DC</h2>
                    <p>O no app e bem simples, vamos apresentar o passo a passo.</p>


                    <ImageManege img={doisEmUmApp} />
                </section>

                <section className='box_anchor' id='BIPAGEM 2 EM 1 - CD'>
                    <h2>BIPAGEM 2 EM 1 - CD</h2>
                    <p>O no app e bem simples, vamos apresentar o passo a passo.</p>


                    <ImageManege img={DoisEmUmCD} />
                </section>












                <section className='box_anchor' id='Considerações finais'>
                    {/* <!-- Início do Resumo do Processo de Devolução --> */}
                    <div>
                        <h2>Considerações finais</h2>
                        <p>
                            Com este artigo, agora estamos familiarizados com todo o processo de recebimento e expedição de pacotes.
                        </p>
                        <p>
                            Se surgirem dúvidas no futuro, sinta-se à vontade para retornar a este artigo para esclarecê-las. Além disso, não hesite em entrar em contato com seu superior direto se tiver outras perguntas ou necessitar de orientações adicionais.
                        </p>
                    </div>
                    {/* <!-- Fim do Resumo do Processo de Devolução --> */}
                </section>














            </main>

            <footer>
                <p></p>
            </footer>

        </TrainigStyleConfig>
    )
}

export default Recebimento