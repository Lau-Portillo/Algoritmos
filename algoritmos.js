function saludar(){
    console.log("HOLA MUNDO")
    alert("Hello world")
}


// ALGORITMO QUE REALIZA UNA SUMA ENTRE DOS VALORES INGRESADOS POR EL USUARIO
function suma(){
    // 1. Declarar las variables necesarias para la funcion o algoritmo
    let A = 0
    let B = 0
    let SUMA = A + B

    // 2. Solicitar al usuario que ingrese los valores
    // y estos se asignas a las variables

    A = parseInt(prompt("Ingrese el primer valor a sumar"))
    B = parseInt(prompt("Ingrese el segundo valor a sumar"))

    // 3. Realizar el procedimiento
    SUMA = A + B

    // 4. Mostrar el resultado 
    alert("El resultado es: " + SUMA)
}


// ALGORITMO QUE REALIZA UNA SUMA, RESTA, MULTIPLICACION Y DIVICION ENTRE DOS VALORES INGRESADOS POR EL USUSARIO
 function opBasicas(){
    let Valor1 = 0
    let Valor2 = 0
    let suma = 0
    let resta = 0
    let multi = 0
    let div = 0

    Valor1 = parseInt(prompt("Ingrese el primer valor"))
    Valor2 = parseInt(prompt("Ingrese el segundo valor"))

    suma = Valor1 + Valor2
    alert("El resultado de la suma es: " + suma)

    resta = Valor1 - Valor2
    alert("El resultado de la resta es: " + resta)

    multi = Valor1 * Valor2
    alert("El resultado de la multiplicacion es: " + multi)
    
    div = Valor1 / Valor2 
    alert("El resultado de la divicion es: " + div)
 }


 // REALIZAR UN ALGORITMO QUE DETERMINE EL CUADRADO DE UN NUMERO QUE INGRESADO POR EL USUARIO

 function calcularCuadrado() {
    let numero = parseInt(prompt("Ingrese el número que desea elevar al cuadrado"));
    let cuadrado = numero * numero;
    alert("El cuadrado del número es: " + cuadrado);
}
// 4. REALIZAR UN ALGORITMO QUE DETERMINE EL AREA DE UN TRIANGULO A PARTIR DE LA BASE Y LA ALTURA INGRESADOS POR EL USUARIO

function areaTriangulo() {
    let base = parseFloat(prompt("Ingrese la base del triángulo"));
    let altura = parseFloat(prompt("Ingrese la altura del triángulo"));
    let area = (base * altura) / 2;
    alert("El área del triángulo es: " + area);
}

// 5 REALIZAR UN SISTEMA QUE CONVIERTA EN KILOMETROS, METROS Y CENTIMETROS UN VALOR DADO EN PULGADAS 

function convertirPulgadas() {
    let pulgadas = parseFloat(prompt("Ingrese el valor en pulgadas"));
    
    let centimetros = pulgadas * 2.54;
    let metros = centimetros / 100;
    let kilometros = metros / 1000;

    alert("Valor en centímetros: " + centimetros + " cm");
    alert("Valor en metros: " + metros + " m");
    alert("Valor en kilómetros: " + kilometros + " km");
}


//ALGORITMO QUE DETERMINE SI EL NUMERO ES PAR O IMPAR//
function paroimpar(){
    
//1. DECLARAR LAS VARIABLES NECESARIAS PARA LA FUNCION O ALGORITMO//
N1 = 0
    
N1 = parseInt(prompt(" ingrese el numero "))

if (N1 % 2 == 0){
    alert( N1 + " Es numero par")
}
else{
    alert( N1 + " es numero impar")
}
}

// ALGORITMO QUE DETERMINE EL MAYOR DE DOS NUMEROS INGRESADOS POR EL USUARIO //
function nummayor(){
    n1 = 0
    n2 = 0

    n1 = parseInt(prompt(" ingrese el primer numero"))
    n2 = parseInt(prompt(" ingrese el segundo numero"))

    if (n1 > n2){
        alert( n1 + " es mayor ")
    }
    else if (n1==n2){
        alert(prompt(" los numeros son iguales"))
    }
    else{
        alert( n2 + " es mayor")
    }
}

// ALGORITMO QUE DETERMINE EL NUMERO MENOR DE TRES NUMEROS//

function nummenor(){

    let n1 = 0
    let n2 = 0
    let n3 = 0
    
    n1 = parseInt(prompt(" ingrese el primer numero"))
    n2 = parseInt(prompt(" ingrese el segundo numero"))
    n3 = parseInt(prompt(" ingrese el tercer numero"))

    if((n1<n2)&&(n1<n3)){
        alert( n1 + " es menor que" + n2 + n3)
    }
    else if ((n2<n1)&&(n2<n3)){
        alert( n2 + " es menor que " + n1 + n3)
    }
    else if ((n3<n1)&&(n3<n2)){
        alert(n3 + "es menor que " + n1 + n2)
    }
    else{
        alert(" todos son iguales")
    }
}

//EL COLEGIO abc REQUIERE UN SISTEMA QUE CAPTURE EL NOMBRE DEL ESTUDIANTE, MATERIA Y 7 CALIFICACIONES ENTRE 1-10, CON ESTA INFORMACION DETERMINA SI EL ESTUDIANTE APROBO O REPROBO TENIENDO EN CUENTA QUE APRUEBA CON 6.1//

function pronotas(){

    let nombre = prompt(" ingrese su nombre")
    let materia = prompt(" ingrese materia")
    let cal1 = parseInt(prompt(" ingrese la primera nota de 1-10"))
    let cal2 = parseInt(prompt(" ingrese la segunda nota de 1-10"))
    let cal3 = parseInt(prompt(" ingrese la tercera nota de 1-10"))
    let cal4 = parseInt(prompt(" ingrese la cuarta nota de 1-10"))
    let cal5 = parseInt(prompt(" ingrese la quinta nota de 1-10"))
    let cal6 = parseInt(prompt(" ingrese la sexta nota de 1-10"))
    let cal7 = parseInt(prompt(" ingrese la septima nota de 1-10"))
    let pro = 0

    pro =  (cal1 + cal2 + cal3 + cal4 + cal5 + cal6 + cal7) / 7
    if( pro >= 6.1 ){

        alert(" el estudiante " + nombre + " aprobo  " + materia + " con promedio de " + pro)
    }
    else{
        alert(" el estudiante " + nombre + " reprobo  " + materia + " con promedio de " + pro)
    }
}

// UN INDIVIDUO DESEA INVERTIR SU CAPITAL DE UN BANCO Y REQUIERE SABER CUANTO DINERO GANARA DESPUES DE N NUMERO DE AÑOS TENIENDO EN CUENTA QUE LE BANCO PAGA UN INTERES MENSUAL DE DEL 0.7//

function inversion(){

    let capital, tiempo, interesGanancia, totalGanancias

    capital = parseInt(prompt(" por favor ingrese el capital "))
    tiempo = parseInt(promt(" por favor ingrese el tiempo"))

    interesGanancia = ((capital * 0.084) * tiempo)

    totalganacias = capital+interesGanancia
    alert(" cachon su ganacia es de: " + interesGanancia)
    alert(" cachon su ganacia total es de: " + totalGanancias)

}