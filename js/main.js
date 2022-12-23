let modal="inactive";

const btn = document.getElementById('button');
const mensaje = document.getElementById('mensaje');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        var response = grecaptcha.getResponse();
        if (response.length == 0) {
            mensaje.innerHTML = `<h5 class="text-danger mt-3">Por favor, confirma que no eres un robot</h5>`;
            setTimeout(() => {
                mensaje.innerHTML = ``;
            }, 4000)
        } else {
            if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email.value)) {
                if (telefono.value > 0) {
                    if (/^[A-ZÁÉÍÓÚÑ, ]+$/i.test(nombre.value) && /^[A-ZÁÉÍÓÚÑ, ]+$/i.test(apellido.value)) {
                        if (programa.value === "disabled") {
                            mensaje.innerHTML = `<h5 class="text-danger mt-3">Por favor, seleccione el programa de interés.</h5>`;
                            setTimeout(() => {
                                mensaje.innerHTML = ``;
                            }, 4000)
                        } else {
                            btn.value = 'Eviando...';

                            const serviceID = 'default_service';
                            const templateID = 'template_m0mvoem';

                            emailjs.sendForm(serviceID, templateID, this)
                                .then(() => {
                                    btn.value = 'Si, quiero que me llamen!';
                                    form.reset();
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Mensaje enviado correctamente!',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                }, (err) => {
                                    btn.value = 'Si, quiero que me llamen!';
                                    alert(JSON.stringify(err));
                                });

                            form.reset();
                            grecaptcha.reset();
                        }
                    } else {
                        mensaje.innerHTML = `<h5 class="text-danger mt-3">Por favor, ingrese nombre o apellido correcto.</h5>`;
                        setTimeout(() => {
                            mensaje.innerHTML = ``;
                        }, 4000)
                    }
                } else {
                    mensaje.innerHTML = `<h5 class="text-danger mt-3">Por favor, ingrese un teléfono o celular correcto.</h5>`;
                    setTimeout(() => {
                        mensaje.innerHTML = ``;
                    }, 4000)
                }
            } else {
                mensaje.innerHTML = `<h5 class="text-danger mt-3">Por favor, ingrese un Email correcto.</h5>`;
                setTimeout(() => {
                    mensaje.innerHTML = ``;
                }, 4000)
            }

        }
    });

function seminario() {
    var programa = document.getElementById('programa');
    var otro = document.getElementById('otro');
    otro.innerHTML = "";
    var otroSem = document.createElement('otroSem');
    if (programa.value === "Seminario") {
        otroSem.innerHTML = `
                <input class="controls mt-2" type="otroSeminario" placeholder="¿Cuál? (área de interés)" name="otroSeminario" id="otroSeminario" required> `;
        otro.appendChild(otroSem);
    }
}

if (modal==="active"){
    $( document ).ready(function() {
        setTimeout(() => { 
            Swal.fire({
            background: '#0000',
            imageUrl: '/imag/popUp_modal.png',
            showCloseButton: true,
            showCancelButton: false,
            showConfirmButton: false,
            })
        }, 2000)
    });
}