/*
    Este programa simula una calculadora sencilla.
    Los operadores son: +, -, *, /, x^2, sqrt, x^y.
    Los números son flotantes y reales, así como los resultados.
    Dichos resultados se muestran en pantalla.
    El programa hará uso de la bilbioteca math.js para realizar las operaciones.
*/

var num1;
var num2;
var resultado;
var error = "No se puede operar con un número vacío. Por favor, introduzca un número.";

function suma() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        resultado = num1 + num2;
        document.getElementById("resultado").innerHTML = resultado;
        console.log(num1 + num2);    
    } else {
        document.getElementById("resultado").innerHTML = error;
    }
}

function resta() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        resultado = num1 - num2;
        document.getElementById("resultado").innerHTML = resultado;
        console.log(num1 - num2);    
    } else {
        document.getElementById("resultado").innerHTML = error;
    }
}

function multiplicacion() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        resultado = num1 * num2;
        document.getElementById("resultado").innerHTML = resultado;
        console.log(num1 * num2);    
    } else {
        document.getElementById("resultado").innerHTML = error;
    }
}

function division() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        resultado = num1 / num2;
        document.getElementById("resultado").innerHTML = resultado;
        console.log(num1 / num2);    
    } else {
        document.getElementById("resultado").innerHTML = error;
    }
}

function cuadrado() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1)) {
        resultado = num1 * num1;
        document.getElementById("resultado").innerHTML = resultado;
        console.log(num1 * num1);    
    } else {
        document.getElementById("resultado").innerHTML = error;
    }
}

function raiz() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1)) {
        resultado = Math.sqrt(num1);
        document.getElementById("resultado").innerHTML = resultado;
        console.log(Math.sqrt(num1));    
    } else {
        document.getElementById("resultado").innerHTML = error;
    }
}

function potencia() {
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);
    if (!isNaN(num1) && !isNaN(num2)) {
        resultado = Math.pow(num1, num2);
        document.getElementById("resultado").innerHTML = resultado;
        console.log(Math.pow(num1, num2));    
    } else {
        document.getElementById("resultado").innerHTML = error;
    }
}
