import React from 'react';
import { cronogramaTableData } from '../../data/cronogramaData';

const ElConcurso: React.FC = () => {
  return (
    <section id="el-concurso" className="content-section">
      <h2>El Concurso CGR 2024-2026 (OPEC 204-25)</h2>
      <p className="mb-4">
        El "Concurso Abierto de Méritos CGR 2024 - 2026" busca seleccionar personal idóneo para la carrera administrativa especial de la CGR. Para la convocatoria 204-25 (Profesional Universitario, Contaduría Pública), es crucial entender las etapas y requisitos.
      </p>

      <h3 id="funciones-cargo" className="general-h4">Funciones del Cargo: Profesional Universitario (Gerencia Departamental)</h3>
      <p className="mb-4">
        Las funciones asignadas para el cargo de Profesional Universitario en una Gerencia Departamental son las siguientes:
      </p>
      <ol className="list-decimal list-inside space-y-2 mb-6 bg-amber-50 p-4 rounded-md">
        <li>Planear y ejecutar las auditorías asignadas, asegurando el cumplimiento de la normatividad y los procedimientos establecidos en cada proceso auditor.</li>
        <li>Estructurar el informe de auditoría de acuerdo con los resultados obtenidos de las preguntas e hipótesis planteadas en el plan de trabajo y las pruebas realizadas durante la ejecución.</li>
        <li>Sustanciar los procesos administrativos sancionatorios, para determinar el grado de responsabilidad del gestor fiscal, conforme a la normativa aplicable.</li>
        <li>Liderar los equipos de auditoría en los ejercicios asignados, planificando las auditorías con base en los objetivos institucionales y la normativa vigente.</li>
        <li>Apoyar en estudios, trámites y conceptos técnicos en las áreas relacionadas con su especialidad, contribuyendo a la toma de decisiones en las indagaciones preliminares.</li>
        <li>Participar como líder en los procesos de auditoría, actuando como enlace entre la Contraloría General de la República y el Ente Auditado, siguiendo la normativa y procedimientos establecidos.</li>
        <li>Tramitar los derechos de petición, denuncias fiscales y demás requerimientos dirigidos al grupo de vigilancia fiscal, cumpliendo con los procedimientos y normatividad aplicables.</li>
        <li>Realizar la proyección, respuesta y/o revisión de actos administrativos, peticiones y otros documentos relacionados, conforme a los procedimientos establecidos y el marco normativo vigente.</li>
        <li>Participar en la formulación, seguimiento y ejecución del proyecto de inversión de la dependencia, así como en las actividades previas y de ejecución de contratos y convenios, siguiendo los lineamientos establecidos y la normativa vigente.</li>
        <li>Las demás que le sean asignadas por su jefe inmediato y que estén acordes con la naturaleza del cargo y la dependencia.</li>
      </ol>
      <p className="mb-4">
        Se requiere Título Universitario en Contaduría Pública y tres (3) años de experiencia profesional específica o relacionada con el cargo.
      </p>

      <h3 className="general-h4">Etapas Clave y Cronograma del Concurso</h3>
      <p className="mb-4">
        El proceso de selección es extenso y se gestiona principalmente a través del portal <a href="https://www.concursocgr2024-2026.com.co" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">www.concursocgr2024-2026.com.co</a>. A continuación, se presenta un resumen del cronograma:
      </p>
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table>
          <thead>
            <tr>
              <th>Etapa</th>
              <th>Fechas Clave Estimadas</th>
              <th>Plataforma/Fuente de Información Principal</th>
            </tr>
          </thead>
          <tbody>
            {cronogramaTableData.map((item, index) => (
              <tr key={index}>
                <td>{item.etapa}</td>
                <td>{item.fechas}</td>
                <td>{item.plataforma}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="text-xs mt-2 italic">
        Fuente: Información consolidada de la guía. Las fechas son indicativas y deben ser confirmadas en el portal oficial del concurso.
      </p>

      <h4 className="general-h4">Proceso de Aplicación y SIMO</h4>
      <p>
        Es fundamental registrarse y gestionar la aplicación a través del portal oficial del concurso. Aunque la plataforma SIMO (simo.cnsc.gov.co) es relevante para otros concursos, para esta convocatoria específica de la CGR, el portal <a href="https://www.concursocgr2024-2026.com.co" target="_blank" rel="noopener noreferrer" className="text-sky-600 hover:underline">www.concursocgr2024-2026.com.co</a> es la fuente principal de información e interacción.
      </p>
    </section>
  );
};

export default ElConcurso;