import React, { useState } from 'react';
import TestWeightsChart from '../TestWeightsChart';
import AccordionItem from '../AccordionItem';
import { temasConocimientoData } from '../../data/temasConocimientoData'; // Adjust path as needed

type TabId = 'conocimientos' | 'comportamentales' | 'antecedentes';

const LasPruebas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('conocimientos');

  const tabConfig = [
    { id: 'conocimientos', label: 'Competencias Funcionales (Conocimientos)' },
    { id: 'comportamentales', label: 'Competencias Comportamentales' },
    { id: 'antecedentes', label: 'Análisis de Antecedentes' },
  ];

  return (
    <section id="las-pruebas" className="content-section">
      <h2>Las Pruebas del Concurso</h2>
      <p className="mb-4">
        La selección se realiza a través de tres pruebas principales. Es crucial prepararse de manera diferenciada para cada una.
      </p>

      <h3 className="text-center general-h4">Distribución de Pesos de las Pruebas</h3>
      <TestWeightsChart />
      <p className="text-center text-sm italic mb-6">
        Visualización del peso porcentual aproximado de cada prueba en la calificación final.
      </p>

      <div className="mb-4 border border-stone-300 rounded-lg">
        <div className="flex border-b border-stone-300">
          {tabConfig.map(tab => (
            <button
              key={tab.id}
              className={`tab-button-style ${activeTab === tab.id ? 'bg-sky-600 text-white' : 'text-sky-600 hover:bg-sky-100'}`}
              onClick={() => setActiveTab(tab.id as TabId)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {activeTab === 'conocimientos' && (
          <div className="p-4 border-t-0 rounded-b-lg bg-white"> {/* Tab content style */}
            <h4 className="general-h4">Prueba de Competencias Funcionales (Conocimientos)</h4>
            <p className="mb-2"><strong>Carácter:</strong> Eliminatorio.</p>
            <p className="mb-2"><strong>Peso Aprox.:</strong> 60%.</p>
            <p className="mb-4">Evalúa los conocimientos básicos y específicos...</p>
            <h4 className="mt-4 general-h4">Áreas Temáticas Centrales:</h4>
            <div className="space-y-2">
              {temasConocimientoData.map((tema, index) => (
                <AccordionItem key={index} item={tema} />
              ))}
            </div>
          </div>
        )}
        {activeTab === 'comportamentales' && (
          <div className="p-4 border-t-0 rounded-b-lg bg-white">
            <h4 className="general-h4">Prueba de Competencias Comportamentales</h4>
            <p className="mb-2"><strong>Carácter:</strong> Clasificatorio.</p>
            <p className="mb-2"><strong>Peso Aprox.:</strong> 20%.</p>
            {/* ... more content ... */}
          </div>
        )}
        {activeTab === 'antecedentes' && (
          <div className="p-4 border-t-0 rounded-b-lg bg-white">
            <h4 className="general-h4">Análisis de Antecedentes</h4>
            <p className="mb-2"><strong>Carácter:</strong> Clasificatorio.</p>
            <p className="mb-2"><strong>Peso Aprox.:</strong> 20%.</p>
            {/* ... more content ... */}
          </div>
        )}
      </div>
    </section>
  );
};

export default LasPruebas;