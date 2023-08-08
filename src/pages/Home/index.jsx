import React from 'react'
import { useAuthentication } from '../../hooks/useUserFirebase'

const Home = () => {

  const { logout } = useAuthentication()





  return (
    <div style={{
      width: '100%',
      height: 'auto',
      background: 'red'

    }}>
      <div style={{
        width: '100%',
        height: '400px',
        background: 'blue',
        color: '#fff',
        textAlign: 'left'
      }}>
          <button onClick={() => logout()}>Sair</button>



      </div>

      <div style={{
        width: '100%',
        height: '400px',
        background: 'black',
        color: '#fff',
        textAlign: 'right'
      }}>Macaco</div>

      <div style={{
        width: '100%',
        height: '400px',
        background: 'orange',
        color: '#fff',
        textAlign: 'right'
      }}>CACHORRO</div>

      <div style={{
        width: '100%',
        height: '400px',
        background: 'yellowgreen',
        color: '#fff',
        textAlign: 'right'
      }}>Gato</div>

      <div style={{
        width: '100%',
        height: '400px',
        background: '#ccc',
        color: '#000',
        textAlign: 'right'
      }}>Gato</div>
    </div>
  )
}

export default Home