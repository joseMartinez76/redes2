// UT-1: Fundamentos de Ciberseguridad — 20 preguntas
// Para añadir al objeto questionsDB bajo la clave correspondiente (ej: utCiber1)
const questionsDB = {
ut1:[
    {
        question: "¿Qué significa la 'C' de la tríada CID?",
        options: ["Ciberataque", "Comunicación", "Control", "Confidencialidad"],
        correct: 3,
        explanation: "La tríada CID (o CIA en inglés) representa Confidencialidad, Integridad y Disponibilidad, pilares fundamentales de la seguridad de la información.",
        topic: "Tríada CID"
    },
    {
        question: "¿Qué control asegura la integridad de los datos?",
        options: ["VPN", "DLP", "Cifrado AES", "Hash criptográfico"],
        correct: 3,
        explanation: "El hash criptográfico genera una huella única de los datos; cualquier modificación altera el hash, permitiendo detectar alteraciones y garantizando la integridad.",
        topic: "Tríada CID"
    },
    {
        question: "¿Cuál es un ejemplo de ataque pasivo?",
        options: ["Ransomware", "Defacement", "SQL Injection", "Sniffing"],
        correct: 3,
        explanation: "Los ataques pasivos interceptan información sin modificarla ni interrumpir el servicio. El sniffing (captura de tráfico) es el ejemplo más representativo.",
        topic: "Tipos de ataques"
    },
    {
        question: "¿Qué técnica de ingeniería social explota la urgencia o autoridad?",
        options: ["Hardening", "Microsegmentación", "Hashing", "Phishing"],
        correct: 3,
        explanation: "El phishing usa mensajes fraudulentos que simulan urgencia o autoridad para engañar a las víctimas y obtener credenciales u otros datos sensibles.",
        topic: "Ingeniería social"
    },
    {
        question: "¿Qué malware cifra archivos para pedir rescate?",
        options: ["Spyware", "Troyano", "Adware", "Ransomware"],
        correct: 3,
        explanation: "El ransomware cifra los archivos de la víctima y exige un pago (rescate) para proporcionar la clave de descifrado.",
        topic: "Tipos de malware"
    },
    {
        question: "¿Qué caso real evidenció la importancia de parches en SMBv1?",
        options: ["Stuxnet", "Sony Pictures", "Colonial Pipeline", "WannaCry"],
        correct: 3,
        explanation: "WannaCry (2017) se propagó masivamente explotando la vulnerabilidad EternalBlue en SMBv1. Los sistemas sin el parche MS17-010 fueron los más afectados.",
        topic: "Casos reales"
    },
    {
        question: "¿Qué fase del análisis de riesgos identifica activos y amenazas?",
        options: ["Tratamiento", "Seguimiento", "Planificación", "Identificación"],
        correct: 3,
        explanation: "La fase de identificación es la primera del análisis de riesgos: permite catalogar activos, amenazas y vulnerabilidades antes de evaluar el impacto.",
        topic: "Análisis de riesgos"
    },
    {
        question: "¿Qué normativa establece principios de privacidad desde el diseño en la UE?",
        options: ["NIST CSF", "ISO 27001", "ENS", "RGPD"],
        correct: 3,
        explanation: "El RGPD (Reglamento General de Protección de Datos) introduce el principio de 'privacy by design', obligando a integrar la privacidad desde la concepción de los sistemas.",
        topic: "Normativa y cumplimiento"
    },
    {
        question: "¿Qué control correctivo asegura recuperación tras un incidente?",
        options: ["UEBA", "VPN", "MFA", "Backups verificados"],
        correct: 3,
        explanation: "Los backups verificados son controles correctivos: permiten restaurar sistemas y datos tras un incidente de seguridad como un ransomware o un fallo grave.",
        topic: "Controles de seguridad"
    },
    {
        question: "¿Qué técnica mitiga ataques de 'password spraying'?",
        options: ["Backup 3-2-1", "Deshabilitar macros", "Segmentación de red", "MFA"],
        correct: 3,
        explanation: "El MFA (autenticación multifactor) impide que una contraseña comprometida sea suficiente para acceder, neutralizando ataques de password spraying.",
        topic: "Controles de seguridad"
    },
    {
        question: "¿Qué vector usan campañas de spear-phishing?",
        options: ["Ataques DDoS", "Segmentación OT", "Sniffing de red", "Correos electrónicos dirigidos"],
        correct: 3,
        explanation: "El spear-phishing es una variante dirigida del phishing que usa correos electrónicos personalizados para atacar a personas u organizaciones específicas.",
        topic: "Ingeniería social"
    },
    {
        question: "¿Qué control protege disponibilidad?",
        options: ["Hash criptográfico", "Política de contraseñas", "Clasificación de datos", "Redundancia N+1"],
        correct: 3,
        explanation: "La redundancia N+1 garantiza que exista al menos un componente extra de respaldo, asegurando la disponibilidad del servicio ante fallos.",
        topic: "Tríada CID"
    },
    {
        question: "¿Qué es un activo lógico?",
        options: ["Router", "Servidor físico", "CPD", "Base de datos"],
        correct: 3,
        explanation: "Un activo lógico es un recurso intangible con valor para la organización, como bases de datos, software, credenciales o información confidencial.",
        topic: "Gestión de activos"
    },
    {
        question: "¿Qué modelo de seguridad es 'shift-left'?",
        options: ["Firewall perimetral", "VPN", "IDS", "DevSecOps"],
        correct: 3,
        explanation: "DevSecOps aplica el concepto 'shift-left' integrando la seguridad desde las fases más tempranas del desarrollo de software, no solo al final.",
        topic: "Modelos de seguridad"
    },
    {
        question: "¿Qué herramienta detecta comportamientos anómalos en endpoints?",
        options: ["IAM", "Backup", "KMS", "EDR"],
        correct: 3,
        explanation: "EDR (Endpoint Detection and Response) monitoriza continuamente los endpoints en busca de comportamientos anómalos y permite responder ante amenazas.",
        topic: "Herramientas de seguridad"
    },
    {
        question: "¿Qué estándar regula la seguridad en España en el sector público?",
        options: ["RGPD", "NIST CSF", "ISO 27001", "ENS"],
        correct: 3,
        explanation: "El ENS (Esquema Nacional de Seguridad) es el marco normativo español que establece los requisitos de seguridad para los sistemas de información del sector público.",
        topic: "Normativa y cumplimiento"
    },
    {
        question: "¿Qué práctica protege la confidencialidad de contraseñas?",
        options: ["Backup", "VPN", "Hash criptográfico", "Gestores de contraseñas"],
        correct: 3,
        explanation: "Los gestores de contraseñas permiten usar contraseñas únicas y complejas para cada servicio sin necesidad de memorizarlas, protegiendo su confidencialidad.",
        topic: "Gestión de identidades"
    },
    {
        question: "¿Qué control limita privilegios en cloud?",
        options: ["SIEM", "UEBA", "EDR", "IAM/PAM"],
        correct: 3,
        explanation: "IAM (Identity and Access Management) y PAM (Privileged Access Management) controlan y limitan los privilegios de usuarios y cuentas privilegiadas en entornos cloud.",
        topic: "Seguridad cloud"
    },
    {
        question: "¿Qué control se usa para detectar MFA fatigue?",
        options: ["Política IAM", "Cifrado TLS", "Redundancia N+1", "Reglas SIEM"],
        correct: 3,
        explanation: "Las reglas SIEM pueden detectar patrones de MFA fatigue (múltiples solicitudes de aprobación en poco tiempo) y generar alertas automáticas ante este tipo de ataque.",
        topic: "Herramientas de seguridad"
    },
    {
        question: "¿Qué principio de Zero Trust establece que debemos asumir una brecha por defecto?",
        options: ["No usar contraseñas", "Acceso ilimitado", "Eliminar firewalls", "Asumir brecha por defecto"],
        correct: 3,
        explanation: "Zero Trust parte del principio 'assume breach': se asume que la red ya puede estar comprometida y se diseñan los controles en consecuencia, verificando siempre.",
        topic: "Modelos de seguridad"
    }
],
// UT-2: Seguridad física y hardening — 20 preguntas
// Para añadir al objeto questionsDB bajo la clave correspondiente (ej: utCiber2)

ut2:[
    {
        question: "¿Qué es la seguridad física en entornos TIC?",
        options: ["Implementación de TLS", "Gestión de usuarios en Linux", "Configuración de contraseñas seguras", "Medidas para proteger hardware e instalaciones"],
        correct: 3,
        explanation: "La seguridad física en TIC engloba todas las medidas orientadas a proteger el hardware, las instalaciones y los recursos físicos frente a accesos no autorizados, desastres o sabotajes.",
        topic: "Seguridad física"
    },
    {
        question: "¿Qué elemento pertenece a la seguridad física?",
        options: ["Cifrado LUKS", "Configuración de firewalls", "Gestión de logs", "Control de accesos biométricos"],
        correct: 3,
        explanation: "El control de accesos biométricos (huellas dactilares, reconocimiento facial, etc.) es una medida de seguridad física que restringe el acceso a instalaciones TIC.",
        topic: "Seguridad física"
    },
    {
        question: "¿Qué sistema permite vigilar instalaciones TIC en tiempo real?",
        options: ["PAM", "WSUS", "AppArmor", "CCTV"],
        correct: 3,
        explanation: "Los sistemas CCTV (circuito cerrado de televisión) permiten monitorizar en tiempo real las instalaciones físicas donde se ubican los recursos TIC.",
        topic: "Seguridad física"
    },
    {
        question: "¿Qué dispositivo garantiza energía durante un corte eléctrico?",
        options: ["Balanceador de carga", "Router inalámbrico", "Switch de red", "SAI (UPS)"],
        correct: 3,
        explanation: "El SAI (Sistema de Alimentación Ininterrumpida) o UPS proporciona energía eléctrica de respaldo durante cortes para evitar pérdida de datos y daños en los equipos.",
        topic: "Seguridad física"
    },
    {
        question: "¿Qué parámetros ambientales son críticos en un CPD?",
        options: ["Memoria RAM y CPU", "Cantidad de discos duros", "Número de usuarios conectados", "Temperatura y humedad"],
        correct: 3,
        explanation: "En un CPD, la temperatura y la humedad deben mantenerse en rangos óptimos para evitar sobrecalentamientos, condensaciones y daños en los componentes electrónicos.",
        topic: "Seguridad física"
    },
    {
        question: "¿Qué sistema de extinción protege mejor equipos TIC?",
        options: ["Extintores de espuma", "Agua a presión", "Arena química", "Gases inertizados (FM-200, Novec 1230)"],
        correct: 3,
        explanation: "Los gases inertizados como FM-200 o Novec 1230 sofocan el fuego sin dañar los equipos electrónicos ni dejar residuos, siendo la opción más adecuada para CPDs.",
        topic: "Seguridad física"
    },
    {
        question: "¿Qué es el hardening?",
        options: ["Una política de VLAN", "Una técnica de backup", "Un tipo de RAID", "Configuración segura para reducir vulnerabilidades"],
        correct: 3,
        explanation: "El hardening o bastionado consiste en aplicar configuraciones seguras a sistemas y servicios para reducir su superficie de ataque y minimizar vulnerabilidades explotables.",
        topic: "Hardening"
    },
    {
        question: "¿Qué organización publica benchmarks de seguridad?",
        options: ["ISO", "IEEE", "NIST", "CIS (Center for Internet Security)"],
        correct: 3,
        explanation: "CIS (Center for Internet Security) publica los CIS Benchmarks, guías de configuración segura ampliamente adoptadas para sistemas operativos, aplicaciones y servicios.",
        topic: "Hardening"
    },
    {
        question: "¿Qué servicio se deshabilita normalmente por inseguro?",
        options: ["SSH", "RDP", "HTTPS", "Telnet"],
        correct: 3,
        explanation: "Telnet transmite datos en texto plano sin cifrado, por lo que es considerado inseguro y se deshabilita en favor de SSH, que cifra todas las comunicaciones.",
        topic: "Hardening"
    },
    {
        question: "¿Qué establece el principio de mínimos privilegios?",
        options: ["Permitir todo por defecto", "Asignar siempre privilegios de root", "Evitar contraseñas", "Conceder solo permisos necesarios"],
        correct: 3,
        explanation: "El principio de mínimos privilegios (least privilege) establece que cada usuario o proceso debe tener únicamente los permisos imprescindibles para realizar su función.",
        topic: "Hardening"
    },
    {
        question: "¿Qué marco gestiona autenticación en Linux?",
        options: ["IIS", "Ansible", "WSUS", "PAM"],
        correct: 3,
        explanation: "PAM (Pluggable Authentication Modules) es el marco de autenticación modular de Linux que permite configurar políticas de acceso, contraseñas y MFA de forma centralizada.",
        topic: "Hardening Linux"
    },
    {
        question: "¿Qué significa MFA?",
        options: ["Almacenamiento redundante", "Firewall de aplicaciones", "Auditoría manual", "Autenticación multifactor"],
        correct: 3,
        explanation: "MFA (Multi-Factor Authentication) es la autenticación multifactor: requiere verificar la identidad mediante dos o más factores independientes (contraseña + OTP, biometría, etc.).",
        topic: "Gestión de identidades"
    },
    {
        question: "¿Qué herramienta cifra discos en Windows?",
        options: ["LUKS", "TPM", "OpenSSL", "BitLocker"],
        correct: 3,
        explanation: "BitLocker es la herramienta de cifrado de disco completo integrada en Windows, que habitualmente se apoya en el chip TPM para proteger las claves de cifrado.",
        topic: "Cifrado"
    },
    {
        question: "¿Qué estándar usa LUKS habitualmente?",
        options: ["RSA", "SHA1", "MD5", "AES"],
        correct: 3,
        explanation: "LUKS (Linux Unified Key Setup) usa por defecto el algoritmo AES (Advanced Encryption Standard) para el cifrado de particiones y discos en sistemas Linux.",
        topic: "Cifrado"
    },
    {
        question: "¿Qué protocolo cifra comunicaciones en red?",
        options: ["SNMP", "FTP", "SMTP", "TLS"],
        correct: 3,
        explanation: "TLS (Transport Layer Security) es el protocolo estándar para cifrar comunicaciones en red, sustituyendo a SSL y siendo la base de HTTPS, SMTPS, FTPS y otros.",
        topic: "Cifrado en red"
    },
    {
        question: "¿Qué chip asegura claves y arranque íntegro?",
        options: ["CPU", "GPU", "SSD", "TPM"],
        correct: 3,
        explanation: "El TPM (Trusted Platform Module) es un chip dedicado que almacena claves criptográficas de forma segura y verifica la integridad del arranque del sistema (Secure Boot).",
        topic: "Cifrado"
    },
    {
        question: "¿Qué servicio gestiona actualizaciones en Windows?",
        options: ["Hyper-V", "Active Directory", "IIS", "WSUS"],
        correct: 3,
        explanation: "WSUS (Windows Server Update Services) permite a los administradores gestionar y distribuir de forma centralizada las actualizaciones de Microsoft en entornos Windows.",
        topic: "Gestión de parches"
    },
    {
        question: "¿Qué herramienta de automatización despliega parches?",
        options: ["DHCP", "Samba", "Apache", "Ansible"],
        correct: 3,
        explanation: "Ansible es una herramienta de automatización IT que permite desplegar configuraciones y parches de seguridad en múltiples sistemas de forma simultánea y reproducible.",
        topic: "Gestión de parches"
    },
    {
        question: "¿Qué herramienta recolecta y analiza logs?",
        options: ["RAID", "BitLocker", "LUKS", "Wazuh"],
        correct: 3,
        explanation: "Wazuh es una plataforma SIEM/XDR open source que recolecta, normaliza y analiza logs de múltiples fuentes para detectar amenazas y generar alertas de seguridad.",
        topic: "Monitorización"
    },
    {
        question: "¿Qué solución detecta incidentes en endpoints?",
        options: ["Proxy", "VLAN", "Switch", "EDR"],
        correct: 3,
        explanation: "EDR (Endpoint Detection and Response) monitoriza continuamente los endpoints para detectar comportamientos anómalos, contener amenazas y facilitar la respuesta a incidentes.",
        topic: "Monitorización"
    }
],
// UT-3: Seguridad en redes y servicios — 20 preguntas
ut3:[
    {
        question: "¿Qué protocolo añade firmas digitales para validar respuestas DNS?",
        options: ["SMTP", "DHCP", "ICMP", "DNSSEC"],
        correct: 3,
        explanation: "DNSSEC (DNS Security Extensions) añade firmas digitales a las respuestas DNS para garantizar su autenticidad e integridad, protegiendo contra ataques como el DNS spoofing.",
        topic: "Seguridad DNS"
    },
    {
        question: "¿Qué protocolo cifra consultas DNS utilizando TLS en el puerto 853?",
        options: ["HTTP", "FTP", "ICMP", "DoT"],
        correct: 3,
        explanation: "DoT (DNS over TLS) cifra las consultas DNS mediante TLS en el puerto 853, evitando que terceros intercepten o manipulen las resoluciones de nombres.",
        topic: "Seguridad DNS"
    },
    {
        question: "¿Qué técnica separa las consultas DNS internas y externas?",
        options: ["NAT", "Proxy ARP", "Subnetting", "Split-DNS"],
        correct: 3,
        explanation: "Split-DNS (DNS dividido) usa diferentes servidores o zonas para resolver nombres internos y externos, evitando exponer información de la red interna al exterior.",
        topic: "Seguridad DNS"
    },
    {
        question: "¿Qué ataque explota respuestas DNS para saturar a una víctima?",
        options: ["SQL injection", "Ping sweep", "ARP spoofing", "Amplificación DNS"],
        correct: 3,
        explanation: "El ataque de amplificación DNS envía consultas con la IP de la víctima suplantada, logrando que los servidores DNS respondan con grandes volúmenes de tráfico hacia ella.",
        topic: "Seguridad DNS"
    },
    {
        question: "¿Qué cabecera HTTP fuerza a los navegadores a usar siempre HTTPS?",
        options: ["X-Frame-Options", "CSP", "X-Powered-By", "HSTS"],
        correct: 3,
        explanation: "HSTS (HTTP Strict Transport Security) es una cabecera de respuesta que indica al navegador que solo debe comunicarse con el servidor mediante HTTPS, bloqueando conexiones HTTP planas.",
        topic: "Seguridad web"
    },
    {
        question: "¿Qué componente inspecciona tráfico HTTP en tiempo real y bloquea ataques web?",
        options: ["IDS", "NAT", "Proxy inverso", "WAF (ModSecurity)"],
        correct: 3,
        explanation: "Un WAF (Web Application Firewall) como ModSecurity analiza el tráfico HTTP/HTTPS en tiempo real y bloquea peticiones maliciosas como SQLi, XSS o path traversal.",
        topic: "Seguridad web"
    },
    {
        question: "¿Qué mecanismo de correo define los servidores autorizados para enviar en nombre de un dominio?",
        options: ["IMAP", "OCSP", "DNSSEC", "SPF"],
        correct: 3,
        explanation: "SPF (Sender Policy Framework) publica en DNS los servidores de correo autorizados para enviar en nombre del dominio, ayudando a detectar y rechazar correos falsificados.",
        topic: "Seguridad correo"
    },
    {
        question: "¿Qué sistema añade una firma digital a los correos electrónicos?",
        options: ["TLS", "FTP", "SPF", "DKIM"],
        correct: 3,
        explanation: "DKIM (DomainKeys Identified Mail) firma criptográficamente los mensajes de correo salientes, permitiendo al receptor verificar que el mensaje no fue alterado en tránsito.",
        topic: "Seguridad correo"
    },
    {
        question: "¿Qué política complementa SPF y DKIM estableciendo reglas para correos no autorizados?",
        options: ["NAT", "SSL", "GRE", "DMARC"],
        correct: 3,
        explanation: "DMARC (Domain-based Message Authentication, Reporting and Conformance) define qué hacer con correos que no superan SPF o DKIM: cuarentena, rechazo o solo informe.",
        topic: "Seguridad correo"
    },
    {
        question: "¿Qué protocolo reemplaza FTP plano transmitiendo datos cifrados sobre SSH?",
        options: ["HTTP", "TFTP", "POP3", "SFTP"],
        correct: 3,
        explanation: "SFTP (SSH File Transfer Protocol) proporciona transferencia de archivos cifrada sobre SSH, reemplazando a FTP que transmite credenciales y datos en texto plano.",
        topic: "Protocolos seguros"
    },
    {
        question: "¿Qué protocolo cifra la señalización en VoIP para proteger mensajes SIP?",
        options: ["BGP", "ICMP", "SRTP", "TLS"],
        correct: 3,
        explanation: "TLS cifra la señalización SIP en VoIP, protegiendo el establecimiento y control de las llamadas. Para el flujo de audio se usa complementariamente SRTP.",
        topic: "Seguridad VoIP"
    },
    {
        question: "¿Qué protocolo cifra el flujo de audio en llamadas VoIP?",
        options: ["FTP", "RTP", "TCP", "SRTP"],
        correct: 3,
        explanation: "SRTP (Secure Real-time Transport Protocol) es la versión cifrada de RTP y protege la confidencialidad e integridad del flujo de audio y vídeo en comunicaciones VoIP.",
        topic: "Seguridad VoIP"
    },
    {
        question: "¿Qué amenaza en VoIP consiste en realizar llamadas internacionales fraudulentas?",
        options: ["Ping of death", "Phishing", "ARP spoofing", "Toll fraud"],
        correct: 3,
        explanation: "El toll fraud (fraude telefónico) es un ataque específico de VoIP en el que el atacante compromete la centralita para realizar llamadas internacionales de alto coste a cargo de la víctima.",
        topic: "Seguridad VoIP"
    },
    {
        question: "¿Qué protocolo automatiza la emisión y renovación de certificados TLS gratuitos?",
        options: ["SMTP", "SCP", "SSLv2", "ACME/Let's Encrypt"],
        correct: 3,
        explanation: "ACME (Automatic Certificate Management Environment) es el protocolo usado por Let's Encrypt para automatizar la validación de dominios y la emisión/renovación de certificados TLS de forma gratuita.",
        topic: "Certificados TLS"
    },
    {
        question: "¿Qué técnica incluye el estado de un certificado durante el handshake TLS?",
        options: ["CSP", "SPF", "NAT", "OCSP stapling"],
        correct: 3,
        explanation: "OCSP stapling permite que el servidor incluya una respuesta firmada sobre el estado de revocación de su certificado durante el handshake TLS, evitando que el cliente tenga que consultarlo por separado.",
        topic: "Certificados TLS"
    },
    {
        question: "¿Qué política obliga a los navegadores a usar siempre HTTPS?",
        options: ["SSLv2", "DNSSEC", "ICMP", "HSTS"],
        correct: 3,
        explanation: "HSTS (HTTP Strict Transport Security) es una política de seguridad web que instruye al navegador a acceder únicamente mediante HTTPS durante un período definido, previniendo ataques de downgrade.",
        topic: "Seguridad web"
    },
    {
        question: "¿Qué métrica mide la calidad de un servicio, como latencia o disponibilidad?",
        options: ["SLI", "KPI", "API", "SLA"],
        correct: 3,
        explanation: "El SLA (Service Level Agreement) es el acuerdo formal que define los niveles de calidad exigidos a un servicio, incluyendo métricas como disponibilidad, latencia o tiempo de respuesta ante incidentes.",
        topic: "Gestión de servicios"
    },
    {
        question: "¿Qué herramienta correlaciona eventos de seguridad y permite orquestar respuestas?",
        options: ["FTP", "IDS", "DNSSEC", "SIEM/SOAR"],
        correct: 3,
        explanation: "SIEM/SOAR combina la correlación y análisis de eventos de seguridad (SIEM) con la automatización y orquestación de respuestas ante incidentes (SOAR), reduciendo el tiempo de reacción.",
        topic: "Monitorización"
    },
    {
        question: "¿Qué concepto en cloud define permisos y accesos basados en mínimos privilegios?",
        options: ["MPLS", "SLA", "VPN", "IAM"],
        correct: 3,
        explanation: "IAM (Identity and Access Management) en cloud gestiona identidades y permisos aplicando el principio de mínimos privilegios, controlando qué usuarios y servicios pueden acceder a cada recurso.",
        topic: "Seguridad cloud"
    },
    {
        question: "¿Qué sistema mantiene inventarios y topologías lógicas de red?",
        options: ["DNS", "FTP", "SMTP", "CMDB"],
        correct: 3,
        explanation: "Una CMDB (Configuration Management Database) registra y mantiene actualizado el inventario de activos TIC, sus atributos y las relaciones entre ellos, siendo esencial para la gestión de la seguridad.",
        topic: "Gestión de servicios"
    }
],
// UT-4: Seguridad en aplicaciones web y pentesting — 20 preguntas
ut4:[
    {
        question: "¿Qué organización publica el listado OWASP Top 10?",
        options: ["NIST", "IEC", "ISO", "OWASP"],
        correct: 3,
        explanation: "OWASP (Open Worldwide Application Security Project) es la organización sin ánimo de lucro que publica y mantiene el OWASP Top 10, el estándar de referencia para los riesgos más críticos en aplicaciones web.",
        topic: "OWASP"
    },
    {
        question: "¿Qué tipo de vulnerabilidad permite inyectar código en las entradas de usuario?",
        options: ["SSRF", "CSRF", "XSS", "Inyección"],
        correct: 3,
        explanation: "Las vulnerabilidades de inyección (SQL, LDAP, OS command...) ocurren cuando datos no validados son interpretados como código o comandos por el intérprete, siendo el primer puesto histórico del OWASP Top 10.",
        topic: "OWASP"
    },
    {
        question: "¿Qué vulnerabilidad permite ejecutar scripts en el navegador de otro usuario?",
        options: ["SQLi", "XXE", "CSRF", "XSS"],
        correct: 3,
        explanation: "XSS (Cross-Site Scripting) permite a un atacante inyectar scripts maliciosos en páginas web que serán ejecutados en el navegador de otros usuarios, pudiendo robar cookies, sesiones o redirigir a sitios fraudulentos.",
        topic: "OWASP"
    },
    {
        question: "¿Qué ataque explota documentos XML para acceder a archivos internos?",
        options: ["SSRF", "XSS", "CSRF", "XXE"],
        correct: 3,
        explanation: "XXE (XML External Entity) explota parsers XML mal configurados para acceder a archivos locales del servidor, realizar SSRF o provocar denegaciones de servicio mediante entidades externas.",
        topic: "OWASP"
    },
    {
        question: "¿Qué vulnerabilidad aprovecha datos serializados maliciosos?",
        options: ["XSS", "CSRF", "Inyección SQL", "Deserialización insegura"],
        correct: 3,
        explanation: "La deserialización insegura ocurre cuando una aplicación deserializa datos controlados por el atacante sin validarlos, pudiendo derivar en ejecución remota de código, escalada de privilegios o ataques de repetición.",
        topic: "OWASP"
    },
    {
        question: "¿Qué ataque induce a un usuario autenticado a realizar acciones no deseadas?",
        options: ["SSRF", "XSS", "XXE", "CSRF"],
        correct: 3,
        explanation: "CSRF (Cross-Site Request Forgery) engaña al navegador de un usuario autenticado para que envíe peticiones maliciosas a una aplicación donde tiene sesión activa, ejecutando acciones sin su consentimiento.",
        topic: "OWASP"
    },
    {
        question: "¿Qué vulnerabilidad permite a un servidor acceder a recursos internos o externos?",
        options: ["XSS", "CSRF", "SQLi", "SSRF"],
        correct: 3,
        explanation: "SSRF (Server-Side Request Forgery) manipula al servidor para que realice peticiones a recursos internos o externos en nombre del atacante, pudiendo exponer servicios de metadatos cloud o redes internas.",
        topic: "OWASP"
    },
    {
        question: "¿Qué tipo de error muestra información sensible al usuario?",
        options: ["Error crítico", "Error local", "Error genérico", "Error verboso"],
        correct: 3,
        explanation: "Los errores verbosos exponen trazas de pila, nombres de tablas, versiones de software o rutas internas. Son un fallo de seguridad porque proporcionan información útil al atacante para refinar su ataque.",
        topic: "OWASP"
    },
    {
        question: "¿Qué herramienta se usa para análisis dinámico de aplicaciones web?",
        options: ["SonarQube", "Dependency-Check", "Metasploit", "OWASP ZAP"],
        correct: 3,
        explanation: "OWASP ZAP (Zed Attack Proxy) es una herramienta DAST (Dynamic Application Security Testing) que analiza aplicaciones web en ejecución, interceptando tráfico y buscando vulnerabilidades activamente.",
        topic: "Herramientas"
    },
    {
        question: "¿Qué herramienta se usa para análisis estático del código fuente?",
        options: ["Burp Suite", "Dradis", "OWASP ZAP", "SonarQube"],
        correct: 3,
        explanation: "SonarQube es una plataforma SAST (Static Application Security Testing) que analiza el código fuente sin ejecutarlo, detectando bugs, vulnerabilidades y deudas técnicas en múltiples lenguajes.",
        topic: "Herramientas"
    },
    {
        question: "¿Qué herramienta permite analizar vulnerabilidades en dependencias externas?",
        options: ["Metasploit", "ELK Stack", "Splunk", "OWASP Dependency-Check"],
        correct: 3,
        explanation: "OWASP Dependency-Check analiza las librerías y dependencias de un proyecto comparándolas con bases de datos de vulnerabilidades conocidas (CVE/NVD), identificando componentes con riesgos de seguridad.",
        topic: "Herramientas"
    },
    {
        question: "¿Qué fase del pentesting implica recopilar información del objetivo?",
        options: ["Explotación", "Verificación", "Post-explotación", "Reconocimiento"],
        correct: 3,
        explanation: "La fase de reconocimiento (o footprinting/recon) es la primera del pentesting: consiste en recopilar toda la información posible sobre el objetivo (dominios, IPs, tecnologías, empleados) antes de atacar.",
        topic: "Pentesting"
    },
    {
        question: "¿Qué cabecera obliga al navegador a usar HTTPS?",
        options: ["X-Frame-Options", "X-Content-Type-Options", "CSP", "HSTS"],
        correct: 3,
        explanation: "La cabecera HSTS (Strict-Transport-Security) instruye al navegador a comunicarse exclusivamente por HTTPS durante el período indicado, previniendo ataques de downgrade a HTTP.",
        topic: "Cabeceras HTTP"
    },
    {
        question: "¿Qué cabecera define qué fuentes de contenido son permitidas?",
        options: ["HSTS", "nosniff", "X-Frame-Options", "CSP"],
        correct: 3,
        explanation: "CSP (Content Security Policy) permite al servidor declarar las fuentes de confianza para scripts, estilos, imágenes y otros recursos, siendo una defensa en profundidad clave contra XSS.",
        topic: "Cabeceras HTTP"
    },
    {
        question: "¿Qué cabecera evita ataques de clickjacking?",
        options: ["CSP", "nosniff", "HSTS", "X-Frame-Options"],
        correct: 3,
        explanation: "X-Frame-Options controla si el navegador puede renderizar la página dentro de un frame o iframe, evitando que un atacante superponga una página legítima para engañar al usuario (clickjacking).",
        topic: "Cabeceras HTTP"
    },
    {
        question: "¿Qué atributo de cookie impide acceso mediante JavaScript?",
        options: ["SameSite", "Secure", "Domain", "HttpOnly"],
        correct: 3,
        explanation: "El atributo HttpOnly en una cookie impide que JavaScript (document.cookie) pueda leerla, protegiéndola de ser robada mediante ataques XSS.",
        topic: "Seguridad cookies"
    },
    {
        question: "¿Qué técnica de autenticación requiere más de un factor de verificación?",
        options: ["RBAC", "ABAC", "CAPTCHA", "MFA"],
        correct: 3,
        explanation: "MFA (Multi-Factor Authentication) exige al usuario verificar su identidad con dos o más factores independientes: algo que sabe (contraseña), algo que tiene (OTP/token) o algo que es (biometría).",
        topic: "Autenticación"
    },
    {
        question: "¿Qué documento lista todas las dependencias de una aplicación?",
        options: ["SLA", "GDPR", "CVSS", "SBOM"],
        correct: 3,
        explanation: "El SBOM (Software Bill of Materials) es un inventario formal de todos los componentes, librerías y dependencias de una aplicación, esencial para gestionar vulnerabilidades en la cadena de suministro software.",
        topic: "Gestión de dependencias"
    },
    {
        question: "¿Qué herramienta se usa para centralizar y visualizar logs?",
        options: ["Nmap", "OWASP ZAP", "Dradis", "ELK Stack"],
        correct: 3,
        explanation: "ELK Stack (Elasticsearch, Logstash, Kibana) es una plataforma open source que recolecta, procesa, almacena y visualiza logs de múltiples fuentes, siendo ampliamente usada para monitorización de seguridad.",
        topic: "Monitorización"
    },
    {
        question: "¿Qué informe documenta hallazgos, riesgo y remediaciones?",
        options: ["Informe financiero", "Informe de usuario", "Informe ejecutivo", "Informe técnico"],
        correct: 3,
        explanation: "El informe técnico de pentesting detalla cada vulnerabilidad encontrada, su nivel de riesgo (CVSS), evidencias y los pasos de remediación. Va dirigido al equipo técnico, a diferencia del informe ejecutivo que resume el impacto para la dirección.",
        topic: "Pentesting"
    }
],
// UT-5: Seguridad en redes — 20 preguntas
ut5:[
    {
        question: "¿Qué técnica permite dividir una red física en varios dominios lógicos independientes?",
        options: ["DHCP snooping", "ARP spoofing", "MITM", "VLAN"],
        correct: 3,
        explanation: "Las VLANs (Virtual LANs) segmentan lógicamente una red física en dominios de broadcast independientes, limitando el alcance de los ataques y mejorando la gestión del tráfico.",
        topic: "Segmentación de red"
    },
    {
        question: "¿Qué protocolo de seguridad inalámbrica utiliza SAE para una autenticación más robusta?",
        options: ["WEP", "TKIP", "WPA2", "WPA3"],
        correct: 3,
        explanation: "WPA3 introduce SAE (Simultaneous Authentication of Equals), un mecanismo de intercambio de claves que sustituye al handshake de 4 vías de WPA2 y protege contra ataques de diccionario offline.",
        topic: "Seguridad inalámbrica"
    },
    {
        question: "¿Qué ataque se basa en interceptar y modificar el tráfico entre dos dispositivos?",
        options: ["DNS Spoofing", "Port Scanning", "Ping Flood", "MITM"],
        correct: 3,
        explanation: "Un ataque MITM (Man-In-The-Middle) se interpone entre dos comunicantes para interceptar, leer o modificar el tráfico sin que ninguna de las partes lo detecte.",
        topic: "Ataques de red"
    },
    {
        question: "¿Qué herramienta se utiliza para detectar y prevenir intrusiones en la red?",
        options: ["Wireshark", "tcpdump", "Ping", "Snort"],
        correct: 3,
        explanation: "Snort es un IDS/IPS open source que analiza el tráfico de red en tiempo real comparándolo con reglas de detección, pudiendo alertar o bloquear actividades maliciosas.",
        topic: "IDS/IPS"
    },
    {
        question: "¿Qué protocolo se utiliza para exportar información de flujos de red y detectar anomalías?",
        options: ["ARP", "SMTP", "ICMP", "NetFlow"],
        correct: 3,
        explanation: "NetFlow es un protocolo de Cisco que exporta metadatos de flujos de red (IPs, puertos, bytes, duración) permitiendo detectar anomalías de tráfico, escaneos y comportamientos sospechosos.",
        topic: "Monitorización de red"
    },
    {
        question: "¿Cuál de las siguientes opciones describe mejor el propósito de una VPN?",
        options: ["Permitir accesos públicos", "Aumentar la velocidad de la red", "Bloquear todo el tráfico saliente", "Crear un túnel cifrado para comunicación segura"],
        correct: 3,
        explanation: "Una VPN (Virtual Private Network) crea un túnel cifrado sobre una red pública, permitiendo comunicaciones privadas y seguras entre extremos como si estuvieran en la misma red local.",
        topic: "VPN"
    },
    {
        question: "¿Qué protocolo de comunicación segura se recomienda actualmente para HTTPS?",
        options: ["SSL 2.0", "SSH 1.0", "TLS 1.0", "TLS 1.3"],
        correct: 3,
        explanation: "TLS 1.3 es la versión actual recomendada para HTTPS: elimina algoritmos obsoletos, reduce la latencia del handshake y mejora significativamente la seguridad respecto a versiones anteriores.",
        topic: "Protocolos seguros"
    },
    {
        question: "¿Qué política obliga al navegador a usar siempre HTTPS?",
        options: ["DLP", "CSP", "NAT", "HSTS"],
        correct: 3,
        explanation: "HSTS (HTTP Strict Transport Security) es una cabecera de respuesta que instruye al navegador a conectarse únicamente por HTTPS durante el período indicado, previniendo ataques de downgrade.",
        topic: "Protocolos seguros"
    },
    {
        question: "¿Qué técnica limita el número de solicitudes o conexiones por unidad de tiempo?",
        options: ["Flooding", "NAT dinámico", "VLAN hopping", "Rate limiting"],
        correct: 3,
        explanation: "El rate limiting restringe la tasa de peticiones o conexiones por IP o usuario en un intervalo de tiempo, siendo una defensa efectiva contra ataques de fuerza bruta y DDoS.",
        topic: "Mitigación de ataques"
    },
    {
        question: "¿Qué dispositivo descarta tráfico hacia una dirección bajo ataque DDoS?",
        options: ["Switch", "Firewall", "Proxy", "Blackhole"],
        correct: 3,
        explanation: "El blackholing (o RTBH) redirige el tráfico destinado a una IP víctima hacia una interfaz nula descartándolo, protegiendo la infraestructura subyacente aunque el servicio quede inaccesible.",
        topic: "Mitigación de ataques"
    },
    {
        question: "¿Qué tecnología distribuye contenido para mitigar ataques y mejorar la disponibilidad?",
        options: ["DNS", "DHCP", "IDS", "CDN"],
        correct: 3,
        explanation: "Una CDN (Content Delivery Network) distribuye el contenido en nodos geográficamente dispersos, absorbiendo ataques DDoS, reduciendo la latencia y mejorando la disponibilidad del servicio.",
        topic: "Mitigación de ataques"
    },
    {
        question: "¿Qué extensión de BGP permite distribuir reglas de filtrado contra ataques DDoS?",
        options: ["STP", "IPSec", "VRF", "Flowspec"],
        correct: 3,
        explanation: "BGP Flowspec (RFC 5575) extiende BGP para distribuir reglas de filtrado de tráfico (por IP, puerto, protocolo) a múltiples routers simultáneamente, siendo una herramienta potente contra DDoS.",
        topic: "Mitigación de ataques"
    },
    {
        question: "¿Qué protocolo móvil puede ser atacado mediante IMSI Catchers?",
        options: ["NFC", "Ethernet", "WiFi", "4G"],
        correct: 3,
        explanation: "Los IMSI Catchers (Stingrays) suplantan a torres de telefonía para interceptar comunicaciones 4G/LTE, capturando el IMSI del dispositivo y pudiendo interceptar llamadas y datos.",
        topic: "Seguridad móvil"
    },
    {
        question: "¿Qué tecnología de corto alcance se usa en pagos móviles y puede sufrir relay attacks?",
        options: ["ZigBee", "LTE", "Bluetooth", "NFC"],
        correct: 3,
        explanation: "NFC (Near Field Communication) se usa en pagos contactless y control de accesos. Los relay attacks retransmiten la señal NFC a distancia, permitiendo transacciones fraudulentas sin contacto físico directo.",
        topic: "Seguridad móvil"
    },
    {
        question: "¿Qué arquitectura separa el plano de control y el de datos en las redes?",
        options: ["VPN", "LAN", "WLAN", "SDN"],
        correct: 3,
        explanation: "SDN (Software-Defined Networking) desacopla el plano de control (decisiones de enrutamiento) del plano de datos (reenvío de paquetes), centralizando la gestión y facilitando la aplicación de políticas de seguridad.",
        topic: "Arquitecturas de red"
    },
    {
        question: "¿Qué modelo elimina la confianza implícita en la red y valida cada acceso?",
        options: ["Client-Server", "Mesh Network", "Peer to Peer", "Zero Trust Network"],
        correct: 3,
        explanation: "Zero Trust Network parte del principio 'nunca confíes, siempre verifica': cada acceso a un recurso debe ser autenticado, autorizado y cifrado independientemente de si el origen es interno o externo.",
        topic: "Arquitecturas de red"
    },
    {
        question: "¿Qué protocolo permite comunicación cifrada y administración remota segura?",
        options: ["Telnet", "FTP", "HTTP", "SSH"],
        correct: 3,
        explanation: "SSH (Secure Shell) cifra toda la sesión de administración remota, autenticando al servidor y al cliente, reemplazando a Telnet y rlogin que transmitían credenciales en texto plano.",
        topic: "Protocolos seguros"
    },
    {
        question: "¿Qué herramienta moderna de VPN destaca por su eficiencia y simplicidad?",
        options: ["GRE", "OpenVPN", "IPSec", "WireGuard"],
        correct: 3,
        explanation: "WireGuard es un protocolo VPN moderno con una base de código muy reducida (~4000 líneas), criptografía de última generación y rendimiento superior a OpenVPN e IPSec en la mayoría de escenarios.",
        topic: "VPN"
    },
    {
        question: "¿Qué mecanismo valida la correspondencia IP-MAC para evitar ataques ARP falsos?",
        options: ["Port mirroring", "DNSSEC", "NAT estático", "Dynamic ARP Inspection"],
        correct: 3,
        explanation: "DAI (Dynamic ARP Inspection) valida los mensajes ARP comprobando que la correspondencia IP-MAC coincide con la tabla de DHCP snooping, descartando respuestas ARP fraudulentas.",
        topic: "Seguridad en switches"
    },
    {
        question: "¿Qué tecnología permite controlar el acceso a la red verificando identidad y cumplimiento?",
        options: ["FTP", "SMTP", "DHCP", "NAC"],
        correct: 3,
        explanation: "NAC (Network Access Control) verifica la identidad del dispositivo y su cumplimiento de políticas de seguridad (antivirus actualizado, parches, etc.) antes de conceder acceso a la red corporativa.",
        topic: "Control de acceso"
    }
],
// UT-6: Seguridad en dispositivos móviles e IoT — 20 preguntas


ut6:[
    {
        question: "¿Qué técnica garantiza el aislamiento de aplicaciones en sistemas operativos móviles?",
        options: ["Rooting", "Multiproceso", "Debugging", "Sandboxing"],
        correct: 3,
        explanation: "El sandboxing aísla cada aplicación en su propio entorno de ejecución restringido, impidiendo que acceda a datos o recursos de otras apps sin permisos explícitos del sistema operativo.",
        topic: "Seguridad móvil"
    },
    {
        question: "En iOS, el almacenamiento seguro de credenciales se gestiona mediante:",
        options: ["SafeStore", "Registry", "Vault", "Keychain"],
        correct: 3,
        explanation: "El Keychain de iOS es el almacén seguro del sistema operativo donde se guardan credenciales, tokens y claves privadas cifradas, protegidas por el hardware del dispositivo.",
        topic: "Seguridad móvil"
    },
    {
        question: "¿Qué componente proporciona almacenamiento de claves protegido por hardware en Android?",
        options: ["TPM", "TrustStore", "BIOS", "Keystore"],
        correct: 3,
        explanation: "Android Keystore permite generar y almacenar claves criptográficas en un entorno protegido por hardware (TEE o Secure Element), haciendo que las claves no puedan exportarse del dispositivo.",
        topic: "Seguridad móvil"
    },
    {
        question: "¿Qué protocolo IoT usa el modelo publicación/suscripción?",
        options: ["SNMP", "POP3", "HTTP", "MQTT"],
        correct: 3,
        explanation: "MQTT (Message Queuing Telemetry Transport) usa un modelo publish/subscribe a través de un broker central, siendo muy ligero y eficiente para dispositivos IoT con recursos limitados.",
        topic: "Protocolos IoT"
    },
    {
        question: "¿Qué protocolo IoT está basado en UDP y permite operaciones RESTful?",
        options: ["Zigbee", "BLE", "MQTT", "CoAP"],
        correct: 3,
        explanation: "CoAP (Constrained Application Protocol) es un protocolo similar a HTTP pero sobre UDP, diseñado para dispositivos con recursos muy limitados y que soporta operaciones GET, POST, PUT y DELETE.",
        topic: "Protocolos IoT"
    },
    {
        question: "¿Qué estándar inalámbrico IoT se basa en IEEE 802.15.4?",
        options: ["NFC", "Wi-Fi", "Bluetooth", "Zigbee"],
        correct: 3,
        explanation: "Zigbee se basa en el estándar IEEE 802.15.4 para comunicaciones inalámbricas de baja potencia y corto alcance, siendo muy usado en domótica, automatización industrial y redes de sensores.",
        topic: "Protocolos IoT"
    },
    {
        question: "¿Qué variante de Bluetooth está optimizada para bajo consumo energético?",
        options: ["Enhanced Rate", "Classic", "SuperBlue", "BLE"],
        correct: 3,
        explanation: "BLE (Bluetooth Low Energy) está diseñado para transmitir pequeñas cantidades de datos con un consumo de batería mínimo, siendo el estándar dominante en wearables, sensores IoT y balizas.",
        topic: "Protocolos IoT"
    },
    {
        question: "¿Qué elemento central en MQTT gestiona la comunicación entre publicadores y suscriptores?",
        options: ["Proxy", "Router", "Gateway", "Broker"],
        correct: 3,
        explanation: "El broker MQTT (como Mosquitto o HiveMQ) es el intermediario que recibe mensajes de los publicadores y los distribuye a todos los suscriptores registrados en el topic correspondiente.",
        topic: "Protocolos IoT"
    },
    {
        question: "¿Cuál es una amenaza común en dispositivos IoT?",
        options: ["Actualización automática", "Batería de larga duración", "Alta redundancia", "Uso de credenciales por defecto"],
        correct: 3,
        explanation: "Muchos dispositivos IoT se despliegan con credenciales por defecto que los usuarios nunca cambian, convirtiéndose en vectores de entrada triviales para atacantes, como demostró la botnet Mirai.",
        topic: "Amenazas IoT"
    },
    {
        question: "¿Qué mecanismo garantiza que un dispositivo solo ejecute firmware firmado?",
        options: ["BIOS Lock", "Root Access", "TPM", "Secure Boot"],
        correct: 3,
        explanation: "Secure Boot verifica la firma criptográfica del firmware y el bootloader durante el arranque, rechazando cualquier código no firmado por una autoridad de confianza y previniendo bootkits.",
        topic: "Seguridad hardware"
    },
    {
        question: "¿Qué entorno aislado protege operaciones criptográficas dentro del procesador?",
        options: ["Debug", "BIOS", "Sandbox", "TEE"],
        correct: 3,
        explanation: "TEE (Trusted Execution Environment) es un área segura y aislada dentro del procesador principal donde se ejecutan operaciones sensibles (cifrado, biometría, pagos) protegidas del sistema operativo principal.",
        topic: "Seguridad hardware"
    },
    {
        question: "¿Qué función permite eliminar remotamente datos corporativos en caso de pérdida?",
        options: ["Desinstalación masiva", "Factory reboot", "Bloqueo biométrico", "Borrado remoto"],
        correct: 3,
        explanation: "El borrado remoto (remote wipe) permite a los administradores eliminar de forma segura los datos de un dispositivo perdido o robado a través de una orden enviada remotamente vía MDM.",
        topic: "Gestión de dispositivos"
    },
    {
        question: "¿Qué servicio de gestión móvil permite separar datos personales y corporativos?",
        options: ["IDS", "VPN", "SIEM", "MAM"],
        correct: 3,
        explanation: "MAM (Mobile Application Management) gestiona y controla las aplicaciones corporativas en dispositivos BYOD, creando un contenedor separado para los datos de empresa sin afectar a los personales.",
        topic: "Gestión de dispositivos"
    },
    {
        question: "¿Qué mecanismo protege la confidencialidad de las comunicaciones IoT?",
        options: ["Hash MD5", "NAT", "ACL", "Cifrado TLS"],
        correct: 3,
        explanation: "TLS cifra el canal de comunicación extremo a extremo en dispositivos IoT, protegiendo la confidencialidad e integridad de los datos transmitidos, incluso en redes no confiables.",
        topic: "Seguridad comunicaciones IoT"
    },
    {
        question: "¿Qué práctica reduce el riesgo de explotación por firmware desactualizado?",
        options: ["Desactivación de red", "Reinicio forzado", "Reinicio periódico", "Actualización OTA"],
        correct: 3,
        explanation: "Las actualizaciones OTA (Over-The-Air) permiten distribuir parches de firmware de forma remota y automática, manteniendo los dispositivos IoT protegidos frente a vulnerabilidades conocidas.",
        topic: "Gestión de parches IoT"
    },
    {
        question: "¿Qué acción inicial debe realizarse ante un dispositivo comprometido?",
        options: ["Restauración", "Eliminación", "Reconfiguración", "Aislamiento"],
        correct: 3,
        explanation: "El aislamiento inmediato del dispositivo comprometido (desconexión de red, VLANs de cuarentena) es el primer paso de respuesta a incidentes para evitar la propagación lateral del ataque.",
        topic: "Respuesta a incidentes"
    },
    {
        question: "¿Qué herramienta facilita la gestión centralizada de dispositivos móviles?",
        options: ["IDS", "DHCP", "DNS", "MDM"],
        correct: 3,
        explanation: "MDM (Mobile Device Management) permite a los administradores gestionar de forma centralizada flotas de dispositivos móviles: aplicar políticas, distribuir apps, cifrar discos y realizar borrados remotos.",
        topic: "Gestión de dispositivos"
    },
    {
        question: "¿Qué tipo de borrado elimina solo los datos corporativos y mantiene los personales?",
        options: ["Wipe factory", "Reset parcial", "Borrado completo", "Borrado selectivo"],
        correct: 3,
        explanation: "El borrado selectivo (selective wipe) elimina únicamente el contenedor corporativo de un dispositivo BYOD, preservando los datos y aplicaciones personales del empleado.",
        topic: "Gestión de dispositivos"
    },
    {
        question: "¿Qué componente de red IoT actúa como puente hacia Internet?",
        options: ["Switch", "Router", "Bridge", "Gateway"],
        correct: 3,
        explanation: "El gateway IoT actúa como punto de interconexión entre la red de dispositivos IoT (Zigbee, BLE, LoRa...) y la red IP/Internet, realizando traducción de protocolos y agregación de datos.",
        topic: "Arquitectura IoT"
    },
    {
        question: "¿Qué entorno técnico permite registrar mediciones del arranque para detectar manipulaciones?",
        options: ["Fast Boot", "BIOS Boot", "Dynamic Boot", "Measured Boot"],
        correct: 3,
        explanation: "Measured Boot registra en el TPM hashes de cada componente cargado durante el arranque (firmware, bootloader, kernel). Estas mediciones permiten detectar a posteriori si algún componente fue manipulado.",
        topic: "Seguridad hardware"
    }
],
// UT-7: Gestión documental, mejora continua y gobernanza de seguridad — 20 preguntas


ut7:[
    {
        question: "¿Qué documento define los principios y directrices generales de seguridad en una organización?",
        options: ["Instructivo", "Procedimiento", "Guía", "Política de seguridad"],
        correct: 3,
        explanation: "La política de seguridad es el documento de más alto nivel en la jerarquía documental: establece los principios, objetivos y responsabilidades generales de seguridad que deben cumplir todos los miembros de la organización.",
        topic: "Documentación de seguridad"
    },
    {
        question: "¿Qué tipo de documento especifica requisitos técnicos mínimos para cumplir controles?",
        options: ["Política", "Informe", "Plan", "Estándar"],
        correct: 3,
        explanation: "El estándar define los requisitos técnicos mínimos obligatorios que deben cumplirse para implementar un control de seguridad (versión mínima de TLS, longitud de clave, etc.), siendo más específico que la política.",
        topic: "Documentación de seguridad"
    },
    {
        question: "¿Qué documento detalla los pasos operativos para ejecutar una tarea de seguridad?",
        options: ["Plan", "Política", "Informe", "Procedimiento"],
        correct: 3,
        explanation: "El procedimiento describe paso a paso cómo realizar una tarea de seguridad concreta (respuesta a incidentes, gestión de parches, etc.), siendo el documento más operativo de la jerarquía documental.",
        topic: "Documentación de seguridad"
    },
    {
        question: "¿Qué tipo de documento ofrece recomendaciones y buenas prácticas?",
        options: ["Norma", "Estándar", "Política", "Guía"],
        correct: 3,
        explanation: "La guía proporciona recomendaciones y buenas prácticas de carácter orientativo, no obligatorio. Ayuda a los equipos a implementar controles de forma adecuada sin imponer requisitos estrictos.",
        topic: "Documentación de seguridad"
    },
    {
        question: "¿Qué proceso asegura la coherencia y el historial de cambios en la documentación?",
        options: ["Autenticación", "Monitoreo", "Cifrado", "Versionado"],
        correct: 3,
        explanation: "El versionado de documentos registra cada cambio con su autor, fecha y descripción, garantizando la trazabilidad, la coherencia y la posibilidad de revertir a versiones anteriores si es necesario.",
        topic: "Gestión documental"
    },
    {
        question: "¿Qué base de datos contiene información de activos tecnológicos y sus relaciones?",
        options: ["SQL", "LDAP", "SIEM", "CMDB"],
        correct: 3,
        explanation: "La CMDB (Configuration Management Database) almacena los configuration items (CIs) del entorno TI: servidores, software, redes y sus relaciones de dependencia, siendo fundamental para la gestión de cambios y riesgos.",
        topic: "Gestión de activos"
    },
    {
        question: "¿Qué documento lista los controles aplicables y su estado de implementación?",
        options: ["Plan CAPA", "KPI", "Plan estratégico", "SoA"],
        correct: 3,
        explanation: "El SoA (Statement of Applicability) es un documento exigido por ISO 27001 que lista todos los controles del Anexo A, indica cuáles son aplicables a la organización y justifica las exclusiones.",
        topic: "Gestión de seguridad"
    },
    {
        question: "¿Qué análisis identifica las diferencias entre la situación actual y los requisitos normativos?",
        options: ["Monitoreo", "Benchmarking", "Auditoría", "Gap analysis"],
        correct: 3,
        explanation: "El gap analysis (análisis de brechas) compara el estado actual de seguridad con un marco de referencia o normativa objetivo, identificando las diferencias que deben abordarse para alcanzar el cumplimiento.",
        topic: "Gestión de seguridad"
    },
    {
        question: "¿Qué herramienta de mejora continua se basa en las fases Plan-Do-Check-Act?",
        options: ["ROI", "CAPA", "CMDB", "PDCA"],
        correct: 3,
        explanation: "El ciclo PDCA (Plan-Do-Check-Act) de Deming es el motor de mejora continua de los sistemas de gestión como ISO 27001: planificar controles, implementarlos, verificar su eficacia y actuar para mejorarlos.",
        topic: "Mejora continua"
    },
    {
        question: "¿Qué tipo de indicador mide el rendimiento de los controles de seguridad?",
        options: ["SLA", "ROI", "KRI", "KPI"],
        correct: 3,
        explanation: "Los KPI (Key Performance Indicators) miden la eficacia y el rendimiento de los controles de seguridad implementados (tiempo medio de detección, % de parches aplicados, etc.), a diferencia de los KRI que miden niveles de riesgo.",
        topic: "Métricas de seguridad"
    },
    {
        question: "¿Qué proceso aborda no conformidades detectadas mediante soluciones técnicas o procedimentales?",
        options: ["Acción preventiva", "Auditoría", "Gap analysis", "Acción correctiva"],
        correct: 3,
        explanation: "La acción correctiva es la respuesta formal ante una no conformidad ya detectada: analiza la causa raíz e implementa cambios técnicos o procedimentales para eliminarla y evitar su recurrencia.",
        topic: "Mejora continua"
    },
    {
        question: "¿Qué tipo de acción busca evitar la aparición futura de incidentes?",
        options: ["Reactiva", "Correctiva", "Documental", "Preventiva"],
        correct: 3,
        explanation: "La acción preventiva actúa antes de que ocurra un problema: identifica riesgos potenciales y aplica controles para evitar que se materialicen, a diferencia de la correctiva que reacciona a problemas ya ocurridos.",
        topic: "Mejora continua"
    },
    {
        question: "¿Qué categoría de acción debe priorizarse ante riesgos críticos?",
        options: ["Baja", "Media", "Negligible", "Crítica"],
        correct: 3,
        explanation: "Los riesgos clasificados como críticos requieren acciones de prioridad crítica: deben tratarse de forma inmediata con los máximos recursos disponibles, sin esperar al siguiente ciclo de revisión.",
        topic: "Gestión de riesgos"
    },
    {
        question: "¿Qué tipo de iniciativa genera beneficios inmediatos y de rápida ejecución?",
        options: ["Planificada", "Preventiva", "Estratégica", "Quick win"],
        correct: 3,
        explanation: "Los quick wins son iniciativas de seguridad de bajo coste y rápida ejecución que generan mejoras visibles a corto plazo, siendo útiles para demostrar valor y ganar apoyo directivo para el programa de seguridad.",
        topic: "Gestión de seguridad"
    },
    {
        question: "¿Qué herramienta permite generar automáticamente informes de seguridad?",
        options: ["VPN", "LDAP", "CMDB", "SIEM"],
        correct: 3,
        explanation: "Los SIEM (Security Information and Event Management) recopilan y correlacionan eventos de seguridad y permiten generar informes automáticos sobre el estado de la seguridad, tendencias y cumplimiento normativo.",
        topic: "Herramientas de gestión"
    },
    {
        question: "¿Qué plataforma integra documentación, flujos de trabajo y auditoría?",
        options: ["DHCP", "SIEM", "VPN", "ITSM"],
        correct: 3,
        explanation: "Las plataformas ITSM (IT Service Management) como ServiceNow o Jira Service Management integran gestión documental, flujos de trabajo de aprobación, registro de cambios y trazabilidad de auditoría en un único entorno.",
        topic: "Herramientas de gestión"
    },
    {
        question: "¿Qué ciclo operativo de mejora continua utiliza indicadores KPI/KRI?",
        options: ["SWOT", "RACI", "ROI", "PDCA"],
        correct: 3,
        explanation: "El ciclo PDCA usa KPIs para medir el rendimiento de los controles (fase Check) y KRIs para monitorizar niveles de riesgo, alimentando la fase Act con datos objetivos para la toma de decisiones de mejora.",
        topic: "Mejora continua"
    },
    {
        question: "¿Qué documento presenta los hallazgos y planes de remediación tras una auditoría?",
        options: ["Estándar", "Política", "CMDB", "Informe de auditoría"],
        correct: 3,
        explanation: "El informe de auditoría recoge las evidencias recogidas, las no conformidades detectadas, su nivel de criticidad y el plan de acción correctiva acordado con la organización para subsanar los hallazgos.",
        topic: "Auditoría"
    },
    {
        question: "¿Qué herramienta facilita la colaboración documental con control de versiones?",
        options: ["Proxy", "SIEM", "VPN", "Wiki corporativa"],
        correct: 3,
        explanation: "Una wiki corporativa (Confluence, SharePoint, etc.) permite edición colaborativa de documentación de seguridad con historial de versiones, control de acceso por roles y trazabilidad de cambios.",
        topic: "Gestión documental"
    },
    {
        question: "¿Qué plan define las acciones de seguridad a corto, medio y largo plazo?",
        options: ["Política de acceso", "CMDB", "Plan de continuidad", "Roadmap de seguridad"],
        correct: 3,
        explanation: "El roadmap de seguridad es el documento estratégico que prioriza y planifica las iniciativas de seguridad en horizontes temporales (trimestral, anual, plurianual), alineando las inversiones con los objetivos del negocio.",
        topic: "Planificación estratégica"
    }
],
};


