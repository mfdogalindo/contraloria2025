import React from 'react';

const SobreLaCGR: React.FC = () => {
  return (
    <section id="sobre-la-cgr" className="content-section">
      <h2>Sobre la Contraloría General de la República (CGR)</h2>
      <p className="mb-4">
        Un entendimiento profundo de la CGR es crucial. Su misión principal es "Vigilar la gestión fiscal de la administración y de los particulares o entidades que manejan fondos o bienes de la Nación".
      </p>
      <h4 className="general-h4">Misión, Visión y Objetivos Estratégicos</h4>
      <p className="mb-4"> {/* Added mb-4 for spacing, adjust as needed */}
        La CGR busca generar una cultura de control fiscal basada en principios éticos, con una visión de administración pública eficiente y moral. Estratégicamente, se enfoca en fortalecer la transparencia y la lucha contra la corrupción. Se recomienda consultar <a href="https://www.contraloria.gov.co" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">www.contraloria.gov.co</a> para la información más reciente.
      </p>
      <h4 className="general-h4">Mandato Constitucional y Legal</h4>
      <p className="mb-4"> {/* Added mb-4 for spacing */}
        La CGR se fundamenta en la Constitución Política de 1991 (Art. 267 y 268), que define el control fiscal y las atribuciones del Contralor General. Opera como un órgano autónomo e independiente.
      </p>
      <h4 className="general-h4">Funciones Clave y Estructura</h4>
      <p>
        Las funciones del cargo (listadas en la sección "El Concurso") reflejan las responsabilidades misionales de la CGR a nivel territorial. El Decreto Ley 267 de 2000 establece la organización y funcionamiento de la CGR, incluyendo las Gerencias Departamentales, que representan a la CGR en su jurisdicción.
      </p>
    </section>
  );
};

export default SobreLaCGR;