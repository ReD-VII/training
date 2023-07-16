import React, { useEffect, useState } from 'react';
import { BoxFloatingBarConteiner, FloatingBarConteiner } from './styles';

// ICONES
import {
  IoArrowRedoOutline,
  IoBalloonOutline,
  IoHeartOutline,
  IoEllipsisHorizontalOutline,
  IoBookOutline
} from "react-icons/io5";

const FloatingBar = ({ itens }) => {
  const [boxActive, setBoxActive] = useState({ action: false });
  const [summaryItens, setSummaryItens] = useState([]);

  const handleClick = () => {
    setBoxActive(prevState => ({ action: !prevState.action }));
  };

  useEffect(() => {
    const itemsArray = Array.from(itens);
    const textosH2 = itemsArray.map((item) => {
      const h2Elemento = item.querySelector('h2');
      return h2Elemento ? h2Elemento.innerText : '';
    });
    setSummaryItens(textosH2);
  }, [itens]);

  const handleLinkClick = (titulo) => {
    setTimeout(() => {
      setBoxActive({ action: false });
      scrollToAnchor(titulo);
    }, 100);

    // Eventualmente, você pode substituir o código scrollToAnchor(titulo) pela sua lógica de rolagem personalizada.
  };

  const scrollToAnchor = (titulo) => {
    const element = document.getElementById(titulo);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FloatingBarConteiner>
      <div className='barBoxes'><IoHeartOutline className='icons' /></div>
      <div className='barBoxes' onClick={handleClick}><IoBookOutline className='icons' />
        <BoxFloatingBarConteiner props={boxActive}>
          <h3>Sumário</h3>
          <nav>
            <ul>
              {summaryItens.map((titulo, index) => (
                <li key={index}>
                  <a href={`#${titulo}`} onClick={() => handleLinkClick(titulo)}>
                    <span style={{ textTransform: 'capitalize' }}>{titulo}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </BoxFloatingBarConteiner>
      </div>
      <div className='barBoxes'></div>
      <div className='barBoxes'><IoEllipsisHorizontalOutline className='icons' /></div>
      <div className='barBoxes'><IoArrowRedoOutline className='icons' /></div>
    </FloatingBarConteiner>
  );
};

export default FloatingBar;