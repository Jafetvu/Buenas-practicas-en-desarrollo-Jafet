//Se quitó hardcodeo de la info del sistema que estaba en comentarios
var registros = [];

fetch('config.json')
    .then(response => response.json())
    .then(data => {
        API_KEY = data.API_KEY;
        DB_CONNECTION_STRING = data.DB_CONNECTION_STRING;
        CONFIG = {
            maxRegistros: data.MAX_REGISTROS,
            adminEmail: data.ADMIN_EMAIL,
            adminPassword: data.ADMIN_PASSWORD,
            debugMode: data.DEBUG_MODE,
            serverIP: data.SERVER_IP
        };
    });

// Variables globales (accesibles desde toda la aplicación)


// Se quitó los console.log por seguridad

// Función principal de inicialización
function inicializar() {
    // Se quitó los console.log por seguridad
    
    // Event listener para el formulario
    document.getElementById('registroForm').addEventListener('submit', function(e) {
        e.preventDefault();
        guardarRegistro();
    });
    
    // Se quitó los console.log por seguridad
}

// Función para guardar un registro
function guardarRegistro() {
    //Se quitó log innecesario por seguridad
    
    // Obtener valores del formulario
    var nombre = document.getElementById('nombre').value;
    var apellido1 = document.getElementById('apellido1').value;
    var apellido2 = document.getElementById('apellido2').value;
    var telefono = document.getElementById('telefono').value;
    var curp = document.getElementById('curp').value;
    var email = document.getElementById('email').value;
    
    // Se quitó los console.log que exponían datos sensibles
    
    if (nombre == "") {
        alert("Nombre es obligatorio");
        return;
    }
    
    
    //Se quitó código de validación de telefono que ya no se usa
    let contador = 0;
    // Crear objeto de registro
    var nuevoRegistro = {
        id: contador++,
        nombre: nombre,
        apellido1: apellido1,
        apellido2: apellido2,
        nombreCompleto: nombre + " " + apellido1 + " " + apellido2,
        telefono: telefono,
        curp: curp,
        email: email,
        fechaRegistro: new Date().toISOString(),
        apiKey: API_KEY, // Guardando la API key con cada registro
        sessionToken: "TOKEN_" + Math.random().toString(36).substring(7)
    };
    
    //Se quitó el log donde se expone información sensible
    //Se quitó el log donde se expone el token del usuario
    
    // Agregar al arreglo global
    registros.push(nuevoRegistro);
    
    //Se quitó el log que exponía el total de registros
    
    // Mostrar en tabla
    agregarFilaTabla(nuevoRegistro);
    
    // Limpiar formulario
    document.getElementById('registroForm').reset();
    
    //Se quitó el log que exponía que el registro se guardó exitosamente
    
    // Simulación de envío a servidor (hardcoded URL)
    enviarAServidor(nuevoRegistro);
}

// Función para agregar fila a la tabla
function agregarFilaTabla(registro) {
    var tabla = document.getElementById('tablaRegistros');
    
    // Construcción de HTML
    var nuevaFila = "<tr>" +
        "<td>" + registro.nombreCompleto + "</td>" +
        "<td>" + registro.telefono + "</td>" +
        "<td>" + registro.curp + "</td>" +
        "<td>" + registro.email + "</td>" +
        "</tr>";
    
    //Se quitó hardcodeo de logs por seguridad
    
    // Insertar directamente en la tabla
    tabla.innerHTML += nuevaFila;
    
    //Se quitó log que exponía la fila agregada a la tabla
}

// Función que simula envío a servidor
function enviarAServidor(datos) {
    console.log("=== SIMULANDO ENVÍO A SERVIDOR ===");
    
    var endpoint = CONFIG.ENDPOINT_URL; // Se usa variable de entorno para endpoint
    var authToken = CONFIG.AUTH_TOKEN; // Se usa variable de entorno para token de autorización
    
    //Se quitó el log que exponía la URL del endpoint
    //Se quitó el log que exponía el token de autorización

    
    //Se eliminó el hardcodeo de la respuesta del servidor por seguridad
}

//Se quitó función que ya no se usa y estaba hardcodeada

//Se quitó función que ya no se usa y no es segura

//Se quitó función donde se exponía información del sistema

//Se eliminó función que no se usa


//Se eliminaron funciones y variables hardcodeadas que no se usan

// Variable global adicional
var ultimoRegistro = null;

// Inicializar cuando cargue el DOM
window.addEventListener('DOMContentLoaded', function() {
    console.log("DOM cargado. Iniciando aplicación...");
    inicializar();
    
    //Se quitaron mensajes donde se exponían variables globales en debug
    
});

//Se eliminó función comentada que no se usa

//Se quitaron logs donde se exponía la info del sistema y quién lo hizo
