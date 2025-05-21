import React from 'react';

const Recomendaciones: React.FC = () => {
  return (
    <section id="recomendaciones" className="content-section">
      <h2>Recomendaciones Finales y Mentalidad para el Éxito</h2>
      <p className="mb-4">
        Abordar este concurso requiere no solo conocimiento técnico, sino también una estrategia sólida y una mentalidad adecuada.
      </p>
      <ul className="list-disc list-inside space-y-2 bg-amber-50 p-4 rounded-md">
        <li><strong>Gestión del Tiempo Durante las Pruebas:</strong> Administra tu tiempo eficazmente, especialmente en preguntas situacionales.</li>
        <li><strong>Manejo del Estrés:</strong> Implementa técnicas de relajación y asegura un buen descanso.</li>
        <li><strong>Rigurosidad y Atención al Detalle:</strong> Desde la inscripción hasta cada pregunta del examen.</li>
        <li><strong>Mentalidad Positiva y Proactiva:</strong> La perseverancia y la confianza son fundamentales. El concurso es un proceso largo.</li>
        <li><strong>Priorizar Fuentes Oficiales:</strong> Siempre contrasta la información.</li>
        <li><strong>Comprender el "Porqué":</strong> Conecta tu esfuerzo con la importancia de la labor en la CGR.</li>
        <li><strong>Integridad y Ética:</strong> Las pruebas pueden explorar la toma de decisiones éticas. Refleja siempre los más altos estándares.</li>
      </ul>
      <p className="mt-4">
        Este plan de preparación, seguido con diligencia, te proveerá de las herramientas para enfrentar con confianza el concurso. ¡El éxito depende de tu dedicación y profundidad de estudio!
      </p>
    </section>
  );
};

export default Recomendaciones;