// Función para mostrar una alerta cuando se carga la página
function showWelcomeAlert() {
    alert("Página ingresada");
}

// Ejecutar la función cuando la página se haya cargado completamente
window.onload = showWelcomeAlert;

document.getElementById('miBoton').addEventListener('click', function() {
    document.getElementById('miElemento').style.transition = 'all 2s';
    document.getElementById('miElemento').style.transform = 'translateX(100px)';
});
