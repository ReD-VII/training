

import React, { useEffect, useState } from 'react'








export const useTheme = (op) => {
   
    const [ theme, setTheme ] = useState(null)
        
    const [ dark, setDark ] = useState({
        bg: '#0D1117',
        color: '#ccc',
        lineColor: 'solid 1px #21262D',
        marginTopConf: '1px solid #f0f8ff25',
    })
    const [ light ] = useState({
        bg: '#fff',
        color: '#4f4f4f',
        lineColor: '1px solid #ccc',
        marginTopConf: '1px solid #ccc',
    })
    // CLEANUP
    const [cancelled, setCancelled] = useState(false)

    const [ currentTheme, setCurrentTheme ] = useState(null)

    function checkIfCancelled() {
        if (cancelled) { // SE CANCELLED FOR VERDADEIRO ELE ENTRA NESSA FUNÇÃO E SAI DO PROGRAMA FINALIZANDO A OPERAÇÃO
            return      // ISSO FAZ COM QUE ESSE HOOK NAO FIQUE RODANDO O TEMPO INTEIRO, ECONOMIZANDO PROCESSAMENTO
        }
    }

    const chargeTheme = () => {
        // console.log('PAaaaa')
        if(op === 'dark'){
            setCurrentTheme(dark)
        }else if(op === 'light'){
            setCurrentTheme(light)
        }
    }

    useEffect(() => {
        setTheme(op)
        chargeTheme()
    }, [theme])

    useEffect(() => {
        setCancelled(true)
    }, [])


    return {theme, currentTheme}

}

