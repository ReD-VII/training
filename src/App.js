import React, { useEffect, useState } from 'react';



// Styles
import './styles/App.css';



// ROTAS
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About/'
import NotFound from './pages/NotFound';
import Layout from './layout';
import Training from './pages/Training/';
import Maps from './pages/Maps';
import { SignUp, SignIn } from './pages/SignInUp';


// HOOKS
import { useTheme } from './hooks/useTheme';



import ThemeContext from './context/ThemeContext';



// Treinamentos
import Devolucao from './pages/Training/Devolucao';
import Entrega from './pages/Training/Entrega';
import Recebimento from './pages/Training/Recebimento';


// Context
import { AuthProvider, userAuthProvider } from './context/UserAuthContext';



// Configs
import { useAuthentication } from './hooks/useUserFirebase';
import { onAuthStateChanged } from 'firebase/auth';



// Components
import LoadingComponent from './components/Loading';
import Tests from './pages/Tests';






function App() {

  // SETANDO O THEME
  const { currentTheme } = useTheme('light') // dark  light
  
  // AUTENTICAÇÃO
  const { auth } = useAuthentication()
  
  // USUARIO
  const [user, setUser] = useState(undefined)
  const loadingUser = user === undefined; // se "user" for igual "undefined" ele retorna TRUE
  //Com isso o carregamento e iniciado ja que na linha 76 ele verifica se loadingUser e verdadeiro


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <LoadingComponent/>
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={currentTheme}>
        <AuthProvider value={{ user }} >


          <BrowserRouter>
            <Routes>
              <Route path='/' element={user ? <Layout /> : <Navigate to='/signin' />}>


                <Route index element={<Home />} />
                <Route path='training' element={<Training />} />
                <Route path='maps' element={<Maps />} />
                <Route path='about' element={<About />} />
                <Route path='tests' element={<Tests />} />


                {/* TREINAMENTOS */}
                <Route path='devolucao' element={<Devolucao />} />
                <Route path='entrega' element={<Entrega />} />
                <Route path='recebimento' element={<Recebimento />} />


                <Route path='*' element={<NotFound />} />

              </Route>

              {/* USER */}
              <Route path='signin' element={!user ? <SignIn /> : <Navigate to='/' />} />
              <Route path='register' element={!user ? <SignUp /> : <Navigate to='/' />} />

            </Routes>
          </BrowserRouter>


        </AuthProvider>
      </ThemeContext.Provider>

    </div>
  );


}

export default App;
