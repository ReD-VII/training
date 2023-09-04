import React from 'react'
import Search from '../../components/Search'


// IMG DE TREINAMENTOS
import imgTreiDevol from '../../assets/png/treinamento_devo.png'
import imgTreiEnt from '../../assets/png/entrega.png'
import imgTreiOutros from '../../assets/png/outros.png'
import imgTreiOutros2 from '../../assets/png/outros2.png'
import banner from '../../assets/svg/banner_training.svg'




//Components
import BoxFeedPosts from '../../components/BoxFeedPosts'




// ICONES
import { IoFlagOutline, IoLogoLaravel, IoLogoOctocat, IoSchoolSharp } from "react-icons/io5";
import { TrainingConteiner } from './styles/styles'


const Training = () => {







    return (
        <TrainingConteiner>

            {/* BOX DE PESQUISA */}
            <div className='box_training'>
                <Search />
            </div>

            {/* BOX BANNER PRINCIPAL */}
            <div className='box_training'>
                <div className='box_banner'>
                    <h2>
                        Desvende os segredos da<div className='-title_big'> LOGÍSTICA!</div>
                    </h2>
                    <p>Construa seu caminho para o sucesso</p>
                    <div className='-insign'>
                        <IoSchoolSharp className='-icon' />
                        <IoFlagOutline className='-icon' />
                        <IoLogoOctocat className='-icon' />
                        <IoLogoOctocat className='-icon' />
                        <IoLogoLaravel className='-icon' />
                    </div>
                </div>
            </div>


            <div className='box_training'>
                <div className='--f'>
                    <p>FEED</p>
                    <select className='selectOpt'>
                        <option value="opcao1">Operacional</option>
                        <option value="opcao2">Atendimento</option>
                        <option value="opcao3">Outros</option>
                    </select>
                </div>
                {/*  div que contem os cards */}
                <div className='--g'>
                    {/* cards */}
                    <BoxFeedPosts
                        link={'/devolucao'}
                        img={imgTreiDevol}
                        title={'Treinamento devolução'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />
                    <BoxFeedPosts
                        link={'/entrega'}
                        img={imgTreiEnt}
                        title={'Treinamento Entrega LM'}
                        date={'Data: 09/07/2023'}
                        tags={'#operacional'}
                    />
                    <BoxFeedPosts
                        link={'/recebimento'}
                        img={imgTreiOutros2}
                        title={'Recebimento de carga em base'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />
                    <BoxFeedPosts
                        img={imgTreiOutros}
                        title={'Treinamento entrega'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />
                    <BoxFeedPosts
                        img={imgTreiOutros}
                        title={'Treinamento recebimento'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />
                    <BoxFeedPosts
                        img={imgTreiDevol}
                        title={'Treinamento devolução'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />
                    <BoxFeedPosts
                        img={imgTreiDevol}
                        title={'Treinamento devolução'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />
                    <BoxFeedPosts
                        img={imgTreiDevol}
                        title={'Treinamento devolução'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />

                    <BoxFeedPosts
                        img={imgTreiEnt}
                        title={'Treinamento entrega'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />
                    <BoxFeedPosts
                        img={imgTreiDevol}
                        title={'Treinamento devolução'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />
                    <BoxFeedPosts
                        img={imgTreiOutros2}
                        title={'Treinamento devolução'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />
                    <BoxFeedPosts
                        img={imgTreiOutros}
                        title={'Treinamento recebimento'}
                        date={'Data: 25/06/2023'}
                        tags={'#operacional'}
                    />
                </div>
            </div>
        </TrainingConteiner>
    )
}

export default Training