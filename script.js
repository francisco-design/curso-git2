function welcome(name, age) {
  return `welcome ${name} you are ${age} years old`;
}
console.log(welcome("francisco", 22));
function problemas(problema, duracion, danos) {
  if (problema !== "fobia") {
    console.log("error");
  } else {
    console.log("exito");
  }
  console.log(`mi problema es la ${problema} y llevo ${duracion} y me ha provocado ${danos}`);
}
problemas("fobia", 6, "mucha ansiedad");
const fruits = ["mango", "manzana", "banano", "aguacate"];
console.log(fruits.includes("banano"));
for (const fruit in fruits) {
  console.log(fruits[fruit]);
}
for (let fruit = 0; fruit < fruits.length; fruit++) {
  console.log(fruits[fruit]);

}
alert(fruits);
let pedido = prompt("que fruta quieres?");
switch (pedido) {
  case "mango":
    console.log("vale 22");
    break;
  case "manzana":
    console.log("vale 73");
    break;
  default:
    console.log("lo sentimos no tenemos esta fruta");
    break;
}