//La idea es hacer un Login, con una pequeña tienda. Todo ambientado en un Hospital con diferentes planes médicos.

function usuario(user, contrasena) {
    this.user = user;
    this.contrasena = contrasena;
}

let usuariosAdmins = ["nico","juan"];

const usuario1 = new usuario ("nico","1234");
const usuario2 = new usuario ("pablo","4321");
const usuario3 = new usuario ("juan","1122");
const usuario4 = new usuario ("ana", "2222");

let usuariosIngresados = ["nico","pablo","juan","ana",];

function login(){  

    var user = document.getElementById("exampleInputEmail1").value;
    var contrasena = document.getElementById("exampleInputPassword1").value;
    
    //Fijarse si el usuario está en la lista de usuarios admins (Pueden crear otros usuarios en la página)

    let existeUser = usuariosAdmins.find(user => user=user);
    console.log(existeUser);
    console.log(usuariosAdmins);
    let quepag;

    if (user != existeUser ){
        console.log("Usuario no Admin");
        quepag = "pages/principal.html";
    } else {
        console.log("Usuario Admin");
        quepag = "pages/principalAdmin.html";
    }

    //Fijarse si la contraseña es la de dicho usuario

    if (user=="" && contrasena=="") { 
        alert("Ingrese los datos!");
    } else if (user==usuario1.user && contrasena==usuario1.contrasena) { 
        window.location=quepag; 
    } else if (user==usuario2.user && contrasena==usuario2.contrasena) { 
        window.location=quepag; 
    } else if (user==usuario3.user && contrasena==usuario3.contrasena) { 
        window.location=quepag;
    } else if (user==usuario4.user && contrasena==usuario4.contrasena) { 
        window.location=quepag;
    };

    };

function ordenarUsers(){
    //Funcion que ordena alfabeticamente todos los usuarios para posteriormente mostrarlos en la pagina
    usuariosIngresados.sort();
    console.log(usuariosIngresados);
}

    