document.addEventListener('DOMContentLoaded', function() {
    const generarContraseñaButton = document.getElementById('generarContraseña');
    const resultadoDiv = document.getElementById('resultado');

    generarContraseñaButton.addEventListener('click', generarContraseña);

    function generarContraseña() {
        let mayusculas = document.getElementById('mayusculas').checked;
        let minusculas = document.getElementById('minusculas').checked;
        let numeros = document.getElementById('numeros').checked;
        let caracteresEspeciales = document.getElementById('caracteresEspeciales').checked;
        let longitud = parseInt(document.getElementById('longitud').value);

        if (!mayusculas && !minusculas && !numeros && !caracteresEspeciales) {
            mostrarMensajeError();
            return;
        }

        const caracteres = [];
        if (mayusculas) caracteres.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''));
        if (minusculas) caracteres.push(...'abcdefghijklmnopqrstuvwxyz'.split(''));
        if (numeros) caracteres.push(...'0123456789'.split(''));
        if (caracteresEspeciales) caracteres.push(...'!@#$%^&*()_+-={}[]|\\:;<>,.?/'.split(''));

        const contraseña = generarStringAleatoria(caracteres, longitud);
        resultadoDiv.textContent = contraseña;
    }

    function generarStringAleatoria(caracteres, longitud) {
        let resultado = '';
        for (let i = 0; i < longitud; i++) {
            resultado += caracteres[Math.floor(Math.random() * caracteres.length)];
        }
        return resultado;
    }

    function mostrarMensajeError() {
        const errorElement = document.createElement('p');
        errorElement.textContent = "Por favor, seleccione al menos una opción.";
        errorElement.style.color = 'red';
        resultadoDiv.parentNode.insertBefore(errorElement, resultadoDiv.nextSibling);
        
        setTimeout(function() {
            errorElement.remove();
        }, 3000);
    }
});
