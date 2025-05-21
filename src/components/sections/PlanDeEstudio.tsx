import React from 'react';
import { planEstudioTableData } from '../../data/planEstudioData';

const PlanDeEstudio: React.FC = () => {
  return (
    <section id="plan-de-estudio" className="content-section">
      <h2>Plan de Estudio y Preparación</h2>
      <p className="mb-4">
        Una preparación exitosa requiere un plan estructurado y el uso de recursos adecuados. Dada la amplitud de temas y la duración del concurso, un cronograma realista es esencial.
      </p>

      <h3 className="general-h4">Ejemplo de Distribución de Estudio por Temas</h3>
      <div className="overflow-x-auto shadow-md rounded-lg mb-6">
        <table>
          <thead>
            <tr>
              <th>Tema Principal</th>
              <th>Intensidad Horaria Total (Estimada)</th>
              <th>Actividades Clave / Enfoque</th>
              <th>Recursos Primarios</th>
            </tr>
          </thead>
          <tbody>
            {planEstudioTableData.map((item, index) => (
              <tr key={index}>
                <td>{item.temaPrincipal}</td>
                <td>{item.intensidadHoraria}</td>
                <td>{item.actividades}</td>
                <td>{item.recursos}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs italic mb-6">
        Este es un ejemplo de distribución temática; ajústalo a tus fortalezas, debilidades y al tiempo disponible. La intensidad horaria es una estimación del total dedicado al tema a lo largo de tu preparación.
      </p>

      <h3 className="general-h4">Recopilación de Información y Materiales</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>
          <strong>Fuentes Oficiales:</strong>
          <ul className="list-circle list-inside ml-4">
            <li>Portal del Concurso: <a href="https://www.concursocgr2024-2026.com.co" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">www.concursocgr2024-2026.com.co</a> (Acuerdo de Convocatoria, Guía de Orientación).</li>
            <li>Sitio Web CGR: <a href="https://www.contraloria.gov.co" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">www.contraloria.gov.co</a> (normatividad, manuales).</li>
            <li>Sitio Web CNSC: <a href="https://www.cnsc.gov.co" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">www.cnsc.gov.co</a> (directrices generales).</li>
          </ul>
        </li>
        <li>
          <strong>Materiales de Estudio:</strong>
          <ul className="list-circle list-inside ml-4">
            <li>Documentos Normativos (Constitución, Leyes, Decretos, Resoluciones).</li>
            <li>Manuales Internos de la CGR (Guía de Auditoría, Manual de Contratación, etc.).</li>
            <li>Textos Académicos y Publicaciones Especializadas.</li>
            <li>Recursos en Línea y Foros (Senpro, Grupo Geard, etc. - verificar con fuentes oficiales).</li>
            <li>Simulacros y Preguntas Situacionales (enfocados en CGR y Contaduría Pública).</li>
          </ul>
        </li>
      </ul>

      <h3 className="mt-4 general-h4">Técnicas de Estudio Activo</h3>
      <ul className="list-disc list-inside space-y-1">
        <li>Elaborar resúmenes, mapas conceptuales, fichas.</li>
        <li>Desarrollar estudios de caso basados en las 10 funciones del cargo.</li>
        <li>Considerar grupos de estudio.</li>
      </ul>
    </section>
  );
};

export default PlanDeEstudio;