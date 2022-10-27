var Opcion1=document.getElementById("Opcion1");
var Opcion2=document.getElementById("Opcion2")
var Opcion3=document.getElementById("Opcion3")
var modalidad = document.getElementById("Modalidad");
var programa = document.getElementById("Programa");

Opcion1.innerHTML = "";
Opcion2.innerHTML = "";
Opcion3.innerHTML = "";

var TyC=document.createElement('TyC');
var btnSiguiente=document.createElement('btnSiguiente');
var codPresencial=document.createElement('codPresencial');

let Matricula=80000
let cuotaTecnico=60000
let cuotaCurso=48000
let ncuotaTecnico=24
let ncuotaCurso=6.75
let promo=0.10

function selectPrograma(){
    if(modalidad.value==="Virtual" && programa.value==="tecnico"){
        TyC.innerHTML = `
            <select onChange="BtnSiguiente()" class="ProgramaTecnicoV form-select col-6" name="nombPograma" id="nombPograma">
                <option disabled selected>Selecciona el técnico laboral</option>
                <option>Sistemas Informáticos</option>
            </select> `;   
        
        Opcion1.appendChild(TyC);
        Opcion2.innerHTML = "";
        Opcion3.innerHTML = "";
        nombrePrograma.innerHTML = "";
        beneficios.innerHTML = "";
        cuota.innerHTML = "";
        matricula.innerHTML = "";
        total.innerHTML = "";
        medioPago.innerHTML = "";
        column1.innerHTML = "";
        column2.innerHTML = "";
    } else if(modalidad.value==="Virtual" && programa.value==="curso"){
        TyC.innerHTML = `
            <select onChange="BtnSiguiente()" class="ProgramaCursoV form-select col-6" name="nombPograma" id="nombPograma">
                <option disabled selected>Selecciona el curso</option>
                <option>Excel Básico</option>
                <option>Excel Avanzado con Énfasis en Tablas Dinámicas</option>
                <option>Razonamiento Lógico y Matemático</option>
                <option>Inglés 1</option>
                <option>Inglés 2</option>
            </select>`;     
        Opcion1.appendChild(TyC);
        Opcion2.innerHTML = "";
        Opcion3.innerHTML = "";
        nombrePrograma.innerHTML = "";
        beneficios.innerHTML = "";
        cuota.innerHTML = "";
        matricula.innerHTML = "";
        total.innerHTML = "";
        medioPago.innerHTML = "";
        column1.innerHTML = "";
        column2.innerHTML = "";
    } else if(modalidad.value==="Presencial" && programa.value==="tecnico"){
        TyC.innerHTML = `
            <input onChange="IngresoCodP()" class="my-1 form-control" type="text" placeholder="Ingrése el ténico laboral" name="nombPograma" id="nombPograma" required > `;     
        Opcion1.appendChild(TyC);
        Opcion2.innerHTML = "";
        Opcion3.innerHTML = "";
        nombrePrograma.innerHTML = "";
        beneficios.innerHTML = "";
        cuota.innerHTML = "";
        matricula.innerHTML = "";
        total.innerHTML = "";
        medioPago.innerHTML = "";
        column1.innerHTML = "";
        column2.innerHTML = "";
    } else if(modalidad.value==="Presencial" && programa.value==="curso"){
        TyC.innerHTML = `
            <input onChange="IngresoCodP()" class="my-1 form-control" type="text" placeholder="Ingrése el curso" name="nombPograma" id="nombPograma" required > `;     
        Opcion1.appendChild(TyC);
        Opcion2.innerHTML = "";
        Opcion3.innerHTML = "";
        nombrePrograma.innerHTML = "";
        beneficios.innerHTML = "";
        cuota.innerHTML = "";
        matricula.innerHTML = "";
        total.innerHTML = "";
        medioPago.innerHTML = "";
        column1.innerHTML = "";
        column2.innerHTML = "";
    } else{
        TyC.innerHTML = ``;     
        Opcion1.appendChild(TyC);
        Opcion2.innerHTML = "";
        Opcion3.innerHTML = "";
        nombrePrograma.innerHTML = "";
        beneficios.innerHTML = "";
        cuota.innerHTML = "";
        matricula.innerHTML = "";
        total.innerHTML = "";
        medioPago.innerHTML = "";
        column1.innerHTML = "";
        column2.innerHTML = "";
    }
    
}

function IngresoCodP(otraVez){
    if(!otraVez){
        codPresencial.innerHTML = `
        <label for="codPresencial" class="form-label mt-2">Código de horario</label>
        <input onChange="BtnSiguiente(value)" class="codPresencial  form-control" type="text" placeholder="Ingrése código de horario" name="codPresencial" id="codPresencial" required >`;     
        Opcion2.appendChild(codPresencial);
        Opcion3.innerHTML = "";
    } else {
        codPresencial.innerHTML = `
        <label for="codPresencial" class="form-label mt-2">Código de horario Incorrecto</label>
        <input onChange="BtnSiguiente(value)" class="codPresencial form-control" type="text" placeholder="Ingrése código de horario correcto" name="codPresencial" id="codPresencial" required >`;     
        Opcion2.appendChild(codPresencial);
        Opcion3.innerHTML = "";
    }
    
}

function BtnSiguiente(codPresencial){
    if(modalidad.value==="Virtual"){
        btnSiguiente.innerHTML = `
        <div class="my-2 "> <div class="btn mBoton px-3" id="mBoton" onClick="formulario2()">Siguiente</div> </div>`;     
        Opcion3.appendChild(btnSiguiente);
    } else if(modalidad.value==="Presencial"){
        if(codPresencial==="incaas2022"){
            btnSiguiente.innerHTML = `
            <div class="my-2 "> <div class="btn mBoton px-3" id="mBoton" onClick="formulario2()">Siguiente</div> </div>`;     
            Opcion3.appendChild(btnSiguiente);
        } else{
            IngresoCodP(otraVez=true)
        }
    } else{
        btnSiguiente.innerHTML = ``;     
            Opcion3.appendChild(btnSiguiente);
    }
    resumenPago()
}

var formu1=document.getElementById("formu1");
var formu2=document.getElementById("formu2");
var formu3=document.getElementById("formu3");
var Nombre=document.getElementById("Nombre");
var Apellido=document.getElementById("Apellido");
var cedula=document.getElementById("cedula");
var Email=document.getElementById("Email");
var Telefono=document.getElementById("Telefono");
var ciudad=document.getElementById("ciudad");
var Terminos=document.getElementById("Terminos");

var btnSiguienteFor3=document.getElementById("btnSiguienteFor3");
var sig=document.createElement('sig');

function formulario2(){             
    formu1.className="visually-hidden formu1 d-flex flex-column col-12" 
    formu2.className="formu2"
    formu3.className="formu3 visually-hidden"
}
function formulario3(){
    console.log(Terminos.checked)
    if(Nombre.value && Apellido.value && cedula.value && Email.value && Telefono.value && ciudad.value && Terminos.checked ){
        formu1.className="formu1 visually-hidden" 
        formu2.className="formu2 visually-hidden"
        formu3.className="formu3"
    } else{
        sig.innerHTML = `
            <p class="text-danger">*Completa todos los campos y acepta los términos y condiciones</p>
            `; 
        btnSiguienteFor3.appendChild(sig);
    }
}

function atrasFormu1(){
    formu1.className="formu1 d-flex flex-column col-12" 
    formu2.className="visually-hidden formu2"
    formu3.className="visually-hidden formu3"
}

function atrasFormu2(){
    formu1.className="visually-hidden formu1 d-flex flex-column col-12" 
    formu2.className="formu2"
    formu3.className="visually-hidden formu3"
}

var nombrePrograma=document.getElementById("nombrePrograma");
var beneficios=document.getElementById("beneficios");
var cuota=document.getElementById("cuota");
var matricula=document.getElementById("matricula");
var total=document.getElementById("total");

nombrePrograma.innerHTML = "";
beneficios.innerHTML = "";
cuota.innerHTML = "";
matricula.innerHTML = "";
total.innerHTML = "";

var nombreP=document.createElement('nombreP');
    nombreP.className="d-flex flex-row justify-content-between"
var Benef=document.createElement('Benef');
var CuotaP=document.createElement('CuotaP');
    CuotaP.className="d-flex flex-row"
var MatriculaP=document.createElement('matriculaP');
    MatriculaP.className="d-flex flex-row"
var TotalP=document.createElement('TotalP');
    TotalP.className="d-flex flex-row justify-content-between"

var medioPago=document.getElementById("medioPago");
medioPago.innerHTML = "";
var medioPagoP=document.createElement('medioPagoP');
    medioPagoP.className="d-flex flex-row"
var column1=document.getElementById("column1");
column1.innerHTML = "";
var column1P=document.createElement('column1P');
var column2=document.getElementById("column2");
column2.innerHTML = "";
var column2P=document.createElement('column2P');


function resumenPago(){
    if(programa.value==="tecnico"){
        nombreP.innerHTML = `
            <h5 class="programa pe-3"> ${nombPograma.value} </h5> 
            <h5><b>${"$" + (Matricula + cuotaTecnico)}</b></h5>`; 
        nombrePrograma.appendChild(nombreP);

        
        CuotaP.innerHTML = `
            <h6><del>${"$" + (cuotaTecnico*2)}</del></h6>
            <p class="ps-2">${"$" + (cuotaTecnico)}</p>`;
        cuota.appendChild(CuotaP);

        TotalP.innerHTML = `
            <h5>Total</h5>
            <h5><b> ${"$" + (Matricula + cuotaTecnico)} </b></h5>`;
        total.appendChild(TotalP);

        medioPagoP.innerHTML = `
        <p><b>Facilidad de pago:</b></p>
        <p class="ps-2">${ncuotaTecnico} cuotas </p>`;
        medioPago.appendChild(medioPagoP);
    } else if(programa.value==="curso") {
        nombreP.innerHTML = `
            <h5 class="programa pe-3"> ${nombPograma.value} </h5> 
            <h5><b>${"$" + (Matricula + cuotaCurso)}</b></h5>`; 
        nombrePrograma.appendChild(nombreP);
        
        CuotaP.innerHTML = `
            <h6><del>${"$" + (cuotaCurso*2)}</del></h6>
            <p class="ps-2">${"$" + (cuotaCurso)}</p>`;
        cuota.appendChild(CuotaP);

        TotalP.innerHTML = `
            <h5>Total</h5>
            <h5><b> ${"$" + (Matricula + cuotaCurso)} </b></h5>`;
        total.appendChild(TotalP);

        medioPagoP.innerHTML = `
        <p><b>Facilidad de pago:</b></p>
        <p class="ps-2">${ncuotaCurso} cuotas </p>`;
        medioPago.appendChild(medioPagoP);
    }

    MatriculaP.innerHTML = `
        <h6><del>${"$" + (Matricula*2)}</del></h6>
        <p class="ps-2">${"$" + (Matricula)}</p>`;
    matricula.appendChild(MatriculaP);

    if(modalidad.value==="Virtual"){
        Benef.innerHTML = `
            <li>Avanza a tu propio ritmo</li>
            <li>Clases Pre-grabadas</li>
            <li>Acceso a solicitud de citas con tutor personalizado</li>
            <li>Feedback de talleres y examenes</li>
            <li>Acceso a plataforma las 24 hs</li>`;
        beneficios.appendChild(Benef);
    } else if(modalidad.value="Presencial"){
        Benef.innerHTML = `
            <li>Avanza de la mano del tutor</li>
            <li>Grupos reducidos</li>
            <li>Salones y laboratorios</li>
            <li>Feedback de talleres y examenes</li>
            <li>Proyectos prácticos</li>`;
        beneficios.appendChild(Benef);
    }

    column1P.innerHTML = `
        <p class="mb-0 pb-0 pe-3">Programa con <b> beneficio educativo</b></p>
        <p class="mt-0 pt-0"><em>(Primera cuota)</em></p>`;
    column1.appendChild(column1P);

    column2P.innerHTML = `
        <p class="mb-0 pb-0 pe-3">Matrícula</p>
        <p class="mt-0 pt-0"><em>(Una sola vez)</em></p>`;
    column2.appendChild(column2P);
} 

var facilidadPago = document.getElementById("facilidadPago");

function fPago(){
    if(facilidadPago.value==="unPago"){
        nombrePrograma.innerHTML = "";
        cuota.innerHTML = "";
        matricula.innerHTML = "";
        total.innerHTML = "";
        medioPago.innerHTML = "";
        column1.innerHTML = "";
        column2.innerHTML = "";
        
        if(programa.value==="tecnico"){
            nombreP.innerHTML = `
                <h5 class="programa pe-3"> ${nombPograma.value} </h5> 
                <h5><b>${"$" + (Matricula + (ncuotaTecnico*cuotaTecnico))*(1-promo)}</b></h5>`; 
            nombrePrograma.appendChild(nombreP);

            CuotaP.innerHTML = `
                <h6><del>${"$" + (ncuotaTecnico*cuotaTecnico*2)}</del></h6>
                <p class="ps-2">${"$" + ((ncuotaTecnico*cuotaTecnico*(1-promo)))}</p>`;
            cuota.appendChild(CuotaP);

            TotalP.innerHTML = `
                <h5>Total</h5>
                <h5><b> ${"$" + (Matricula + (ncuotaTecnico*cuotaTecnico))*(1-promo)} </b></h5>`;
            total.appendChild(TotalP);

            medioPagoP.innerHTML = `
                <p><b>Facilidad de pago:</b></p>
                <p class="ps-2">${ncuotaTecnico} cuotas </p>`;
            medioPago.appendChild(medioPagoP);
        } else if(programa.value==="curso") {
            nombreP.innerHTML = `
                <h5 class="programa pe-3"> ${nombPograma.value} </h5> 
                <h5><b>${"$" + (Matricula + (ncuotaCurso*cuotaCurso))*(1-promo)}</b></h5>`; 
            nombrePrograma.appendChild(nombreP);
            
            CuotaP.innerHTML = `
                <h6><del>${"$" + (ncuotaCurso*cuotaCurso*2)}</del></h6>
                <p class="ps-2">${"$" + ((ncuotaCurso*cuotaCurso*(1-promo)))}</p>`;
            cuota.appendChild(CuotaP);

            TotalP.innerHTML = `
                <h5>Total</h5>
                <h5><b> ${"$" + (Matricula + (ncuotaCurso*cuotaCurso))*(1-promo)} </b></h5>`;
            total.appendChild(TotalP);

            medioPagoP.innerHTML = `
                <p><b>Facilidad de pago:</b></p>
                <p class="ps-2">${ncuotaCurso} cuotas </p>`;
            medioPago.appendChild(medioPagoP);
        }

        MatriculaP.innerHTML = `
            <h6><del>${"$" + (Matricula*2)}</del></h6>
            <p class="ps-2">${"$" + ((Matricula)*(1-promo))}</p>`;
        matricula.appendChild(MatriculaP);

        medioPagoP.innerHTML = `
            <p><b>Facilidad de pago:</b></p>
            <p class="ps-2">1 Pago (10% dcto extra)</p>`;
        medioPago.appendChild(medioPagoP);

        column1P.innerHTML = `
        <p class="mb-0 pb-0 pe-3">Programa con <b> beneficio educativo</b></p>`;
        column1.appendChild(column1P);

        column2P.innerHTML = `
            <p class="mb-0 pb-0 pe-3">Matrícula</p>`;
        column2.appendChild(column2P);
    }else{
        resumenPago()
    }
    console.log(Nombre.value, Apellido.value, ciudad.value)

}

var medioPago = document.getElementById('medioPago')
function pagoLinea(){  
    medioPago.value="Online"
    if(programa.value==="tecnico"){
        if(facilidadPago.value==="unPago"){
            window.location = "https://biz.payulatam.com/L0d06e212DCBFB9";
        }else if(facilidadPago.value==="cuotas"){
            window.location = "https://biz.payulatam.com/L0d06e242DD7B16";
        }
    } else if(programa.value==="curso"){
        if(facilidadPago.value==="unPago"){
            window.location = "https://biz.payulatam.com/L0d06e22B49FDC3";
        }else if(facilidadPago.value==="cuotas"){
            window.location = "https://biz.payulatam.com/L0d06e205327F72";
        }
    }
    
}

pagoTotalTecnico= Matricula + cuotaTecnico;
pagoTotalCurso = Matricula + cuotaCurso;
pagoTotalTecnicoPromo= (Matricula + (ncuotaTecnico*cuotaTecnico))*(1-promo);
pagoTotalCursoPromo = (Matricula + (ncuotaCurso*cuotaCurso))*(1-promo);

function pagoTransferencia(){
    medioPago.value="Bancolombia"
    if(programa.value==="tecnico"){
        if(facilidadPago.value==="unPago"){
            Total=pagoTotalTecnicoPromo;
        }else if(facilidadPago.value==="cuotas"){
            Total=pagoTotalTecnico;
        }
    } else if(programa.value==="curso"){
        if(facilidadPago.value==="unPago"){
            Total=pagoTotalCursoPromo;
        }else if(facilidadPago.value==="cuotas"){
            Total=pagoTotalCurso;
        }
    }
    Swal.fire({
    title: 'Incripción realizada',
    // text: "Solo falta un paso!"+pagoTotalTecnico,
    html:
        '<p class="text-start"> Solo falta un paso! tu cupo está reservado, para confirmarlo debes realizar tu pago antes de las próximas <b>24 horas</b>, hazlo por medio de una consignación bancaria a una cuenta de ahorros de Bancolombia, tienes dos opciones: </p>' +
        '<ul class="text-start"> <li>Consignar por medio de un corresponsal bancario de Bancolombia o transferir virtualmente, si así lo haces, no deberás pagar ningún costo adicional por la transacción.</li> <li>Consignar por medio de la sucursal física de Bancolombia, si lo haces así, debes pagar el costo adicional de la transacción, en el banco te dirán cuál es ese cobro.</li> </ul> ' +
        '<p class="text-start">Realiza el pago con los siguientes datos:</p>' + 
        '<p class="text-start"><b>Cuenta de ahorros N°:</b> 91211860036</p>'+ 
        '<p class="text-start"><b>Titular N°:</b> Dorys M Lasso Yela</p>'+ 
        '<p class="text-start"><b>Cédula N°:</b> 30726466</p>' + 
        '<p class="text-start"> Una vez realices el pago envía una foto del comprobante al <b>WhatsApp: 321 663 2268</b> o <b>Email: instituto.incaasoficial@gmail.com</b></p>' + '<b>Total: </b>' + Total,
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '#6AB528',
    cancelButtonColor: '#083B86',
    confirmButtonText: 'Hecho!',
    cancelButtonText: 'Cambiar medio de pago',
    allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = "index.html";
        }
    });
}

function pagoTransferenciaDigital(){
    medioPago.value="Nequi o Daviplata"
    if(programa.value==="tecnico"){
        if(facilidadPago.value==="unPago"){
            Total=pagoTotalTecnicoPromo;
        }else if(facilidadPago.value==="cuotas"){
            Total=pagoTotalTecnico;
        }
    } else if(programa.value==="curso"){
        if(facilidadPago.value==="unPago"){
            Total=pagoTotalCursoPromo;
        }else if(facilidadPago.value==="cuotas"){
            Total=pagoTotalCurso;
        }
    }
    Swal.fire({
    title: 'Incripción realizada',
    text: "Solo falta un paso!",
    html:
        '<p class="text-start"> Solo falta un paso! tu cupo está reservado, para confirmarlo debes realizar tu pago antes de las próximas <b>24 horas</b>, hazlo por medio de una transferencia por la App Nequi o DaviPlata: </p>' +
        '<p class="text-start">Realiza el pago con los siguientes datos:</p>' + 
        '<p class="text-start"><b>Cuenta N°:</b> 313 744 4734</p>'+ 
        '<p class="text-start"> Una vez realices el pago envía una foto del comprobante al <b>WhatsApp: 321 663 2268</b> o <b>Email: instituto.incaasoficial@gmail.com</b></p>'+ '<b>Total: </b>' + Total,
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '#6AB528',
    cancelButtonColor: '#083B86',
    confirmButtonText: 'Hecho!',
    cancelButtonText: 'Cambiar medio de pago',
    allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = "index.html";
        }
    });
}

function pagoGiro(){
    medioPago.value="Giro"
    if(programa.value==="tecnico"){
        if(facilidadPago.value==="unPago"){
            Total=pagoTotalTecnicoPromo;
        }else if(facilidadPago.value==="cuotas"){
            Total=pagoTotalTecnico;
        }
    } else if(programa.value==="curso"){
        if(facilidadPago.value==="unPago"){
            Total=pagoTotalCursoPromo;
        }else if(facilidadPago.value==="cuotas"){
            Total=pagoTotalCurso;
        }
    }
    Swal.fire({
    title: 'Incripción realizada',
    text: "Solo falta un paso!",
    html:
        '<p class="text-start"> Solo falta un paso! tu cupo está reservado, para confirmarlo debes realizar tu pago antes de las próximas <b>24 horas</b>, hazlo por medio de un giro de efectivo en el punto más cercano, puede ser un Super giros, Efecty, Baloto o cualquier otro de tu elección. Recuerda que debes adicionar el costo de la transacción, la entidad te informará cuál es dicho costo </p>' +
        '<p class="text-start">Realiza el pago con los siguientes datos:</p>' +
        '<p class="text-start"><b>Titular N°:</b> Dorys M Lasso Yela</p>'+ 
        '<p class="text-start"><b>Cédula N°:</b> 30726466</p>' + 
        '<p class="text-start"> Una vez realices el pago envía una foto del comprobante al <b>WhatsApp: 321 663 2268</b> o <b>Email: instituto.incaasoficial@gmail.com</b></p>'+ '<b>Total: </b>' + Total,
    icon: 'success',
    showCancelButton: true,
    confirmButtonColor: '#6AB528',
    cancelButtonColor: '#083B86',
    confirmButtonText: 'Hecho!',
    cancelButtonText: 'Cambiar medio de pago',
    allowOutsideClick: false,
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = "index.html";
        }
    });
}

// var term = document.getElementById("term");
function aceptoTerminos(){
    Swal.fire({
    title:'Terminos y Condiciones',
    html:
        '<p class="text-start"> Con la aceptación de este beneficio educativo estoy consiente que: </p>' +
        '<ol class="text-start"> <li>Reconozco que en caso de mi retiro voluntario no me será reintegrado el dinero que aporté hasta dicha instancia.</li> <li> Me comprometo a cumplir el manual de convivencia del instituto.</li> <li> Este formulario es único e intransferible. </li> <li> La vinculación a los programas es voluntaria e independiente a la Institución Educativa a la que pertenece. </li> <li> Con este formulario de afiliación, el estudiante podrá ingresar a los diferentes cursos y programas técnicos laborales en el departamento de Nariño donde se tenga sedes y convenios, además, en modalidad virtual desde cualquier parte del mundo. </li> <li> Al finalizar el programa, el estudiante recibirá: si es un Técnico Laboral, una Certificación de Aptitud Ocupacional; si es un Curso, una Constancia de Asistencia con intensidad horaria de 100h. </li> <li>Al finalizar el programa, el estudiante deberá hacer un pago de Derechos de Certificación, el costo varía según la fecha de culminación. </ol>' + 
        '<p class="text-center"><b>INCAAS comprometido a brindar una capacitación con calidad y responsabilidad.</b></p>',
    icon: 'info',
    confirmButtonColor: '#6AB528',
    confirmButtonText: '<i class="fa fa-thumbs-up"></i> Acepto',
    })
}




const btn = document.getElementById('buttonEnvioForm');

document.getElementById('form')
.addEventListener('submit', function(event) {
event.preventDefault();

btn.value = 'Sending...';

const serviceID = 'default_service';
const templateID = 'template_u8v6l4k';

emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    // btn.value = 'Send Email';
    // alert('Sent!');
    }, (err) => {
    // btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
});