/**
 * @author AlumnoTARDE
 */
function cambiaColor() {
	this.style.backgroundColor = "rgb(255, 255, 183)";
};


function aBlanco() {
	this.style.backgroundColor = "#ffffff";
};


function validar() {
	
validarNick = document.getElementById("name").value;
	if (validarNick.length == 0) {
		alert("Debes escribir un Nombre de Usuario");
		return false;
	};


validarContra1 = document.getElementById("pass1").value;
	if (validarContra1.length == 0) {
		alert("Debes escribir una Contraseña");
		return false;
	};
	
	
validarContra2 = document.getElementById("pass2").value;
	if (validarContra2 != document.getElementById("pass1").value) {
		alert("Las contraseñas no coinciden");
		return false
	};
	
	
validarNombre = document.getElementById("Nombre").value;
	if (validarNombre.length == 0) {
		alert("Debes escribir tu nombre");
		return false;
	};
	
	
validarApellidos = document.getElementById("Apellidos").value;
	if (validarApellidos.length == 0) {
		alert("Debes escribir tus apellidos");
		return false;
	};
	
	
validarEdad = document.getElementById("edad").value;
	if (validarEdad.length == 0) {
		alert("Debes escribir tu edad");
		return false;
	};
	return true;	
};

window.onload = function() {
	document.getElementById("formregis").onsubmit = validar;
	document.getElementById("name").onclick = cambiaColor;
	document.getElementById("pass1").onclick = cambiaColor;
	document.getElementById("pass2").onclick = cambiaColor;
	document.getElementById("Nombre").onclick = cambiaColor;
	document.getElementById("Apellidos").onclick = cambiaColor;
	document.getElementById("edad").onclick = cambiaColor;
	document.getElementById("name").onblur = aBlanco;
	document.getElementById("pass1").onblur = aBlanco;
	document.getElementById("pass2").onblur = aBlanco;
	document.getElementById("Nombre").onblur = aBlanco;
	document.getElementById("Apellidos").onblur = aBlanco;
	document.getElementById("edad").onblur = aBlanco;
};
