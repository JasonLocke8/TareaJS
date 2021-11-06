let num = parseInt(prompt("Ingrese un número entre 10 y 20 (inclusive): "));

while (num<10 | num>20){

    num = parseInt(prompt("Número incorrecto, porfavor ingrese un número entre 10 y 20 (inclusive): "));
}

let mensaje = prompt("Ingrese un mensaje que quiera repetir: ")

for(  i = 0 ;  i < num ; i = i + 1 ){

    console.log(mensaje); 

}

alert("Mensaje repetido " + num + " veces en consola.");