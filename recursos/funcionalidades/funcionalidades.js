// INDEX

let boton_html = document.getElementById("boton_html");
if(boton_html == null){
    console.log("No se ha encontrado el botón HTML");
}else{
    boton_html.addEventListener("click", function(){
        window.location.href = "./maquetacion/html.html";     
    });
}

let boton_css = document.getElementById("boton_css");
if(boton_css == null){
    console.log("No se ha encontrado el botón CSS");
}else{
    boton_css.addEventListener("click", function(){
        window.location.href = "./estilos/css.html";     
    });
}

let boton_js = document.getElementById("boton_js");
if(boton_js == null){
    console.log("No se ha encontrado el botón JS");
}else{
    boton_js.addEventListener("click", function(){
        window.location.href = "./javascript/javascript.html";     
    });
}

let boton_php = document.getElementById("boton_php");
if(boton_php == null){
    console.log("No se ha encontrado el botón JS");
}else{
    boton_php.addEventListener("click", function(){
        window.location.href = "./php/php.html";     
    });
}

// PARA TODAS
let boton = document.getElementById("volver");
boton.addEventListener("click", function() {
    window.history.back();
});