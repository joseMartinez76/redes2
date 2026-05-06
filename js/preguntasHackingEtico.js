// UT-1: Hacking Ético — Introducción, marco legal y forense básico — 20 preguntas
// Para añadir al objeto questionsDB bajo la clave correspondiente (ej: utHE1)

const questionsDB = {
    ut1:[
    {
        question: "¿Qué función principal tiene el hacking ético?",
        options: ["Borrar rastros de ataques", "Acceder a sistemas sin dejar huella", "Encontrar fallos para venderlos a terceros", "Detectar y corregir vulnerabilidades de forma legal"],
        correct: 3,
        explanation: "El hacking ético consiste en aplicar técnicas de ataque de forma autorizada y legal para identificar vulnerabilidades antes de que lo haga un atacante malicioso, permitiendo corregirlas.",
        topic: "Fundamentos"
    },
    {
        question: "¿Cuál de los siguientes perfiles actúa siempre con permiso y dentro de la ley?",
        options: ["Black Hat", "Grey Hat", "Script Kiddie", "White Hat"],
        correct: 3,
        explanation: "El White Hat (hacker ético) trabaja siempre con autorización explícita del cliente o propietario del sistema, dentro del marco legal, y su objetivo es mejorar la seguridad.",
        topic: "Perfiles de hacker"
    },
    {
        question: "¿Qué objetivo tiene el modelo 'Cyber Kill Chain'?",
        options: ["Determinar el origen del malware", "Clasificar herramientas de ataque", "Explicar las fases de una auditoría legal", "Representar las fases de un ciberataque"],
        correct: 3,
        explanation: "La Cyber Kill Chain de Lockheed Martin modela las fases secuenciales de un ciberataque (reconocimiento, armado, entrega, explotación, instalación, C2, acciones), permitiendo identificar dónde interrumpirlo.",
        topic: "Modelos de ataque"
    },
    {
        question: "¿Qué se debe hacer antes de iniciar una auditoría ética?",
        options: ["Recoger información sin avisar", "Realizar un escaneo pasivo", "Aceptar el reto por correo", "Firmar una cláusula de autorización"],
        correct: 3,
        explanation: "Antes de cualquier test de penetración o auditoría ética es imprescindible obtener una autorización escrita y firmada (Rules of Engagement / carta de autorización) que defina el alcance y legalice las acciones.",
        topic: "Marco legal"
    },
    {
        question: "¿Cuál es una amenaza interna?",
        options: ["Un ransomware desconocido", "Un gusano en la red", "Una intrusión desde el exterior", "Un empleado que filtra datos"],
        correct: 3,
        explanation: "Las amenazas internas (insider threats) provienen de personas con acceso legítimo al sistema: empleados descontentos, negligentes o comprometidos que filtran, roban o dañan información.",
        topic: "Tipos de amenazas"
    },
    {
        question: "¿Cuál de estos es un tipo de malware que cifra archivos y pide rescate?",
        options: ["Troyano", "Rootkit", "Spyware", "Ransomware"],
        correct: 3,
        explanation: "El ransomware cifra los archivos de la víctima y exige un rescate económico (normalmente en criptomoneda) para proporcionar la clave de descifrado.",
        topic: "Tipos de malware"
    },
    {
        question: "¿Qué tipo de hacker puede actuar sin permiso pero con intención no destructiva?",
        options: ["Black Hat", "White Hat", "Insider", "Grey Hat"],
        correct: 3,
        explanation: "El Grey Hat actúa en una zona intermedia: puede acceder a sistemas sin autorización pero sin intención maliciosa, a veces notificando al propietario. Su actividad sigue siendo ilegal aunque no sea destructiva.",
        topic: "Perfiles de hacker"
    },
    {
        question: "¿Cuál es la primera fase de un análisis forense?",
        options: ["Análisis", "Presentación", "Documentación", "Identificación"],
        correct: 3,
        explanation: "La identificación es la primera fase del análisis forense: consiste en reconocer y localizar las posibles fuentes de evidencia (dispositivos, logs, memorias) antes de proceder a su adquisición.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué principio forense impide que se trabaje sobre la evidencia original?",
        options: ["Trazabilidad", "Integridad digital", "Cadena de custodia", "No alteración"],
        correct: 3,
        explanation: "El principio de no alteración exige trabajar siempre sobre copias forenses de la evidencia original, preservando su estado intacto para garantizar su validez legal y la posibilidad de repetir el análisis.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué tipo de evidencia desaparece al apagar el sistema?",
        options: ["Persistente", "Oculta", "Registrada", "Volátil"],
        correct: 3,
        explanation: "La evidencia volátil (RAM, conexiones de red activas, procesos en ejecución, tabla ARP) existe solo mientras el sistema está encendido y se pierde irreversiblemente al apagarlo, por lo que debe adquirirse primero.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué significa actuar dentro del alcance en un test de seguridad?",
        options: ["Usar cualquier herramienta disponible", "Probar vulnerabilidades fuera del horario laboral", "Atacar sistemas que no han sido autorizados", "Ajustarse a lo pactado y autorizado por el cliente"],
        correct: 3,
        explanation: "El alcance (scope) define exactamente qué sistemas, redes y técnicas están autorizados en el test. Actuar fuera del alcance convierte el test en un ataque ilegal, independientemente de la intención.",
        topic: "Marco legal"
    },
    {
        question: "¿Qué elemento garantiza que un análisis forense pueda ser válido legalmente?",
        options: ["Analizar solo una parte del disco", "Comprimir las evidencias para ahorrar espacio", "Modificar archivos para limpiarlos", "Documentar cada paso y mantener la integridad de la evidencia"],
        correct: 3,
        explanation: "La validez legal de un análisis forense depende de que se documente meticulosamente cada acción realizada y se demuestre que la evidencia no fue alterada, mediante hashes y cadena de custodia.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué tipo de amenaza depende de engañar al usuario para robar información?",
        options: ["Ransomware", "Ataque físico", "Keylogging remoto por hardware", "Ingeniería social"],
        correct: 3,
        explanation: "La ingeniería social manipula psicológicamente a las personas para que revelen información confidencial o realicen acciones que comprometan la seguridad, sin necesidad de explotar vulnerabilidades técnicas.",
        topic: "Tipos de amenazas"
    },
    {
        question: "¿Cuál de los siguientes delitos está recogido en el Código Penal español?",
        options: ["Búsqueda en bases de datos públicas", "Auditoría propia sin informe", "Acceso autorizado con fines de prueba", "Interceptación de comunicaciones sin permiso"],
        correct: 3,
        explanation: "La interceptación de comunicaciones sin autorización judicial o consentimiento está tipificada en el Código Penal español (arts. 197 y ss.) como delito contra la intimidad y el secreto de las comunicaciones.",
        topic: "Marco legal"
    },
    {
        question: "¿Qué ley regula el tratamiento de datos personales en la UE?",
        options: ["LOPDGDD", "ENS", "LSSI", "RGPD"],
        correct: 3,
        explanation: "El RGPD (Reglamento General de Protección de Datos, UE 2016/679) es la norma europea de referencia para el tratamiento de datos personales, aplicable en todos los estados miembros desde mayo de 2018.",
        topic: "Marco legal"
    },
    {
        question: "¿Qué valor asegura que un archivo no ha sido modificado?",
        options: ["Extensión", "IP", "Nombre de archivo", "Hash"],
        correct: 3,
        explanation: "El hash criptográfico (MD5, SHA-256, SHA-3) genera una huella digital única del archivo. Si el archivo es modificado aunque sea en un bit, el hash resultante cambia completamente, evidenciando la alteración.",
        topic: "Análisis forense"
    },
    {
        question: "¿Cuál es la principal finalidad de un informe en ciberseguridad?",
        options: ["Ocultar los fallos de la empresa", "Usar lenguaje complicado", "Mostrar capturas sin explicación", "Explicar los resultados con claridad y proponer mejoras"],
        correct: 3,
        explanation: "Un informe de ciberseguridad debe comunicar los hallazgos de forma clara y comprensible para el destinatario (técnico o directivo), priorizando las vulnerabilidades y proponiendo acciones de remediación concretas.",
        topic: "Informes"
    },
    {
        question: "¿Qué fase del ciclo de ataque consiste en recopilar información del objetivo?",
        options: ["Borrado de huellas", "Post-explotación", "Persistencia", "Reconocimiento"],
        correct: 3,
        explanation: "La fase de reconocimiento (recon) es la primera del ciclo de ataque: el atacante recopila información sobre el objetivo (OSINT, escaneo de puertos, enumeración) sin necesariamente interactuar con los sistemas.",
        topic: "Modelos de ataque"
    },
    {
        question: "¿Cuál es el objetivo de documentar cada paso del análisis?",
        options: ["Borrar rastros legales", "Cifrar las evidencias", "Evitar compartir con terceros", "Poder replicar el proceso"],
        correct: 3,
        explanation: "Documentar cada paso del análisis forense permite reproducir el proceso de forma independiente, verificar los resultados, garantizar la trazabilidad y hacer que el informe sea admisible como prueba en un proceso judicial.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué principio forense evita que la evidencia sea manipulada durante el análisis?",
        options: ["Disponibilidad", "Minimización", "Redundancia", "Integridad"],
        correct: 3,
        explanation: "El principio de integridad garantiza que la evidencia digital no es alterada en ningún momento del proceso forense, verificándose mediante hashes antes y después de cada operación para detectar cualquier modificación.",
        topic: "Análisis forense"
    }
],

// UT-2: Hacking Ético — Análisis forense e incidentes de seguridad — 20 preguntas
// Para añadir al objeto questionsDB bajo la clave correspondiente (ej: utHE2)

    ut2:[
    {
        question: "¿Qué es la cadena de custodia en análisis forense?",
        options: ["Un tipo de almacenamiento en red", "Un listado de usuarios del sistema", "Un procedimiento de cifrado de archivos", "Un registro continuo que garantiza que la evidencia no ha sido alterada"],
        correct: 3,
        explanation: "La cadena de custodia documenta quién, cuándo y cómo ha accedido a la evidencia desde su recogida hasta su presentación en juicio, garantizando que no ha sido manipulada y que es admisible legalmente.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué tipo de evidencia se pierde al apagar el sistema?",
        options: ["Evidencia persistente", "Evidencia física", "Evidencia secundaria", "Evidencia volátil"],
        correct: 3,
        explanation: "La evidencia volátil reside en memoria RAM, caché, conexiones activas y procesos en ejecución. Al apagar el sistema se pierde definitivamente, por lo que debe adquirirse antes que cualquier otro tipo de evidencia.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué herramienta permite crear imágenes forenses sin modificar el original?",
        options: ["Excel", "Recuva", "Wireshark", "FTK Imager"],
        correct: 3,
        explanation: "FTK Imager crea copias forenses bit a bit de discos y particiones calculando hashes MD5/SHA-1 para verificar que la imagen es idéntica al original, sin alterar el dispositivo fuente.",
        topic: "Herramientas forenses"
    },
    {
        question: "¿Qué describe un metadato en un archivo digital?",
        options: ["Tamaño del disco", "Contraseña y permisos", "Nombre del sistema operativo", "Autor, fecha y versión"],
        correct: 3,
        explanation: "Los metadatos son datos sobre los datos: en un archivo digital incluyen el autor, fechas de creación/modificación/acceso, versión, software usado y geolocalización, siendo muy valiosos en análisis forense.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué significa que un sistema tiene integridad?",
        options: ["Que tiene buena reputación", "Que está respaldado en la nube", "Que es accesible desde cualquier lugar", "Que no ha sido modificado sin autorización"],
        correct: 3,
        explanation: "La integridad en seguridad garantiza que los datos y sistemas solo pueden ser modificados por personas o procesos autorizados, detectándose cualquier alteración no autorizada mediante mecanismos como hashes.",
        topic: "Principios de seguridad"
    },
    {
        question: "¿Qué es un incidente de seguridad?",
        options: ["Actualización del sistema operativo", "Conexión remota autorizada", "Instalación de software legítimo", "Evento que afecta la confidencialidad, integridad o disponibilidad"],
        correct: 3,
        explanation: "Un incidente de seguridad es cualquier evento que compromete o amenaza la confidencialidad, integridad o disponibilidad de los sistemas o datos de una organización, requiriendo una respuesta formal.",
        topic: "Gestión de incidentes"
    },
    {
        question: "¿Qué objetivo tiene la fase de erradicación en un incidente?",
        options: ["Restaurar el sistema", "Detectar nuevas vulnerabilidades", "Reducir el ancho de banda", "Eliminar la causa del incidente"],
        correct: 3,
        explanation: "La erradicación es la fase del ciclo de vida del incidente en que se elimina la causa raíz: malware, cuentas comprometidas, vulnerabilidades explotadas, etc., antes de proceder a la recuperación del servicio.",
        topic: "Gestión de incidentes"
    },
    {
        question: "¿Qué componente forma parte del ciclo de vida del incidente?",
        options: ["Reinstalación", "Autenticación", "Monitorización diaria", "Contención"],
        correct: 3,
        explanation: "La contención es una fase clave del ciclo de vida del incidente: limita la propagación del daño aislando sistemas afectados sin destruir evidencias, permitiendo continuar el análisis forense.",
        topic: "Gestión de incidentes"
    },
    {
        question: "¿Qué es un log?",
        options: ["Archivo comprimido", "Copia de respaldo", "Documento de usuario", "Registro de eventos del sistema"],
        correct: 3,
        explanation: "Un log es un registro cronológico de eventos generados por el sistema operativo, aplicaciones o dispositivos de red. Son fuente esencial de evidencia en análisis forense e investigación de incidentes.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué es el slack space?",
        options: ["Margen de tiempo entre tareas", "Zona de RAM sin uso", "Espacio en la nube para backups", "Espacio no utilizado dentro de un bloque de almacenamiento"],
        correct: 3,
        explanation: "El slack space es el espacio residual entre el fin del archivo y el final del clúster de almacenamiento que lo contiene. Puede contener fragmentos de datos anteriores y es una fuente de evidencia relevante en forense.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué principio de seguridad asegura que solo personas autorizadas acceden a los datos?",
        options: ["Respaldo", "Disponibilidad", "Segmentación", "Confidencialidad"],
        correct: 3,
        explanation: "La confidencialidad es el principio de la tríada CID que garantiza que la información solo es accesible por personas, procesos o sistemas debidamente autorizados, implementándose mediante cifrado, control de acceso y clasificación.",
        topic: "Principios de seguridad"
    },
    {
        question: "¿Qué representa un valor hash?",
        options: ["Nombre del archivo", "Comando de eliminación", "Tipo de acceso al sistema", "Código para verificar integridad"],
        correct: 3,
        explanation: "Un hash es una función matemática que genera una huella digital de longitud fija a partir de cualquier dato. Se usa para verificar la integridad de evidencias forenses: si el hash del original y la copia coinciden, la evidencia no ha sido alterada.",
        topic: "Análisis forense"
    },
    {
        question: "¿Cuál es el propósito del análisis forense digital?",
        options: ["Actualizar firmware", "Instalar antivirus", "Monitorear tráfico web", "Recuperar y examinar evidencias técnicas con validez legal"],
        correct: 3,
        explanation: "El análisis forense digital tiene como objetivo recuperar, preservar y examinar evidencias digitales siguiendo metodologías que garanticen su validez legal para ser usadas en investigaciones o procesos judiciales.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué función cumple un CSIRT?",
        options: ["Crear informes financieros", "Auditar redes sociales", "Analizar estadísticas de uso", "Gestionar y responder incidentes de seguridad"],
        correct: 3,
        explanation: "Un CSIRT (Computer Security Incident Response Team) es el equipo especializado encargado de detectar, analizar, contener y remediar incidentes de ciberseguridad, coordinando la respuesta técnica y la comunicación.",
        topic: "Gestión de incidentes"
    },
    {
        question: "¿Qué significa 'preservación del entorno' tras un incidente?",
        options: ["Reiniciar el servidor comprometido", "Bloquear usuarios externos", "Restaurar la base de datos", "Evitar la alteración de las evidencias"],
        correct: 3,
        explanation: "Preservar el entorno tras un incidente significa no modificar los sistemas afectados hasta que las evidencias hayan sido correctamente recogidas, garantizando la integridad de la información para el análisis forense.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué es la evidencia digital?",
        options: ["Aplicación de escritorio", "Conexión Wi-Fi", "Página web", "Dato electrónico útil como prueba"],
        correct: 3,
        explanation: "La evidencia digital es cualquier dato almacenado o transmitido en formato digital que puede ser utilizado como prueba en una investigación: logs, archivos, correos, imágenes de disco, capturas de memoria, etc.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué define a una evidencia persistente?",
        options: ["Se pierde en cuanto se apaga", "Se almacena en la RAM", "Solo existe en la nube", "Permanece tras apagar el sistema"],
        correct: 3,
        explanation: "La evidencia persistente se almacena en medios no volátiles (disco duro, SSD, USB) y permanece disponible aunque el sistema sea apagado, al contrario que la evidencia volátil que reside en RAM.",
        topic: "Análisis forense"
    },
    {
        question: "¿Cuál es el papel del perito digital?",
        options: ["Evaluar contenido multimedia", "Restaurar contraseñas", "Programar scripts de automatización", "Analiza evidencias y puede actuar como testigo experto"],
        correct: 3,
        explanation: "El perito digital es un experto que aplica metodología forense para analizar evidencias digitales y puede presentar sus conclusiones ante un tribunal como testigo experto, dotando de validez técnica y legal al análisis.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué es la recuperación dentro del ciclo de vida del incidente?",
        options: ["Eliminar software no autorizado", "Analizar tráfico malicioso", "Desconectar todos los sistemas", "Restaurar servicios afectados de forma segura"],
        correct: 3,
        explanation: "La recuperación es la fase del ciclo de vida del incidente en que se restauran los sistemas y servicios afectados a su estado operativo normal, verificando que la amenaza ha sido eliminada antes de volver a producción.",
        topic: "Gestión de incidentes"
    },
    {
        question: "¿Qué representa el término 'disponibilidad' en seguridad?",
        options: ["Conexión remota continua", "Actualización automática del sistema", "Baja latencia en red", "Acceso garantizado a sistemas cuando se necesitan"],
        correct: 3,
        explanation: "La disponibilidad es el tercer pilar de la tríada CID: garantiza que los sistemas y datos están accesibles para los usuarios autorizados cuando los necesitan, implementándose mediante redundancia, backups y alta disponibilidad.",
        topic: "Principios de seguridad"
    }
],
// UT-3: Hacking Ético — Ciclo de vida del incidente y forense de disco — 20 preguntas
// Para añadir al objeto questionsDB bajo la clave correspondiente (ej: utHE3)

    ut3:[
    {
        question: "¿Qué define a un incidente de seguridad?",
        options: ["Un fallo de hardware interno", "Una actualización pendiente", "Una caída de servicio sin impacto", "Cualquier evento que compromete la confidencialidad, integridad o disponibilidad"],
        correct: 3,
        explanation: "Un incidente de seguridad es cualquier evento que compromete o amenaza la confidencialidad, integridad o disponibilidad de los activos de información, requiriendo una respuesta coordinada.",
        topic: "Gestión de incidentes"
    },
    {
        question: "¿Cuál es la primera fase del ciclo de vida de un incidente?",
        options: ["Recuperación", "Análisis", "Erradicación", "Detección"],
        correct: 3,
        explanation: "La detección es la primera fase del ciclo de vida del incidente: consiste en identificar que algo anómalo ha ocurrido, mediante alertas de SIEM, IDS, notificaciones de usuarios o análisis de logs.",
        topic: "Gestión de incidentes"
    },
    {
        question: "¿Qué fase implica eliminar malware o puertas traseras?",
        options: ["Recuperación", "Contención", "Detección", "Erradicación"],
        correct: 3,
        explanation: "La erradicación elimina la causa raíz del incidente: malware, cuentas comprometidas, backdoors o vulnerabilidades explotadas, preparando el entorno para la recuperación segura del servicio.",
        topic: "Gestión de incidentes"
    },
    {
        question: "¿Qué tarea forense permite reconstruir un incidente?",
        options: ["Monitorización continua", "Backups automáticos", "Actualización de antivirus", "Análisis forense digital"],
        correct: 3,
        explanation: "El análisis forense digital examina las evidencias recopiladas para reconstruir la línea temporal del incidente: qué ocurrió, cómo, cuándo y desde dónde, permitiendo entender el vector de ataque y el impacto.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué equipo colabora con los técnicos de contención?",
        options: ["Soporte técnico", "Usuarios finales", "Auditores externos", "Peritos digitales"],
        correct: 3,
        explanation: "Los peritos digitales colaboran con los técnicos de contención aportando metodología forense para preservar y recopilar evidencias mientras el equipo técnico trabaja en limitar la propagación del incidente.",
        topic: "Gestión de incidentes"
    },
    {
        question: "¿Qué se entiende por escena digital?",
        options: ["Zona física con dispositivos de red", "Servidores conectados en red", "Red corporativa segura", "Conjunto de sistemas y entornos donde ocurre un incidente"],
        correct: 3,
        explanation: "La escena digital es el conjunto de sistemas, dispositivos, redes y entornos virtuales donde tuvo lugar el incidente y donde se pueden encontrar evidencias relevantes para la investigación.",
        topic: "Análisis forense"
    },
    {
        question: "¿Cuál es un objetivo de la preservación del entorno digital?",
        options: ["Optimizar el rendimiento del sistema", "Reducir el uso de recursos", "Eliminar registros antiguos", "Evitar la pérdida de datos críticos"],
        correct: 3,
        explanation: "La preservación del entorno digital tiene como objetivo proteger las evidencias de cualquier pérdida o alteración, asegurando que los datos críticos estén disponibles para el análisis forense posterior.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué se debe evitar durante la preservación del sistema?",
        options: ["Usar write-blockers", "Fotografiar el entorno", "Tomar notas del estado del equipo", "Interacción directa innecesaria"],
        correct: 3,
        explanation: "Durante la preservación debe evitarse cualquier interacción directa innecesaria con el sistema afectado, ya que cualquier acción puede alterar o destruir evidencias volátiles o modificar timestamps de archivos.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué asegura la cadena de custodia?",
        options: ["Que el sistema vuelva a funcionar", "Que se borren los archivos infectados", "Que se acceda rápido a la red", "Que las evidencias no se han modificado"],
        correct: 3,
        explanation: "La cadena de custodia es el registro continuo y documentado de todos los accesos y transferencias de una evidencia, garantizando que no ha sido modificada desde su recogida hasta su presentación.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué documento registra transferencias y accesos a una evidencia?",
        options: ["Bitácora del sistema", "Informe técnico", "Diagrama de red", "Registro de custodia"],
        correct: 3,
        explanation: "El registro de custodia documenta cada transferencia, acceso o manipulación de una evidencia: quién la tuvo, cuándo, para qué y en qué condiciones, siendo esencial para su validez legal.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué estándar internacional regula la custodia de evidencias digitales?",
        options: ["ISO 9001", "ISO/IEC 15504", "UNE 13335", "ISO/IEC 27037:2012"],
        correct: 3,
        explanation: "ISO/IEC 27037:2012 es el estándar internacional que proporciona directrices para la identificación, recopilación, adquisición y preservación de evidencias digitales, siendo la referencia para la cadena de custodia.",
        topic: "Normativa forense"
    },
    {
        question: "¿Qué evidencia tiene mayor riesgo de perderse tras apagar el sistema?",
        options: ["Evidencia persistente", "Archivo de configuración", "Archivo en disco externo", "Evidencia volátil"],
        correct: 3,
        explanation: "La evidencia volátil (RAM, procesos activos, conexiones de red, tabla ARP, sesiones abiertas) desaparece irreversiblemente al apagar el sistema, por lo que su adquisición debe ser siempre prioritaria.",
        topic: "Análisis forense"
    },
    {
        question: "¿Cuál de estas es una evidencia persistente?",
        options: ["Conexiones abiertas", "Sesiones activas", "Contenido de RAM", "Archivos de usuario"],
        correct: 3,
        explanation: "Los archivos de usuario almacenados en disco son evidencia persistente: permanecen disponibles aunque el sistema sea apagado, al contrario que la RAM o las conexiones activas que son volátiles.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué estructura contiene información de las particiones del disco?",
        options: ["Metadatos", "MBR", "Slack space", "Tabla de particiones"],
        correct: 3,
        explanation: "La tabla de particiones es la estructura del disco que describe la distribución, tamaño y tipo de cada partición. En discos MBR está embebida en el primer sector; en discos GPT ocupa los primeros sectores.",
        topic: "Forense de disco"
    },
    {
        question: "¿Qué zona del disco puede contener datos antiguos recuperables?",
        options: ["Registro de arranque maestro", "Sector de arranque", "RAID lógico", "Espacio no asignado"],
        correct: 3,
        explanation: "El espacio no asignado es el área del disco que no pertenece a ninguna partición activa o que fue liberada al borrar archivos. Contiene fragmentos de datos anteriores recuperables mediante herramientas forenses.",
        topic: "Forense de disco"
    },
    {
        question: "¿Qué herramienta gráfica se basa en The Sleuth Kit?",
        options: ["Cain & Abel", "Volatility", "Wireshark", "Autopsy"],
        correct: 3,
        explanation: "Autopsy es la interfaz gráfica de código abierto que se construye sobre The Sleuth Kit, permitiendo analizar imágenes forenses de disco, recuperar archivos borrados, examinar metadatos y construir líneas de tiempo.",
        topic: "Herramientas forenses"
    },
    {
        question: "¿Qué herramienta crea imágenes forenses sin modificar el original?",
        options: ["Notepad++", "GIMP", "TeamViewer", "FTK Imager"],
        correct: 3,
        explanation: "FTK Imager realiza copias forenses bit a bit de discos y dispositivos, calcula hashes de verificación y soporta múltiples formatos (E01, DD, AFF), garantizando que el dispositivo original no es alterado.",
        topic: "Herramientas forenses"
    },
    {
        question: "¿Qué es una imagen forense?",
        options: ["Una fotografía del disco duro", "Un log cifrado", "Un archivo de respaldo en la nube", "Una copia exacta y bit a bit de un dispositivo"],
        correct: 3,
        explanation: "Una imagen forense es una réplica exacta bit a bit de un dispositivo de almacenamiento, incluyendo espacio no asignado, slack space y sectores borrados, verificada mediante hashes para garantizar su fidelidad.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué función tiene el hash SHA-256?",
        options: ["Cifrar un archivo de texto", "Acelerar el acceso a disco", "Analizar tráfico de red", "Verificar la integridad de una evidencia"],
        correct: 3,
        explanation: "SHA-256 genera una huella digital de 256 bits de cualquier dato. En forense se calcula antes y después de cada operación sobre la evidencia: si los hashes coinciden, la evidencia no ha sido alterada.",
        topic: "Análisis forense"
    },
    {
        question: "¿Qué contiene un informe forense?",
        options: ["Una copia de seguridad del disco", "El contenido de los logs sin analizar", "Solo capturas de pantalla", "Todos los hallazgos, análisis y acciones realizadas"],
        correct: 3,
        explanation: "El informe forense documenta metódicamente todos los hallazgos, el análisis realizado, la metodología empleada, las herramientas usadas y las conclusiones, siendo el documento final que sustenta la investigación.",
        topic: "Informes forenses"
    }
],
// UT-4: Hacking Ético — Análisis de vulnerabilidades y riesgos — 20 preguntas
// Para añadir al objeto questionsDB bajo la clave correspondiente (ej: utHE4)

    ut4:[
    {
        question: "¿Qué es una amenaza en ciberseguridad?",
        options: ["Una contraseña débil", "Una herramienta de escaneo", "Un puerto cerrado", "Un evento que puede causar daño a un sistema"],
        correct: 3,
        explanation: "Una amenaza es cualquier evento o acción potencial (humana, técnica o natural) que puede causar daño a un sistema o activo de información, independientemente de si finalmente se materializa.",
        topic: "Análisis de riesgos"
    },
    {
        question: "¿Qué define mejor una vulnerabilidad?",
        options: ["Un sistema con antivirus", "Un servicio con puerto cerrado", "Un software actualizado", "Una debilidad explotable en un sistema"],
        correct: 3,
        explanation: "Una vulnerabilidad es una debilidad en un sistema, aplicación o proceso que puede ser explotada por una amenaza para causar daño. Puede ser técnica (bug, configuración) o procedimental.",
        topic: "Análisis de riesgos"
    },
    {
        question: "¿Qué es el impacto en el análisis de riesgos?",
        options: ["El nivel de cifrado", "El número de puertos abiertos", "El tipo de red", "La consecuencia de que una amenaza se materialice"],
        correct: 3,
        explanation: "El impacto es la consecuencia o daño que sufriría la organización si una amenaza explotase una vulnerabilidad: pérdida económica, reputacional, operativa o legal. Junto a la probabilidad, determina el nivel de riesgo.",
        topic: "Análisis de riesgos"
    },
    {
        question: "¿Qué es un activo?",
        options: ["Un atacante externo", "Un software gratuito", "Un sistema obsoleto", "Cualquier elemento de valor para una organización"],
        correct: 3,
        explanation: "Un activo es cualquier elemento con valor para la organización que debe ser protegido: hardware, software, datos, personas, procesos o servicios. La gestión de riesgos comienza siempre por identificar los activos.",
        topic: "Análisis de riesgos"
    },
    {
        question: "¿Qué permite una matriz de riesgo?",
        options: ["Actualizar sistemas", "Cambiar contraseñas", "Crear redes virtuales", "Visualizar la probabilidad e impacto de los riesgos"],
        correct: 3,
        explanation: "La matriz de riesgo es una herramienta visual que cruza la probabilidad de ocurrencia de una amenaza con su impacto potencial, permitiendo priorizar los riesgos y asignar recursos de forma eficiente.",
        topic: "Análisis de riesgos"
    },
    {
        question: "¿Qué protocolo se asocia al puerto 80?",
        options: ["SMTP", "SSH", "FTP", "HTTP"],
        correct: 3,
        explanation: "El puerto 80 es el puerto estándar de HTTP (HyperText Transfer Protocol), el protocolo de comunicación web no cifrado. Su versión cifrada HTTPS usa el puerto 443.",
        topic: "Reconocimiento y escaneo"
    },
    {
        question: "¿Qué representa una configuración insegura?",
        options: ["Un firewall activo", "Un sistema en alta disponibilidad", "Una política de backup", "Una debilidad por parámetros mal definidos"],
        correct: 3,
        explanation: "Una configuración insegura es una vulnerabilidad derivada de parámetros mal definidos: servicios innecesarios activos, credenciales por defecto sin cambiar, permisos excesivos o funciones de depuración habilitadas en producción.",
        topic: "Análisis de vulnerabilidades"
    },
    {
        question: "¿Qué hace el banner grabbing?",
        options: ["Instala parches", "Desactiva servicios", "Cierra puertos abiertos", "Obtiene información básica de servicios"],
        correct: 3,
        explanation: "El banner grabbing captura los banners de bienvenida que muestran los servicios de red (versión del software, sistema operativo, configuración), siendo una técnica de reconocimiento pasivo muy útil en la fase de enumeración.",
        topic: "Reconocimiento y escaneo"
    },
    {
        question: "¿Para qué sirve Nmap?",
        options: ["Detectar virus", "Crear backups automáticos", "Cifrar archivos", "Escanear redes y detectar servicios"],
        correct: 3,
        explanation: "Nmap (Network Mapper) es la herramienta de escaneo de red más utilizada: descubre hosts activos, puertos abiertos, servicios en ejecución, versiones de software y sistemas operativos mediante técnicas de sondeo.",
        topic: "Herramientas de escaneo"
    },
    {
        question: "¿Qué es Zenmap?",
        options: ["Un antivirus", "Un sistema operativo", "Un firewall", "La interfaz gráfica de Nmap"],
        correct: 3,
        explanation: "Zenmap es la interfaz gráfica oficial de Nmap, que facilita la construcción de comandos, visualiza los resultados de forma gráfica y permite guardar y comparar escaneos anteriores.",
        topic: "Herramientas de escaneo"
    },
    {
        question: "¿Qué permite NSE en Nmap?",
        options: ["Cambiar contraseñas de red", "Cifrar conexiones", "Actualizar el firmware", "Usar scripts para análisis avanzado"],
        correct: 3,
        explanation: "NSE (Nmap Scripting Engine) permite ejecutar scripts Lua para realizar análisis avanzados: detección de vulnerabilidades, enumeración de servicios, fuerza bruta, detección de malware y mucho más.",
        topic: "Herramientas de escaneo"
    },
    {
        question: "¿Qué es OpenVAS?",
        options: ["Un sistema de autenticación", "Un cortafuegos", "Una red social", "Un sistema de análisis de vulnerabilidades"],
        correct: 3,
        explanation: "OpenVAS (Open Vulnerability Assessment Scanner) es un escáner de vulnerabilidades open source que comprueba sistemas y redes contra miles de pruebas de vulnerabilidades conocidas, generando informes detallados.",
        topic: "Herramientas de análisis"
    },
    {
        question: "¿Qué herramienta es desarrollada por Tenable?",
        options: ["Wireshark", "OpenVAS", "Nmap", "Nessus"],
        correct: 3,
        explanation: "Nessus es el escáner de vulnerabilidades comercial desarrollado por Tenable, considerado uno de los más completos del mercado. Detecta vulnerabilidades, configuraciones erróneas y credenciales débiles en activos de red.",
        topic: "Herramientas de análisis"
    },
    {
        question: "¿Qué es un falso positivo?",
        options: ["Un escaneo cancelado", "Un puerto cerrado", "Un usuario legítimo", "Una alerta errónea de vulnerabilidad"],
        correct: 3,
        explanation: "Un falso positivo ocurre cuando una herramienta de análisis reporta una vulnerabilidad que en realidad no existe. Requieren verificación manual para no malgastar recursos remediando problemas inexistentes.",
        topic: "Análisis de vulnerabilidades"
    },
    {
        question: "¿Qué sistema puntúa vulnerabilidades de 0 a 10?",
        options: ["TCP/IP", "DNS", "NSE", "CVSS"],
        correct: 3,
        explanation: "CVSS (Common Vulnerability Scoring System) es el estándar internacional que puntúa la severidad de las vulnerabilidades en una escala de 0 a 10, considerando factores de explotabilidad e impacto.",
        topic: "Puntuación de vulnerabilidades"
    },
    {
        question: "¿Qué tipo de medida es aplicar un parche de seguridad?",
        options: ["Transferencia", "Evasión", "Aceptación", "Mitigación"],
        correct: 3,
        explanation: "Aplicar un parche de seguridad es una medida de mitigación del riesgo: reduce la probabilidad de explotación de una vulnerabilidad conocida al eliminar o corregir la debilidad que la causa.",
        topic: "Tratamiento de riesgos"
    },
    {
        question: "¿Qué indica una vulnerabilidad con CVSS 9.8?",
        options: ["Riesgo bajo", "Riesgo moderado", "Riesgo aceptable", "Riesgo crítico"],
        correct: 3,
        explanation: "En la escala CVSS, una puntuación de 9.8 se clasifica como crítica (rango 9.0–10.0). Indica que la vulnerabilidad es fácilmente explotable, no requiere autenticación y tiene un impacto devastador.",
        topic: "Puntuación de vulnerabilidades"
    },
    {
        question: "¿Qué es una medida compensatoria?",
        options: ["Un backup", "Una cuenta de administrador", "Un protocolo de escaneo", "Una solución parcial ante una vulnerabilidad"],
        correct: 3,
        explanation: "Una medida compensatoria es un control alternativo que reduce el riesgo de una vulnerabilidad cuando no es posible aplicar la solución definitiva (parche o reconfiguración), mitigando parcialmente la exposición.",
        topic: "Tratamiento de riesgos"
    },
    {
        question: "¿Qué debe contener un buen informe de evaluación?",
        options: ["Solo resultados sin análisis", "Copias de seguridad", "Páginas en blanco", "Hallazgos, análisis y recomendaciones"],
        correct: 3,
        explanation: "Un informe de evaluación de vulnerabilidades debe incluir los hallazgos detectados, su análisis de riesgo (CVSS, contexto), el impacto potencial para la organización y recomendaciones concretas de remediación priorizadas.",
        topic: "Informes"
    },
    {
        question: "¿Por qué es importante priorizar vulnerabilidades?",
        options: ["Para desactivar antivirus", "Para ahorrar ancho de banda", "Para abrir más puertos", "Para intervenir primero las más críticas"],
        correct: 3,
        explanation: "Priorizar vulnerabilidades permite destinar los recursos limitados de seguridad a remediar primero las más críticas (mayor CVSS, mayor exposición, mayor impacto), maximizando la reducción del riesgo real.",
        topic: "Análisis de vulnerabilidades"
    }
],
// UT-5: Hacking Ético — Pentesting: metodología, explotación y post-explotación — 20 preguntas
// Para añadir al objeto questionsDB bajo la clave correspondiente (ej: utHE5)

    ut5:[
    {
        question: "El propósito principal del pentesting dentro del hacking ético es:",
        options: ["Dañar sistemas vulnerables", "Desarrollar malware", "Registrar actividad de usuarios", "Identificar y corregir debilidades de seguridad"],
        correct: 3,
        explanation: "El pentesting simula ataques reales de forma controlada y autorizada para identificar vulnerabilidades explotables antes de que lo haga un atacante malicioso, permitiendo corregirlas y mejorar la postura de seguridad.",
        topic: "Fundamentos del pentesting"
    },
    {
        question: "La fase que consiste en recopilar información sin interactuar directamente con el objetivo es:",
        options: ["Explotación", "Enumeración", "Post-explotación", "Reconocimiento pasivo"],
        correct: 3,
        explanation: "El reconocimiento pasivo recopila información del objetivo (WHOIS, registros DNS, redes sociales, Shodan) sin enviar tráfico directamente al sistema, minimizando la detección por parte del objetivo.",
        topic: "Fases del pentesting"
    },
    {
        question: "La herramienta utilizada habitualmente para el escaneo de puertos y servicios es:",
        options: ["Hashcat", "FTK Imager", "Burp Suite", "Nmap"],
        correct: 3,
        explanation: "Nmap es la herramienta estándar para el escaneo de puertos y detección de servicios en pentesting: descubre hosts activos, identifica puertos abiertos, versiones de software y sistemas operativos.",
        topic: "Herramientas"
    },
    {
        question: "La metodología específicamente orientada a aplicaciones web es:",
        options: ["OSSTMM", "PTES", "MITRE ATT&CK", "OWASP"],
        correct: 3,
        explanation: "OWASP (Open Worldwide Application Security Project) proporciona la metodología y guías de referencia específicamente orientadas a la seguridad de aplicaciones web, incluyendo el OWASP Testing Guide y el Top 10.",
        topic: "Metodologías"
    },
    {
        question: "En un test de 'caja negra', el auditor:",
        options: ["Dispone de credenciales privilegiadas", "Tiene acceso completo al código fuente", "Trabaja exclusivamente sobre redes internas", "No tiene información previa del sistema"],
        correct: 3,
        explanation: "En un test de caja negra el auditor simula el punto de vista de un atacante externo sin información previa: no conoce la arquitectura, el código ni las credenciales del sistema objetivo.",
        topic: "Tipos de pentesting"
    },
    {
        question: "El documento que garantiza legalmente que un pentesting se realiza con autorización es:",
        options: ["CVE", "Contrato de licencia", "Ficha de PoC", "Permiso firmado de autorización"],
        correct: 3,
        explanation: "El permiso firmado de autorización (Rules of Engagement / carta de autorización) es el documento legal que especifica el alcance, las fechas y los métodos autorizados, protegiendo legalmente al pentester y al cliente.",
        topic: "Marco legal"
    },
    {
        question: "La herramienta que se emplea para explotación modular es:",
        options: ["Wireshark", "OpenSSL", "VeraCrypt", "Metasploit"],
        correct: 3,
        explanation: "Metasploit Framework es la plataforma de explotación modular más usada en pentesting: integra exploits, payloads, encoders y módulos auxiliares que permiten automatizar y gestionar el proceso de explotación.",
        topic: "Herramientas"
    },
    {
        question: "El módulo de Burp Suite que permite interceptar y modificar peticiones HTTP/HTTPS es:",
        options: ["Intruder", "Scanner", "Decoder", "Proxy"],
        correct: 3,
        explanation: "El módulo Proxy de Burp Suite actúa como intermediario entre el navegador y el servidor web, permitiendo interceptar, inspeccionar y modificar las peticiones y respuestas HTTP/HTTPS en tiempo real.",
        topic: "Herramientas"
    },
    {
        question: "Hydra se utiliza principalmente para:",
        options: ["Enumeración de puertos", "Capturar tráfico web", "Criptoanálisis de hashes", "Fuerza bruta contra servicios remotos"],
        correct: 3,
        explanation: "Hydra es una herramienta de fuerza bruta en línea que automatiza ataques de diccionario contra servicios remotos como SSH, FTP, HTTP, RDP, SMB y más de 50 protocolos adicionales.",
        topic: "Herramientas"
    },
    {
        question: "John the Ripper se emplea para:",
        options: ["Inyección de payloads remotos", "Evasión de antivirus", "Escaneo de vulnerabilidades web", "Descifrado de contraseñas a partir de hashes"],
        correct: 3,
        explanation: "John the Ripper es una herramienta de cracking de contraseñas offline que aplica ataques de diccionario, fuerza bruta e híbridos sobre hashes capturados (MD5, SHA, NTLM, bcrypt, etc.).",
        topic: "Herramientas"
    },
    {
        question: "La explotación local requiere:",
        options: ["Certificados digitales válidos", "Red interna libre", "Servicios vulnerables expuestos en internet", "Acceso previo al sistema"],
        correct: 3,
        explanation: "La explotación local requiere que el atacante ya tenga algún nivel de acceso al sistema (sesión de usuario, acceso físico) para ejecutar el exploit que le permita escalar privilegios o pivotar.",
        topic: "Tipos de explotación"
    },
    {
        question: "La explotación que no requiere acceso previo al sistema es:",
        options: ["Física", "Lógica", "Local", "Remota"],
        correct: 3,
        explanation: "La explotación remota se ejecuta desde la red sin necesidad de acceso previo al sistema objetivo, aprovechando servicios vulnerables expuestos (SMB, RDP, servicios web) para obtener ejecución de código.",
        topic: "Tipos de explotación"
    },
    {
        question: "El objetivo principal de la escalada de privilegios es:",
        options: ["Ocultar procesos", "Enumerar usuarios", "Cambiar la dirección IP", "Obtener permisos superiores"],
        correct: 3,
        explanation: "La escalada de privilegios busca aumentar el nivel de acceso obtenido: pasar de usuario sin privilegios a administrador/root (escalada vertical) o acceder a recursos de otros usuarios del mismo nivel (escalada horizontal).",
        topic: "Post-explotación"
    },
    {
        question: "La escalada de privilegios horizontal implica:",
        options: ["Sustituir logs del sistema", "Obtener privilegios root", "Migrar procesos a otros equipos", "Acceder a funciones o datos de otros usuarios del mismo nivel"],
        correct: 3,
        explanation: "La escalada horizontal no aumenta el nivel de privilegios sino que se desplaza lateralmente: un usuario accede a datos o funciones de otro usuario con el mismo nivel de permisos, comprometiendo su privacidad.",
        topic: "Post-explotación"
    },
    {
        question: "La herramienta que ayuda a identificar vectores de escalada en Linux es:",
        options: ["SQLMap", "Shodan", "Nikto", "LinPEAS"],
        correct: 3,
        explanation: "LinPEAS (Linux Privilege Escalation Awesome Script) enumera automáticamente vectores de escalada de privilegios en Linux: SUID/GUID, cron jobs, capabilities, configuraciones sudo, credenciales en archivos, etc.",
        topic: "Herramientas"
    },
    {
        question: "Una técnica que forma parte del mantenimiento del acceso es:",
        options: ["Actualizar el kernel", "Cifrado TLS", "Reiniciar el servicio web", "Uso de cron para persistencia"],
        correct: 3,
        explanation: "El uso de cron jobs para persistencia permite que el atacante mantenga acceso al sistema aunque sea reiniciado: las tareas programadas ejecutan backdoors o reverse shells de forma automática y periódica.",
        topic: "Post-explotación"
    },
    {
        question: "La limpieza de huellas busca principalmente:",
        options: ["Crear nuevos usuarios", "Optimizar el rendimiento del sistema", "Generar claves RSA", "Ocultar evidencias de la intrusión"],
        correct: 3,
        explanation: "La limpieza de huellas (covering tracks) es la última fase del ciclo de ataque: el atacante elimina o modifica logs, elimina archivos temporales y borra rastros de su actividad para dificultar la detección y el análisis forense.",
        topic: "Post-explotación"
    },
    {
        question: "Una PoC (prueba de concepto) sirve para:",
        options: ["Crear usuarios temporales", "Comprimir archivos del sistema", "Sustituir capturas de logs", "Validar y evidenciar una vulnerabilidad"],
        correct: 3,
        explanation: "Una PoC (Proof of Concept) demuestra de forma reproducible que una vulnerabilidad es real y explotable, proporcionando evidencia técnica objetiva al cliente sobre el impacto potencial del fallo.",
        topic: "Documentación y PoC"
    },
    {
        question: "Un elemento obligatorio en la documentación de una PoC es:",
        options: ["Código fuente de la aplicación completa", "Datos reales de clientes", "Claves privadas del servidor", "Capturas o registros verificables de la explotación"],
        correct: 3,
        explanation: "Las capturas de pantalla, logs o capturas de tráfico (pcap) que muestran la explotación son elementos obligatorios en una PoC: proporcionan evidencia verificable y reproducible de que la vulnerabilidad fue explotada.",
        topic: "Documentación y PoC"
    },
    {
        question: "Una captura de tráfico (pcap) en una PoC se utiliza para:",
        options: ["Reiniciar servicios afectados", "Crear usuarios sudo", "Modificar binarios del sistema", "Visualizar interacciones relevantes entre pentester y objetivo"],
        correct: 3,
        explanation: "Una captura pcap en una PoC registra el tráfico de red durante la explotación, permitiendo visualizar exactamente las interacciones entre el pentester y el sistema objetivo y aportando evidencia técnica irrefutable.",
        topic: "Documentación y PoC"
    }
],
// UT-6: Hacking Ético — Informes, evidencias y mejora continua — 20 preguntas
// Para añadir al objeto questionsDB bajo la clave correspondiente (ej: utHE6)

    ut6:[
    {
        question: "¿Qué tipo de informe está dirigido a personal técnico especializado?",
        options: ["Resumen funcional", "Ficha de impacto", "Informe ejecutivo", "Informe técnico"],
        correct: 3,
        explanation: "El informe técnico va dirigido al equipo de seguridad y sistemas: incluye detalles de las vulnerabilidades encontradas, evidencias, pasos de reproducción, CVSSv3 y recomendaciones técnicas de remediación.",
        topic: "Tipos de informe"
    },
    {
        question: "¿Cuál es el objetivo principal de un informe ejecutivo?",
        options: ["Ejecutar scripts", "Detallar hallazgos técnicos", "Exponer capturas de pantalla", "Facilitar la toma de decisiones no técnicas"],
        correct: 3,
        explanation: "El informe ejecutivo resume los resultados del pentesting en lenguaje no técnico para que la dirección pueda tomar decisiones informadas sobre inversión en seguridad, riesgos aceptados y prioridades de remediación.",
        topic: "Tipos de informe"
    },
    {
        question: "¿Qué elemento NO puede faltar en la descripción del entorno evaluado?",
        options: ["Nombre de la empresa evaluadora", "Opiniones del auditor", "Tamaño del documento", "Alcance de los sistemas analizados"],
        correct: 3,
        explanation: "El alcance define exactamente qué sistemas, redes, aplicaciones y períodos fueron analizados. Sin esta información el informe carece de contexto y no permite evaluar si la cobertura fue suficiente.",
        topic: "Estructura del informe"
    },
    {
        question: "¿Qué tipo de evidencia se utiliza habitualmente en informes técnicos?",
        options: ["Tablas de inversión", "Datos de marketing", "Encuestas a usuarios", "Capturas de pantalla"],
        correct: 3,
        explanation: "Las capturas de pantalla son la evidencia más habitual en informes técnicos: demuestran visualmente la explotación, los datos expuestos o el comportamiento anómalo, complementadas con logs y capturas de tráfico.",
        topic: "Evidencias"
    },
    {
        question: "¿Qué sistema estándar se usa para clasificar la gravedad de las vulnerabilidades?",
        options: ["SIEM", "OWASP", "ISO/IEC 27002", "CVSS"],
        correct: 3,
        explanation: "CVSS (Common Vulnerability Scoring System) es el estándar internacional para puntuar la severidad de vulnerabilidades en una escala 0–10, considerando métricas de explotabilidad e impacto en confidencialidad, integridad y disponibilidad.",
        topic: "Clasificación de vulnerabilidades"
    },
    {
        question: "¿Qué tipo de prueba se realiza sin información previa del sistema?",
        options: ["Grey-box", "Full-scope", "White-box", "Black-box"],
        correct: 3,
        explanation: "En un test black-box el auditor simula el punto de vista de un atacante externo sin credenciales, documentación ni conocimiento previo de la arquitectura interna del sistema objetivo.",
        topic: "Tipos de pentesting"
    },
    {
        question: "¿Cuál es una medida de mitigación técnica?",
        options: ["Aumentar el número de usuarios", "Reducir los servicios disponibles", "Borrar logs antiguos", "Aplicar parches de seguridad"],
        correct: 3,
        explanation: "Aplicar parches de seguridad es la medida de mitigación técnica más directa: corrige la vulnerabilidad en su origen eliminando o reduciendo la debilidad explotable, en lugar de añadir controles compensatorios.",
        topic: "Mitigación"
    },
    {
        question: "¿Qué buenas prácticas organizativas refuerzan la ciberseguridad?",
        options: ["Cambio frecuente de logo", "Compra de nuevo hardware", "Rediseño gráfico del sitio web", "Formación del personal"],
        correct: 3,
        explanation: "La formación y concienciación del personal es una de las medidas organizativas más eficaces: reduce el riesgo de ingeniería social, errores humanos y uso inadecuado de los sistemas.",
        topic: "Mejora continua"
    },
    {
        question: "¿Cuál es una sección típica del informe técnico?",
        options: ["Índice de satisfacción", "Informe comercial", "Gráfico financiero", "Metodología empleada"],
        correct: 3,
        explanation: "La sección de metodología explica qué estándares, fases y herramientas se usaron durante el pentesting, aportando transparencia y reproducibilidad al proceso de evaluación.",
        topic: "Estructura del informe"
    },
    {
        question: "¿Qué formato se recomienda para presentaciones orales ejecutivas?",
        options: ["Base de datos .SQL", "Archivo .BAT", "Manual impreso", "PowerPoint o PDF interactivo"],
        correct: 3,
        explanation: "Para presentaciones ejecutivas se recomienda PowerPoint o PDF interactivo: permiten comunicar los hallazgos de forma visual y estructurada, con gráficos de riesgo y priorización de vulnerabilidades comprensibles para no técnicos.",
        topic: "Comunicación de resultados"
    },
    {
        question: "¿Qué documento ayuda a dar seguimiento a la corrección de vulnerabilidades?",
        options: ["Lista de empleados", "Informe de ventas", "Formulario de contacto", "Tabla de seguimiento"],
        correct: 3,
        explanation: "La tabla de seguimiento (remediation tracker) registra cada vulnerabilidad, su propietario, el estado de la corrección, la fecha límite y la verificación posterior, asegurando que los hallazgos son efectivamente remediados.",
        topic: "Seguimiento y mejora"
    },
    {
        question: "¿Qué se incluye en una prueba de concepto (PoC)?",
        options: ["Control de versiones", "Justificación legal", "Encuesta de calidad", "Demostración técnica de la vulnerabilidad"],
        correct: 3,
        explanation: "Una PoC incluye la demostración técnica reproducible de que la vulnerabilidad es real y explotable: comandos ejecutados, capturas de la explotación, logs y el impacto obtenido, sin necesidad de causar daño real.",
        topic: "Evidencias"
    },
    {
        question: "¿Qué debe evitarse al redactar un informe técnico?",
        options: ["Uso de tablas", "Numeración de páginas", "Capturas ordenadas", "Lenguaje impreciso o ambiguo"],
        correct: 3,
        explanation: "El lenguaje impreciso o ambiguo en un informe técnico genera confusión sobre la gravedad real de los hallazgos y dificulta la correcta priorización y remediación por parte del equipo técnico del cliente.",
        topic: "Redacción de informes"
    },
    {
        question: "¿Qué herramienta se usa para capturar tráfico de red?",
        options: ["WordPress", "Photoshop", "Excel", "Wireshark"],
        correct: 3,
        explanation: "Wireshark es el analizador de protocolos de red más usado: captura y analiza el tráfico en tiempo real, generando archivos pcap que sirven como evidencia en informes de pentesting y análisis forense.",
        topic: "Herramientas"
    },
    {
        question: "¿Qué tipo de documento contiene tanto resumen ejecutivo como hallazgos técnicos detallados?",
        options: ["Manual de usuario", "Resumen de prensa", "Plan de negocio", "Informe completo"],
        correct: 3,
        explanation: "El informe completo de pentesting integra ambas perspectivas: un resumen ejecutivo para la dirección y los hallazgos técnicos detallados para el equipo de seguridad, siendo el entregable más habitual en auditorías profesionales.",
        topic: "Tipos de informe"
    },
    {
        question: "¿Qué recurso asegura la integridad de una evidencia digital?",
        options: ["Firma manuscrita", "Firma digital escaneada", "Captura de pantalla", "Hash o checksum"],
        correct: 3,
        explanation: "El hash o checksum (MD5, SHA-256) genera una huella única de la evidencia. Si se calcula antes y después de cualquier operación y los valores coinciden, se garantiza que la evidencia no ha sido alterada.",
        topic: "Evidencias"
    },
    {
        question: "¿Qué información debe incluir el apartado de metodología?",
        options: ["Gastos de la auditoría", "Usuarios entrevistados", "Contraseñas utilizadas", "Herramientas y fases empleadas"],
        correct: 3,
        explanation: "El apartado de metodología debe documentar qué estándares se siguieron (OWASP, PTES, OSSTMM), las fases ejecutadas y las herramientas usadas, permitiendo al cliente entender y reproducir el proceso de evaluación.",
        topic: "Estructura del informe"
    },
    {
        question: "¿Qué es una evidencia válida en el informe?",
        options: ["Respuesta subjetiva", "Historial de navegación", "Opinión del auditor", "Log del sistema"],
        correct: 3,
        explanation: "Un log del sistema es una evidencia válida y objetiva: registra eventos reales con timestamp y detalles verificables, siendo admisible técnica y legalmente como prueba de una vulnerabilidad o incidente.",
        topic: "Evidencias"
    },
    {
        question: "¿Qué práctica aumenta la resiliencia organizativa?",
        options: ["Renovación de dominio web", "Cambio de imagen corporativa", "Revisión de redes sociales", "Simulacros de respuesta ante incidentes"],
        correct: 3,
        explanation: "Los simulacros de respuesta ante incidentes (tabletop exercises, red team/blue team) entrenan al equipo en condiciones controladas, identificando gaps en los procedimientos y mejorando los tiempos de detección y respuesta reales.",
        topic: "Mejora continua"
    },
    {
        question: "¿Qué se recomienda incluir al final del informe?",
        options: ["Currículum del auditor", "Referencias personales", "Publicidad del proveedor", "Anexos técnicos y capturas"],
        correct: 3,
        explanation: "Los anexos al final del informe recogen las evidencias técnicas completas (capturas de pantalla, logs, comandos ejecutados, salidas de herramientas) que soportan cada hallazgo descrito en el cuerpo principal del informe.",
        topic: "Estructura del informe"
    }
],
// UT-7: Hacking Ético — Resiliencia, continuidad, SIEM/SOAR y arquitecturas defensivas — 20 preguntas
// Para añadir al objeto questionsDB bajo la clave correspondiente (ej: utHE7)

ut7:[
    {
        question: "¿Cuál es el objetivo principal de un Plan de Continuidad de Negocio (BCP)?",
        options: ["Recuperar servidores físicos dañados", "Aumentar la velocidad de red", "Restaurar las copias de seguridad", "Mantener los servicios críticos ante una interrupción"],
        correct: 3,
        explanation: "El BCP (Business Continuity Plan) define cómo mantener operativos los procesos y servicios críticos durante una interrupción, ya sea un desastre natural, ciberataque o fallo de infraestructura, minimizando el impacto en el negocio.",
        topic: "Continuidad de negocio"
    },
    {
        question: "¿Cuál es el propósito principal de un DRP?",
        options: ["Gestionar identidades digitales", "Detectar accesos no autorizados", "Automatizar las copias de seguridad", "Restaurar la operación técnica tras un desastre"],
        correct: 3,
        explanation: "El DRP (Disaster Recovery Plan) es el componente técnico del BCP: define los procedimientos para restaurar sistemas, datos e infraestructura TI tras un desastre, con tiempos RTO y RPO definidos.",
        topic: "Continuidad de negocio"
    },
    {
        question: "¿Qué representa el RPO en un plan de recuperación?",
        options: ["Tiempo máximo para restaurar servicios", "Nivel de permisos del administrador", "Porcentaje de recuperación operativa", "Antigüedad máxima admisible de los datos recuperados"],
        correct: 3,
        explanation: "RPO (Recovery Point Objective) define la antigüedad máxima admisible de los datos recuperados tras un desastre, es decir, cuánta pérdida de datos (en tiempo) puede tolerar la organización. Determina la frecuencia de los backups.",
        topic: "Continuidad de negocio"
    },
    {
        question: "¿Qué técnica de backup se considera más eficiente en cuanto a almacenamiento?",
        options: ["Copia completa", "Copia diferencial", "Copia espejo", "Copia incremental"],
        correct: 3,
        explanation: "La copia incremental solo guarda los cambios desde el último backup (completo o incremental), siendo la más eficiente en espacio y tiempo de backup, aunque la recuperación requiere encadenar todos los incrementales desde el último completo.",
        topic: "Backups"
    },
    {
        question: "¿En qué consiste el enfoque 3-2-1 de copias de seguridad?",
        options: ["Tres backups en un solo disco duro", "Tres copias en la nube, con autenticación 2FA", "Tres copias locales, dos cifradas, una oculta", "Tres copias, en dos medios distintos, una fuera del sitio"],
        correct: 3,
        explanation: "La regla 3-2-1 establece: mantener 3 copias de los datos, en 2 medios de almacenamiento distintos (disco, cinta, NAS), con al menos 1 copia fuera del sitio (offsite o nube), garantizando la recuperación ante cualquier escenario.",
        topic: "Backups"
    },
    {
        question: "¿Cuál es un beneficio del uso de backups en la nube?",
        options: ["Permiten control total sin autenticación", "Eliminan la necesidad de firewalls", "No requieren cifrado de datos", "Aseguran disponibilidad geográfica y redundancia"],
        correct: 3,
        explanation: "Los backups en la nube ofrecen disponibilidad geográfica (los datos están en múltiples centros de datos) y redundancia automática, protegiéndolos frente a desastres locales como incendios, inundaciones o robos.",
        topic: "Backups"
    },
    {
        question: "¿Qué define mejor el concepto de resiliencia en ciberseguridad?",
        options: ["Tener antivirus actualizado", "Utilizar contraseñas complejas", "Monitorizar el tráfico de red", "Capacidad de anticiparse, resistir y recuperarse ante incidentes"],
        correct: 3,
        explanation: "La resiliencia en ciberseguridad es la capacidad de una organización para anticiparse a las amenazas, resistir los ataques minimizando el impacto y recuperarse rápidamente, manteniendo la continuidad operativa.",
        topic: "Resiliencia"
    },
    {
        question: "¿Cuál es el principio fundamental del modelo Zero Trust?",
        options: ["Bloquear automáticamente todo tráfico externo", "Confiar en todos los usuarios internos", "Permitir el acceso solo desde IP autorizadas", "No confiar en nadie por defecto, verificar siempre"],
        correct: 3,
        explanation: "Zero Trust parte del principio 'nunca confíes, siempre verifica': ningún usuario, dispositivo o segmento de red es de confianza por defecto, independientemente de si está dentro o fuera del perímetro corporativo.",
        topic: "Zero Trust"
    },
    {
        question: "¿Qué significa microsegmentación en el modelo Zero Trust?",
        options: ["Dividir una red física en zonas de trabajo", "Usar IDS en todas las subredes", "Aplicar firewalls a nivel de VLAN", "Establecer políticas de acceso a nivel de aplicación, usuario o flujo"],
        correct: 3,
        explanation: "La microsegmentación aplica políticas de acceso granulares a nivel de aplicación, usuario o flujo de tráfico individual, limitando el movimiento lateral de un atacante que haya comprometido un segmento de la red.",
        topic: "Zero Trust"
    },
    {
        question: "¿Cuál de estas no es una ventaja de la segmentación de red?",
        options: ["Facilita políticas de seguridad diferenciadas", "Aumenta el aislamiento de servicios críticos", "Reduce la propagación de ataques", "Mejora el rendimiento de la red por sí sola"],
        correct: 3,
        explanation: "La segmentación de red no mejora el rendimiento por sí sola (puede incluso añadir latencia por el procesamiento de políticas). Sus ventajas reales son el aislamiento, la reducción de la superficie de ataque y la contención de brechas.",
        topic: "Arquitecturas defensivas"
    },
    {
        question: "¿Qué característica corresponde a una DMZ?",
        options: ["Aislamiento de backups", "Red interna sin cifrado", "Segmento exclusivo para administración de red", "Zona donde se alojan servicios públicos accesibles desde internet"],
        correct: 3,
        explanation: "La DMZ (Demilitarized Zone) es una subred perimetral que aloja servicios públicos como servidores web, correo o DNS, aislándolos de la red interna mediante firewalls para limitar el impacto de una brecha.",
        topic: "Arquitecturas defensivas"
    },
    {
        question: "¿Qué protocolo de cifrado se recomienda en redes Wi-Fi seguras?",
        options: ["WEP", "WPA2-TKIP", "WPA", "WPA3"],
        correct: 3,
        explanation: "WPA3 es el estándar actual recomendado para redes Wi-Fi seguras: introduce SAE (Simultaneous Authentication of Equals), cifrado individualizado por sesión y protección contra ataques de diccionario offline.",
        topic: "Seguridad inalámbrica"
    },
    {
        question: "¿Qué componente forma parte de una arquitectura de defensa en profundidad?",
        options: ["Red Wi-Fi abierta", "Sólo cifrado de disco", "Un único punto de control de seguridad", "Antivirus, firewall y control de acceso combinados"],
        correct: 3,
        explanation: "La defensa en profundidad (Defense in Depth) superpone múltiples capas de controles de seguridad (antivirus, firewall, IDS, control de acceso, cifrado, formación) de modo que si una capa falla, las demás limitan el daño.",
        topic: "Arquitecturas defensivas"
    },
    {
        question: "¿Qué función cumple un sistema IDS?",
        options: ["Cifrar comunicaciones inalámbricas", "Restaurar servidores tras un ataque", "Bloquear el tráfico malicioso automáticamente", "Detectar y alertar sobre posibles intrusiones"],
        correct: 3,
        explanation: "Un IDS (Intrusion Detection System) monitoriza el tráfico de red o los eventos del sistema en busca de patrones maliciosos y genera alertas, pero no bloquea el tráfico por sí mismo (esa función corresponde al IPS).",
        topic: "IDS/IPS"
    },
    {
        question: "¿Qué diferencia clave hay entre un IDS y un IPS?",
        options: ["El IDS bloquea automáticamente y el IPS solo alerta", "El IDS cifra los datos y el IPS los comprime", "El IPS solo funciona en redes inalámbricas", "El IPS bloquea automáticamente mientras el IDS solo alerta"],
        correct: 3,
        explanation: "La diferencia fundamental es la respuesta: el IDS detecta y alerta sin intervenir en el tráfico, mientras que el IPS (Intrusion Prevention System) está en línea y puede bloquear automáticamente el tráfico malicioso.",
        topic: "IDS/IPS"
    },
    {
        question: "¿Cuál es el objetivo de un sistema SIEM?",
        options: ["Cifrar discos duros automáticamente", "Generar contraseñas aleatorias", "Realizar escaneos de red", "Correlacionar y analizar eventos de seguridad"],
        correct: 3,
        explanation: "Un SIEM (Security Information and Event Management) centraliza, normaliza y correlaciona eventos de seguridad procedentes de múltiples fuentes (logs, IDS, firewalls) para detectar amenazas, generar alertas e informes.",
        topic: "SIEM/SOAR"
    },
    {
        question: "¿Cuál de las siguientes es una herramienta SIEM?",
        options: ["Hydra", "Nmap", "Metasploit", "Splunk"],
        correct: 3,
        explanation: "Splunk es una de las plataformas SIEM más utilizadas en entornos empresariales: ingiere, indexa y correlaciona grandes volúmenes de logs y eventos para detectar anomalías, amenazas y facilitar la respuesta a incidentes.",
        topic: "SIEM/SOAR"
    },
    {
        question: "¿Qué herramienta permite automatizar la respuesta ante incidentes?",
        options: ["John the Ripper", "FTK Imager", "IDS", "SOAR"],
        correct: 3,
        explanation: "SOAR (Security Orchestration, Automation and Response) orquesta y automatiza los flujos de respuesta ante incidentes mediante playbooks, reduciendo el tiempo de reacción y liberando al equipo SOC de tareas repetitivas.",
        topic: "SIEM/SOAR"
    },
    {
        question: "¿Qué acción es parte de un playbook en un sistema SOAR?",
        options: ["Modificar registros DNS", "Reiniciar servidores sin aviso", "Borrar logs antiguos automáticamente", "Ejecutar flujos automáticos de respuesta a incidentes"],
        correct: 3,
        explanation: "Un playbook SOAR define flujos de trabajo automatizados que se ejecutan ante un tipo concreto de incidente: desde enriquecer la alerta con threat intelligence hasta aislar el endpoint afectado o notificar al equipo, sin intervención manual.",
        topic: "SIEM/SOAR"
    },
    {
        question: "¿Qué es UEBA en ciberseguridad?",
        options: ["Herramienta para actualizar dispositivos automáticamente", "Sistema de gestión de contraseñas", "Plataforma para pruebas de carga", "Analítica de comportamiento de usuarios y entidades"],
        correct: 3,
        explanation: "UEBA (User and Entity Behavior Analytics) aplica machine learning para establecer líneas de comportamiento base de usuarios y entidades, detectando anomalías que pueden indicar cuentas comprometidas, insiders maliciosos o amenazas avanzadas.",
        topic: "SIEM/SOAR"
    }
],


};
