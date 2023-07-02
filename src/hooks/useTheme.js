

import { useEffect, useState } from 'react'








export const useTheme = (op) => {

    const [theme, setTheme] = useState(null)

    const dark = {
        bg: '#0D1117',
        color: '#ccc',
        lineColor: 'solid 1px #21262D',
        marginTopConf: '1px solid #f0f8ff25',

        // TAGS
        tagColor: '#757575',
        tacCodeBG: '#161B22',


        // Paginas de treinamento
        titleColor: '#ccc',
        headerP: '#757575',

        // Formularios 
        bgInputs: '#11151d',

        // Blocos de Fundo
        blsInputs: '#11151d',


       // BG BOX FEED POST
       bgBoxFeed: 'red', 


    }
    const light = {
        bg: '#fff',
        color: '#4f4f4f',
        lineColor: '1px solid #ccc',
        marginTopConf: '1px solid #ccc',

        // TAGS
        tagColor: '#757575',
        tacCodeBG: '#161B22',


        // Paginas de treinamento
        titleColor: '#292929',
        headerP: '#757575',

        // Formularios
        bgInputs: '#f4f4f4',

        // Blocos de Fundo
        blsInputs: '#f4f4f4',


       // BG BOX FEED POST
       bgBoxFeed: 'red', 

    }



    // CLEANUP
    const [cancelled, setCancelled] = useState(false)

    const [currentTheme, setCurrentTheme] = useState(null)

    function checkIfCancelled() {
        if (cancelled) { // SE CANCELLED FOR VERDADEIRO ELE ENTRA NESSA FUNÇÃO E SAI DO PROGRAMA FINALIZANDO A OPERAÇÃO
            return      // ISSO FAZ COM QUE ESSE HOOK NAO FIQUE RODANDO O TEMPO INTEIRO, ECONOMIZANDO PROCESSAMENTO
        }
    }

    const chargeTheme = () => {

        checkIfCancelled()

        if (theme === 'dark') {
            setCurrentTheme(dark)
        } else if (op === 'light') {
            setCurrentTheme(light)
        }
        setCancelled(true)
    }

    useEffect(() => {
        setTheme(op)
        chargeTheme()
    }, [theme, op])

    useEffect(() => {
        setCancelled(true)
    }, [])


    return { currentTheme }

}

