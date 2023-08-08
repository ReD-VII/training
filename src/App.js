import React, { useEffect, useState } from 'react';

// ROTAS
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Styles
import './styles/App.css';



// ROTAS
import Home from './pages/Home'
import About from './pages/About/'
import SignUp from './pages/SignUp'
// import SingIn from './pages/SingIn'
import NotFound from './pages/NotFound';
import Layout from './layout';
import Training from './pages/Training/';
import Maps from './pages/Maps';


// HOOKS
import { useTheme } from './hooks/useTheme';


import ThemeContext from './context/ThemeContext';
import SignIn from './pages/SignIn';


// Treinamentos
import Devolucao from './pages/Training/Devolucao';
import Entrega from './pages/Training/Entrega';

// Context
import { AuthProvider, userAuthProvider } from './context/UserAuthContext';
import { useAuthentication } from './hooks/useUserFirebase';
import { onAuthStateChanged } from 'firebase/auth';





function App() {

  const [user, setUser] = useState(null)
  // SETANDO O THEME
  const { currentTheme } = useTheme('light') // dark  light

  const { auth } = useAuthentication()

  const loadingUser = user === undefined;

  const mamao = process.env.REACT_APP_API_TEST
  console.log(mamao)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="App">
      <ThemeContext.Provider value={currentTheme}>
        <AuthProvider value={{user}} >


        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Layout />}>
              {/* <Route path='/' element={user ? <Layout /> : <Navigate to='/login' />}> */}
              <Route index element={user ? <Home /> : <Navigate to='/signin' />} />

              {/* <Route index element={!user ? <Home /> : <Navigate to='/' />} /> */}
              <Route path='training' element={<Training />} />
              {/* <Route path='training' element={!user ? <Training /> : <Navigate to='/' />} /> */}
              <Route path='maps' element={<Maps />} />
              {/* <Route path='training' element={!user ? <Maps /> : <Navigate to='/' />} /> */}
              <Route path='about' element={<About />} />
              {/* <Route path='training' element={!user ? <About /> : <Navigate to='/' />} /> */}


              {/* TREINAMENTOS */}
              <Route path='devolucao' element={<Devolucao />} />
              <Route path='entrega' element={<Entrega />} />



              <Route path='*' element={<NotFound />} />

            </Route>
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
