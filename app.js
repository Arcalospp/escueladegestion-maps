const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowmenu = addKeyword(['menu']).addAnswer(
    [],
    () => {return flowPrincipal}
)

const flowASESOR = addKeyword(['asesor', 'aseso']).addAnswer(
    [
        'Con gusto te asignaremos a un asesor para contestar todas tus dudas',
        'Te invitamos a dejar tu nombre',
        ' ',
        'En caso de no poder contactarnos te llamaremos al numero de telefono que usaste en este chat',
        'Si deseas comunicarte con nosotros por otros medios tambien podras llamarnos al:',
        '👉 *3135567524*',
        '👉 *3214407791*',
        ' ',
        'Estamos ubicados en SOGAMOSO',
        'Carrera 12 No 55A-60 Frente al Sena Industrial',
    ],
    null,
    null,
 
)

const flowTA1 = addKeyword(['1', 'ADMINISTRATIVO PARA JEFES DE ÁREA','JEFES DE AREA']).addAnswer(
    [
        '📄 *ADMINISTRATIVO PARA JEFES DE ÁREA*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowTA2 = addKeyword(['2', 'COORDINADORES PARA TRABAJO EN ALTURAS','COORDINADOR', 'COORDINADORES']).addAnswer(
    [
        '📄 *COORDINADORES PARA TRABAJO EN ALTURAS*:',
        '',
        '*DURACION:* 80 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En PISTA DE ENTRENAMIENTO',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowTA3 = addKeyword(['3', 'TRABAJADOR AUTORIZADO PARA TRABAJO EN ALTURAS','TRABAJADOR AUTORIZADO']).addAnswer(
    [
        '📄 *TRABAJADOR AUTORIZADO PARA TRABAJO EN ALTURAS*:',
        '',
        '*DURACION:* 32 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En PISTA DE ENTRENAMIENTO',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowTA4 = addKeyword(['4', 'REENTRENAMIENTO PARA TRABAJO EN ALTURAS','REENTRENAMIENTO']).addAnswer(
    [
        '📄 *REENTRENAMIENTO PARA TRABAJO EN ALTURAS*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En PISTA DE ENTRENAMIENTO',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowTA5 = addKeyword(['5', 'ARMADOR DE ANDAMIOS', 'ANDAMIOS']).addAnswer(
    [
        '📄 *ARMADOR DE ANDAMIOS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En PISTA DE ENTRENAMIENTO',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowTA6 = addKeyword(['6', 'INSTALACIÓN E INSPECCIÓN DE ANCLAJES DE PROTECCIÓN CONTRA CAÍDAS', 'anclajes']).addAnswer(
    [
        '📄 *INSTALACIÓN E INSPECCIÓN DE ANCLAJES DE PROTECCIÓN CONTRA CAÍDAS*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En PISTA DE ENTRENAMIENTO y Aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowTA7 = addKeyword(['7', 'INSPECTOR DE ELEMENTO DE PROTECCION CONTRA CAIDAS', 'elementos de proteccion']).addAnswer(
    [
        '📄 *INSPECTOR DE ELEMENTO DE PROTECCION CONTRA CAIDAS*:',
        '',
        '*DURACION:* 4 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowTA8 = addKeyword(['8', 'RESCATE INDUSTRIAL EN ALTURAS']).addAnswer(
    [
        '📄 *RESCATE INDUSTRIAL EN ALTURAS*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En PISTA DE ENTRENAMIENTO',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowTA9 = addKeyword(['9', 'PROGRAMA DE ESPACIOS CONFINADOS']).addAnswer(
    [
        '📄 *PROGRAMA DE ESPACIOS CONFINADOS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC1 = addKeyword(['1', 'TRABAJO EN ALTURAS']).addAnswer([
    '*TRABAJO EN ALTURAS:*',
    '👉 *1*-ADMINISTRATIVO PARA JEFES DE ÁREA',
    '👉 *2*-COORDINADORES PARA TRABAJO EN ALTURAS',
    '👉 *3*-TRABAJADOR AUTORIZADO PARA TRABAJO EN ALTURAS',
    '👉 *4*-REENTRENAMIENTO PARA TRABAJO EN ALTURAS',
    '👉 *5*-ARMADOR DE ANDAMIOS',
    '👉 *6*-INSTALACIÓN E INSPECCIÓN DE ANCLAJES DE PROTECCIÓN CONTRA CAÍDAS',
    '👉 *7*-INSPECTOR DE ELEMENTO DE PROTECCION CONTRA CAIDAS',
    '👉 *8*-RESCATE INDUSTRIAL EN ALTURAS',
    '👉 *9*-PROGRAMA DE ESPACIOS CONFINADOS',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null, 
[flowTA1, flowTA2, flowTA3, flowTA4, flowTA5, flowTA6, flowTA7, flowTA8, flowTA9, flowmenu]
)

const flowT1 = addKeyword(['1', 'CURSO BASICO OBLIGATORIO PARA CONDUCTORES QUE TRANSPORTAN MECANCIAS PELIGROSAS']).addAnswer(
    [
        '📄 *CURSO BASICO OBLIGATORIO PARA CONDUCTORES QUE TRANSPORTAN MECANCIAS PELIGROSAS*:',
        '',
        '*DURACION:* 60 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowT2 = addKeyword(['2', 'ACTUALIZACION CAPACITACION PARA CONDUCTORES QUE TRANSPORTAN MECANCIAS PELIGROSAS']).addAnswer(
    [
        '📄 *ACTUALIZACION CAPACITACION PARA CONDUCTORES QUE TRANSPORTAN MECANCIAS PELIGROSAS*:',
        '',
        '*DURACION:* 20 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowT3 = addKeyword(['3', 'MONITOR-ADULTO ACOMPAÑANTE RUTA ESCOLAR']).addAnswer(
    [
        '📄 *MONITOR-ADULTO ACOMPAÑANTE RUTA ESCOLAR*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC2 = addKeyword(['2', 'TRANSPORTE']).addAnswer([
    '*TRANSPORTE:*',
    '👉 *1*-CURSO BASICO OBLIGATORIO PARA CONDUCTORES QUE TRANSPORTAN MECANCIAS PELIGROSAS ',
    '👉 *2*-ACTUALIZACION CAPACITACION PARA CONDUCTORES QUE TRANSPORTAN MECANCIAS PELIGROSAS',
    '👉 *3*-MONITOR-ADULTO ACOMPAÑANTE RUTA ESCOLAR',
        '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
    null,
    null, 
    [flowT1, flowT2, flowT3, flowmenu]
)

const flowSV1 = addKeyword(['1', 'SEGURIDAD VIAL']).addAnswer(
    [
        '📄 *SEGURIDAD VIAL*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSV2 = addKeyword(['2', 'AUXILIAR VIAL-PALETERO']).addAnswer(
    [
        '📄 *AUXILIAR VIAL-PALETERO*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSV3 = addKeyword(['3', 'MANEJO DEFENSIVO (PREVENTIVO) PARA AUTOMOVILES']).addAnswer(
    [
        '📄 *MANEJO DEFENSIVO (PREVENTIVO) PARA AUTOMOVILES*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSV4 = addKeyword(['4', 'MANEJO DEFENSIVO TRACTO CAMIONES']).addAnswer(
    [
        '📄 *MANEJO DEFENSIVO TRACTO CAMIONES*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSV5 = addKeyword(['5', 'MANEJO DEFENSIVO MAQUINARIA AMARILLA']).addAnswer(
    [
        '📄 *MANEJO DEFENSIVO MAQUINARIA AMARILLA*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSV6 = addKeyword(['6', 'MANEJO DEFENSIVO MOTOCICLETAS']).addAnswer(
    [
        '📄 *MANEJO DEFENSIVO MOTOCICLETAS*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSV7 = addKeyword(['7', 'CONTROLADOR DE TRÁFICO VIAL']).addAnswer(
    [
        '📄 *CONTROLADOR DE TRÁFICO VIAL*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSV8 = addKeyword(['8', 'SERVICIO AL CLIENTE(PASAJEROS) EN EL TRANSPORE PUBLICO']).addAnswer(
    [
        '📄 *SERVICIO AL CLIENTE(PASAJEROS) EN EL TRANSPORE PUBLICO*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSV9 = addKeyword(['9', 'DIPLOMADO EN INVESTIGACIÓN DE ACCIDENTES DE TRÁNSITO']).addAnswer(
    [
        '📄 *DIPLOMADO EN INVESTIGACIÓN DE ACCIDENTES DE TRÁNSITO*:',
        '',
        '*DURACION:* 40 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC3 = addKeyword(['3', 'SEGURIDAD VIAL']).addAnswer([
    '*SEGURIDAD VIAL:*',
    '👉 *1*-SEGURIDAD VIAL',
    '👉 *2*-AUXILIAR VIAL-PALETERO',
    '👉 *3*-MANEJO DEFENSIVO (PREVENTIVO) PARA AUTOMOVILES',
    '👉 *4*-MANEJO DEFENSIVO TRACTO CAMIONES',
    '👉 *5*-MANEJO DEFENSIVO MAQUINARIA AMARILLA ',
    '👉 *6*-MANEJO DEFENSIVO MOTOCICLETAS',
    '👉 *7*-CONTROLADOR DE TRÁFICO VIAL ',
    '👉 *8*-SERVICIO AL CLIENTE(PASAJEROS) EN EL TRANSPORE PUBLICO',
    '👉 *9*-DIPLOMADO EN INVESTIGACIÓN DE ACCIDENTES DE TRÁNSITO',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
 ],
    null,
    null, 
    [flowSV1, flowSV2, flowSV3, flowSV4, flowSV5, flowSV6, flowSV7, flowSV8, flowSV9]
)

const flowSG1 = addKeyword(['1', 'AUDITO INTERNO ISO 17025/ ISO 19011']).addAnswer(
    [
        '📄 *AUDITO INTERNO ISO 17025/ ISO 19011*:',
        '',
        '*DURACION:* 40 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSG2 = addKeyword(['2', 'SISTEMA DE GESTION-SST IMPLEMENTACION-(para la pequeña minería)']).addAnswer(
    [
        '📄 *SISTEMA DE GESTION-SST IMPLEMENTACION*:',
        '',
        '*DURACION:* 50 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC4 = addKeyword(['4', 'SISTEMAS DE GESTION']).addAnswer([
    '*SISTEMAS DE GESTION:*',
    '👉 *1*-AUDITO INTERNO ISO 17025/ ISO 19011',
    '👉 *2*-SISTEMA DE GESTION-SST IMPLEMENTACION',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
    ],
    null,
    null,  
    [flowSG1, flowSG2, flowmenu]
)

const flowAL1 = addKeyword(['1', 'MANIPULACION DE ALIMENTOS SECTOR TRANSPORTE']).addAnswer(
    [
        '📄 *MANIPULACION DE ALIMENTOS SECTOR TRANSPORTE*:',
        '',
        '*DURACION:* 12 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowAL2 = addKeyword(['2', 'MANIPULACION DE ALIMENTOS']).addAnswer(
    [
        '📄 *MANIPULACION DE ALIMENTOS*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC5 = addKeyword(['5', 'ALIMENTOS']).addAnswer([
    '*ALIMENTOS:*',
    '👉 *1*-MANIPULACION DE ALIMENTOS SECTOR TRANSPORTE',
    '👉 *2*-MANIPULACION DE ALIMENTOS',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowAL1, flowAL2, flowmenu]
)

const flowSST1 = addKeyword(['1', 'PRIMEROS AUXILIOS BASICOS']).addAnswer(
    [
        '📄 *PRIMEROS AUXILIOS BASICOS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST2 = addKeyword(['2', 'SOPORTE VITAL BASICO']).addAnswer(
    [
        '📄 *SOPORTE VITAL BASICO*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST3 = addKeyword(['3', 'BRIGADAS DE EMERGENCIA']).addAnswer(
    [
        '📄 *BRIGADAS DE EMERGENCIA*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST4 = addKeyword(['4', 'IMPLEMENTACION DE PLANES DE EMERGENCIA: PLAN DE EMERGENCIA, PLAN AMBIENTAL, ESTANDAR INTEGRADO']).addAnswer(
    [
        '📄 *IMPLEMENTACION DE PLANES DE EMERGENCIA: PLAN DE EMERGENCIA, PLAN AMBIENTAL, ESTANDAR INTEGRADO*:',
        '',
        '*DURACION:* 24 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST5 = addKeyword(['5', 'ELEMENTOS DE PROTECCION PERSONAL EPP']).addAnswer(
    [
        '📄 *ELEMENTOS DE PROTECCION PERSONAL EPP*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST6 = addKeyword(['6', 'MANEJO DE ENERGIAS PELIGROSAS-BLOQUEO Y ETIQUETADO (Log-Out/Tag-Out - LOTO)']).addAnswer(
    [
        '📄 *MANEJO DE ENERGIAS PELIGROSAS-BLOQUEO Y ETIQUETADO (Log-Out/Tag-Out - LOTO)*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST7 = addKeyword(['7', 'MANEJO DE HERRAMIENTAS MANUALES']).addAnswer(
    [
        '📄 *MANEJO DE HERRAMIENTAS MANUALES*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST8 = addKeyword(['8', 'MANEJO DE RESIDUOS SOLIDOS']).addAnswer(
    [
        '📄 *MANEJO DE RESIDUOS SOLIDOS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST9 = addKeyword(['9', 'MANIPULACION DE CARGAS']).addAnswer(
    [
        '📄 *MANIPULACION DE CARGAS*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST10 = addKeyword(['10', 'MANIPULACIONES DE MATERIALES-SUSTANCIAS PELIGROSAS']).addAnswer(
    [
        '📄 *MANIPULACIONES DE MATERIALES-SUSTANCIAS PELIGROSAS*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST11 = addKeyword(['11', 'MATERIALES PELIGROSOS EN ESTACION DE SERVICIO']).addAnswer(
    [
        '📄 *MATERIALES PELIGROSOS EN ESTACION DE SERVICIO*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST12 = addKeyword(['12', 'TRABAJO EN CALIENTE']).addAnswer(
    [
        '📄 *TRABAJO EN CALIENTE*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST13 = addKeyword(['13', 'TECNICAS DE EXPRESION ORAL Y CORPORAL ADMINISTRATIVOS']).addAnswer(
    [
        '📄 *TECNICAS DE EXPRESION ORAL Y CORPORAL ADMINISTRATIVOS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowSST14 = addKeyword(['14', 'RESPEL-REGISTRO DE GENERADORES DE RESIDUOS O DESECHOS PELIGROSOS']).addAnswer(
    [
        '📄 *RESPEL-REGISTRO DE GENERADORES DE RESIDUOS O DESECHOS PELIGROSOS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC6 = addKeyword(['6', 'SEGURIDAD Y SALUD EN EL TRABAJO']).addAnswer([
    '*SEGURIDAD Y SALUD EN EL TRABAJO:*',
    '👉 *1*-PRIMEROS AUXILIOS BASICOS',
    '👉 *2*-SOPORTE VITAL BASICO',
    '👉 *3*-BRIGADAS DE EMERGENCIA',
    '👉 *4*-IMPLEMENTACION DE PLANES DE EMERGENCIA: PLAN DE EMERGENCIA, PLAN AMBIENTAL, ESTANDAR INTEGRADO',
    '👉 *5*-ELEMENTOS DE PROTECCION PERSONAL EPP',
    '👉 *6*-MANEJO DE ENERGIAS PELIGROSAS-BLOQUEO Y ETIQUETADO (Log-Out/Tag-Out - LOTO)',
    '👉 *7*-MANEJO DE HERRAMIENTAS MANUALES',
    '👉 *8*-MANEJO DE RESIDUOS SOLIDOS',
    '👉 *9*-MANIPULACION DE CARGAS',
    '👉 *10*-MANIPULACIONES DE MATERIALES-SUSTANCIAS PELIGROSAS',
    '👉 *11*-MATERIALES PELIGROSOS EN ESTACION DE SERVICIO',
    '👉 *12*-TRABAJO EN CALIENTE ',
    '👉 *13*-TECNICAS DE EXPRESION ORAL Y CORPORAL ADMINISTRATIVOS',
    '👉 *14*-RESPEL-REGISTRO DE GENERADORES DE RESIDUOS O DESECHOS PELIGROSOS',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowSST3, flowSST4, flowSST5, flowSST6, flowSST7, flowSST8, flowSST9, flowSST10, flowSST11, flowSST12, flowSST13, flowSST14, flowSST2, flowSST1, flowmenu]
)

const flowAU1 = addKeyword(['1', 'MECANICA BASICA AUTOMOTRIZ']).addAnswer(
    [
        '📄 *MECANICA BASICA AUTOMOTRIZ*:',
        '',
        '*DURACION:* 40 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowAU2 = addKeyword(['2', 'MECANICA Y ELECTRICIDAD DE MOTOCICLETAS']).addAnswer(
    [
        '📄 *MECANICA Y ELECTRICIDAD DE MOTOCICLETAS*:',
        '',
        '*DURACION:* 100 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowAU3 = addKeyword(['3', 'MODULO I-SISTEMA DE INYECCIÓN ELECTRÓNICA PARA MOTOCICLETAS DE ALTO CILINDRAJE']).addAnswer(
    [
        '📄 *MODULO I-SISTEMA DE INYECCIÓN ELECTRÓNICA PARA MOTOCICLETAS DE ALTO CILINDRAJE*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowAU4 = addKeyword(['4', 'MODULO II-MECANICA MOTOS DE ALTO CILINDRAJE']).addAnswer(
    [
        '📄 *MODULO II-MECANICA MOTOS DE ALTO CILINDRAJE*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowAU5 = addKeyword(['5', 'ELECTRICIDAD Y ELECTRONICA AUTOMOTRIZ']).addAnswer(
    [
        '📄 *ELECTRICIDAD Y ELECTRONICA AUTOMOTRIZ*:',
        '',
        '*DURACION:* 48 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowAU6 = addKeyword(['6', 'CENTROS DE DIAGNOSTICO AUTOMOTRIZ-CDA']).addAnswer(
    [
        '📄 *CENTROS DE DIAGNOSTICO AUTOMOTRIZ-CDA*:',
        '',
        '*DURACION:* 24 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowAU7 = addKeyword(['7', 'INYECCION ELECTRONICA AUTOMOTRIZ']).addAnswer(
    [
        '📄 *INYECCION ELECTRONICA AUTOMOTRIZ*:',
        '',
        '*DURACION:* 60 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowAU8 = addKeyword(['8', 'OPERACIÓN Y MANTENIMIENTO DE MOTORES FUERA DE BORDA']).addAnswer(
    [
        '📄 *OPERACIÓN Y MANTENIMIENTO DE MOTORES FUERA DE BORDA*:',
        '',
        '*DURACION:* 40 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowAU9 = addKeyword(['9', 'OPERARIOS Y SUPEVISORES DE CDA']).addAnswer(
    [
        '📄 *OPERARIOS Y SUPEVISORES DE CDA*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC7 = addKeyword(['7', 'AUTOMOTRIZ']).addAnswer([
    '*AUTOMOTRIZ:*',
    '👉 *1*-MECANICA BASICA AUTOMOTRIZ',
    '👉 *2*-MECANICA Y ELECTRICIDAD DE MOTOCICLETAS',
    '👉 *3*-MODULO I-SISTEMA DE INYECCIÓN ELECTRÓNICA PARA MOTOCICLETAS DE ALTO CILINDRAJE',
    '👉 *4*-MODULO II-MECANICA MOTOS DE ALTO CILINDRAJE',
    '👉 *5*-ELECTRICIDAD Y ELECTRONICA AUTOMOTRIZ',
    '👉 *6*-CENTROS DE DIAGNOSTICO AUTOMOTRIZ-CDA',
    '👉 *7*-INYECCION ELECTRONICA AUTOMOTRIZ',
    '👉 *8*-OPERACIÓN Y MANTENIMIENTO DE MOTORES FUERA DE BORDA',
    '👉 *9*-OPERARIOS Y SUPEVISORES DE CDA',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowAU1, flowAU2, flowAU3, flowAU4, flowAU5, flowAU6, flowAU7, flowAU8, flowAU9, flowmenu]
)

const flowM1 = addKeyword(['1', 'SEGURIDAD BASICA EN MINAS']).addAnswer(
    [
        '📄 *SEGURIDAD BASICA EN MINAS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowM2 = addKeyword(['2', 'SEGURIDAD AVANZADO EN MINAS']).addAnswer(
    [
        '📄 *SEGURIDAD AVANZADO EN MINAS*:',
        '',
        '*DURACION:* 40 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el area de trabajo de la Empresa',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC8 = addKeyword(['8', 'MINERIA']).addAnswer([
    '*MINERIA:*',
    '👉 *1*-SEGURIDAD BASICA EN MINAS',
    '👉 *2*-SEGURIDAD AVANZADO EN MINAS',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowM1, flowM2, flowmenu]
)

const flowE1 = addKeyword(['1', 'INSTALACIONES ELECTRICAS DOMICILIARIAS']).addAnswer(
    [
        '📄 *INSTALACIONES ELECTRICAS DOMICILIARIAS*:',
        '',
        '*DURACION:* 100 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowE2 = addKeyword(['2', 'SEGURIDAD ELECTRICA']).addAnswer(
    [
        '📄 *SEGURIDAD ELECTRICA*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowE3 = addKeyword(['3', 'RIESGO ELECTRICO']).addAnswer(
    [
        '📄 *RIESGO ELECTRICO*:',
        '',
        '*DURACION:* 10 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowE4 = addKeyword(['4', 'PUESTAS A TIERRA, SISTEMAS DE CONTROL Y DESCARGAS ATMOSFÉRICAS']).addAnswer(
    [
        '📄 *PUESTAS A TIERRA, SISTEMAS DE CONTROL Y DESCARGAS ATMOSFÉRICAS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowE5 = addKeyword(['5', 'ELECTRICIDAD BASICA']).addAnswer(
    [
        '📄 *ELECTRICIDAD BASICA*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC9 = addKeyword(['9', 'ELECTRICA']).addAnswer([
    '*ELECTRICA:*',
    '👉 *1*-INSTALACIONES ELECTRICAS DOMICILIARIAS',
    '👉 *2*-SEGURIDAD ELECTRICA',
    '👉 *3*-RIESGO ELECTRICO',
    '👉 *4*-PUESTAS A TIERRA, SISTEMAS DE CONTROL Y DESCARGAS ATMOSFÉRICAS ',
    '👉 *5*-ELECTRICIDAD BASICA',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowE1, flowE2, flowE3, flowE4, flowE5, flowmenu]
)

const flowTUR1 = addKeyword(['1', 'GUIANZA TURISTICA CURSO CORTO']).addAnswer(
    [
        '📄 *GUIANZA TURISTICA CURSO CORTO*:',
        '',
        '*DURACION:* 40 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC10 = addKeyword(['10', 'TURISMO']).addAnswer([
    '*TURISMO:*',
    '👉 *1*-GUIANZA TURISTICA CURSO CORTO',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowTUR1, flowmenu]
)

const flowCONS1 = addKeyword(['1', 'INTERPRETACIÓN DE PLANOS ARQUITECTÓNICOS PARA MAESTROS DE OBRAS CIVILES Y ARQUITECTÓNICAS.']).addAnswer(
    [
        '📄 *INTERPRETACIÓN DE PLANOS ARQUITECTÓNICOS PARA MAESTROS DE OBRAS CIVILES Y ARQUITECTÓNICAS*:',
        '',
        '*DURACION:* 40 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCONS2 = addKeyword(['2', 'CURSO FONTANERIA DOMICILIARIA (PLOMERIA)']).addAnswer(
    [
        '📄 *CURSO FONTANERIA DOMICILIARIA (PLOMERIA)*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCONS3 = addKeyword(['3', 'OPERADOR DE PLANTA DE CONCRETO-MORTERO']).addAnswer(
    [
        '📄 *OPERADOR DE PLANTA DE CONCRETO-MORTERO*:',
        '',
        '*DURACION:* 120 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y en area de trabajo',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC11 = addKeyword(['11', 'CONSTRUCCION']).addAnswer([
    '*CONSTRUCCION:*',
    '👉 *1*-INTERPRETACIÓN DE PLANOS ARQUITECTÓNICOS PARA MAESTROS DE OBRAS CIVILES Y ARQUITECTÓNICAS.',
    '👉 *2*-CURSO FONTANERIA DOMICILIARIA (PLOMERIA)',
    '👉 *3*-OPERADOR DE PLANTA DE CONCRETO-MORTERO',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowCONS1, flowCONS2, flowCONS3, flowmenu]
)

const flowIND1 = addKeyword(['1', 'ADMINISTRACION DEL MANTENIMIENTO']).addAnswer(
    [
        '📄 *ADMINISTRACION DEL MANTENIMIENTO*:',
        '',
        '*DURACION:* 50 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIND2 = addKeyword(['2', 'METROLOGIA BASICA']).addAnswer(
    [
        '📄 *METROLOGIA BASICA*:',
        '',
        '*DURACION:* 24 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIND3 = addKeyword(['3', 'TORNO PARA MADERA']).addAnswer(
    [
        '📄 *TORNO PARA MADERA*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIND4 = addKeyword(['4', 'TORNO PARA METALES']).addAnswer(
    [
        '📄 *TORNO PARA METALES*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIND5 = addKeyword(['5', 'BASICA EN SOLDADURA ELECTRICA']).addAnswer(
    [
        '📄 *BASICA EN SOLDADURA ELECTRICA*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIND6 = addKeyword(['6', 'DIBUJO TECNICO']).addAnswer(
    [
        '📄 *DIBUJO TECNICO*:',
        '',
        '*DURACION:* 80 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC12 = addKeyword(['12', 'INDUSTRIAL']).addAnswer([
    '*INDUSTRIAL:*',
    '👉 *1*-ADMINISTRACION DEL MANTENIMIENTO',
    '👉 *2*-METROLOGIA BASICA',
    '👉 *3*-TORNO PARA MADERA',
    '👉 *4*-TORNO PARA METALES',
    '👉 *5*-BASICA EN SOLDADURA ELECTRICA',
    '👉 *6*-DIBUJO TECNICO',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowIND1, flowIND2, flowIND3, flowIND4, flowIND5, flowIND6, flowmenu])

const flowMP1 = addKeyword(['1', 'RETROEXCAVADORA-RETROCARGADOR']).addAnswer(
    [
        '📄 *RETROEXCAVADORA-RETROCARGADOR*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP2 = addKeyword(['2', 'MINI-CARGADOR DE RUEDAS DESLIZANTES']).addAnswer(
    [
        '📄 *MINI-CARGADOR DE RUEDAS DESLIZANTES*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP3 = addKeyword(['3', 'EXCAVADORA SOBRE ORUGAS']).addAnswer(
    [
        '📄 *EXCAVADORA SOBRE ORUGAS*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP4 = addKeyword(['4', 'BULLDOZER SOBRE ORUGAS']).addAnswer(
    [
        '📄 *BULLDOZER SOBRE ORUGAS*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP5 = addKeyword(['5', 'CAMION MINERO-DUMPER']).addAnswer(
    [
        '📄 *CAMION MINERO-DUMPER*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP6 = addKeyword(['6', 'CAMION VACTOR']).addAnswer(
    [
        '📄 *CAMION VACTOR*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP7 = addKeyword(['7', 'CARGADOR FRONTAL']).addAnswer(
    [
        '📄 *CARGADOR FRONTAL*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP8 = addKeyword(['8', 'MOTONIVELADORA']).addAnswer(
    [
        '📄 *MOTONIVELADORA*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP9 = addKeyword(['9', 'TRACTO CAMIONES ARTICULADOS']).addAnswer(
    [
        '📄 *TRACTO CAMIONES ARTICULADOS*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP10 = addKeyword(['10', 'VIBROCOMPACTADOR DE CILINDROS']).addAnswer(
    [
        '📄 *VIBROCOMPACTADOR DE CILINDROS*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP11 = addKeyword(['11', 'TRACTO ARADO']).addAnswer(
    [
        '📄 *TRACTO ARADO*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowMP12 = addKeyword(['12', 'OPERADOR DE CAMION VACTOR']).addAnswer(
    [
        '📄 *OPERADOR DE CAMION VACTOR*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC13 = addKeyword(['13','MAQUINARIA PESADA']).addAnswer([
    '*MAQUINARIA PESADA:*',
    '👉 *1*-RETROEXCAVADORA-RETROCARGADOR',
    '👉 *2*-MINI-CARGADOR DE RUEDAS DESLIZANTES',
    '👉 *3*-EXCAVADORA SOBRE ORUGAS',
    '👉 *4*-BULLDOZER SOBRE ORUGAS',
    '👉 *5*-CAMION MINERO-DUMPER',
    '👉 *6*-CAMION VACTOR',
    '👉 *7*-CARGADOR FRONTAL',
    '👉 *8*-MOTONIVELADORA',
    '👉 *9*-TRACTO CAMIONES ARTICULADOS',
    '👉 *10*-VIBROCOMPACTADOR DE CILINDROS',
    '👉 *11*-TRACTO ARADO',
    '👉 *12*-OPERADOR DE CAMION VACTOR',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowMP10,flowMP11,flowMP12, flowMP2, flowIND3, flowMP4, flowMP5, flowMP6, flowMP7, flowMP8, flowMP9, flowMP1, flowmenu])

const flowIZ1 = addKeyword(['1', 'APAREJADOR SEÑALERO']).addAnswer(
    [
        '📄 *APAREJADOR SEÑALERO*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ2 = addKeyword(['2', 'INSPECTOR DE APAREJOS DE IZAJE DE CARGAS']).addAnswer(
    [
        '📄 *INSPECTOR DE APAREJOS DE IZAJE DE CARGAS*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ3 = addKeyword(['3', 'SUPERVISOR DE IZAJE MECANICO DE CARGAS']).addAnswer(
    [
        '📄 *SUPERVISOR DE IZAJE MECANICO DE CARGAS*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ4 = addKeyword(['4', 'PUENTE GRUAS']).addAnswer(
    [
        '📄 *PUENTE GRUAS*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ5 = addKeyword(['5', 'GRUA BRAZO ARTICULADO']).addAnswer(
    [
        '📄 *GRUA BRAZO ARTICULADO*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ6 = addKeyword(['6', 'GRUAS MOVILES']).addAnswer(
    [
        '📄 *GRUAS MOVILES*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ7 = addKeyword(['7', 'GRUAS PESCANTE BANDERA-POLIPASTO']).addAnswer(
    [
        '📄 *GRUAS PESCANTE BANDERA-POLIPASTO*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ8 = addKeyword(['8', 'GRUAS TORRE']).addAnswer(
    [
        '📄 *GRUAS TORRE*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ9 = addKeyword(['9', 'GRUAS PLATAFORMA- transportar o remolcar otros vehículos']).addAnswer(
    [
        '📄 *GRUAS PLATAFORMA- transportar o remolcar otros vehículos*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ10 = addKeyword(['10', 'MONTACARGAS CONTRABALANCEADO']).addAnswer(
    [
        '📄 *MONTACARGAS CONTRABALANCEADO*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ11 = addKeyword(['11', 'MONTACARGAS ELECTRICOS']).addAnswer(
    [
        '📄 *MONTACARGAS ELECTRICOS*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ12 = addKeyword(['12', 'MONTACARGAS TELESCOPICO-(TELEHANDLER)']).addAnswer(
    [
        '📄 *MONTACARGAS TELESCOPICO-(TELEHANDLER)*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ13 = addKeyword(['13', 'ELEVADOR DE CREMALLERA']).addAnswer(
    [
        '📄 *RETROEXCAVADORA-RETROCARGADOR*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ14 = addKeyword(['14', 'ELEVADOR DEL PLUMACATE']).addAnswer(
    [
        '📄 *ELEVADOR DEL PLUMACATE*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ15 = addKeyword(['15', 'PLATAFORMAS PARA TRABAJO AEREO -MANLIFT']).addAnswer(
    [
        '📄 *PLATAFORMAS PARA TRABAJO AEREO -MANLIFT*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ16 = addKeyword(['16', 'PLATAFORMAS PARA TRABAJO AEREO - CARRO CANASTA']).addAnswer(
    [
        '📄 *PLATAFORMAS PARA TRABAJO AEREO - CARRO CANASTA*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ17 = addKeyword(['17', 'PLUMA DE ACCIONAMIENTO MANUAL-WINCH']).addAnswer(
    [
        '📄 *PLUMA DE ACCIONAMIENTO MANUAL-WINCH*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ18 = addKeyword(['18', 'GRÚAS WINCHE-BALCON.']).addAnswer(
    [
        '📄 *GRÚAS WINCHE-BALCON.*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ19 = addKeyword(['19', 'GRÚAS TALADRO-DIGGER DERRICK.']).addAnswer(
    [
        '📄 *GRÚAS TALADRO-DIGGER DERRICK.*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ20 = addKeyword(['20', 'WINCHES PARA LEVANTAMIENTO DE PERSONAS']).addAnswer(
    [
        '📄 *WINCHES PARA LEVANTAMIENTO DE PERSONAS*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowIZ21 = addKeyword(['21', 'MALACATE MINERO']).addAnswer(
    [
        '📄 *MALACATE MINERO*:',
        '',
        '*DURACION:* 24 Horas (3 DIAS SIN EXPERIENCIA)',
        '*DURACION:* 16 Horas (2 DIAS CON EXPERIENCIA)',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula y dependiendo del tamaño del grupo a formar con la maquinaria',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowC14 = addKeyword(['14', 'IZAJE DE CARGAS']).addAnswer([
    '*IZAJE DE CARGAS:*',
    '👉 *1*-APAREJADOR SEÑALERO',
    '👉 *2*-INSPECTOR DE APAREJOS DE IZAJE DE CARGAS',
    '👉 *3*-SUPERVISOR DE IZAJE MECANICO DE CARGAS',
    '👉 *4*-PUENTE GRUAS',
    '👉 *5*-GRUA BRAZO ARTICULADO',
    '👉 *6*-GRUAS MOVILES ',
    '👉 *7*-GRUAS PESCANTE BANDERA-POLIPASTO ',
    '👉 *8*-GRUAS TORRE',
    '👉 *9*-GRUAS PLATAFORMA- transportar o remolcar otros vehículos ',
    '👉 *10*-MONTACARGAS CONTRABALANCEADO',
    '👉 *11*-MONTACARGAS ELECTRICOS',
    '👉 *12*-MONTACARGAS TELESCOPICO-(TELEHANDLER)',
    '👉 *13*-ELEVADOR DE CREMALLERA',
    '👉 *14*-ELEVADOR DEL PLUMACATE',
    '👉 *15*-PLATAFORMAS PARA TRABAJO AEREO -MANLIFT',
    '👉 *16*-PLATAFORMAS PARA TRABAJO AEREO - CARRO CANASTA',
    '👉 *17*-PLUMA DE ACCIONAMIENTO MANUAL-WINCH',
    '👉 *18*-GRÚAS WINCHE-BALCON.',
    '👉 *19*-GRÚAS TALADRO-DIGGER DERRICK. ',
    '👉 *20*-WINCHES PARA LEVANTAMIENTO DE PERSONAS',
    '👉 *21*-MALACATE MINERO',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowIZ10 , flowIZ11, flowIZ12, flowIZ13, flowIZ14, flowIZ15, flowIZ16, flowIZ17, flowIZ18, flowIZ19, flowIZ20, flowIZ21, flowIZ3, flowIZ4, flowIZ5, flowIZ6, flowIZ7, flowIZ8, flowIZ9, flowIZ1, flowIZ2, flowmenu])

const flowCURSOS = addKeyword(['1', 'cursos', 'capacitacion']).addAnswer(
    [
        '📄 Aqui tienes los cursos que ofrecemos segun tu linea de interes:',
        '👉 *1*-TRABAJO EN ALTURAS',
        '👉 *2*-TRANSPORTE',
        '👉 *3*-SEGURIDAD VIAL',
        '👉 *4*-SISTEMAS DE GESTION',
        '👉 *5*-ALIMENTOS',
        '👉 *6*-SEGURIDAD Y SALUD EN EL TRABAJO',
        '👉 *7*-AUTOMOTRIZ',
        '👉 *8*-MINERIA',
        '👉 *9*-ELECTRICA',
        '👉 *10*-TURISMO',
        '👉 *11*-CONSTRUCCION',
        '👉 *12*-INDUSTRIAL',
        '👉 *13*-MAQUINARIA PESADA',
        '👉 *14*-IZAJE DE CARGAS',
        '⬅ *MENU*- Volver al menu anterior',
        '\n Digita un *NUMERO* o el *NOMBRE* para seleccionar el area de formación',
    ],
    null,
    null,
    [flowC2, flowC3, flowC4, flowC5, flowC6, flowC7, flowC8, flowC9, flowC10, flowC11, flowC12, flowC13, flowC14, flowC1, flowmenu]
)

const flowCOM1 = addKeyword(['1', 'Electricidad domiciliaria']).addAnswer(
    [
        '📄 *Electricidad domiciliaria*:',
        '',
        '*DURACION:* 100 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM2 = addKeyword(['2', 'Riesgo eléctrico']).addAnswer(
    [
        '📄 *RIESGO ELECTRICO*:',
        '',
        '*DURACION:* 10 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM3 = addKeyword(['3', 'Trabajo en Caliente']).addAnswer(
    [
        '📄 *TRABAJO EN CALIENTE*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM4 = addKeyword(['4', 'Uso y manejo de herramientas electro manuales']).addAnswer(
    [
        '📄 *MANEJO DE HERRAMIENTAS MANUALES*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)



const flowCOM5 = addKeyword(['5', 'Manipulación de sustancias peligrosas']).addAnswer(
    [
        '📄 *MANIPULACIONES DE MATERIALES-SUSTANCIAS PELIGROSAS*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM6 = addKeyword(['6', 'Manipulacion de alimentos']).addAnswer(
    [
        '📄 *MANIPULACION DE ALIMENTOS*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM7 = addKeyword(['7', 'Mecánica y electridad de motocicletas']).addAnswer(
    [
        '📄 *MECANICA Y ELECTRICIDAD DE MOTOCICLETAS*:',
        '',
        '*DURACION:* 100 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM8 = addKeyword(['8', 'Mecánica básica automotriz']).addAnswer(
    [
        '📄 *MECANICA BASICA AUTOMOTRIZ*:',
        '',
        '*DURACION:* 40 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula Y taller de mecanica',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM9 = addKeyword(['9', 'MOVIMIENTO DE TIERRAS-OPERACION SEGURA EN TODO TIPO DE MAQUINARIA PESADA']).addAnswer(
    [
        '*MAQUINARIA PESADA:*',
    '👉 *1*-RETROEXCAVADORA-RETROCARGADOR',
    '👉 *2*-MINI-CARGADOR DE RUEDAS DESLIZANTES',
    '👉 *3*-EXCAVADORA SOBRE ORUGAS',
    '👉 *4*-BULLDOZER SOBRE ORUGAS',
    '👉 *5*-CAMION MINERO-DUMPER',
    '👉 *6*-CAMION VACTOR',
    '👉 *7*-CARGADOR FRONTAL',
    '👉 *8*-MOTONIVELADORA',
    '👉 *9*-TRACTO CAMIONES ARTICULADOS',
    '👉 *10*-VIBROCOMPACTADOR DE CILINDROS',
    '👉 *11*-TRACTO ARADO',
    '👉 *12*-OPERADOR DE CAMION VACTOR',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowMP10,flowMP11,flowMP12, flowMP2, flowIND3, flowMP4, flowMP5, flowMP6, flowMP7, flowMP8, flowMP9, flowMP1, flowmenu]
)

const flowCOM10 = addKeyword(['10', 'IZAJE DE CARGAS-OPERACION SEGURA EN TODO TIPO DE GRUAS Y APAREJADOR']).addAnswer(
    [
       '*IZAJE DE CARGAS:*',
    '👉 *1*-APAREJADOR SEÑALERO',
    '👉 *2*-INSPECTOR DE APAREJOS DE IZAJE DE CARGAS',
    '👉 *3*-SUPERVISOR DE IZAJE MECANICO DE CARGAS',
    '👉 *4*-PUENTE GRUAS',
    '👉 *5*-GRUA BRAZO ARTICULADO',
    '👉 *6*-GRUAS MOVILES ',
    '👉 *7*-GRUAS PESCANTE BANDERA-POLIPASTO ',
    '👉 *8*-GRUAS TORRE',
    '👉 *9*-GRUAS PLATAFORMA- transportar o remolcar otros vehículos ',
    '👉 *10*-MONTACARGAS CONTRABALANCEADO',
    '👉 *11*-MONTACARGAS ELECTRICOS',
    '👉 *12*-MONTACARGAS TELESCOPICO-(TELEHANDLER)',
    '👉 *13*-ELEVADOR DE CREMALLERA',
    '👉 *14*-ELEVADOR DEL PLUMACATE',
    '👉 *15*-PLATAFORMAS PARA TRABAJO AEREO -MANLIFT',
    '👉 *16*-PLATAFORMAS PARA TRABAJO AEREO - CARRO CANASTA',
    '👉 *17*-PLUMA DE ACCIONAMIENTO MANUAL-WINCH',
    '👉 *18*-GRÚAS WINCHE-BALCON.',
    '👉 *19*-GRÚAS TALADRO-DIGGER DERRICK. ',
    '👉 *20*-WINCHES PARA LEVANTAMIENTO DE PERSONAS',
    '👉 *21*-MALACATE MINERO',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
],
null,
null,  
[flowIZ10 , flowIZ11, flowIZ12, flowIZ13, flowIZ14, flowIZ15, flowIZ16, flowIZ17, flowIZ18, flowIZ19, flowIZ20, flowIZ21, flowIZ3, flowIZ4, flowIZ5, flowIZ6, flowIZ7, flowIZ8, flowIZ9, flowIZ1, flowIZ2, flowmenu]
)

const flowCOM11 = addKeyword(['11', 'Básico en minas']).addAnswer(
    [
        '📄 *SEGURIDAD BASICA EN MINAS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM12 = addKeyword(['12', 'Primeros auxilios']).addAnswer(
    [
        '📄 *PRIMEROS AUXILIOS BASICOS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM13 = addKeyword(['13', 'Soporte vital básico']).addAnswer(
    [
        '📄 *SOPORTE VITAL BASICO*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM14 = addKeyword(['14', 'Capacitación en implementación de Planes de emergencia(Brigada de Emergencia)']).addAnswer(
    [
        '📄 *IMPLEMENTACION DE PLANES DE EMERGENCIA: PLAN DE EMERGENCIA, PLAN AMBIENTAL, ESTANDAR INTEGRADO*:',
        '',
        '*DURACION:* 24 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM15 = addKeyword(['15', 'Manejo defensivo']).addAnswer(
    [
       '📄 *MANEJO DEFENSIVO*:',
        '*DURACION:* 8 Horas',

        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM16 = addKeyword(['16', 'Seguridad vial']).addAnswer(
    [
        '📄 *SEGURIDAD VIAL*:',
        '',
        '*DURACION:* 8 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM17 = addKeyword(['17', 'Transporte de mercancías peligrosas']).addAnswer(
    [
        '📄 *CURSO BASICO OBLIGATORIO PARA CONDUCTORES QUE TRANSPORTAN MECANCIAS PELIGROSAS*:',
        '',
        '*DURACION:* 60 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM18 = addKeyword(['18', 'Monitoras de transporte escolar']).addAnswer(
    [
        '📄 *MONITOR-ADULTO ACOMPAÑANTE RUTA ESCOLAR*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM19 = addKeyword(['19', 'TRABAJO EN ALTURAS']).addAnswer([
    '*TRABAJO EN ALTURAS:*',
    '👉 *1*-ADMINISTRATIVO PARA JEFES DE ÁREA',
    '👉 *2*-COORDINADORES PARA TRABAJO EN ALTURAS',
    '👉 *3*-TRABAJADOR AUTORIZADO PARA TRABAJO EN ALTURAS',
    '👉 *4*-REENTRENAMIENTO PARA TRABAJO EN ALTURAS',
    '👉 *5*-ARMADOR DE ANDAMIOS',
    '👉 *6*-INSTALACIÓN E INSPECCIÓN DE ANCLAJES DE PROTECCIÓN CONTRA CAÍDAS',
    '👉 *7*-INSPECTOR DE ELEMENTO DE PROTECCION CONTRA CAIDAS',
    '👉 *8*-RESCATE INDUSTRIAL EN ALTURAS',
    '👉 *9*-PROGRAMA DE ESPACIOS CONFINADOS',
    '⬅ *MENU*- Volver al menu anterior',
    '\n Digita un *NUMERO* para seleccionar el curso al que esta interesado',
    null,
    null, 
    [flowTA1, flowTA2, flowTA3, flowTA4, flowTA5, flowTA6, flowTA7, flowTA8, flowTA9]
])

const flowCOM20 = addKeyword(['20', 'Armador de andamios']).addAnswer(
    [
        '📄 *ARMADOR DE ANDAMIOS*:',
        '',
        '*DURACION:* 16 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* Comunicate con tu asesor de *COMFABOY*',
        '(El precio varia segun tu categoria o subsidios que apliques)',
        'para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En PISTA DE ENTRENAMIENTO',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOM21 = addKeyword(['21', 'Curso de Interpretación de planos arquitectónico']).addAnswer(
    [
       '📄 *INTERPRETACIÓN DE PLANOS ARQUITECTÓNICOS PARA MAESTROS DE OBRAS CIVILES Y ARQUITECTÓNICAS*:',
        '',
        '*DURACION:* 40 Horas',
        '*HORARIO:* 8am-12m 12m-5pm (La felxibilidad del horario dependera del grupo de trabajo)',
        '*PRECIO:* para obtener el precio por particular o empresa comunicarse al los numeros para agendar',
        ' ',
        '*PRACTICAS:* En el aula',
        '*UBICACION*: Carrera 12 No 55A-60 Sogamoso, Boyaca Frente al SENA INDUSTRIAL',
        'Si tienes alguna otra duda escribe *ASESOR* y atenderemos a tu mensaje',
        '',
        'Agenda tu curso llamando a los siguientes numeros:',
        '👉 *3135567524*',
        '👉 *3214407791*',
    ],
    null,
    null,  
    [flowASESOR]
)

const flowCOMFABOY = addKeyword(['2', 'cursos con convenio comfaboy', 'comfaboy']).addAnswer(
    [
        '📄 Aqui tienes los cursos que ofrecemos en convenio con *COMFABOY*:',
        '👉 *1*-Electricidad domiciliaria',
        '👉 *2*-Riesgo eléctrico',
        '👉 *3*-Trabajo en Caliente',
        '👉 *4*-Uso y manejo de herramientas electro manuales',
        '👉 *5*-Manipulación de sustancias peligrosas',
        '👉 *6*-Manipulacion de alimentos',
        '👉 *7*-Mecánica y electridad de motocicletas',
        '👉 *8*-Mecánica básica automotriz',
        '👉 *9*-MOVIMIENTO DE TIERRAS-OPERACION SEGURA EN TODO TIPO DE MAQUINARIA PESADA',
        '👉 *10*-IZAJE DE CARGAS-OPERACION SEGURA EN TODO TIPO DE GRUAS Y APAREJADOR',
        '👉 *11*-Básico en minas',
        '👉 *12*-Primeros auxilios',
        '👉 *13*-Soporte vital básico',
        '👉 *14*-Capacitación en implementación de Planes de emergencia(Brigada de Emergencia)',
        '👉 *15*-Manejo defensivo',
        '👉 *16*-Seguridad vial',
        '👉 *17*-Transporte de mercancías peligrosas',
        '👉 *18*-Monitoras de transporte escolar',
        '👉 *19*-TRABAJO SEGURO EN ALTURAS TODOS LOS NIVELES',
        '👉 *20*-Armador de andamios',
        '👉 *21*-Curso de Interpretación de planos arquitectónico',
    ],
    null,
    null,
    [flowCOM3, flowCOM4, flowCOM5, flowCOM6, flowCOM7, flowCOM8, flowCOM9, flowCOM10, flowCOM11, flowCOM12, flowCOM13, flowCOM14, flowCOM15, flowCOM16, flowCOM17, flowCOM18, flowCOM19, flowCOM20, flowCOM21, flowCOM1, flowCOM2, flowmenu]    
)

const flowPrincipal = addKeyword(['hola','menu', 'ole', 'alo','hola, necesito información del curso de:', 'hola buenas tardes','hola buenos dias', 'buen dia','buenas tardes','buenos dias','¡Hola! Podrías darme más información de...'])
    .addAnswer('🙌 Hola bienvenido a la *Escuela de Gestion MAPS*')
    .addAnswer(
        [
            'Aqui te puedo ayudar con todo lo que necesites, escribe el *NUMERO* o la *PALABRA* en negrilla',
            ' ',
            '👉 *1*-*CURSOS* para ver los cursos y capacitaciones que tenemos para ti',
            ' ',
            '👉 *2*-*CURSOS CON CONVENIO COMFABOY*  aqui podras ver todos los cursos que actualmente tienen convenio comfaboy con nosotros',
            ' ',
            '👉 *3*-*ASESOR* Si quieres una atención mas directa te puedo comunicar con mas de nuestros asesores',
        ],
        null,
        null,
        [flowCURSOS, flowCOMFABOY, flowASESOR]
    )

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
