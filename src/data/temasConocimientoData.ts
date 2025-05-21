import type { TemaConocimiento } from '../types';

export const temasConocimientoData: TemaConocimiento[] = [
{
                titulo: "1. Control Fiscal en Colombia",
                contenido: `
                    <a class="text-blue-500 font-bold" href="https://contraloria-polar.netlify.app/control_fiscal.html">Ver Recurso para estudiar</a>
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Marco Constitucional:</strong> Arts. 267, 268, 271, 272, 274.</li>
                        <li><strong>Ley 42 de 1993:</strong> Organización, principios, sistemas de control. Clave para Funciones 1 y 2.</li>
                        <li><strong>Acto Legislativo 04 de 2019:</strong> Fortalecimiento, control concomitante y preventivo, SINACOF.</li>
                        <li><strong>Decreto 403 de 2020:</strong> Desarrollo del Acto Legislativo (artículos vigentes). Impacta Funciones 1, 4, 5, 6.</li>
                        <li><strong>Normograma de Control Fiscal Macro y Vigilancia Fiscal Macro de la CGR.</strong></li>
                    </ul>
                `
            },
            {
                titulo: "2. Procesos y Normas de Auditoría",
                contenido: `
                   <a class="text-blue-500 font-bold" href="https://contraloria-polar.netlify.app/procesos_auditoria.html">Ver Recurso para estudiar</a>
                    <p>Aplicable a Funciones 1, 2, 4, 6.</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Planeación y ejecución de auditorías.</li>
                        <li>Estructuración de informes de auditoría.</li>
                        <li>Liderazgo de equipos de auditoría.</li>
                        <li>Actuación como enlace CGR - Ente Auditado.</li>
                        <li><strong>Guía de Auditoría de la CGR:</strong> Metodologías, procedimientos, estándares. Dominio esencial.</li>
                        <li>Tipos de auditoría, evidencia, riesgos, papeles de trabajo, hallazgos.</li>
                    </ul>
                `
            },
            {
                titulo: "3. Procesos Administrativos Sancionatorios",
                contenido: `
                    <a class="text-blue-500 font-bold" href="https://contraloria-polar.netlify.app/procesos_sancionatorios.html">Ver Recurso para estudiar</a>
                    <p>Aplicable a Función 3.</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Sustanciación de procesos para determinar responsabilidad fiscal.</li>
                        <li><strong>Ley 610 de 2000:</strong> Trámite, elementos (conducta, daño, nexo), etapas, consecuencias.</li>
                        <li><strong>Decreto 403 de 2020:</strong> Disposiciones vigentes sobre régimen sancionatorio fiscal.</li>
                        <li><strong>Guía para la aplicación del Procedimiento Administrativo Sancionatorio Fiscal de la CGR.</strong></li>
                    </ul>
                `
            },
            {
                titulo: "4. Contabilidad Pública Sectorial (Normas CGN)",
                contenido: `
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Ley 298 de 1996:</strong> Creación y funciones de la Contaduría General de la Nación (CGN).</li>
                        <li><strong>Régimen de Contabilidad Pública (RCP):</strong> Res. 354/2007 y mods. (ej. Res. 156/2018). Marco Conceptual, Catálogo General de Cuentas. Vital para Funciones 1 y 5.</li>
                        <li><strong>Normas Técnicas de Contabilidad Pública.</strong></li>
                    </ul>
                `
            },
            {
                titulo: "5. Presupuesto Público (Estatuto Orgánico)",
                contenido: `
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Decreto 111 de 1996:</strong> Principios presupuestales, ciclo presupuestal, clasificación ingresos/gastos, POAI. Relevante para Función 9.</li>
                    </ul>
                `
            },
            {
                titulo: "6. Contratación Estatal",
                contenido: `
                    <ul class="list-disc list-inside space-y-1">
                        <li><strong>Ley 80 de 1993:</strong> Objeto, principios, inhabilidades, tipos de contratos.</li>
                        <li><strong>Ley 1150 de 2007:</strong> Modificaciones, modalidades de selección, RUP, SECOP.</li>
                        <li><strong>SECOP (Sistema Electrónico de Contratación Pública).</strong></li>
                        <li><strong>Manual de Contratación de la CGR.</strong> Crucial para Función 9 y auditoría de contratación.</li>
                    </ul>
                `
            },
            {
                titulo: "7. Administración Pública y Servicio Público",
                contenido: `
                    <ul class="list-disc list-inside space-y-1">
                        <li>Estructura del Estado Colombiano.</li>
                        <li>Derechos y deberes de servidores públicos.</li>
                        <li>Ética en la función pública y Estatuto Anticorrupción (Ley 1474 de 2011).</li>
                        <li>Protocolos de servicio al ciudadano. Relevante para Función 7.</li>
                    </ul>
                `
            },
            {
                titulo: "8. Control Interno (MECI)",
                contenido: `
                    <ul class="list-disc list-inside space-y-1">
                        <li>Propósito, estructura, principios (Autocontrol, Autorregulación, Autogestión).</li>
                        <li><strong>Ley 87 de 1993:</strong> Normas para el ejercicio del control interno.</li>
                        <li>Relevante para Funciones 1 y 5.</li>
                    </ul>
                `
            },
            {
                titulo: "9. Gestión Documental y Actos Administrativos",
                contenido: `
                    <p>Aplicable a Funciones 7, 8.</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Trámite de derechos de petición, denuncias.</li>
                        <li>Proyección y revisión de actos administrativos.</li>
                        <li>Ley 1712 de 2014 (Transparencia).</li>
                        <li>Ley 1437 de 2011 (CPACA).</li>
                        <li>Procedimientos internos de gestión documental CGR.</li>
                    </ul>
                `
            },
            {
                titulo: "10. Proyectos de Inversión y Gestión de Contratos/Convenios",
                contenido: `
                    <p>Aplicable a Función 9.</p>
                    <ul class="list-disc list-inside space-y-1">
                        <li>Formulación, seguimiento y ejecución de proyectos de inversión.</li>
                        <li>Actividades de ejecución de contratos y convenios.</li>
                        <li>Metodologías (ej. MGA).</li>
                        <li><strong>Manual de Proyectos de la CGR.</strong></li>
                    </ul>
                `
            }
];