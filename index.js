/**
 * @author Tato
 */

function cambiaColor() {
	this.style.backgroundColor = "rgb(255, 255, 183)";
};

function aBlanco() {
	this.style.backgroundColor = "#ffffff";
};

function validar() {
	
	valorNombre = document.getElementById("name").value;
		if (valorNombre.length == 0) {
			alert("Debes escribir un nombre");
		return false;
		};
		
	valorContra = document.getElementById("pass").value;
		if (valorContra.length == 0) {
			alert("Debes escribir una contraseña");
		return false;
		};	
	
	return true;
};

	

window.onload = function(){
	document.getElementById("formuser").onsubmit= validar;
	document.getElementById("name").onclick = cambiaColor;
	document.getElementById("pass").onclick = cambiaColor;
	document.getElementById("name").onblur = aBlanco;
	document.getElementById("pass").onblur = aBlanco;
};
