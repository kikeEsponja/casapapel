let boton = document.getElementById("volver");
boton.addEventListener("click", function() {
    window.history.back();
});

let mal1 = document.getElementById('mal1');
let mal2 = document.getElementById('mal2');
let mal3 = document.getElementById('mal3');
let intentos_sel = 2;

const evaluar = () => {
    intentos_sel = intentos_sel - 1;
    alert('te quedan ' + intentos_sel + ' intentos');
	repaso();
}

mal1.addEventListener('click', evaluar);
mal2.addEventListener('click', evaluar);
mal3.addEventListener('click', evaluar);

function repaso(){
    if(intentos_sel == 0){
    	alert('debes repasar!');
    	window.history.back();
    }
}