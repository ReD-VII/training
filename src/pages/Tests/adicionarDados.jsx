import React, { useState } from 'react';
import { useInsertDocument } from '../../hooks/useInsertDocument';
import { useAuthValue } from '../../context/UserAuthContext';

const AddDocumentForm = () => {
    const { insertDocument, response } = useInsertDocument('user'); // Use a coleção correta aqui

    // Coletando o usuario para atribuir a criação do conteudo ao usuario coletado
    const { user } = useAuthValue()


    const [formData, setFormData] = useState({
        nome: '',
        tell: '',
        email: '',
        idade: '',
        sexo: '',
    });







    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        insertDocument({
            nome: formData.nome,
            tell: formData.tell,
            email: formData.email,
            idade: formData.idade,
            sexo: formData.sexo,
            uid: user.uid
        });

        // Limpar os campos do formulário após a inserção
        setFormData({
            nome: '',
            tell: '',
            email: '',
            idade: '',
            sexo: '',
        });
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="nome"
                placeholder="Nome"
                value={formData.nome}
                onChange={handleChange}
            />
            <input
                type="text"
                name="tell"
                placeholder="Telefone"
                value={formData.tell}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                placeholder="E-mail"
                value={formData.email}
                onChange={handleChange}
            />
            <input
                type="text"
                name="idade"
                placeholder="Idade"
                value={formData.idade}
                onChange={handleChange}
            />
            <input
                type="text"
                name="sexo"
                placeholder="Sexo"
                value={formData.sexo}
                onChange={handleChange}
            />
            <button type="submit">Adicionar Documento</button>
            {response.loading && <p>Enviando...</p>}
            {response.error && <p>Error: {response.error}</p>}
            {response.insertedDoc && <p>Documento inserido com sucesso!</p>}
        </form>
    );
};

export default AddDocumentForm;
