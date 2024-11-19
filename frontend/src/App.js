import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Funcionarios from './pages/Funcionarios';
import Clientes from './pages/Clientes';
import Gastos from './pages/Gastos';
import Lucros from './pages/Lucros';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Line, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { FaMoneyBillWave, FaChartLine, FaUsers } from 'react-icons/fa';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

function DashboardContent() {
  const location = useLocation();

  // Dados fictícios para demonstração
  const totalGastos = 10000;
  const totalLucros = 15000;
  const saldoAtual = totalLucros - totalGastos;
  const totalFuncionarios = 50;

  const lineData = {
    labels: ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
    datasets: [
      {
        label: 'Gastos',
        data: [5000, 4000, 3000, 2000, 2500, 3000, 3500],
        borderColor: 'rgba(255, 99, 132, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
      },
      {
        label: 'Lucros',
        data: [8000, 7000, 7500, 7000, 7200, 6900, 7700],
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
      },
    ],
  };

  const pieData = {
    labels: ['Gastos', 'Lucros'],
    datasets: [
      {
        data: [totalGastos, totalLucros],
        backgroundColor: ['#ff6384', '#36a2eb'],
      },
    ],
  };

  return (
    <div className="content">
      {/* Exibe a mensagem e os cards apenas na rota /dashboard */}
      {location.pathname === '/dashboard' && (
        <>
          <h1 className='text-center'>Bem-vindo ao Dashboard</h1>
          <Container fluid className="pt-4">
            <Row className="mb-4">
              <Col md={3}>
                <Card className="text-center shadow-sm p-3">
                  <FaMoneyBillWave size={40} color="red" />
                  <Card.Body>
                    <Card.Title>Total de Gastos</Card.Title>
                    <Card.Text style={{ color: 'red', fontSize: '1.5em' }}>
                      R$ {totalGastos.toLocaleString('pt-BR')}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-center shadow-sm p-3">
                  <FaChartLine size={40} color="green" />
                  <Card.Body>
                    <Card.Title>Total de Lucros</Card.Title>
                    <Card.Text style={{ color: 'green', fontSize: '1.5em' }}>
                      R$ {totalLucros.toLocaleString('pt-BR')}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-center shadow-sm p-3">
                  <FaChartLine size={40} color="blue" />
                  <Card.Body>
                    <Card.Title>Saldo Atual</Card.Title>
                    <Card.Text style={{ color: 'blue', fontSize: '1.5em' }}>
                      R$ {saldoAtual.toLocaleString('pt-BR')}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={3}>
                <Card className="text-center shadow-sm p-3">
                  <FaUsers size={40} color="purple" />
                  <Card.Body>
                    <Card.Title>Funcionários</Card.Title>
                    <Card.Text style={{ color: 'purple', fontSize: '1.5em' }}>
                      {totalFuncionarios}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row className="mt-4">
              <Col md={8}>
                <Card className="p-3 shadow-sm chart-container">
                  <h4>Estatísticas Semanais</h4>
                  <Line data={lineData} />
                </Card>
              </Col>
              <Col md={4}>
                <Card className="p-3 shadow-sm chart-small">
                  <h4>Proporção de Gastos e Lucros</h4>
                  <Pie data={pieData} />
                </Card>
              </Col>
            </Row>
          </Container>
        </>
      )}
      
      {/* Rotas para outras páginas */}
      <Routes>
        <Route path="/dashboard" element={<></>} />
        <Route path="/funcionarios" element={<Funcionarios />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/gastos" element={<Gastos />} />
        <Route path="/lucros" element={<Lucros />} />
        {/* Redireciona a rota raiz (/) para /dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </div>
  );
}

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-content">
          <Header />
          <DashboardContent />
        </div>
      </div>
    </Router>
  );
}

export default App;