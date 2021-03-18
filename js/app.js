// Esto es un comentario
var myVariable = 1; //<- Esto tiene un alcance que let
let myVariable2; // <- Esto tiene un alcance menor que var

const MYCONSTANT = "Esto es una constante";

myVariable2 = 3; // Asigne un valor mas abajo

let resultado = myVariable + myVariable2;

let resultadoConString = MYCONSTANT + resultado;

