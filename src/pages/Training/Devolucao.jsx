import React, { useEffect } from 'react'
import { TrainigStyleConfig } from './styles/StyledPages'

// Hooks
import { useSummary } from '../../hooks/useSummary'

// COMPONENTES
import Table from '../../components/PageComponents/Table/'
import ElemetAlert from '../../components/PageComponents/ElementAlert'
import FloatingBar from '../../components/PageComponents/FloatingBar/FloatingBar'


// iMAGENS
import banner from '../../assets/gif/banner_training_devolucao.gif'
import img2 from '../../assets/gif/banner_training_devolucao_fluxo.gif'
import img3 from '../../assets/gif/banner_training_devolucao_fluxo_2.gif'






const Devolucao = () => {

    //COLETANDO TODAS CLASSES COM O NOME SETADO EM USESUMMARY
    const { elementosClass } = useSummary('box_anchor')
    // DEPOIS DISSO ENVIA PARA O COMPONENTE SUMARRY A VARIAVEL ELEMENTOS    CLASS







    // UMA TABELA COM UMA COLUNA E VARIAS LINHAS
    const dataMobile = [
        ['Devolução por insucesso'],
        ['É necessário solicitar a devolução'],
        ['Devolver apenas se o SAC aprovar a devolução'],
        ['A saca devolução precisa ser identificada como DEVOLUÇÃO DE INSUCESSOS'],
        ['<h2>INSUCESSO</h2> O pacote pertence a abrangência da base. Após  tratativas e aprovação do SAC, o pedido sairá do  hub ou parceiro, será transferido  para o SC de  origem da transferência e devolvido para a  origem da coleta (cliente embarcador).']
    ];
     // UMA TABELA COM UMA COLUNA E VARIAS LINHAS
    const dataMobile2 = [
        ['Redistribuição de indevido'],
        ['<strong>Não<strong> é necessário solicitar a devolução'],
        ['Devolve na próxima grade de devolução'],
        ['A saca da devolução precisa ser  identificada como INDEVIDO*'],
        ['INDEVIDO* O	pacote	NÃO	pertence a abrangência da base. O pedido sairá do hub ou parceiro, será transferido  para o SC de origem da transferência e	transferido	paraa base correta.']
    ];
     // UMA TABELA COM DUAS COLUNAS E VARIAS LINHAS
    const dataDesktop = [
        ['Devolução por insucesso', 'Redistribuição de indevido'],
        ['É necessário solicitar a devolução', '<strong>Não<strong> é necessário solicitar a devolução'],
        ['Devolver <strong><u>apenas se</u></strong> o SAC aprovar a devolução', 'Devolve na próxima grade de devolução'],
        ['A saca devolução precisa ser identificada como DEVOLUÇÃO DE INSUCESSOS', 'A saca da devolução precisa ser  identificada como INDEVIDO*'],
        ['<h3>INSUCESSO</h3> O pacote pertence a abrangência da base. Após  tratativas e aprovação do SAC, o pedido sairá do hub ou parceiro, será transferido para o SC de origem da transferência e devolvido para a  origem da coleta (cliente embarcador).', '<h3>INDEVIDO*</h3> O pacote <strong>NÃO</strong> pertence a abrangência da base. O pedido sairá do hub ou parceiro, será transferido para o SC de origem da transferência e transferido paraa base correta.']
    ];


    return (
        <TrainigStyleConfig>

            <header>
                <h1>Treinamento de devolução</h1>
                <p>Nesse treinamento você encontrará informações valiosas  para lidar com pacotes que não obtiveram sucesso em sua entrega ou pedidos de outra base.</p>
                <FloatingBar itens={elementosClass} />
            </header>

            <main>
                <section className='box_anchor' id='INFORMAÇÕES BÁSICAS'>
                    <img className='titleImage' src={banner} alt="devolucao" />
                    <h2>INFORMAÇÕES BÁSICAS</h2>
                    <p>
                        Existem dois tipos de pacotes que precisamos devolver: os pacotes de insucesso e os pacotes indevidos. Os pacotes de insucesso são aqueles que já passaram por tentativas de entrega, mas não foram bem-sucedidos. Por outro lado, os pacotes indevidos são provenientes de outra base de entrega e foram triados de forma incorreta.
                        <br />
                        Aqui está um exemplo ilustrativo:

                    </p>
                    {/* SE FOR APRESENTADO EM UM CELULAR CARREGAR DUAS TABELAS SIMPLES */}
                    {window.innerWidth < 700 ?
                        <>
                            <Table data={dataMobile} />
                            <Table data={dataMobile2} />
                        </>
                        :
                        // SE FOR PARA DESKTOP APRESENTAR UMA TABELA COM DUAS COLUNAS
                        <Table data={dataDesktop} />
                    }
                    <p>Em casos de <strong>ERRO DE TRIAGEM e INSUCESSOS</strong>, devoluções devem seguir das bases <strong>DIRETAMENTE</strong> para o <strong>SC RESPONSÁVEL</strong>. <strong>NÃO</strong> sendo mais necessário a criação de lotes, apenas identificação das sacas.
                    </p>

                    {/* ELEMENTO DE MSG DE ALERTA */}
                    <ElemetAlert text={'Obs.: Processo de expedição obrigatório.'} />
                </section>









                <section className='box_anchor' id='PROCESSO DE DEVOLUÇÃO'>
                    <h2>PROCESSO DE DEVOLUÇÃO</h2>
                    <p>Em casos de FORA DE ABRANGÊNCIA e DIVERGÊNCIA DE CEP:</p>
                    {/* <pre className='tagCode'>=PROCV(valor_procurado, intervalo_pesquisa, coluna_retorno, [procurar_intervalo_aproximado])</pre> */}
                    <ul className='lista'>
                        <li><strong>IDENTIFIQUE PARA QUAL BASE O PACOTE DEVE SER ENVIADO.</strong></li>
                        <li><strong>VERIFIQUE SE SUA BASE ESTÁ CADASTRADA COMO CD OU DC.</strong></li>
                        <li><strong>CD NÃO PODE TRANSFERIR PARA OUTRO CD.</strong></li>
                        <li><strong>DC(HUB) transfere para DC(HUB) e para SC.</strong></li>
                    </ul>

                    <h4>Pacote encontra-se n CD(Pdd)</h4>
                    <p>
                        Se o antecessor for o DC: CD terá que enviar para o DC e o DC se encarregará de enviar à base correta.
                    </p>
                    <p>
                        Se o antecessor for o DC (HUB): o DC se encarregará de enviar a base correta.
                    </p>
                    <p>
                        Se o antecessor for SC: CD terá que enviar para o SC e o SC se encarregará de enviar à base correta.
                    </p>


                    <img className='titleImage' src={img2} alt="fluxo" />



                    <ElemetAlert text={'Se o pacote já estiver no DC: DC se encarregará de enviar à base correta.'} />


                    <h3>FLUXO DE DEVOLUÇÃO</h3>
                    <img className='titleImage' src={img3} alt="fluxo" />

                </section>

                <section className='box_anchor' id='Resumo de Devolução'>
                    {/* <!-- Início do Resumo do Processo de Devolução --> */}
                    <div>
                        <h2>Resumo de Devolução</h2>
                        <p>
                            O processo de devolução de pacotes envolve lidar com pacotes de insucesso e pacotes indevidos. Pacotes de insucesso são aqueles que não foram entregues com sucesso após tentativas anteriores, enquanto pacotes indevidos foram enviados erroneamente de outra base de entrega.
                        </p>
                        <p>
                            Para os pacotes de insucesso, é necessário solicitar a devolução e obter a aprovação do SAC. Após a aprovação, o pedido será transferido para o SC de origem e devolvido ao cliente embarcador.
                        </p>
                        <p>
                            Já os pacotes indevidos não requerem solicitação de devolução. Eles serão devolvidos na próxima grade de devolução e transferidos para a base correta.
                        </p>
                        <p>
                            Em casos de erros de triagem e insucessos, as devoluções são realizadas diretamente das bases para o SC responsável, sem a necessidade de criação de lotes.
                        </p>
                        <p>
                            Ao lidar com pacotes fora de abrangência ou com divergência de CEP, é importante identificar a base correta para onde o pacote deve ser enviado. Verifique se sua base é cadastrada como CD ou DC e siga as orientações adequadas para a transferência do pacote.
                        </p>
                        <p>
                            Lembre-se de que o processo de expedição é obrigatório para as devoluções.
                        </p>
                        <p>
                            Se surgirem dúvidas ou problemas durante o processo de devolução, entre em contato com o SAC para obter assistência e orientações adicionais.
                        </p>
                        <p>
                            Esperamos que essas informações sejam úteis e facilitem o gerenciamento eficiente das devoluções de pacotes.
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

export default Devolucao