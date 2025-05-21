export interface NavItem {
  href: string;
  label: string;
}

export interface TemaConocimiento {
  titulo: string;
  contenido: string; // HTML content
}

export interface LegislacionDetail {
  directa: string;
  especifica: string;
}
export interface LegislacionEntry {
  id: string; // Add an ID for keying and selection
  norma: string;
  descripcion: string;
  details: LegislacionDetail;
}

export interface CronogramaEntry {
  etapa: string;
  fechas: string;
  plataforma: string;
}

export interface PlanEstudioEntry {
  temaPrincipal: string;
  intensidadHoraria: string;
  actividades: string;
  recursos: string;
}