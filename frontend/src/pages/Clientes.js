import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';

function Clientes() {
  const [clientes, setClientes] = useState([
    { id: 1, nome: 'Empresa ABC', contato: 'João Oliveira', email: 'joao@abc.com' },
    { id: 2, nome: 'Empresa XYZ', contato: 'Maria Santos', email: 'maria@xyz.com' },
    { id: 3, nome: 'Tech Solutions', contato: 'Carlos Pereira', email: 'carlos@techsolutions.com' },
  ]);

  const removerCliente = (id) => {
    setClientes(clientes.filter(cliente => cliente.id !== id));
  };

  const adicionarCliente = () => {
    const novoCliente = {
      id: clientes.length + 1,
      nome: `Cliente ${clientes.length + 1}`,
      contato: 'Contato Exemplo',
      email: `email${clientes.length + 1}@exemplo.com`
    };
    setClientes([...clientes, novoCliente]);
  };

  return (
    <div>
      <h2>Clientes</h2>
      <Button variant="primary" onClick={adicionarCliente} className="mb-3">
        Adicionar Cliente
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Contato</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.nome}</td>
              <td>{cliente.contato}</td>
              <td>{cliente.email}</td>
              <td>
                <Button variant="danger" onClick={() => removerCliente(cliente.id)}>
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

export default Clientes;