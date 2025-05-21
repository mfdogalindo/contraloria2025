// src/App.tsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Inicio from './components/sections/Inicio';
import ElConcurso from './components/sections/ElConcurso'; // Correct path
import SobreLaCGR from './components/sections/SobreLaCGR'; // Correct path
import MarcoNormativo from './components/sections/MarcoNormativo'; // Correct path
import LasPruebas from './components/sections/LasPruebas';
import PlanDeEstudio from './components/sections/PlanDeEstudio'; // Correct path
import Recomendaciones from './components/sections/Recomendaciones'; // Correct path


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/inicio" replace />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="el-concurso" element={<ElConcurso />} />
          <Route path="sobre-la-cgr" element={<SobreLaCGR />} />
          <Route path="marco-normativo" element={<MarcoNormativo />} />
          <Route path="las-pruebas" element={<LasPruebas />} />
          <Route path="plan-de-estudio" element={<PlanDeEstudio />} />
          <Route path="recomendaciones" element={<Recomendaciones />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;