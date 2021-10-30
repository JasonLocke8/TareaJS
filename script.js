let edad = prompt("¿En qué etapa de su vida está? Ingrese su edad: ")

if (edad>0 && edad<=4){
    alert("Usted es un bebe")
} else if (edad>=5 && edad<=13){
    alert("Usted es un niño")
} else if (edad>=14 && edad<=17){
    alert("Usted es un adolescente")
} else if (edad>=18 && edad<=35){
    alert("Usted es un adulto joven")
} else if (edad>=36 && edad<=64){
    alert("Usted es un adulto")
} else if (edad>=65){
    alert("Usted pertenece a la tercera edad")
}