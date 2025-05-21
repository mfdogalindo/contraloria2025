import type { LegislacionEntry } from '../types'; // Ensure LegislacionEntry is defined with id, norma, descripcion, details
 // Ensure LegislacionEntry is defined with id, norma, descripcion, details

export const legislacionTableData: LegislacionEntry[] = [
  {
    id: 'constitución',
    norma: "Constitución Política (Arts. 267, 268, 271, 272, 274 y concordantes)",
    descripcion: "Define el control fiscal, las atribuciones de la CGR y del Contralor General, y el marco general de su actuación.",
    details: {
      directa: "Fundamento de existencia y todas las funciones de la CGR.",
      especifica: "Base para todas las funciones asignadas, especialmente las auditorías y la determinación de responsabilidad."
    }
  },
  {
    id: 'ley42',
    norma: "Ley 42 de 1993",
    descripcion: "Organización del sistema de control fiscal financiero, principios, sistemas de control (financiero, legalidad, gestión, resultados, revisión de cuentas).",
    details: {
      directa: "Establece cómo se ejerce el control fiscal, las metodologías y los principios rectores.",
      especifica: "Fundamental para Función 1 (planear y ejecutar auditorías), Función 2 (estructurar informes), Función 5 (conceptos técnicos)."
    }
  },
  {
    id: 'al04',
    norma: "Acto Legislativo 04 de 2019",
    descripcion: "Fortalecimiento del control fiscal, énfasis en control concomitante y preventivo, creación del SINACOF, funciones de policía judicial para la CGR.",
    details: {
      directa: "Moderniza y redefine el alcance del control fiscal, otorgando nuevas herramientas a la CGR.",
      especifica: "Impacta la forma de planear y ejecutar auditorías (Función 1, 4), y el apoyo en indagaciones (Función 5)."
    }
  },
  {
    id: 'decreto403',
    norma: "Decreto 403 de 2020",
    descripcion: "Normas para la correcta implementación del Acto Legislativo 04 de 2019 y fortalecimiento del control fiscal. (Estudiar artículos vigentes).",
    details: {
      directa: "Detalla la aplicación práctica de las reformas constitucionales, competencias, SINACOF, acceso a información.",
      especifica: "Relevante para Función 1, 4, 5, 6 en cuanto a nuevas modalidades y herramientas de control."
    }
  },
  {
    id: 'ley610',
    norma: "Ley 610 de 2000",
    descripcion: "Establece el trámite de los procesos de responsabilidad fiscal.",
    details: {
      directa: "Define el proceso para determinar y resarcir el daño al patrimonio público.",
      especifica: "Esencial para Función 3 (sustanciar procesos administrativos sancionatorios)."
    }
  },
  {
    id: 'decretoley267',
    norma: "Decreto Ley 267 de 2000",
    descripcion: "Organización y funcionamiento de la CGR, estructura orgánica, funciones de sus dependencias.",
    details: {
      directa: "Define la estructura interna de la CGR y las competencias de las Gerencias Departamentales.",
      especifica: "Marco organizacional para el ejercicio de todas las funciones del cargo."
    }
  }
];