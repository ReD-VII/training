import { useState, useEffect } from 'react';
import { auth } from './firebase'; // Importe sua instância do Firebase aqui

const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // Usuário está autenticado
        setUser(authUser);
      } else {
        // Usuário não está autenticado
        setUser(null);
      }
    });

    return () => {
      // Cleanup: cancelar a inscrição no momento da desmontagem
      unsubscribe();
    };
  }, []); // Array vazio garante que o efeito é executado somente uma vez após a montagem

  return user;
};

export default useAuth;