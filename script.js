// script.js - Versión Completa Final con PDF corregido y Estudios de Seguridad
// MODIFICADO: Cambio de colores naranjas por rojos para "No Cumple"
// MODIFICADO: Muestra imágenes en el PDF para "Cumple" y "No Cumple"
// MODIFICADO: Datos en mayúsculas y letra más grande en PDF
// CORREGIDO: PDF completo sin cortes y texto justificado
// CORREGIDO: Etiquetas de datos en negrita en el PDF
// NUEVO: Agregada sección "Estudios de Seguridad"

// Datos de los requisitos para cada sección
const requisitosData = {
    'plan-seguridad': [
        { id: 1, text: 'SOLICITUD SIMPLE DE LA ENTIDAD OBLIGADA.' },
        { id: 2, text: 'EL PLAN DE SEGURIDAD, CUMPLE CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
        { id: 3, text: 'ENCARGADO DE SEGURIDAD: EL ENCARGADO DE SEGURIDAD DEBE ESTAR ACREDITADO (AUTORIZACIÓN RESOLUCIÓN) ASÍ COMO TAMBIÉN EL SUPLENTE. (APARTADO IV: CONFECCIÓN DE INSTRUMENTOS DE SEGURIDAD; N° 2 PLAN DE SEGURIDAD ; ENCARGADO DE SEGURIDAD)' },
        { id: 4, text: 'CAJERO AUTOMÁTICO: CUANTO CAJEROS SE MANTIENEN EN EL BANCO Y NÚMEROS ATM.' },
        { id: 5, text: 'EMPRESA DE GUARDIA DE SEGURIDAD DEBE ADJUNTAR RESOLUCIÓN DE AUTORIZACIÓN DE LA EMPRESA DE RR.HH. Y RESOLUCIÓN DE AUTORIZACIÓN DE LA DIRECTIVA, CON LISTADO DE GG.SS. ACTUALIZADO. (SIN IMPLEMENTOS)' },
        { id: 6, text: 'INFORMACIÓN PARA DECISIONES POLICIALES' },
        { id: 7, text: 'FOTOGRAFÍA Y LISTADO DE CREDENCIALES DE VIGILANTES PRIVADOS.' },
        { id: 8, text: 'Copia de la Autorización del Encargado de Seguridad Suplente (conforme a al Manual Operativo en Materias de Seguridad Privada, aprobado mediante Decreto Exento N° 32 del 31.01.2024, del Ministerio del Interior y Seguridad Publica).' },
        { id: 9, text: 'COMODATOS Y PADRONES O CERTIFICADO DE INSCRIPCIÓN DE TODOS LOS ARMAMENTOS Y CANTIDADES copia del reporte o despliegue del armamento de la empresa, otorgado por la Dirección General de Movilización Nacional (D.G.M.N.).' },
        { id: 10, text: 'Copia de los CERTIFICADOS DEL LABORATORIO DE RESISTENCIA BALÍSTICA de los chalecos antibalas, otorgado por el Instituto de Investigaciones y Control del Ejército de Chile (IDIC), respecto de cumplir con la normativa técnica de ensayo balístico NIJ 0101.04., cuyo nivel de amenaza no sea superior a 40 mm.' },
        { id: 11, text: 'Copia del SEGURO DE VIDA POR 30 UF o su equivalente en dólares americanos, esto para el caso que los CHALECOS ANTIBALAS no cumpla con la función, conforme a lo estipulado en el artículo noveno, numeral 1) del Decreto Supremo N° 867, del 13.06.2017 del Ministerio del Interior y Seguridad Pública, en concordancia con el Manual Operativo en materias de Seguridad Privada, aprobado a través del Decreto Exento N° 32 de fecha 31.01.2024, del mismo Ministerio.' },
        { id: 12, text: 'SEGURO DE VIDA DE LOS VIGILANTES PRIVADOS, la que debe considerar el término de "Vida" o "Seguro de Vida.' },
        { id: 13, text: 'OPERADORES CCTV QUE EMPRESA MONITOREA DESDE SANTIAGO ACREDITACIÓN DE LA EMPRESA Y OPERADORES.' },
        { id: 14, text: 'PLAN DE EMERGENCIA Y CROQUIS UBICACIÓN, ELEMENTOS DE EMERGENCIA Y VÍAS DE EVACUACIÓN.' },
        { id: 15, text: 'Adjunta los Anexos "A,B,C,D,E y F", conforme a lo establecido en el formato del Plan de Seguridad.' }
    ],
    'estudios-seguridad': [
        { id: 1, text: 'SOLICITUD SIMPLE DE LA ENTIDAD OBLIGADA.' },
        { id: 2, text: 'EL ESTUDIO DE SEGURIDAD, CUMPLE CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
        { id: 3, text: 'ENCARGADO DE SEGURIDAD: EL ENCARGADO DE SEGURIDAD DEBE ESTAR ACREDITADO (AUTORIZACIÓN RESOLUCIÓN) ASÍ COMO TAMBIÉN EL SUPLENTE. (APARTADO IV: CONFECCIÓN DE INSTRUMENTOS DE SEGURIDAD; N° 2 PLAN DE SEGURIDAD ; ENCARGADO DE SEGURIDAD)' },
        { id: 4, text: 'CAJERO AUTOMÁTICO: CUANTO CAJEROS SE MANTIENEN EN EL BANCO Y NÚMEROS ATM.' },
        { id: 5, text: 'EMPRESA DE GUARDIA DE SEGURIDAD DEBE ADJUNTAR RESOLUCIÓN DE AUTORIZACIÓN DE LA EMPRESA DE RR.HH. Y RESOLUCIÓN DE AUTORIZACIÓN DE LA DIRECTIVA, CON LISTADO DE GG.SS. ACTUALIZADO. (SIN IMPLEMENTOS)' },
        { id: 6, text: 'INFORMACIÓN PARA DECISIONES POLICIALES' },
        { id: 7, text: 'FOTOGRAFÍA Y LISTADO DE CREDENCIALES DE VIGILANTES PRIVADOS.' },
        { id: 8, text: 'Copia de la Autorización del Encargado de Seguridad Suplente (conforme a al Manual Operativo en Materias de Seguridad Privada, del Ministerio del Interior y Seguridad Publica).' },
        { id: 9, text: 'COMODATOS Y PADRONES O CERTIFICADO DE INSCRIPCIÓN DE TODOS LOS ARMAMENTOS Y CANTIDADES copia del reporte o despliegue del armamento de la empresa, otorgado por la Dirección General de Movilización Nacional (D.G.M.N.).' },
        { id: 10, text: 'Copia de los CERTIFICADOS DEL LABORATORIO DE RESISTENCIA BALÍSTICA de los chalecos antibalas, otorgado por el Instituto de Investigaciones y Control del Ejército de Chile (IDIC), respecto de cumplir con la normativa técnica de ensayo balístico NIJ 0101.04., cuyo nivel de amenaza no sea superior a 40 mm.' },
        { id: 11, text: 'Copia del SEGURO DE VIDA POR 30 UF o su equivalente en dólares americanos, esto para el caso que los CHALECOS ANTIBALAS no cumpla con la función, conforme a lo estipulado en el artículo noveno, numeral 1) del Decreto Supremo N° 867, del 13.06.2017 del Ministerio del Interior y Seguridad Pública, en concordancia con el Manual Operativo en materias de Seguridad Privada.' },
        { id: 12, text: 'SEGURO DE VIDA DE LOS VIGILANTES PRIVADOS, la que debe considerar el término de "Vida" o "Seguro de Vida.' },
        { id: 13, text: 'OPERADORES CCTV QUE EMPRESA MONITOREA DESDE SANTIAGO ACREDITACIÓN DE LA EMPRESA Y OPERADORES.' },
        { id: 14, text: 'PLAN DE EMERGENCIA Y CROQUIS UBICACIÓN, ELEMENTOS DE EMERGENCIA Y VÍAS DE EVACUACIÓN.' },
        { id: 15, text: 'PRESENTA TODOS LOS PLANES DE CADA SUCURSAL (Cada sucursal debe tener su plan de seguridad individual que forme parte del estudio general de la casa matriz).' }
    ],
    'servicentros': [
        { id: 1, text: 'SOLICITUD SIMPLE (De la empresa)' },
        { id: 2, text: 'MEDIDAS DE SEGURIDAD CUMPLEN CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN. (página 108 Y 109 establecimiento de venta y combustible al público)' },
        { id: 3, text: 'CAJERO AUTOMÁTICO: CUAL ES EL NÚMERO ATM Y A QUE BANCO PERTENECE EL CAJERO AUTOMÁTICO. (FOTOGRAFÍAS- INCLUIR UBICACIÓN EN CROQUIS.)' },
        { id: 4, text: 'QUE EMPRESA DE TRANSPORTE DE TRANSPORTE DE VALORES ES LA ENCARGADA DE REALIZAR LA CARGA Y DESCARGA DEL CAJERO. (aislarse transitoriamente por parte de las entidades emisoras o receptoras o cualquier establecimiento que las contenga)' },
        { id: 5, text: 'MANTIENE ESTANCO PARA LA CARGA Y DESCARGA DEL CAJERO; SI NO TIENE ESTANCO DEBE APOYAR LA OPERACIÓN CON UNA CÁMARA DE SEGURIDAD.(Art. 8º inciso 1 del Decreto Nº 1.814 del 12.11.2014) (Agregar fotografías y croquis)' },
        { id: 6, text: 'OPERADOR CCTV: SI MANTIENE PROPIOS O DE LA CENTRAL SANTIAGO, DEBE GESTIONAR LAS AUTORIZACIONES DE LOS OPERADORES QUE REALIZAN ESTA LABOR. ADJUNTAR AUTORIZACIÓN DE LA EMPRESA Y DEL PERSONAL QUE REALIZA ESTE SERVICIO. (Decreto Supremo N° 867, de 2017- El Decreto Exento N° 32 del 31.01.2024)' },
        { id: 7, text: 'MÁXIMO DE DINERO QUE MANTIENE LOS ATENDEDORES O BOMBEROS.' },
        { id: 8, text: 'EMPRESA DE GUARDIA DE SEGURIDAD DEBE ADJUNTAR RESOLUCIÓN DE AUTORIZACIÓN DE LA EMPRESA DE RR.HH. Y RESOLUCIÓN DE AUTORIZACIÓN DE LA DIRECTIVA, CON LISTADO DE GG.SS. ACTUALIZADO.' },
        { id: 9, text: 'CROQUIS DE CÁMARAS DE SEGURIDAD Y TECNOLOGÍA APLICADA (SENSORES DE HUMO, SENSORES DE MOVIMIENTO, ALARMAS, ETC.)' },
        { id: 10, text: 'ANÁLISIS DE VULNERABILIDADES Y MITIGACIÓN DE ELLAS.' },
        { id: 11, text: 'PLAN DE EMERGENCIA Y SUS ANEXOS.' },
        { id: 12, text: 'CROQUIS UBICACIÓN, ELEMENTOS DE EMERGENCIA Y VÍAS DE EVACUACIÓN.' },
        { id: 13, text: 'TODAS LAS FOTOGRAFÍAS DEBEN VENIR CON UNA DESCRIPCIÓN DE ELLAS.' }
    ],
    'sobre-500uf': [
        { id: 1, text: 'SOLICITUD SIMPLE (De la empresa)' },
        { id: 2, text: 'MEDIDAS DE SEGURIDAD CUMPLEN CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
        { id: 3, text: 'CAJERO AUTOMÁTICO: CUAL ES EL NÚMERO ATM Y A QUE BANCO PERTENECE EL CAJERO AUTOMÁTICO. (FOTOGRAFÍAS- INCLUIR UBICACIÓN EN CROQUIS.)' },
        { id: 4, text: 'QUE EMPRESA DE TRANSPORTE DE TRANSPORTE DE VALORES ES LA ENCARGADA DE REALIZAR LA CARGA Y DESCARGA DEL CAJERO. (aislarse transitoriamente por parte de las entidades emisoras o receptoras o cualquier establecimiento que las contenga)' },
        { id: 5, text: 'MANTIENE ESTANCO PARA LA CARGA Y DESCARGA DEL CAJERO; SI NO TIENE ESTANCO DEBE APOYAR LA OPERACIÓN CON UNA CÁMARA DE SEGURIDAD.(Art. 8º inciso 1 del Decreto Nº 1.814 del 12.11.2014) (Agregar fotografías y croquis)' },
        { id: 6, text: 'OPERADOR CCTV: SI MANTIENE PROPIOS O DE LA CENTRAL SANTIAGO, DEBE GESTIONAR LAS AUTORIZACIONES DE LOS OPERADORES QUE REALIZAN ESTA LABOR. ADJUNTAR AUTORIZACIÓN DE LA EMPRESA Y DEL PERSONAL QUE REALIZA ESTE SERVICIO. (Decreto Supremo N° 867, de 2017' },
        { id: 7, text: 'EMPRESA DE GUARDIA DE SEGURIDAD DEBE ADJUNTAR RESOLUCIÓN DE AUTORIZACIÓN DE LA EMPRESA DE RR.HH. Y RESOLUCIÓN DE AUTORIZACIÓN DE LA DIRECTIVA, CON LISTADO DE GG.SS. ACTUALIZADO. (SIN IMPLEMENTOS )' },
        { id: 8, text: 'CROQUIS DE CÁMARAS DE SEGURIDAD Y TECNOLOGÍA APLICADA (SENSORES DE HUMO, SENSORES DE MOVIMIENTO, ALARMAS, ETC.)' },
        { id: 9, text: 'ANÁLISIS DE VULNERABILIDADES Y MITIGACIÓN DE ELLAS.' },
        { id: 10, text: 'PLAN DE EMERGENCIA Y SUS ANEXOS.' },
        { id: 11, text: 'CROQUIS UBICACIÓN, ELEMENTOS DE EMERGENCIA Y VÍAS DE EVACUACIÓN.' }
    ],
    'directiva-funcionamiento': {
        'instalacion': [
            { id: 1, text: 'SOLICITUD SIMPLE (De la empresa)' },
            { id: 2, text: 'CUMPLE CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
            { id: 3, text: 'LISTADO DE LOS GG.SS.,(Que realizan servicios en la instalación).' },
            { id: 4, text: 'FOTOCOPIA DE CREDENCIAL O SOLICITUD DE CREDENCIAL (Art. 18 D/S 93), Que realizaran servicios en la instalación. (RESOL. 370 SUSPENDE CREDENCIALES HASTA AGOSTO 2024)' },
            { id: 5, text: 'SEGURO DE VIDA GUARDIA DE SEGURIDAD (Art. 13 numero | D/S 93) El rubro contratado debe decir Vida no fallecimiento ni muerte.' },
            { id: 6, text: 'SEGURO DE RESPONSABILIDAD CIVIL EMPRESA RR.HH. (Art. Undécimo numero 3 D/S 867)' },
            { id: 7, text: 'CONTRATO DE PRESTACIÓN DE SERVICIOS (Entre empresa de rr.hh. Y empleador Art. Séptimo D/S 867) No adjuntar orden de compra, correos de aceptación de servicios etc.' },
            { id: 8, text: 'UNIFORME (conforme el art octavo D/S N° 867)' },
            { id: 9, text: 'AUTORIZACIÓN EMPRESA RR.HH. VIGENTE (Art. 5 D/S 93 y Art. decimo del D/S 867).' },
            { id: 10, text: 'SERVICIOS DE 12 HORAS (F-35-B o RES. Acuerdo Marco Dirección del Trabajo).' },
            { id: 11, text: 'INFORME DEBILIDADES Y AMENAZAS DE LA INSTALACIÓN (Inciso segundo Nro. 4, del apartado IV, D/exento 261, del 21.02.2020, del Min. Interior y seg. Pública.)' },
            { id: 12, text: 'CHALECO ANTICORTE, Se debe adjuntar Certificación de la normativa técnica norteamericana NIJ 0115.00, Seguro de vida por 30 UF o su equivalente en dólares americanos ( viii. De los cargos de seguridad privada., 1.5.2 Chaleco anticorte, Decreto 32 Exento del 31.01.2024, modifica D 261.)' },
            { id: 13, text: 'CHALECO ANTIBALA, Se debe adjuntar Resolución de autorización de uso otorgado por la AA.FF. (Art. 9 N° 2 y 3 del D/S 867)' },
            { id: 14, text: 'BASTÓN, ESPOSAS DE SEGURIDAD, Se debe adjuntar resolución de autorización d uso otorgado por AA.FF. (Art 9 N° 3 del D/S 867)' }
        ],
        'evento-deportivo': [
            { id: 1, text: 'SOLICITUD SIMPLE (De la empresa)' },
            { id: 2, text: 'CUMPLE CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
            { id: 3, text: 'ANEXO CON DESCRIPCIÓN DE LA LABOR DEL GG.SS. EN SU FACCIÓN.' },
            { id: 4, text: 'LISTADO DE LOS GG.SS.' },
            { id: 5, text: 'SEGURO DE VIDA GUARDIA DE SEGURIDAD (Art. 13 número 1 D/S 93)' },
            { id: 6, text: 'SEGURO DE RESPONSABILIDAD CIVIL DE LA EMPRESA DE RR.HH. (Art. Undécimo numero 3 D/S. 867)' },
            { id: 7, text: 'CONTRATO DE PRESTACIÓN DE SERVICIOS ENTRE LA EMPRESA DE RR.HH. Y EL EQUIPO DE FUTBOL ORGANIZADOR (Art. Séptimo D/S. 867).' },
            { id: 8, text: 'DESCRIPCIÓN Y FOTOGRAFÍA DEL UNIFORME (conforme el art octavo D/S. N° 867)' },
            { id: 9, text: 'AUTORIZACIÓN VIGENTE DE LA EMPRESA RR.HH. VIGENTE (Art. 5° D/S 93 y Art. decimo del D/S. 867).' },
            { id: 10, text: 'CONTRATO AMBULANCIA POR PARTE DEL EQUIPO ORGANIZADOR.' },
            { id: 11, text: 'AUTORIZACIÓN DE LA AMBULANCIA POR PARTE DE LA SEREMI DE SALUD.' },
            { id: 12, text: 'FOTOCOPIA DE LA CREDENCIAL O DE LA AUTORIZACIÓN VIGENTE DEL JEFE DE SEGURIDAD DEL CLUB ORGANIZADOR (Ley 19.327, inciso primero letra a)' },
            { id: 13, text: 'COPIA DEL CONTRATO DEL JEFE DE SEGURIDAD CON EL CLUB ORGANIZADOR (equipo)' },
            { id: 14, text: 'PROPUESTA DEL PARTIDO PRESENTADA POR EL EQUIPO ORGANIZADOR.' },
            { id: 15, text: 'PLAN DE EVACUACIÓN' }
        ],
        'evento-masivo': [
            { id: 1, text: 'SOLICITUD SIMPLE (De la empresa)' },
            { id: 2, text: 'CUMPLE CON FECHA DE PRESENTACIÓN DEL ESTABLECIMIENTO DE UN SERVICIO. (Decreto 32 Articulo 1ro, Apartado IV)' },
            { id: 3, text: 'CUMPLE CON EL ORDEN ESTABLECIDO DEL MANUAL DE ORGANIZACIÓN.' },
            { id: 4, text: 'LISTADO DE LOS GG.SS.' },
            { id: 5, text: 'SEGURO DE VIDA GUARDIA DE SEGURIDAD (Art. 13 número 1. D/S 93)' },
            { id: 6, text: 'SEGURO DE RESPONSABILIDAD CIVIL DE LA EMPRESA DE RR.HH. (Art. Undécimo numero 3 D/S. 867)' },
            { id: 7, text: 'CONTRATO DE PRESTACIÓN DE SERVICIOS (Art. Séptimo D/S. 867).' },
            { id: 8, text: 'DESCRIPCIÓN Y FOTOGRAFÍA DEL UNIFORME (conforme el art octavo D/S. N° 867)' },
            { id: 9, text: 'CONTRATO AMBULANCIA' },
            { id: 10, text: 'RES. AUTORIZ. AMBULANCIA DE LA SEREMI' },
            { id: 11, text: 'ACTA DESCRIPTIVA MAS DE 3.000 PERSONAS https://www.chileatiende.gob.cl/fichas/3784-solicitar-autorizacion-para-realizar-eventos-masivos' },
            { id: 12, text: 'AUTORIZACIÓN VIGENTE DE LA EMPRESA RR.HH. VIGENTE (Art. 5° D/S 93 y Art. decimo del D/S. 867.' },
            { id: 13, text: 'PLAN DE EVACUACIÓN Y EMERGENCIA firmado, por un prevencionista de riesgos.' },
            { id: 14, text: 'CARTA INFORMATIVA A: Carabineros del sector, bomberos, municipalidad del sector y servicio de salud del sector, la que debe venir con timbre de recepción.' }
        ]
    }
};

let currentSection = 'inicio'; // Variable para controlar la sección actual
let selectedDirectivaType = null; // Para la sección de Directiva de Funcionamiento
let sectionHistory = []; // Historial de navegación
let restaurandoEstado = false; // Evita autoguardado mientras se restaura un estado

// Función para mostrar la sección seleccionada y ocultar las demás
function mostrarSeccion(sectionId) {
    console.log(`Mostrando sección: ${sectionId}`);

    // Cambiar clase del body para el fondo
    document.body.className = sectionId;
    
    // Guardar sección actual en el historial si no es inicio
    if (currentSection !== 'inicio') {
        sectionHistory.push(currentSection);
    }

    const sections = document.querySelectorAll('.form-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    const targetSection = document.getElementById(`${sectionId}-section`);
    if (targetSection) {
        targetSection.classList.add('active');
        currentSection = sectionId;
        
        // Mostrar/ocultar botón volver atrás
        const btnVolver = document.querySelector('.btn-volver');
        if (sectionId === 'inicio') {
            if (btnVolver) btnVolver.style.display = 'none';
            sectionHistory = []; // Limpiar historial
        } else {
            if (btnVolver) btnVolver.style.display = 'block';
        }
        
        // Cargar requisitos para todas las secciones excepto inicio e historial
        if (sectionId !== 'inicio' && sectionId !== 'historial') {
            if (sectionId === 'directiva-funcionamiento') {
                // Si no hay tipo seleccionado, intentar restaurar del borrador guardado
                if (!selectedDirectivaType) {
                    const tipoGuardado = STORAGE.ultimoTipoDirectivaGuardado();
                    if (tipoGuardado) {
                        selectedDirectivaType = tipoGuardado;
                        const opt = document.querySelector(`.directiva-option[data-type="${tipoGuardado}"]`);
                        if (opt) {
                            document.querySelectorAll('.directiva-option').forEach(o => o.classList.remove('active'));
                            opt.classList.add('active');
                        }
                    }
                }
                if (selectedDirectivaType) {
                    console.log(`Cargando directiva funcionamiento tipo: ${selectedDirectivaType}`);
                    cargarRequisitos(sectionId, selectedDirectivaType);
                } else {
                    console.log('Esperando selección de tipo de directiva');
                }
            } else {
                // Para todas las demás secciones, cargar inmediatamente
                console.log(`Cargando requisitos para: ${sectionId}`);
                cargarRequisitos(sectionId);
            }
        }

        // Renderizar historial cuando entramos a esa sección
        if (sectionId === 'historial') {
            renderizarHistorial();
            renderizarBorradores();
        }
    } else {
        console.error(`No se encontró la sección: ${sectionId}-section`);
    }
}

// Función para volver atrás usando el historial
function volverAtras() {
    if (sectionHistory.length > 0) {
        const previousSection = sectionHistory.pop();
        mostrarSeccion(previousSection);
    } else {
        mostrarSeccion('inicio');
    }
    // Actualizar clase del body
    document.body.className = currentSection;
}

// Función para cargar los requisitos dinámicamente
function cargarRequisitos(sectionId, directivaType = null) {
    console.log(`Intentando cargar requisitos para: ${sectionId}`);
    
    // CORREGIDO: Manejar el ID especial para sobre-500uf
    let containerId;
    if (sectionId === 'sobre-500uf') {
        containerId = 'requisitos-sobre-500uf';
    } else {
        containerId = `requisitos-${sectionId}`;
    }
    
    const requisitosContainer = document.getElementById(containerId);
    
    // Agregar clase de sección al contenedor para los colores de números
    if (requisitosContainer && !requisitosContainer.classList.contains(sectionId)) {
    requisitosContainer.className = `requisitos-container ${sectionId}`;
    }
    if (!requisitosContainer) {
        console.error(`Contenedor de requisitos no encontrado para: ${containerId}`);
        console.log('Contenedores disponibles:', 
            Array.from(document.querySelectorAll('[id*="requisitos"]')).map(el => el.id));
        return;
    }

    requisitosContainer.innerHTML = ''; // Limpiar requisitos anteriores

    let requisitos;
    if (sectionId === 'directiva-funcionamiento' && directivaType) {
        requisitos = requisitosData[sectionId][directivaType];
        console.log(`Cargando directiva tipo: ${directivaType}`);
    } else {
        requisitos = requisitosData[sectionId];
        console.log(`Cargando requisitos para sección: ${sectionId}`);
    }

    if (!requisitos) {
        console.error(`Datos de requisitos no encontrados para: ${sectionId}`);
        console.log('Secciones disponibles:', Object.keys(requisitosData));
        return;
    }

    console.log(`Cargando ${requisitos.length} requisitos`);

    requisitos.forEach((req, index) => {
        const requisitoItem = document.createElement('div');
        requisitoItem.classList.add('requisito-item');
        requisitoItem.setAttribute('data-numero', req.id);

        requisitoItem.innerHTML = `
            <div class="requisito-numero">${req.id}</div>
            <div class="requisito-titulo">${req.text}</div>
            <div class="estado-buttons">
                <button class="btn-estado btn-cumple" data-estado="CUMPLE" onclick="marcarEstado(this, 'cumple')">CUMPLE</button>
                <button class="btn-estado btn-no-cumple" data-estado="no-cumple" onclick="marcarEstado(this, 'no-cumple')">NO CUMPLE</button>
            </div>
            <textarea class="observacion-input" placeholder="Observaciones (opcional)"></textarea>
        `;
        requisitosContainer.appendChild(requisitoItem);
    });

    console.log(`Requisitos cargados exitosamente para: ${sectionId}`);

    // Restaurar borrador guardado (si existe) para esta sección/tipo
    const borrador = STORAGE.cargarBorrador(sectionId, directivaType);
    if (borrador) {
        restaurandoEstado = true;
        STORAGE.aplicarEstado(sectionId, borrador);
        restaurandoEstado = false;
    }
}

// Función para marcar el estado de un requisito
function marcarEstado(button, estado) {
    const requisitoItem = button.closest('.requisito-item');
    const cumpleButton = requisitoItem.querySelector('.btn-cumple');
    const noCumpleButton = requisitoItem.querySelector('.btn-no-cumple');

    // Remover clases 'active' y de estado
    cumpleButton.classList.remove('active');
    noCumpleButton.classList.remove('active');
    requisitoItem.classList.remove('cumple', 'no-cumple');

    // Añadir clase 'active' al botón clickeado
    button.classList.add('active');

    // Añadir clase de estado al requisito-item
    requisitoItem.classList.add(estado);

    if (!restaurandoEstado) autoguardar();
}

// Función para seleccionar el tipo de directiva
function seleccionarDirectiva(type) {
    selectedDirectivaType = type;
    const options = document.querySelectorAll('.directiva-option');
    options.forEach(option => {
        option.classList.remove('active');
        if (option.dataset.type === type) {
            option.classList.add('active');
        }
    });
    cargarRequisitos('directiva-funcionamiento', type);
}

// Función para generar el reporte PDF - VERSIÓN COMPLETA CORREGIDA
async function generarReporte(sectionId) {
    // Verificar si jsPDF está disponible
    if (typeof window.jspdf === 'undefined') {
        alert('Generador PDF no disponible. Use el botón "Imprimir" en su lugar.');
        return;
    }

    const { jsPDF } = window.jspdf;
    // CORREGIDO: Usar tamaño A4 estándar para mejor compatibilidad
    const doc = new jsPDF('p', 'mm', 'a4');
    
    // Dimensiones de página A4
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();

    // ** Función para cargar imágenes y convertirlas a Base64 **
    const getImageBase64 = (url) => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                const ctx = canvas.getContext('2d');
                ctx.drawImage(img, 0, 0);
                console.log(`Imagen cargada con éxito: ${url}`);
                resolve(canvas.toDataURL('image/png'));
            };
            img.onerror = (error) => {
                console.error(`Error al cargar la imagen ${url}:`, error);
                resolve(null); // Resolver con null en lugar de rechazar
            };
            img.src = url;
        });
    };

    let cumpleImageBase64 = '';
    let noCumpleImageBase64 = '';
    let logoImageBase64 = '';

    try {
        cumpleImageBase64 = await getImageBase64('cumple.png');
        noCumpleImageBase64 = await getImageBase64('nocumple.png');
        logoImageBase64 = await getImageBase64('foto/logo.png');
    } catch (error) {
        console.error('Error al cargar imágenes:', error);
    }

    // Recopilar datos del formulario con IDs correctos
    const getInputValue = (id) => {
        const element = document.getElementById(id);
        return element ? element.value.trim() : '';
    };

    // Mapear correctamente los IDs según la sección
    let nombreEmpresaId, rutEmpresaId, nombreEstablecimientoId, direccionId, quienpresentaId, funcionarioGradoId;
    
   if (sectionId === 'plan-seguridad') {
    nombreEmpresaId = 'nombre-empresa-plan';
    rutEmpresaId = 'rut-empresa-plan';
    nombreEstablecimientoId = 'nombre-establecimiento-plan';
    direccionId = 'direccion-plan';
    quienpresentaId = 'quien-presenta-plan';  // ← AGREGAR
    funcionarioGradoId = 'funcionario-grado-plan';
} else if (sectionId === 'estudios-seguridad') {
    nombreEmpresaId = 'nombre-empresa-estudios';
    rutEmpresaId = 'rut-empresa-estudios';
    nombreEstablecimientoId = 'nombre-establecimiento-estudios';
    direccionId = 'direccion-estudios';
    quienpresentaId = 'quien-presenta-estudios';  // ← AGREGAR
    funcionarioGradoId = 'funcionario-grado-estudios';
} else if (sectionId === 'servicentros') {
    nombreEmpresaId = 'nombre-empresa-servicentros';
    rutEmpresaId = 'rut-empresa-servicentros';
    nombreEstablecimientoId = 'nombre-establecimiento-servicentros';
    direccionId = 'direccion-servicentros';
    quienpresentaId = 'quien-presenta-servicentros';  // ← AGREGAR
    funcionarioGradoId = 'funcionario-grado-servicentros';
} else if (sectionId === 'sobre-500uf') {
    nombreEmpresaId = 'nombre-empresa-500uf';
    rutEmpresaId = 'rut-empresa-500uf';
    nombreEstablecimientoId = 'nombre-establecimiento-500uf';
    direccionId = 'direccion-500uf';
    quienpresentaId = 'quien-presenta-500uf';  // ← AGREGAR
    funcionarioGradoId = 'funcionario-grado-500uf';
} else if (sectionId === 'directiva-funcionamiento') {
    nombreEmpresaId = 'nombre-empresa-directiva';
    rutEmpresaId = 'rut-empresa-directiva';
    nombreEstablecimientoId = 'nombre-establecimiento-directiva';
    direccionId = 'direccion-directiva';
    quienpresentaId = 'quien-presenta-directiva';  // ← AGREGAR
    funcionarioGradoId = 'funcionario-grado-directiva';
}

    const generalInfo = {
        nombreEmpresa: getInputValue(nombreEmpresaId),
        rutEmpresa: getInputValue(rutEmpresaId),
        nombreEstablecimiento: getInputValue(nombreEstablecimientoId),
        direccion: getInputValue(direccionId),
        quienpresenta: getInputValue(quienpresentaId),
        funcionarioGrado: getInputValue(funcionarioGradoId)
    };

    // Validar que al menos el nombre de la empresa esté lleno
    if (!generalInfo.nombreEmpresa) {
        alert('Por favor, complete al menos el nombre de la empresa antes de generar el reporte.');
        return;
    }

    let sectionTitle = '';
    let sectionSubtitle = '';
    let tipoDirectiva = '';
    
    if (sectionId === 'plan-seguridad') {
        sectionTitle = 'PLAN DE SEGURIDAD';
        sectionSubtitle = 'Vigencia según estudio';
    } else if (sectionId === 'estudios-seguridad') {
        sectionTitle = 'ESTUDIOS DE SEGURIDAD';
        sectionSubtitle = 'Casa Matriz y Sucursales - Vigencia según estudio';
    } else if (sectionId === 'servicentros') {
        sectionTitle = 'MEDIDAS DE SEG. SERVICENTROS';
        sectionSubtitle = 'Vigencia 3 años - Ley 19.303';
    } else if (sectionId === 'sobre-500uf') {
        sectionTitle = 'MEDIDAS SOBRE 500 UF';
        sectionSubtitle = 'Vigencia 3 años - Supermercados, joyerías, bancos y establecimientos que manejan valores superiores a 500 UF';
    } else if (sectionId === 'directiva-funcionamiento') {
        sectionTitle = 'DIRECTIVA DE FUNCIONAMIENTO';
        
        if (selectedDirectivaType === 'instalacion') {
            tipoDirectiva = 'INSTALACIÓN';
        } else if (selectedDirectivaType === 'evento-deportivo') {
            tipoDirectiva = 'EVENTO DEPORTIVO';
        } else if (selectedDirectivaType === 'evento-masivo') {
            tipoDirectiva = 'EVENTO MASIVO';
        }
        
        sectionSubtitle = 'Requisitos para directivas de instalaciones, eventos deportivos y otros eventos masivos';
    }

    // Función para agregar el logo al PDF
    const agregarLogoPDF = (logoBase64) => {
        if (logoBase64) {
            try {
                const logoWidth = 20;
                const logoHeight = 20;
                doc.addImage(logoBase64, 'PNG', 15, 8, logoWidth, logoHeight);
                doc.addImage(logoBase64, 'PNG', pageWidth - 35, 8, logoWidth, logoHeight);
                console.log('Logos agregados al PDF exitosamente');
            } catch (error) {
                console.log('Error al agregar logo:', error);
            }
        }
    };

    agregarLogoPDF(logoImageBase64);

    // Añadir encabezado al PDF
    doc.setFontSize(18);
    doc.setTextColor(45, 80, 22);
    doc.text(sectionTitle, pageWidth/2, 25, { align: 'center' });
    
    let yOffsetHeader = 32;
    
    if (sectionId === 'directiva-funcionamiento' && tipoDirectiva) {
        doc.setFontSize(14);
        doc.setTextColor(0, 0, 0);
        doc.text(tipoDirectiva, pageWidth/2, yOffsetHeader, { align: 'center' });
        yOffsetHeader += 7;
    }
    
    doc.setFontSize(11);
    doc.setTextColor(74, 124, 34);
    doc.text('OS10 Coquimbo - Carabineros de Chile', pageWidth/2, yOffsetHeader, { align: 'center' });
    
    doc.setFontSize(9);
    doc.setTextColor(100, 100, 100);
    doc.text(sectionSubtitle, pageWidth/2, yOffsetHeader + 6, { align: 'center' });

    // Agregar línea separadora decorativa
    const lineY = yOffsetHeader + 12;
    doc.setDrawColor(45, 80, 22);
    doc.setLineWidth(0.5);
    doc.line(20, lineY, pageWidth - 20, lineY);

    let yOffset = lineY + 10;

    // Función auxiliar para convertir a mayúsculas de forma segura
    const toSafeUpperCase = (text) => {
        return text ? text.toUpperCase() : '';
    };

    // Función para añadir texto con etiqueta en negrita y valor normal
    const addBoldedLabelText = (label, value, x, y) => {
        doc.setFont(undefined, 'bold');
        doc.text(label, x, y);
        const labelWidth = doc.getTextWidth(label);
        doc.setFont(undefined, 'normal');
        doc.text(toSafeUpperCase(value), x + labelWidth, y);
    };

    // Añadir información general
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    doc.setFont(undefined, 'bold');
    doc.text('DATOS DE LA EMPRESA O ENTIDAD Y DATOS DEL ESTABLECIMIENTO:', 20, yOffset);
    yOffset += 6;
    
    doc.setFontSize(9);
    addBoldedLabelText('NOMBRE DE LA EMPRESA:  ', generalInfo.nombreEmpresa, 20, yOffset);
    yOffset += 5;
    addBoldedLabelText('RUT DE LA EMPRESA:  ', generalInfo.rutEmpresa, 20, yOffset);
    yOffset += 5;
    addBoldedLabelText('NOMBRE DEL ESTABLECIMIENTO:  ', generalInfo.nombreEstablecimiento, 20, yOffset);
    yOffset += 5;
    addBoldedLabelText('DIRECCIÓN DEL ESTABLECIMIENTO:  ', generalInfo.direccion, 20, yOffset);
    yOffset += 5;
    addBoldedLabelText('QUIEN PRESENTA LA DOCUMENTACIÓN:  ', generalInfo.quienpresenta, 20, yOffset);
    yOffset += 8;

    doc.setFont(undefined, 'bold');
    doc.setFontSize(10);
    doc.text('DATOS DEL FUNCIONARIO:', 20, yOffset);
    yOffset += 6;
    
    doc.setFontSize(9);
    addBoldedLabelText('GRADO Y NOMBRE: ', generalInfo.funcionarioGrado, 20, yOffset);
    yOffset += 5;
    
    // Agregar fecha y hora del reporte
    const fechaActual = new Date();
    const fechaFormateada = fechaActual.toLocaleDateString('es-CL');
    const horaFormateada = fechaActual.toLocaleTimeString('es-CL');
    doc.setFontSize(7);
    doc.setTextColor(100, 100, 100);
    doc.text(`Fecha del reporte: ${fechaFormateada} - ${horaFormateada}`, 20, yOffset);
    yOffset += 10;

    // Preparar datos para la tabla
    const headers = [['N°', 'Requisito', 'Estado', 'Observaciones']];
    const data = [];

    let requisitosSelector;
    if (sectionId === 'sobre-500uf') {
        requisitosSelector = '#requisitos-sobre-500uf .requisito-item';
    } else {
        requisitosSelector = `#requisitos-${sectionId} .requisito-item`;
    }

    const requisitosItems = document.querySelectorAll(requisitosSelector);
    requisitosItems.forEach(item => {
        const numero = item.querySelector('.requisito-numero').textContent;
        const titulo = item.querySelector('.requisito-titulo').textContent;
        const estado = item.classList.contains('cumple') ? 'CUMPLE' : (item.classList.contains('no-cumple') ? 'NO CUMPLE' : 'PENDIENTE');
        const observacion = item.querySelector('.observacion-input').value || '';
        
        data.push([numero, titulo, estado, observacion]);
    });

    // CORREGIDO: Configuración mejorada de autoTable
    doc.autoTable({
        startY: yOffset,
        margin: { left: 20, right: 20, top: 20, bottom: 20 },
        head: headers,
        body: data,
        theme: 'grid',
        pageBreak: 'auto', // IMPORTANTE: Permitir salto de página automático
        showHead: 'everyPage', // Mostrar encabezado en cada página
        headStyles: {
            fillColor: [45, 80, 22],
            textColor: [255, 255, 255],
            fontStyle: 'bold',
            halign: 'center',
            fontSize: 9
        },
        styles: {
            fontSize: 8,
            cellPadding: 2,
            valign: 'middle',
            textColor: [0, 0, 0],
            fontStyle: 'normal',
            lineColor: [200, 200, 200],
            lineWidth: 0.1,
            overflow: 'linebreak' // IMPORTANTE: Permitir salto de línea
        },
        columnStyles: {
            0: { cellWidth: 15, halign: 'center' }, // N°
            1: { cellWidth: 85, halign: 'justify' }, // Requisito - JUSTIFICADO
            2: { cellWidth: 25, halign: 'center' }, // Estado
            3: { cellWidth: 45, halign: 'justify' } // Observaciones - JUSTIFICADO
        },
        // CORREGIDO: Hooks mejorados
        didParseCell: function (data) {
            if (data.section === 'body' && data.column.index === 2) {
                const estadoOriginal = data.row.raw[2];
                if (estadoOriginal === 'CUMPLE') {
                    data.cell.styles.fillColor = [194, 255, 202];
                    data.cell.styles.textColor = [0, 140, 44];
                } else if (estadoOriginal === 'NO CUMPLE') {
                    data.cell.styles.fillColor = [247, 202, 209];
                    data.cell.styles.textColor = [247, 49, 9];
                }
                data.cell.text = '';
            }
            if (data.section === 'body' && data.column.index !== 2) {
                data.cell.styles.textColor = [0, 0, 0];
                data.cell.styles.fontStyle = 'normal';
            }
        },
        didDrawCell: function (data) {
            if (data.section === 'body' && data.column.index === 2) {
                const estadoOriginal = data.row.raw[2];
                let imgWidth, imgHeight, imageToDraw = null;

                if (estadoOriginal === 'CUMPLE' && cumpleImageBase64) {
                    imgWidth = 4;
                    imgHeight = 4;
                    imageToDraw = cumpleImageBase64;
                } else if (estadoOriginal === 'NO CUMPLE' && noCumpleImageBase64) {
                    imgWidth = 5;
                    imgHeight = 5;
                    imageToDraw = noCumpleImageBase64;
                }

                if (imageToDraw) {
                    const x = data.cell.x + (data.cell.width / 2) - (imgWidth / 2);
                    const y = data.cell.y + (data.cell.height / 2) - (imgHeight / 2);
                    try {
                        doc.addImage(imageToDraw, 'PNG', x, y, imgWidth, imgHeight);
                    } catch (error) {
                        console.log('Error al agregar imagen de estado:', error);
                    }
                }
            }
        },
        didDrawPage: function (data) {
            // Footer en cada página
            doc.setFontSize(9);
            doc.setTextColor(100, 100, 100);
            doc.setFont(undefined, 'normal');
            
            const footerText = 'Seguridad Privada - OS10 Coquimbo.';
            doc.text(footerText, pageWidth/2, pageHeight - 15, { align: 'center' });
            
            // Numeración de páginas
            doc.setFontSize(8);
            doc.setTextColor(80, 80, 80);
            const currentPage = data.pageNumber;
            const pageText = `Página ${currentPage}`;
            doc.text(pageText, pageWidth - 30, pageHeight - 15, { align: 'right' });
        }
    });

    // CORREGIDO: Asegurar numeración correcta después de la generación
    const totalPages = doc.internal.getNumberOfPages();
    
    // Actualizar numeración en todas las páginas
    for (let i = 1; i <= totalPages; i++) {
        doc.setPage(i);
        
        // Limpiar área del footer
        doc.setFillColor(255, 255, 255);
        doc.rect(0, pageHeight - 20, pageWidth, 20, 'F');
        
        // Footer centrado
        doc.setFontSize(9);
        doc.setTextColor(100, 100, 100);
        doc.setFont(undefined, 'normal');
        const footerText = 'Seguridad Privada - OS10 Coquimbo.';
        doc.text(footerText, pageWidth/2, pageHeight - 15, { align: 'center' });
        
        // Numeración actualizada
        doc.setFontSize(8);
        doc.setTextColor(80, 80, 80);
        const pageText = `Página ${i} de ${totalPages}`;
        doc.text(pageText, pageWidth - 30, pageHeight - 15, { align: 'right' });
    }

    // CORREGIDO: Asegurar que el documento esté completo antes de guardar
    try {
        const fecha = new Date().toISOString().split('T')[0];
        const fileName = `${sectionTitle.replace(/\s+/g, '_')}_${fecha}.pdf`;

        // Embebir los datos del formulario en los metadatos del PDF.
        // Al reimportar este PDF, extraemos "subject" y restauramos todo.
        let payload;
        try {
            const snapshotEmbed = STORAGE.capturarEstado(sectionId);
            const payloadObj = {
                os10Version: 1,
                sectionId,
                titulo: sectionTitle,
                tipoDirectiva: tipoDirectiva || null,
                fecha: new Date().toISOString(),
                snapshot: snapshotEmbed
            };
            payload = 'OS10:' + btoa(unescape(encodeURIComponent(JSON.stringify(payloadObj))));
            doc.setProperties({
                title: `${sectionTitle} - ${generalInfo.nombreEmpresa || ''}`,
                subject: payload,
                author: 'OS10 Coquimbo - Carabineros de Chile',
                keywords: 'OS10-COQUIMBO;SEGURIDAD-PRIVADA;VERSION-1',
                creator: 'Sistema OS10 Coquimbo'
            });
        } catch (e) {
            console.warn('No se pudieron embebir los datos en el PDF:', e);
        }
        
        // Usar output para obtener el blob y luego guardarlo
        const pdfBlob = doc.output('blob');
        const url = URL.createObjectURL(pdfBlob);
        const a = document.createElement('a');
        a.href = url;
        a.download = fileName;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        console.log(`PDF generado exitosamente: ${fileName}`);
        console.log(`Total de páginas: ${totalPages}`);

        // Guardar snapshot del reporte en el historial local
        try {
            const snapshot = STORAGE.capturarEstado(sectionId);
            const cumpleCount = snapshot.requisitos.filter(r => r.estado === 'cumple').length;
            const noCumpleCount = snapshot.requisitos.filter(r => r.estado === 'no-cumple').length;
            const pendienteCount = snapshot.requisitos.filter(r => !r.estado).length;
            STORAGE.guardarEnHistorial({
                id: STORAGE.generarId(),
                fecha: new Date().toISOString(),
                sectionId,
                titulo: sectionTitle,
                tipoDirectiva: tipoDirectiva || null,
                empresa: snapshot.campos.nombreEmpresa,
                establecimiento: snapshot.campos.nombreEstablecimiento,
                cumpleCount,
                noCumpleCount,
                pendienteCount,
                snapshot
            });
        } catch (e) {
            console.error('No se pudo guardar en el historial:', e);
        }

    } catch (error) {
        console.error('Error al guardar el PDF:', error);
        alert('Error al generar el PDF. Por favor, intente de nuevo.');
    }
}

// Eventos para mejorar la impresión
window.addEventListener('beforeprint', function() {
    document.querySelectorAll('.header-requisitos-desktop').forEach(header => {
        header.style.display = 'grid';
    });
    document.querySelectorAll('.header-requisitos-mobile').forEach(header => {
        header.style.display = 'none';
    });
});

window.addEventListener('afterprint', function() {
    document.querySelectorAll('.header-requisitos-desktop').forEach(header => {
        header.style.display = 'none';
    });
    if (window.innerWidth <= 768) {
        document.querySelectorAll('.header-requisitos-mobile').forEach(header => {
            header.style.display = 'block';
        });
    }
});

// ============================================
// SISTEMA DE ALMACENAMIENTO LOCAL
// Autoguardado de borradores + historial de PDFs + export/import JSON
// ============================================

const STORAGE = {
    historialKey: 'os10-historial',
    ultimoTipoDirectivaKey: 'os10-ultimo-tipo-directiva',

    // Mapeo de sección → sufijo de IDs en el DOM
    _suffix: {
        'plan-seguridad': 'plan',
        'estudios-seguridad': 'estudios',
        'servicentros': 'servicentros',
        'sobre-500uf': '500uf',
        'directiva-funcionamiento': 'directiva'
    },

    borradorKey(sectionId, directivaType) {
        if (sectionId === 'directiva-funcionamiento' && directivaType) {
            return `os10-borrador-${sectionId}-${directivaType}`;
        }
        return `os10-borrador-${sectionId}`;
    },

    getSectionFieldIds(sectionId) {
        const s = this._suffix[sectionId];
        if (!s) return null;
        return {
            nombreEmpresa: `nombre-empresa-${s}`,
            rutEmpresa: `rut-empresa-${s}`,
            nombreEstablecimiento: `nombre-establecimiento-${s}`,
            direccion: `direccion-${s}`,
            quienpresenta: `quien-presenta-${s}`,
            funcionarioGrado: `funcionario-grado-${s}`
        };
    },

    capturarEstado(sectionId) {
        const ids = this.getSectionFieldIds(sectionId);
        if (!ids) return null;
        const v = id => (document.getElementById(id)?.value || '').trim();
        const state = {
            fecha: new Date().toISOString(),
            sectionId,
            directivaType: sectionId === 'directiva-funcionamiento' ? selectedDirectivaType : null,
            campos: {
                nombreEmpresa: v(ids.nombreEmpresa),
                rutEmpresa: v(ids.rutEmpresa),
                nombreEstablecimiento: v(ids.nombreEstablecimiento),
                direccion: v(ids.direccion),
                quienpresenta: v(ids.quienpresenta),
                funcionarioGrado: v(ids.funcionarioGrado)
            },
            requisitos: []
        };

        const containerSel = sectionId === 'sobre-500uf'
            ? '#requisitos-sobre-500uf .requisito-item'
            : `#requisitos-${sectionId} .requisito-item`;
        document.querySelectorAll(containerSel).forEach(item => {
            state.requisitos.push({
                id: item.getAttribute('data-numero'),
                estado: item.classList.contains('cumple') ? 'cumple'
                    : item.classList.contains('no-cumple') ? 'no-cumple' : null,
                observacion: item.querySelector('.observacion-input')?.value || ''
            });
        });
        return state;
    },

    aplicarEstado(sectionId, state) {
        if (!state) return;
        const ids = this.getSectionFieldIds(sectionId);
        if (!ids) return;
        const set = (id, val) => { const el = document.getElementById(id); if (el && val != null) el.value = val; };
        const c = state.campos || {};
        set(ids.nombreEmpresa, c.nombreEmpresa);
        set(ids.rutEmpresa, c.rutEmpresa);
        set(ids.nombreEstablecimiento, c.nombreEstablecimiento);
        set(ids.direccion, c.direccion);
        set(ids.quienpresenta, c.quienpresenta);
        set(ids.funcionarioGrado, c.funcionarioGrado);

        const containerSel = sectionId === 'sobre-500uf'
            ? '#requisitos-sobre-500uf .requisito-item'
            : `#requisitos-${sectionId} .requisito-item`;
        (state.requisitos || []).forEach(rq => {
            const item = document.querySelector(`${containerSel}[data-numero="${rq.id}"]`);
            if (!item) return;
            if (rq.estado === 'cumple') {
                const btn = item.querySelector('.btn-cumple');
                if (btn) marcarEstado(btn, 'cumple');
            } else if (rq.estado === 'no-cumple') {
                const btn = item.querySelector('.btn-no-cumple');
                if (btn) marcarEstado(btn, 'no-cumple');
            }
            const obs = item.querySelector('.observacion-input');
            if (obs && rq.observacion != null) obs.value = rq.observacion;
        });
    },

    guardarBorrador(sectionId) {
        if (!sectionId || sectionId === 'inicio' || sectionId === 'historial') return;
        const directivaType = sectionId === 'directiva-funcionamiento' ? selectedDirectivaType : null;
        if (sectionId === 'directiva-funcionamiento' && !directivaType) return;
        const state = this.capturarEstado(sectionId);
        if (!state) return;
        try {
            localStorage.setItem(this.borradorKey(sectionId, directivaType), JSON.stringify(state));
            if (directivaType) localStorage.setItem(this.ultimoTipoDirectivaKey, directivaType);
            mostrarIndicadorAutoguardado();
        } catch (e) {
            console.error('Error guardando borrador:', e);
        }
    },

    cargarBorrador(sectionId, directivaType) {
        try {
            const raw = localStorage.getItem(this.borradorKey(sectionId, directivaType));
            if (!raw) return null;
            return JSON.parse(raw);
        } catch { return null; }
    },

    borrarBorrador(sectionId, directivaType) {
        localStorage.removeItem(this.borradorKey(sectionId, directivaType));
    },

    listarBorradores() {
        const drafts = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (!key || !key.startsWith('os10-borrador-')) continue;
            try {
                const state = JSON.parse(localStorage.getItem(key));
                drafts.push({ key, state });
            } catch {}
        }
        drafts.sort((a, b) => (b.state.fecha || '').localeCompare(a.state.fecha || ''));
        return drafts;
    },

    ultimoTipoDirectivaGuardado() {
        return localStorage.getItem(this.ultimoTipoDirectivaKey);
    },

    obtenerHistorial() {
        try {
            return JSON.parse(localStorage.getItem(this.historialKey) || '[]');
        } catch { return []; }
    },

    guardarEnHistorial(entry) {
        const historial = this.obtenerHistorial();
        historial.unshift(entry);
        if (historial.length > 200) historial.length = 200;
        try {
            localStorage.setItem(this.historialKey, JSON.stringify(historial));
        } catch (e) {
            alert('No hay espacio suficiente en el navegador para guardar más reportes. Elimine reportes antiguos desde el Historial.');
        }
    },

    eliminarDeHistorial(id) {
        const historial = this.obtenerHistorial().filter(h => h.id !== id);
        localStorage.setItem(this.historialKey, JSON.stringify(historial));
    },

    obtenerDelHistorial(id) {
        return this.obtenerHistorial().find(h => h.id === id) || null;
    },

    vaciarHistorial() {
        localStorage.removeItem(this.historialKey);
    },

    generarId() {
        return 'r-' + Date.now() + '-' + Math.random().toString(36).slice(2, 8);
    }
};

// ---------- Autoguardado ----------
let autoSaveTimer = null;
function autoguardar() {
    if (restaurandoEstado) return;
    if (!currentSection || currentSection === 'inicio' || currentSection === 'historial') return;
    if (autoSaveTimer) clearTimeout(autoSaveTimer);
    autoSaveTimer = setTimeout(() => STORAGE.guardarBorrador(currentSection), 400);
}

function mostrarIndicadorAutoguardado() {
    const el = document.getElementById('autosave-indicator');
    if (!el) return;
    el.textContent = '✔ Guardado ' + new Date().toLocaleTimeString('es-CL');
    el.classList.add('visible');
    clearTimeout(mostrarIndicadorAutoguardado._t);
    mostrarIndicadorAutoguardado._t = setTimeout(() => {
        el.classList.remove('visible');
    }, 1800);
}

// ---------- Utilidades UI ----------
function escapeHTML(str) {
    if (str == null) return '';
    return String(str).replace(/[&<>"']/g, s => (
        { '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[s]
    ));
}

function nombreLegibleSeccion(sectionId, tipoDirectiva) {
    const map = {
        'plan-seguridad': 'Plan de Seguridad',
        'estudios-seguridad': 'Estudios de Seguridad',
        'servicentros': 'Servicentros',
        'sobre-500uf': 'Medidas sobre 500 UF',
        'directiva-funcionamiento': 'Directiva de Funcionamiento'
    };
    const base = map[sectionId] || sectionId;
    if (sectionId === 'directiva-funcionamiento' && tipoDirectiva) {
        const t = { 'instalacion': 'Instalación', 'evento-deportivo': 'Evento Deportivo', 'evento-masivo': 'Evento Masivo' };
        return `${base} — ${t[tipoDirectiva] || tipoDirectiva}`;
    }
    return base;
}

// ---------- Renderizado del historial ----------
function renderizarHistorial() {
    const container = document.getElementById('historial-lista');
    if (!container) return;
    const historial = STORAGE.obtenerHistorial();

    if (historial.length === 0) {
        container.innerHTML = '<div class="historial-vacio">Aún no ha generado ningún PDF. Cada vez que genere un reporte, se guardará aquí automáticamente.</div>';
        return;
    }

    container.innerHTML = historial.map(h => {
        const fecha = new Date(h.fecha).toLocaleString('es-CL');
        const nombreSec = nombreLegibleSeccion(h.sectionId, h.snapshot?.directivaType);
        return `
            <div class="historial-item reporte">
                <div class="historial-info">
                    <h4>${escapeHTML(nombreSec)}</h4>
                    <p><strong>Empresa:</strong> ${escapeHTML(h.empresa || '(sin especificar)')}</p>
                    <p><strong>Establecimiento:</strong> ${escapeHTML(h.establecimiento || '(sin especificar)')}</p>
                    <p><strong>Generado:</strong> ${escapeHTML(fecha)}</p>
                    <p>
                        <span class="historial-metrica cumple">✔ ${h.cumpleCount} cumple</span>
                        <span class="historial-metrica nocumple">✖ ${h.noCumpleCount} no cumple</span>
                        <span class="historial-metrica pendiente">• ${h.pendienteCount} pendiente</span>
                    </p>
                </div>
                <div class="historial-acciones">
                    <button class="btn btn-success" onclick="descargarHistorialPDF('${h.id}')">📄 Descargar PDF de nuevo</button>
                    <button class="btn btn-info" onclick="cargarHistorialEnFormulario('${h.id}')">📝 Abrir en formulario</button>
                    <button class="btn btn-danger" onclick="eliminarHistorial('${h.id}')">🗑️ Eliminar</button>
                </div>
            </div>
        `;
    }).join('');
}

function renderizarBorradores() {
    const container = document.getElementById('borradores-lista');
    if (!container) return;
    const drafts = STORAGE.listarBorradores();

    if (drafts.length === 0) {
        container.innerHTML = '<div class="historial-vacio">No hay borradores en curso. Al comenzar a llenar un formulario se guardará automáticamente aquí.</div>';
        return;
    }

    container.innerHTML = drafts.map(d => {
        const state = d.state;
        const fecha = state.fecha ? new Date(state.fecha).toLocaleString('es-CL') : '';
        const nombreSec = nombreLegibleSeccion(state.sectionId, state.directivaType);
        const empresa = state.campos?.nombreEmpresa || '(sin especificar)';
        const establecimiento = state.campos?.nombreEstablecimiento || '(sin especificar)';
        const cumple = (state.requisitos || []).filter(r => r.estado === 'cumple').length;
        const nocumple = (state.requisitos || []).filter(r => r.estado === 'no-cumple').length;
        const pend = (state.requisitos || []).filter(r => !r.estado).length;
        return `
            <div class="historial-item borrador">
                <div class="historial-info">
                    <h4>${escapeHTML(nombreSec)}</h4>
                    <p><strong>Empresa:</strong> ${escapeHTML(empresa)}</p>
                    <p><strong>Establecimiento:</strong> ${escapeHTML(establecimiento)}</p>
                    <p><strong>Última edición:</strong> ${escapeHTML(fecha)}</p>
                    <p>
                        <span class="historial-metrica cumple">✔ ${cumple}</span>
                        <span class="historial-metrica nocumple">✖ ${nocumple}</span>
                        <span class="historial-metrica pendiente">• ${pend}</span>
                    </p>
                </div>
                <div class="historial-acciones">
                    <button class="btn btn-success" onclick="continuarBorrador('${escapeHTML(state.sectionId)}', '${escapeHTML(state.directivaType || '')}')">▶ Continuar edición</button>
                    <button class="btn btn-danger" onclick="eliminarBorrador('${escapeHTML(d.key)}')">🗑️ Descartar borrador</button>
                </div>
            </div>
        `;
    }).join('');
}

// ---------- Acciones del historial ----------
function descargarHistorialPDF(id) {
    const entry = STORAGE.obtenerDelHistorial(id);
    if (!entry) return;
    _abrirEntradaEnFormulario(entry, () => generarReporte(entry.sectionId));
}

function cargarHistorialEnFormulario(id) {
    const entry = STORAGE.obtenerDelHistorial(id);
    if (!entry) return;
    _abrirEntradaEnFormulario(entry);
}

function _abrirEntradaEnFormulario(entry, luego) {
    const { sectionId, snapshot } = entry;
    if (sectionId === 'directiva-funcionamiento' && snapshot?.directivaType) {
        selectedDirectivaType = snapshot.directivaType;
        localStorage.setItem(STORAGE.ultimoTipoDirectivaKey, snapshot.directivaType);
    }
    mostrarSeccion(sectionId);
    // Aplicar snapshot tras el render (mostrarSeccion → cargarRequisitos ya restauró borrador; sobrescribimos)
    setTimeout(() => {
        restaurandoEstado = true;
        STORAGE.aplicarEstado(sectionId, snapshot);
        restaurandoEstado = false;
        STORAGE.guardarBorrador(sectionId); // sincronizar borrador con lo cargado
        if (typeof luego === 'function') setTimeout(luego, 100);
    }, 60);
}

function eliminarHistorial(id) {
    if (!confirm('¿Eliminar este reporte del historial? Esta acción no se puede deshacer.')) return;
    STORAGE.eliminarDeHistorial(id);
    renderizarHistorial();
}

function limpiarHistorial() {
    if (!confirm('¿Vaciar TODO el historial de reportes generados? Los borradores en curso no se tocarán.')) return;
    STORAGE.vaciarHistorial();
    renderizarHistorial();
}

function continuarBorrador(sectionId, directivaType) {
    if (sectionId === 'directiva-funcionamiento' && directivaType) {
        selectedDirectivaType = directivaType;
        localStorage.setItem(STORAGE.ultimoTipoDirectivaKey, directivaType);
    } else if (sectionId !== 'directiva-funcionamiento') {
        selectedDirectivaType = null;
    }
    mostrarSeccion(sectionId);
}

function eliminarBorrador(key) {
    if (!confirm('¿Descartar este borrador? Se perderán los datos guardados.')) return;
    localStorage.removeItem(key);
    renderizarBorradores();
}

// ---------- Importar datos desde un PDF descargado ----------
// Los PDFs generados por este sistema embeben los datos del formulario en los
// metadatos (Subject). Aquí los extraemos con pdf-lib y restauramos el reporte.
async function importarDesdeArchivoPDF(file) {
    if (!file) return;
    if (typeof PDFLib === 'undefined') {
        alert('El lector de PDF no está disponible. Verifique su conexión a internet y recargue la página.');
        return;
    }
    if (!/\.pdf$/i.test(file.name) && file.type !== 'application/pdf') {
        alert('Debe seleccionar un archivo PDF descargado desde este sistema.');
        return;
    }
    try {
        const bytes = await file.arrayBuffer();
        const pdfDoc = await PDFLib.PDFDocument.load(bytes, { ignoreEncryption: true });
        const subject = pdfDoc.getSubject() || '';
        if (!subject.startsWith('OS10:')) {
            alert('Este PDF no contiene datos importables. Debe ser un PDF descargado desde este mismo sistema (versión reciente).');
            return;
        }
        const b64 = subject.slice(5);
        let payload;
        try {
            payload = JSON.parse(decodeURIComponent(escape(atob(b64))));
        } catch (e) {
            alert('No se pudieron leer los datos del PDF (formato inválido o dañado).');
            return;
        }
        if (!payload || !payload.snapshot || !payload.sectionId) {
            alert('El PDF no contiene un reporte válido.');
            return;
        }

        // Rearmar entrada como si viniera del historial local
        const snapshot = payload.snapshot;
        const cumpleCount = (snapshot.requisitos || []).filter(r => r.estado === 'cumple').length;
        const noCumpleCount = (snapshot.requisitos || []).filter(r => r.estado === 'no-cumple').length;
        const pendienteCount = (snapshot.requisitos || []).filter(r => !r.estado).length;
        const entry = {
            id: STORAGE.generarId(),
            fecha: payload.fecha || new Date().toISOString(),
            sectionId: payload.sectionId,
            titulo: payload.titulo || nombreLegibleSeccion(payload.sectionId, snapshot.directivaType),
            tipoDirectiva: payload.tipoDirectiva || null,
            empresa: snapshot.campos?.nombreEmpresa || '',
            establecimiento: snapshot.campos?.nombreEstablecimiento || '',
            cumpleCount, noCumpleCount, pendienteCount,
            snapshot
        };

        // Evitar duplicado si ya existe uno idéntico (misma sección, empresa, fecha)
        const existente = STORAGE.obtenerHistorial();
        const duplicado = existente.find(h =>
            h.sectionId === entry.sectionId &&
            h.empresa === entry.empresa &&
            h.establecimiento === entry.establecimiento &&
            h.fecha === entry.fecha
        );
        if (duplicado) {
            const opcion = confirm(
                'Este reporte ya está en el historial (misma empresa, establecimiento y fecha).\n\n' +
                'Aceptar = Abrir el reporte existente en el formulario.\n' +
                'Cancelar = Cancelar la importación.'
            );
            if (opcion) cargarHistorialEnFormulario(duplicado.id);
            return;
        }

        STORAGE.guardarEnHistorial(entry);
        renderizarHistorial();
        renderizarBorradores();
        const abrir = confirm(
            `Reporte importado correctamente:\n\n${entry.titulo}\nEmpresa: ${entry.empresa || '(sin especificar)'}\n\n` +
            '¿Desea abrirlo ahora en el formulario para editarlo o volver a generar el PDF?'
        );
        if (abrir) cargarHistorialEnFormulario(entry.id);
    } catch (err) {
        console.error(err);
        alert('No se pudo leer el PDF. Asegúrese de que el archivo no esté dañado.');
    }
}

// ---------- Autoguardado por eventos delegados ----------
document.addEventListener('input', () => autoguardar());
document.addEventListener('change', () => autoguardar());

// Cargar los requisitos iniciales cuando la página se carga
document.addEventListener('DOMContentLoaded', () => {
    // Establecer clase inicial del body
    document.body.className = 'inicio';
    mostrarSeccion('inicio');

    const logoImg = document.querySelector('.logo-imagen');
    if (logoImg) {
        logoImg.onerror = function() {
            console.log('No se pudo cargar foto/logo.png, usando fallback');
            this.style.display = 'none';
            const fallback = document.createElement('div');
            fallback.innerHTML = '🏛️';
            fallback.style.fontSize = '45px';
            fallback.style.color = '#2d5016';
            this.parentNode.appendChild(fallback);
        };

        logoImg.onload = function() {
            console.log('Logo cargado exitosamente');
        };
    }

    // Hook del input file para importar un PDF descargado
    const importInput = document.getElementById('importar-pdf-input');
    if (importInput) {
        importInput.addEventListener('change', (e) => {
            const file = e.target.files && e.target.files[0];
            importarDesdeArchivoPDF(file);
            e.target.value = '';
        });
    }

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && currentSection !== 'inicio') {
            volverAtras();
        }
        if (event.ctrlKey && event.key === 'p' && currentSection !== 'inicio') {
            event.preventDefault();
            window.print();
        }
    });
});
