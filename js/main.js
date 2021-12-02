//La idea es hacer un Login, con una pequeña tienda. Todo ambientado en un Hospital con diferentes planes médicos.

function usuario(user, contrasena, sexo) {
    this.user = user;
    this.contrasena = contrasena;
    this.sexo = sexo;
};

let usuariosAdmins = ["nico","juan"];

const usuario1 = new usuario ("nico","1234", "masculino");
const usuario2 = new usuario ("pablo","4321", "masculino");
const usuario3 = new usuario ("juan","1122", "masculino");
const usuario4 = new usuario ("ana", "2222", "femenino");

let usuariosIngresados = ["nico","pablo","juan","ana",];
let nombreUser;
let sexoUser;

function login(){  

    //Guardo en variables distintas los campos ingresados en la página
    
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
        quepag = "pages/principal.html";
    }

    //Fijarse si la contraseña es la de dicho usuario

    if (user=="" && contrasena=="") { 
        alert("Ingrese los datos!");
    } else if (user==usuario1.user && contrasena==usuario1.contrasena) { 
        window.location=quepag;
        sexoUser=usuario1.sexo;
    } else if (user==usuario2.user && contrasena==usuario2.contrasena) { 
        window.location=quepag;
        sexoUser=usuario2.sexo; 
    } else if (user==usuario3.user && contrasena==usuario3.contrasena) { 
        window.location=quepag;
        sexoUser=usuario3.sexo;
    } else if (user==usuario4.user && contrasena==usuario4.contrasena) { 
        window.location=quepag;
        sexoUser=usuario4.sexo;
    };

    };

function ordenarUsers(){
    //Funcion que ordena alfabeticamente todos los usuarios para posteriormente mostrarlos en la pagina
    usuariosIngresados.sort();
    console.log(usuariosIngresados);
};

function cambiarNombre(){

    nombreUser = prompt("Ingrese su nombre: ");
    console.log(sexoUser);
    document.getElementById("nombre").innerHTML=("Hola, "+nombreUser+"!");

    //El console.log muestra undefined ya que al ejecutarse de vuelta el script, se borran las variables

    // if(sexoUser = "masculino"){
    //     document.getElementById("descripcion").innerHTML=("Bienvenido a la página oficial de Arcane Hospital Center");
    // } else if (sexoUser = "femenino") {
    //     document.getElementById("descripcion").innerHTML=("Bienvenida a la página oficial de Arcane Hospital Center");
    // } else {
    //     document.getElementById("descripcion").innerHTML=("Bienvenido/a a la página oficial de Arcane Hospital Center");
    // };
    
};

    