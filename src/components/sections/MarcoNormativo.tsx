import React, { useState } from 'react';
import { legislacionTableData } from '../../data/legislacionData';
import type { LegislacionEntry } from '../../types';

const MarcoNormativo: React.FC = () => {
  const [selectedNorma, setSelectedNorma] = useState<LegislacionEntry | null>(null);

  return (
    <section id="marco-normativo" className="content-section">
      <h2>Marco Normativo Clave</h2>
      <p className="mb-4">
        El quehacer de la CGR y el control fiscal se rigen por un conjunto de normas esenciales. La siguiente tabla interactiva resume la legislación más relevante. Haz clic en el nombre de la norma para ver más detalles.
      </p>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table>
          <thead>
            <tr>
              <th>Norma</th>
              <th>Descripción/Propósito Breve</th>
            </tr>
          </thead>
          <tbody>
            {legislacionTableData.map((item) => (
              <tr
                key={item.id}
                onClick={() => setSelectedNorma(item)}
                className={`cursor-pointer hover:bg-sky-50 ${selectedNorma?.id === item.id ? 'bg-sky-100' : ''}`}
              >
                <td>{item.norma}</td>
                <td>{item.descripcion}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {selectedNorma && (
        <div id="legislacion-details" className="mt-4 p-4 bg-sky-50 border border-sky-200 rounded-md">
          <h4 className="text-sky-700 font-semibold general-h4">{selectedNorma.norma}</h4>
          <p>
            <strong className="text-stone-600">Relevancia Directa para el Mandato de la CGR:</strong> {selectedNorma.details.directa}
          </p>
          <p>
            <strong className="text-stone-600">Relevancia Específica para Funciones de Gerencia Departamental:</strong> {selectedNorma.details.especifica}
          </p>
        </div>
      )}
    </section>
  );
};

export default MarcoNormativo;