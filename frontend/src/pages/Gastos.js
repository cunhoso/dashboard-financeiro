import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Gastos() {
  const [startDate, setStartDate] = useState(new Date('2023-01-01'));
  const [endDate, setEndDate] = useState(new Date('2023-06-30'));

  // Dados fictícios para demonstração
  const rawData = [
    { month: 'Janeiro', amount: 5000, date: new Date('2023-01-15') },
    { month: 'Fevereiro', amount: 3000, date: new Date('2023-02-10') },
    { month: 'Março', amount: 4000, date: new Date('2023-03-20') },
    { month: 'Abril', amount: 6000, date: new Date('2023-04-25') },
    { month: 'Maio', amount: 7000, date: new Date('2023-05-10') },
    { month: 'Junho', amount: 5000, date: new Date('2023-06-15') },
  ];

  const filteredData = rawData.filter(item => item.date >= startDate && item.date <= endDate);
  const labels = filteredData.map(item => item.month);
  const dataAmounts = filteredData.map(item => item.amount);

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Gastos Mensais',
        data: dataAmounts,
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h2>Gastos</h2>
      <div className="date-filter">
        <label>Data Inicial:</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        <label>Data Final:</label>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />
      </div>
      <div className="chart-container"> {/* Limita a altura do gráfico */}
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default Gastos;