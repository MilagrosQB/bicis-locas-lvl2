function validateForm(){
//Campos obligatorios	
	var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var inputEmail = document.getElementById("input-email").value;
    var inputPassword = document.getElementById("input-password").value;

	var mensaje1 = document.createElement("span");
    var mensaje2 = document.createElement("span");
    var mensaje3 = document.createElement("span");
    var mensaje4 = document.createElement("span");
    var mensaje5 = document.createElement("span");

//Condiciones 
    if (lastname.charAt(0) == lastname.charAt(0).toLowerCase()){
        var globo = document.getElementsByClassName("input-box")[1];
   		globo.appendChild(mensaje5);
        mensaje5.innerHTML= "La primera letra es con mayúscula.";
        globo.classList.add("error");
   	}else if(lastname == ""){
        var globo = document.getElementsByClassName("input-box")[1];
   		globo.appendChild(mensaje5);
        mensaje5.innerHTML= "Debe ingresar su nombre.";
        globo.classList.add("error");
    }else{
    	var globo = document.getElementsByClassName("input-box")[1];
    	verificar(globo.getElementsByTagName("span")[0], globo);
    }

//Email
    var mail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (mail.test(inputEmail) ){
    	var globo = document.getElementsByClassName("input-box")[2];
    	verificar(globo.getElementsByTagName("span")[0], globo);
    }

    else if(inputEmail == ""){
    	var globo = document.getElementsByClassName("input-box")[2];
    	globo.appendChild(mensaje1);
    	mensaje1.innerHTML= "Verifique su E-mail";
    	globo.classList.toggle("error");
    }
        
    else{
    	var globo = document.getElementsByClassName("input-box")[2];
    	globo.appendChild(mensaje1);
        mensaje1.innerHTML= "Verifique su E-mail";
        globo.classList.add("error");
    }

//Contraseña
    if (contra.length< 6 || (contra == "password") || (contra == "123456") || (contra=="098754")){
    	var globo = document.getElementsByClassName("input-box")[3];
   		globo.appendChild(mensaje3);
        mensaje3.innerHTML= "La contraseña tiene que tener al menos 6 caracteres";
        globo.classList.add("error");
    }else{
    	var globo = document.getElementsByClassName("input-box")[3];
    	verificar(globo.getElementsByTagName("span")[0], globo);
    }

//Seleccionar

    if( document.querySelector("select").value == 0 ){
    	var globo = document.getElementsByClassName("input-box")[4];
   		globo.appendChild(mensaje2);
        mensaje2.innerHTML= "Ingrese una opción";
        globo.classList.add("error");
    } else {
    	var globo = document.getElementsByClassName("input-box")[4];
    	verificar(globo.getElementsByTagName("span")[0], globo);
    }
}

