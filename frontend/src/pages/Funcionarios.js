import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';

function Funcionarios() {
  const [funcionarios, setFuncionarios] = useState([
    //{ id: 1, nome: 'João Silva', cargo: 'Desenvolvedor', departamento: 'TI' },
    //{ id: 2, nome: 'Maria Oliveira', cargo: 'Analista de RH', departamento: 'Recursos Humanos' },
    //{ id: 3, nome: 'Carlos Pereira', cargo: 'Gerente', departamento: 'Financeiro' },
  ]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/funcionarios')
      .then(response => setFuncionarios(response.data))
      .catch(error => console.error('Erro ao buscar dados:', error));
  }, []);

  // Função para remover um funcionário
  const removerFuncionario = (id) => {
    setFuncionarios(funcionarios.filter(func => func.id !== id));
  };

  // Função para adicionar um novo funcionário
  const adicionarFuncionario = () => {
    const novoFuncionario = {
      id: funcionarios.length + 1,
      nome: `Funcionário ${funcionarios.length + 1}`,
      cargo: 'Cargo Exemplo',
      departamento: 'Departamento Exemplo'
    };
    setFuncionarios([...funcionarios, novoFuncionario]);
  };

  return (
    <div>
      <h2>Funcionários</h2>
      <Button variant="primary" onClick={adicionarFuncionario} className="mb-3">
        Adicionar Funcionário
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Cargo</th>
            <th>Departamento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {funcionarios.map(funcionario => (
            <tr key={funcionario.id}>
              <td>{funcionario.id}</td>
              <td>{funcionario.nome}</td>
              <td>{funcionario.cargo}</td>
              <td>{funcionario.departamento}</td>
              <td>
                <Button variant="danger" onClick={() => removerFuncionario(funcionario.id)}>
                  Remover
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Funcionarios;