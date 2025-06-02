document.addEventListener('DOMContentLoaded', function() {
  // Example starter JavaScript for disabling form submissions if there are invalid fields
  (() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', async event => {
         event.preventDefault(); 
        if (!form.checkValidity()) {
            //event.preventDefault()
            event.stopPropagation()
            form.classList.add('was-validated')
         } else {
          const formData = new FormData(form); // Recoger datos del formulario

          // Enviar petición fetch al archivo PHP
          try {
          // Usar fetch con async/await para enviar los datos al archivo PHP
          const response = await fetch('insertearchivodelprocesodeformulario.php', {
            method: 'POST',
            body: formData
          });

          // Asegurarse de que la respuesta sea JSON
          const data = await response.json()

          // Comprobar si la respuesta fue exitosa
          if (data.success) {
            // var feedback = document.createElement("div")
            // form.appendChild(feedback)
            //feedback.textContent = 'Formulario enviado: ' + data.message
            const feedbackModal = new bootstrap.Modal(document.getElementById('feedback'))
            feedbackModal.show()  // Abre modal
            form.classList.remove('was-validated')
            form.reset()
            grecaptcha.execute('insertarcódigodeCaptcha', {action: 'formulario'})
            .then(function(token) {
            var recaptchaResponse = document.getElementById('recaptchaResponse');
            recaptchaResponse.value = token;
            });
          } else {
            alert('Error al enviar el formulario: ' + data.message)
            return
          }
        } catch (error) {
          // Manejar errores de la petición fetch
          console.error('Error en la petición:', error);
          alert('Hubo un problema al enviar el formulario. Intenta de nuevo.')
          return
        }
      }

        
      }, false)
    })
  })()
})