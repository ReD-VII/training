import React from 'react'
import { TrainigStyleConfig } from './styles/StyledPages'



// COMPONENTES
import Table from '../../components/PageComponents/Table/'


import banner from '../../assets/gif/banner_training_devolucao.gif'
import img2 from '../../assets/gif/banner_training_devolucao_fluxo.gif'
import img3 from '../../assets/gif/banner_training_devolucao_fluxo_2.gif'
import ElemetAlert from '../../components/PageComponents/ElementAlert'
import FloatingBar from '../../components/PageComponents/FloatingBar/FloatingBar'



const Devolucao = () => {







    const dataMobile = [
        ['Devolução por insucesso'],
        ['É necessário solicitar a devolução'],
        ['Devolver apenas se o SAC aprovar a devolução'],
        ['A saca devolução precisa ser identificada como DEVOLUÇÃO DE INSUCESSOS'],
        ['<h2>INSUCESSO</h2> O pacote pertence a abrangência da base. Após  tratativas e aprovação do SAC, o pedido sairá do  hub ou parceiro, será transferido  para o SC de  origem da transferência e devolvido para a  origem da coleta (cliente embarcador).']
    ];
    const dataMobile2 = [
        ['Redistribuição de indevido'],
        ['<strong>Não<strong> é necessário solicitar a devolução'],
        ['Devolve na próxima grade de devolução'],
        ['A saca da devolução precisa ser  identificada como INDEVIDO*'],
        ['INDEVIDO* O	pacote	NÃO	pertence a abrangência da base. O pedido sairá do hub ou parceiro, será transferido  para o SC de origem da transferência e	transferido	paraa base correta.']
    ];
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
                <FloatingBar />
            </header>

            <main>
                <section>
                    <img className='titleImage' src={banner} alt="devolucao" />
                    <h2>INFORMAÇÕES BÁSICAS</h2>
                    <p>
                        Existem dois tipos de pacotes que precisamos devolver: os pacotes de insucesso e os pacotes indevidos. Os pacotes de insucesso são aqueles que já passaram por tentativas de entrega, mas não foram bem-sucedidos. Por outro lado, os pacotes indevidos são provenientes de outra base de entrega e foram triados de forma incorreta.
                    <br />
                        Aqui está um exemplo ilustrativo:

                    </p>
                    {window.innerWidth < 700 ?
                        <>
                            <Table data={dataMobile} />
                            <Table data={dataMobile2} />
                        </>
                        :
                        <Table data={dataDesktop} />
                    }
                    <p>Em casos de <strong>ERRO DE TRIAGEM e INSUCESSOS</strong>, devoluções devem seguir das bases <strong>DIRETAMENTE</strong> para o <strong>SC RESPONSÁVEL</strong>. <strong>NÃO</strong> sendo mais necessário a criação de lotes, apenas identificação das sacas.
                    </p>
                    <ElemetAlert text={'Obs.: Processo de expedição obrigatório.'} />
                </section>

                <section>
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

                <section>
                    
                </section>
            </main>

            <footer>
                <p></p>
            </footer>
        </TrainigStyleConfig>
    )
}

export default Devolucao