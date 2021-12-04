//La idea es hacer un Login, con una pequeña tienda. Todo ambientado en un Hospital con diferentes planes médicos.

    function usuariosNuevos(nombre, apellido, email, password, sexo) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.password = password;
        this.sexo = sexo;
    };

// Al presionar la tecla 'Enter' valida el formulario de login

    window.addEventListener("keypress", function(e){

        if ( e.key == "Enter"){
            login();
        }
    }
    )

// Función que registra los datos de una persona en un string para posteriormente guardarlo como JSON
    function registro(){

        let nombre = document.getElementById("inputNombre").value;
        let apellido = document.getElementById("inputApellido").value;
        let email = document.getElementById("inputEmail").value;
        let password = document.getElementById("inputPassword").value;
        let sexo = document.getElementById("inputSexo").value;

        const usuarioNuevo = new usuariosNuevos (nombre, apellido, email, password, sexo);

        let usuarioJSON = JSON.stringify(usuarioNuevo);

        localStorage.setItem("usuarioNuevo", usuarioJSON);

    }

// Función que valida el Login
    function login(){

        let json = localStorage.usuarioNuevo;
        let usuarioString = JSON.parse(json);

        let user = document.getElementById("exampleInputEmail1").value;
        let contrasena = document.getElementById("exampleInputPassword1").value;

        if (user == usuarioString.email && contrasena == usuarioString.password){
            localStorage.setItem("usuarioActual", usuarioString.nombre);
            window.location="pages/principal.html";
        }
    }

// Función que cambia el titulo de bienvenida con el nombre del usuario

    function cambioNombre(){

        let userActual = localStorage.getItem("usuarioActual");
        document.getElementById("nombre").innerHTML = "Hola, "+userActual+"!";
        
    }

    

