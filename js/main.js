function validateForm(){
//PARA PODER VALIDAR LOS CAMPOS
    var nombre = document.getElementById("name").value; //LLamando a nombre
    var apellido = document.getElementById("lastname").value; //LLamando a apellido
    var correoElectronico = document.getElementById("input-email").value;  //LLamando al correo
    var contra = document.getElementById("input-password").value; //LLamando acontraseña
    

    //NOMBRE
    //NOMBRE
	if (nombre.length == 0 && apellido == 0 && correoElectronico == 0 && contrasenia == 0) {
		alert ("Debe completar todos los campos obligatorios.");
        
	} else {
       
		if(nombre == null || nombre.length == 0 || nombre == "") {
			alert("Escriba un nombre.");
		} else if ( /[0-9]/.test(nombre)) {
			alert("No ingrese números por favor.");
		} else if ( /^[a-z]/.test(nombre.charAt(0))) {
			alert ("Su Nombre debe comenzar con una mayúscula.");
		}
        
        //APELLIDO
		if(apellido == null || apellido.length == 0 || apellido == "") {
			alert("Escribe tu apellido.");
		} else if (/[0-9]/.test(apellido)) {
			alert("No ingrese números por favor.");
		} else if (/^[a-z]/.test(apellido.charAt(0))) {
			alert ("Su Apellido debe comenzar con una mayúscula.");
		}
     
        
        //CONTRASEÑA
		if (contra == null || contra.length == 0 || contra == "") {
			alert("Ingresa una contraseña.");
		} else if (contra.length < 6){
			alert("Contraseña no válida, debe tener como 6 caracteres como minimo.");
		}

		if (contra == "123456" || contra == "098754" || contra == "password") {
			alert ("'123456', '098754' y 'password' no son contraseñas válidas.");
		};
        
      
	};
}