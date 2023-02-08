let contador = 0;
while (contador < 10) {
  console.log(`while ${contador}`);
  contador++;
}
do {
  console.log(`do while ${contador}`);
  contador++
} while (contador < 10);

/* 
for (inicializacion de variable; condicion; decremento o incremento) {
  sentencias que ejecuta el for
  sentencias que ejecuta el for
  sentencias que ejecuta el for
  sentencias que ejecuta el for
}
*/
// for
for (let i = 0; i < 10; i++) {
  console.log(`for ${i}`);  
}
let numeros = [10,20,30,40,50,60,70,80,90,100];
for (let i = 0; i< numeros.length; i++) {
  console.log(numeros[i]);
}
// for in solo itera objetos
const francisco = {
  name: "Francsco",
  lastName: "Amaya",
  age: 22
}
for (const propiedad in francisco) {
  console.log(`key: ${propiedad}, value ${francisco[propiedad]}`);
}
// for of itera cualquier objeto
for (const elemento of numeros) {
  console.log(elemento);
}
let cadena = "hola mundo";
for (const caracter of cadena) {
  console.log(caracter);
}
// ejercicios para for in con chat gpt
const roster = {
  name: "jhon",
  age: 3,
}
for (const animal in roster) {
  console.log(`key: ${animal}, value: ${roster[animal]}`);
}
for (const numero in numeros) {
  console.log(numeros[numero]);
}
for (const gallo in roster) {
  console.log(roster[gallo]);
}
let nombre = "francisco";
console.log(`hello ${nombre} welcome to our team`);
let radio = 5;
const PI = 3.1614;
let resultado = radio * radio * PI;
console.log(`el area del cirlculo es ${resultado}`);
const fruits = ["apple","melon","papaya"];
console.log("compras:");
for (const fruit in fruits) {
  console.log(fruits[fruit])
}
let mes = "febrero";
let fecha = 7;
let horaActual = 11;
console.log(`la fecha de hoy es ${fecha} de ${mes} y son las ${horaActual} pm`);
let multi = 12;
for (let index = 0; index <= multi; index++) {
  let resultadoMulti = multi * index;
  console.log(`${multi} * ${index}= ${resultadoMulti}`);
}

