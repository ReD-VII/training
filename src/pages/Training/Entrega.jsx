import React, { useEffect } from 'react'
import { TrainigStyleConfig } from './styles/StyledPages'

// Hooks
import { useSummary } from '../../hooks/useSummary'
import ModalImage from 'react-modal-image';

// COMPONENTES
import Table from '../../components/PageComponents/Table/'
import ElemetAlert from '../../components/PageComponents/ElementAlert'
import FloatingBar from '../../components/PageComponents/FloatingBar/FloatingBar'



// iMAGENS
import banner from '../../assets/gif/capa_training_entrega.gif'
import procuraLista from '../../assets/gif/app_lista_procura_01.gif'
import procuraLista_small from '../../assets/gif/app_lista_procura_01_small.gif'
import procuraLista2 from '../../assets/gif/app_lista_procura_02.gif'
import procuraLista2_small from '../../assets/gif/app_lista_procura_02_small.gif'

const Entrega = () => {
    const { elementosClass } = useSummary('box_anchor')

    return (
        <TrainigStyleConfig>

            <header>
                <h1>Treinamento de entrega Last Mile</h1>
                <p>Nesse treinamento você encontrará informações valiosas para lidar com a entrega de pacotes!</p>
                <FloatingBar itens={elementosClass} />
            </header>

            <main>
                <section className='box_anchor' id='Test1'>
                    <img className='titleImage' src={banner} alt="devolucao" />
                    <h2>BAIXA NO APLICATIVO</h2>
                    <p>
                        Antes de tudo deve baixar o app do entregador:
                    </p>
                    <nav className='lista'>
                        <ul>
                            <li>
                                <a href="link-do-app">Versao: ANDROID</a>!
                            </li>
                            <li>
                                <a href="link-do-app">Versao: IOS</a>!
                            </li>
                        </ul>
                    </nav>
                    <p>Em seguida e necessario fazer o acesso com a usuario e senha.</p>

                </section>

                <section className='box_anchor' id='LOCALIZAR PACOTES'>
                    <h2>LOCALIZAR PACOTES</h2>
                    <p>

                        Há duas formas de localizar um pedido no app de entregas:
                        <br />
                        <br />
                        A primeira forma é por meio da busca em uma lista, onde é necessário procurar na lista de cargas expedidas para encontrar o pedido desejado. Para isso, vá em "<strong>Tarefa de despacho</strong>".
                    </p>


                    <div className='modalImage'>

                        <ModalImage
                            small={procuraLista_small}
                            large={procuraLista}
                            alt="Imagem"
                            style={{ width: '20%' }}
                            hideDownload
                            maxWidth={500}
                        />
                    </div>

                    <p>
                        Em seguida, procure pelo número do pedido ou pelos dados do destinatário.
                    </p>
                    <div className='modalImage'>
                        <ModalImage
                            small={procuraLista2_small} // URL da imagem em tamanho menor
                            large={procuraLista2} // URL da imagem ampliada
                            alt="Imagem"
                            hideZoom={true} // Oculta o ícone de zoom
                            style={{ width: '300px', height: '200px' }}

                        />
                    </div>
                </section>

                <section className='box_anchor' id='Test3'>
                    <h2>Test3</h2>
                    <p>
                        Where does it come from?
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                        The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                    </p>

                </section>

            </main>

            <footer>
                <p></p>
            </footer>

        </TrainigStyleConfig>
    )
}

export default Entrega