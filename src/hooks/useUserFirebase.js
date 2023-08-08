import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { db } from '../services/firebase';

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const auth = getAuth();

  const createUser = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.userMail,
        data.passWord
      );

      await updateProfile(user, {
        displayName: data.userName
      });

      setLoading(false);
      return user;
    } catch (error) {
      console.error(error.message);

      let systemErrorMessage;
      if (error.code === 'auth/weak-password') {
        systemErrorMessage = 'Senha fraca. Deve conter pelo menos 6 caracteres.';
      } else if (error.code === 'auth/email-already-in-use') {
        systemErrorMessage = 'E-mail já cadastrado.';
      } else {
        systemErrorMessage = 'Ocorreu um erro ao criar a conta.';
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  const logout = () => {
    signOut(auth);
  };

  const login = async (data) => {
    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.userMail, data.passWord);
      setLoading(false);
    } catch (error) {
      console.error(error.message);

      let systemErrorMessage;
      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        systemErrorMessage = 'E-mail ou senha incorretos.';
      } else {
        systemErrorMessage = 'Ocorreu um erro ao fazer login.';
      }

      setError(systemErrorMessage);
      setLoading(false);
    }
  };

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login
  };
};




















// import { db } from '../services/firebase/configs'
// import { db } from '../services/firebase'
// import {
//     getAuth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword,
//     updateProfile,
//     signOut
// } from 'firebase/auth'
// import { useEffect, useState } from 'react'






// export const useAuthentication = () => {
//     const [error, setError] = useState(null) // controle de msg de erro do sistema
//     const [loading, setLoading] = useState(null) // sistema de controle de memoria


//     // CLEANUP
//     const [cancelled, setCancelled] = useState(false)


//     const auth = getAuth()


//     function checkIfCancelled() {
//         if (cancelled) { // SE CANCELLED FOR VERDADEIRO ELE ENTRA NESSA FUNÇÃO E SAI DO PROGRAMA FINALIZANDO A OPERAÇÃO
//             return      // ISSO FAZ COM QUE ESSE HOOK NAO FIQUE RODANDO O TEMPO INTEIRO, ECONOMIZANDO PROCESSAMENTO
//         }
//     }



//     // CRIAR UMA USUARIO
//     const createUser = async (data) => {











//         checkIfCancelled()
//         setLoading(true) // INICIA O LOADING
//         setError(null)

//         try {
//             // CRIA UM USUARIO COM O EMAIL E SENHA PASSADO PARA O HOOK
//             const { user } = await createUserWithEmailAndPassword(
//                 auth,
//                 data.mail,
//                 data.passwrd
//             )



//             // ADIÇÃO DO NOME DO USUARIO AO BANCO DE DADOS
//             await updateProfile(user, {
//                 displayName: data.name,
//                 // phoneNumber: data.tellNumber
//             })
//             //updateProfile: É o método do Firebase Authentication que atualiza o perfil do usuário.
//             // user: É o objeto de usuário autenticado obtido após a autenticação bem-sucedida.
//             // { displayName: data.name }: É um objeto que contém as informações que você deseja atualizar no perfil. 
//             // Nesse caso, estamos definindo o displayName (nome de exibição) do usuário com o valor contido em data.name.
//             // displayName: Nome de exibição do usuário. Pode ser um nome próprio, apelido ou qualquer outro valor que você desejar.

//             // photoURL: URL da foto de perfil do usuário. Pode ser usado para exibir uma imagem de perfil associada à conta do usuário.

//             // email: Endereço de e-mail do usuário. No entanto, é importante notar que alterar o endereço de e-mail do usuário pode exigir um processo adicional de reautenticação para garantir a segurança.

//             // phoneNumber: Número de telefone do usuário. Como o e-mail, alterar o número de telefone pode exigir um processo de reautenticação.









//             setLoading(false);


//             // RETORNA UM USUARIO VALIDO CASO TUDO TENHA OCORRIDO CORRETAMENTE
//             return user

//             //    EM CASO DE ERROS ELE ACIONA O CATCH
//         } catch (error) {
//             console.log(error.message);

//             let sistemErrorMessage;
//             if (error.code === 'auth/weak-password') {
//                 sistemErrorMessage = 'Senha fraca. Deve conter pelo menos 6 caracteres.';
//             } else if (error.code === 'auth/email-already-in-use') {
//                 sistemErrorMessage = 'E-mail já cadastrado.';
//             } else {
//                 sistemErrorMessage = 'Ocorreu um erro ao criar a conta.';
//             }

//             setLoading(false);
//             setError(sistemErrorMessage);

//         }


//         setLoading(false) // FINALIZA O LOADING
//     }


















//     // LOGOUT - SIGN OUT
//     const logout = () => {
//         checkIfCancelled(true)
//         signOut(auth)
//     }

//     // LOGIN
//     const login = async (data) => {
//         checkIfCancelled()
//         setLoading(true)
//         setError(false)


//         try {
//             await signInWithEmailAndPassword(auth, data.mail, data.passwrd)
//             setLoading(false);
//         } catch (error) {
//             console.log(error.message);

//             let sistemErrorMessage;
//             if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
//                 sistemErrorMessage = 'E-mail ou senha incorretos.';
//             } else {
//                 sistemErrorMessage = 'Ocorreu um erro ao fazer login.';
//             }

//             setError(sistemErrorMessage);
//             setLoading(false);
//         }
//     }





//     useEffect(() => {
//         setCancelled(true) // LOGO QUE O PROCESSO E FEITO ELE FINALIZA A OPERAÇÃO 
//     }, [])

//     return {
//         auth,
//         createUser,
//         error,
//         loading,
//         logout,
//         login
//     }

// }