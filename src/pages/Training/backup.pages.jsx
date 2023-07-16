import React, { useEffect } from 'react'
import { TrainigStyleConfig } from './styles/StyledPages'

// Hooks
import { useSummary } from '../../hooks/useSummary'

// COMPONENTES
import Table from '../../components/PageComponents/Table/'
import ElemetAlert from '../../components/PageComponents/ElementAlert'
import FloatingBar from '../../components/PageComponents/FloatingBar/FloatingBar'



// iMAGENS


const Entrega = () => {
        const { elementosClass } = useSummary('box_anchor')
   
    return (
        <TrainigStyleConfig>

            <header>
                <h1>Treinamento de devolução</h1>
                <p>Nesse treinamento você encontrará informações valiosas  para lidar com pacotes que não obtiveram sucesso em sua entrega ou pedidos de outra base.</p>
                <FloatingBar itens={elementosClass} />
            </header>

            <main>
                <section className='box_anchor' id='INFORMAÇÕES BÁSICAS'>
                </section>

                <section className='box_anchor' id='PROCESSO DE DEVOLUÇÃO'>
                </section>

                <section className='box_anchor' id='Resumo do Processo de Devolução'>            
                </section>

            </main>

            <footer>
                <p></p>
            </footer>

        </TrainigStyleConfig>
    )
}

export default Entrega