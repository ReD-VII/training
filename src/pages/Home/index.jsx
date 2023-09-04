import React, { useEffect, useState } from 'react'
import { HomeContent } from '../../styles/GlobalStyles'
import { AuthProvider, useAuthValue } from '../../context/UserAuthContext'
import { onAuthStateChanged } from 'firebase/auth'
import { useAuthentication } from '../../hooks/useUserFirebase'
import GraficoPontos from '../../components/GraficoPontos'
const Home = () => {

  const [data, setData] = useState({
    nome: null,
    mail: null,
    uid: null,
  })
  const { user } = useAuthValue()

  useEffect(() => {
    setData({
      nome: user.displayName,
      mail: user.email,
      uid: user.uid,
    })
  }, [user])




  return (
    <HomeContent>


      {/* PRIMEIRO CONTEUDO PAGINA */}
      <div className='box_conteiner'>

        {/* PRIMEIRO QUADRO */}
        <div className='banner_conteiner'>
          <GraficoPontos />
        </div>

        {/* SEGUNDO BANNER DA HOME */}
        <div className='banner_conteiner'>
          <div className='content_box'>
            <h2>
              {data ? `Olá ${data.nome}!` : ''}
            </h2>
            <p>
              {data ? `E-mail: ${data.mail}!` : ''}
            </p>
            {/* <p>
              {data ? `UID: ${data.uid}!` : ''}
            </p> */}

            <div className='rakin'>
              <div className='rakin_box'>
                <p>PONTOS</p>
              </div>
              <div className='rakin_box'>
                <p>80</p>
              </div>

            </div>

          </div>
          <div className='content_box'></div>
        </div>

      </div>




      {/* SEGUNDO CONTEUDO DA PAGINA HOME */}
      <div className='box_conteiner'>
            <div className='micro_box_conteiner'>
            </div>


            <div className='micro_box_conteiner'>

              
              
            </div>

      </div>

    </HomeContent>
  )
}

export default Home