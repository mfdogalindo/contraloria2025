# Instrucciones

## Generando contenido estàtico
Para vincular el material de estudio se tienen una serie de paginas estàticas en la carpeta `public`. Estas paginas se generan a partir de los archivos `.md` que se encuentran en la carpeta `data/contents`.

Las paginas generadas se vinculan en el sitio web en el componente `temasConocimientoData.ts`, como puedes ver ya se tienen algunos temas de conocimiento conectados como 01_control_fiscal.html, 02_procesos_auditoria.html y 03_procesos_sanciantorios.html.

Este es el listado de temas de conocimiento pendientes de generar y los archivos `.md` que debes encontrar en la carpeta `data/contents`:

titulo: "4. Contabilidad Pública Sectorial (Normas CGN)" -> 4. Contabilidad Pública Sectorial (Normas CGN).md
titulo: "5. Presupuesto Público (Estatuto Orgánico)" -> 5. Estatuto Orgánico Presupuesto Público Colombiano.md
titulo: "6. Contratación Estatal" -> 6. Contratación Estatal en Colombia.md
titulo: "7. Administración Pública y Servicio Público" -> 7. Administración Pública y Servicio Público.md
titulo: "8. Control Interno (MECI)" -> 8. Control Interno (MECI).md
titulo: "9. Gestión Documental y Actos Administrativos" -> 9. Procedimientos Administrativos y la Gestión Documental.md
titulo: "10. Proyectos de Inversión y Gestión de Contratos/Convenios" -> 10. Proyectos de Inversión y Gestión de Contratos.md

Con la información de los archivos `.md` que se encuentran en la carpeta `data/contents`, debes generar las páginas estáticas correspondientes en la carpeta `public` con el nombre indicado en el listado anterior y vincularlas en el componente `temasConocimientoData.ts`. Para las paginas intenta seguir el formato de las páginas ya creadas, como por ejemplo `01_control_fiscal.html`. donde encuentras un menu de navegacion lateral en la izquierda que te permite navegar por items tematicos del tema de conocimiento. Procesa la informacion con cuidado recordando los objetivos de aprendizaje y los temas que se deben tratar en cada uno de ellos.