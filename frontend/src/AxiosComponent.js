import React, { useEffect, useState } from 'react';
import api from '../services/api';

const MyComponent = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        api.get('http://127.0.0.1:8000/api/funcionarios')
            .then(response => setData(response.data))
            .catch(error => console.error('Erro ao buscar dados:', error));
    }, []);

    const login = async (username, password) => {
        try {
          const response = await api.post('http://127.0.0.1:8000/api/token/', {
            username,
            password,
          });
          const { access, refresh } = response.data;
      
          // Armazene os tokens no localStorage ou em um estado global
          localStorage.setItem('accessToken', access);
          localStorage.setItem('refreshToken', refresh);
      
          console.log('Login bem-sucedido:', response.data);
        } catch (error) {
          console.error('Erro ao fazer login:', error);
        }
      };
      
      // Exemplo de uso
      login('dan', '614926');

    return (
        <div>
            <h1>Dados da API</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MyComponent;
