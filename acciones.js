// Variables de estado
let diseñoColumnas = true;
let tituloOriginal = true;
let colorOriginal = true;
let imagenVisible = false;

// Referencias a elementos del DOM
const contenedorCiudades = document.getElementById('contenedor-ciudades');
const tituloPrincipal = document.getElementById('titulo-principal');
const titulosCiudad = document.querySelectorAll('.titulo-ciudad');
const descripcionesCiudad = document.querySelectorAll('.descripcion-ciudad');
const imagenFooter = document.getElementById('imagen-footer');

// Botones
const cambiarDisposicionBtn = document.getElementById('cambiar-disposicion');
const cambiarTituloBtn = document.getElementById('cambiar-titulo');
const cambiarColorBtn = document.getElementById('cambiar-color');
const cambiarImagenBtn = document.getElementById('cambiar-imagen');

// Funcionalidad para cambiar disposición de ciudades
cambiarDisposicionBtn.addEventListener('click', function() {
    if (diseñoColumnas) {
        contenedorCiudades.style.flexDirection = 'column';
        contenedorCiudades.style.alignItems = 'center';
        
        // Ajustar el ancho de las ciudades para modo columna
        document.querySelectorAll('.ciudad').forEach(ciudad => {
            ciudad.style.width = '80%';
            ciudad.style.margin = '10px 0';
        });
    } else {
        contenedorCiudades.style.flexDirection = 'row';
        contenedorCiudades.style.alignItems = 'stretch';
        
        // Restaurar el ancho de las ciudades para modo fila
        document.querySelectorAll('.ciudad').forEach(ciudad => {
            ciudad.style.width = '';
            ciudad.style.margin = '0 10px';
        });
    }
    diseñoColumnas = !diseñoColumnas;
});

// Funcionalidad para cambiar título principal
cambiarTituloBtn.addEventListener('click', function() {
    if (tituloOriginal) {
        tituloPrincipal.textContent = 'HTML & CSS: Curso práctico avanzado';
    } else {
        tituloPrincipal.textContent = 'University Demo';
    }
    tituloOriginal = !tituloOriginal;
});

// Funcionalidad para cambiar color de títulos y descripciones
cambiarColorBtn.addEventListener('click', function() {
    if (colorOriginal) {
        titulosCiudad.forEach(titulo => {
            titulo.style.color = 'red';
        });
        descripcionesCiudad.forEach(descripcion => {
            descripcion.style.color = 'darkred';
        });
    } else {
        titulosCiudad.forEach(titulo => {
            titulo.style.color = '';
        });
        descripcionesCiudad.forEach(descripcion => {
            descripcion.style.color = '';
        });
    }
    colorOriginal = !colorOriginal;
});

// Funcionalidad para mostrar/ocultar imagen en el footer
cambiarImagenBtn.addEventListener('click', function() {
    if (imagenVisible) {
        imagenFooter.style.display = 'none';
        cambiarImagenBtn.textContent = 'Mostrar imagen en footer';
    } else {
        imagenFooter.style.display = 'block';
        cambiarImagenBtn.textContent = 'Ocultar imagen en footer';
    }
    imagenVisible = !imagenVisible;
});