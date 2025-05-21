import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-800 text-stone-300 text-center py-6 mt-auto">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Guía Interactiva Concurso CGR. Adaptado de la "Guía Estratégica de Preparación para el Concurso CGR 2024-2026".
      </p>
      <p className="text-xs mt-1">
        Aplicación generada con fines demostrativos y de estudio.
      </p>
    </footer>
  );
};

export default Footer;