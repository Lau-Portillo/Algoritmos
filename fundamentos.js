// TIPOS DE DATOS 
let nombre = "Laura Portillo";
let edad = 25;
let mayorEdad  = true;
let estatura;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof mayorEdad);
console.log(typeof estatura);

// TIPOS DE DATOS COMPLEJOS 
let frutas = ['Pera', 'Manzana', 'Melon']
let auto={
    modelo: 2024,
    marca: 'chevrolet',
    color: 'blanco',
    cilindraje: 2100,
    tipo: 'camioneta'
}

// CONCATENANDO VARIABLE 
console.log("Bienvenido usuario " + nombre + " su edad es " + edad + " y su fruta favorita es " + frutas[2])


// ESTRUCTURAS DE CONTROL CODICIONALES 

console.log("--------------------------------------------------------------------------------")

if (edad > 25) {
    console.log("Es un adulto")
}
else if(edad >18){
    console.log("Es un joven")
}
else if(edad >13){
    console.log("Es un pelado")
}
else{
    console.log("Es un niño")
}

let tipoSuscripcion = "Platium"


switch (tipoSuscripcion) {
    case "Basic":
        console.log("Muy suave")
        break;
    case "Gold":
        console.log("Bune plpa, pero sigue siendo pobre")
        break;
    case "Platium":
        console.log("El mejor plan")
        break;
    default:
        console.log("Este plan no existe")
        break;
}

// ESTRUCTURA DE CONTROL DE BUCLES

let contador = 0

while (contador < 11) {
    console.log("Este es el numero " + contador)
    contador = contador + 1 
}

for (let i = 100; i>-1 ; i=i - 10){
    console.log("Contador con for " + i)
}

