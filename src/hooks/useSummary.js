import { useEffect, useState } from 'react';

export const useSummary = (clasSelect) => {
  const [elementosClass, setElementosClass] = useState([]);

  useEffect(() => {
    let isMounted = true; // Variável para verificar se o componente está montado

    const colectClass = () => {
      const elementos = document.getElementsByClassName(clasSelect);
      const quantidade = elementos.length;
      // console.log(quantidade);
      
      if (isMounted) {
        setElementosClass(elementos);
      }
    };

    colectClass();

    return () => {
      isMounted = false; // Define isMounted para false ao desmontar o componente
    };
  }, [clasSelect]);

  return { elementosClass };
};