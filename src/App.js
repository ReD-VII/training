import React, { useState } from 'react';

// ROTAS
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// Styles
import './styles/App.css';

import { ThemeProvider } from 'styled-components';

// ROTAS
import Home from './pages/Home'
import About from './pages/About/'
import Register from './pages/Register'
import SingIn from './pages/SingIn'
import NotFound from './pages/NotFound';
import Layout from './layout';
import Training from './pages/Training';


function App() {

  const [user, setUser] = useState('')


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            {/* <Route path='/' element={user ? <Layout /> : <Navigate to='/login' />}> */}
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='singin' element={<SingIn />} />
            <Route path='training' element={<Training />} />
            <Route path='about' element={<About />} />
            <Route path='*' element={<NotFound />} />
          </Route>
          <Route path='login' element={!user ? <SingIn /> : <Navigate to='/' />} />
          <Route path='register' element={!user ? <Register /> : <Navigate to='/' />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
