import React from 'react';
import { TableContainer } from './styles';

const Table = ({ data }) => {
  return (
    // Contêiner para a tabela
    <TableContainer>
      <table className="--table">
        <tbody>
          {/* Mapeando cada linha no array de dados */}
          {data.map((linha, index) => (
            <tr key={index}>
              {/* Mapeando cada célula na linha atual */}
              {linha.map((celula, index) => (
                // Criando uma célula de tabela para cada célula na linha
                // Utilizando `dangerouslySetInnerHTML` para renderizar as tags HTML no conteúdo da célula
                <td key={index} dangerouslySetInnerHTML={{ __html: celula }} />
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default Table;