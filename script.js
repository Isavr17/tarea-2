document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.formulario');
    const submitButton = form.querySelector('.btn-enviar');

    submitButton.addEventListener('click', function(e) {
        e.preventDefault();

        const fields = form.querySelectorAll(':required');
        let isValid = true;

        fields.forEach(field => {
            if (!field.checkValidity()) {
                isValid = false;
                console.log(`El campo ${field.name} no es válido`);
            }
        });

        if (!isValid) {
            alert('Por favor, completa todos los campos obligatorios');
        } else {
            // logica
            console.log('Formulario válido, se puede enviar');
        }
    });
});
