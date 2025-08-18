let boton_volver = document.getElementById("volver");
boton_volver.addEventListener("click", function() {
    window.history.back();
});

let evaluacion = document.querySelectorAll('.evaluacion');
let intentos = 2;
let etiqueta = document.getElementById('etiqueta');
let boton = document.getElementById('boton');
const modal = document.getElementById('evaluar');
let confirmar = document.getElementById('confirmar');

modal.addEventListener('click', ()=>{
	if(etiqueta.value === '<img>' && boton.value === '<button>nombre</button>'){
        confirmar.style.display = 'flex';
    }else{
        intentos = intentos - 1;
	    repaso();
        alert('te quedan ' + intentos + ' intentos');
    }
});

function repaso(){
    if(intentos == 0){
        alert('debes repasar!');
        window.history.back();
    }
}