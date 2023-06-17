import React, { useEffect } from 'react'
    
const Procv = () => {

    return (
        <div>
            <header>
                <h1>Tutorial PROCV - Excel</h1>
                <p>Uma das funçoes mais usadas no excel.</p>
            </header>

            <main>
                <section>
                    <h2>O que é o PROCV?</h2>
                    <p>
                        O PROCV é uma função do Microsoft Excel que permite buscar valores em uma tabela, com base em um valor de referência. É amplamente utilizado para procurar e recuperar informações em grandes conjuntos de dados.
                    </p>
                </section>

                <section>
                    <h2>Sintaxe do PROCV</h2>
                    <p>A sintaxe básica do PROCV é a seguinte:</p>
                    <p>=PROCV(valor_procurado, intervalo_pesquisa, coluna_retorno, [procurar_intervalo_aproximado])</p>
                    <ul>
                        <li><strong>valor_procurado:</strong> O valor que você deseja localizar na tabela.</li>
                        <li><strong>intervalo_pesquisa:</strong> A tabela em que você deseja procurar o valor.</li>
                        <li><strong>coluna_retorno:</strong> O número da coluna na tabela de onde você deseja retornar o valor correspondente.</li>
                        <li><strong>procurar_intervalo_aproximado:</strong> (opcional) Um valor lógico que indica se você deseja uma correspondência aproximada ou exata. Se for verdadeiro (VERDADEIRO ou 1), o PROCV procurará a melhor correspondência possível. Se for falso (FALSO ou 0), o PROCV procurará uma correspondência exata. O padrão é verdadeiro.</li>
                    </ul>
                </section>

                <section>
                    <h2>Exemplo de Uso</h2>
                    <p>
                        Suponha que você tenha uma tabela de dados de vendas com os seguintes campos: Produto, Preço e Quantidade. Você pode usar o PROCV para pesquisar o preço de um produto específico com base em um valor de referência. Por exemplo:
                    </p>
                    <pre>=PROCV("Produto A", A2:C10, 2, FALSO)</pre>
                    <p>
                        Nesse exemplo, a função PROCV buscará o valor do Produto A na tabela que vai da célula A2 à C10 e retornará o valor da segunda coluna (Preço) para o produto correspondente.
                    </p>
                </section>
            </main>

            <footer>
                <p>Este é apenas um exemplo de página HTML para um tutorial. Personalize-o conforme suas necessidades.</p>
            </footer>   
        </div>
    )
}

export default Procv