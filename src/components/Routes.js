// routes.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importe os componentes do React Router
import FormAgua from '../pages/FormAgua';
import FormImc from '../pages/FormImc';
import Home from '../pages/Home';


const AppRoutes = () => {
  return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} /> {/* Rota para a página inicial */}
                <Route path="/agua" element={<FormAgua />} /> {/* Rota para o cálculo de água */}
                <Route path="/imc" element={<FormImc />} /> {/* Rota para o cálculo de água */}
                {/* Adicione outras rotas conforme necessário */}
            </Routes>
        </Router>
  );
};

export default AppRoutes;
