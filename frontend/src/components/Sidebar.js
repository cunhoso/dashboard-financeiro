import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBars, FaUsers, FaChartLine, FaMoneyBillWave, FaBuilding } from 'react-icons/fa';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <FaBars className="toggle-icon" onClick={toggleSidebar} />
        {isOpen && <h2 className="text-center my-3">CEBP</h2>}
      </div>
      <Nav className="flex-column">
        <Nav.Item>
          <Nav.Link as={Link} to="/dashboard">
            {isOpen ? "Dashboard" : <FaChartLine />}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/funcionarios">
            {isOpen ? "Funcionários" : <FaUsers />}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/clientes">
            {isOpen ? "Clientes" : <FaBuilding />}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/gastos">
            {isOpen ? "Gastos" : <FaMoneyBillWave />}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} to="/lucros">
            {isOpen ? "Lucros" : <FaChartLine />}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Sidebar;
