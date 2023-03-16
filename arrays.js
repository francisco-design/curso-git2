const fruits = ["mango", "papaya", "manzana", "mamon", "jocote"];
fruits.map((fruit) => console.log(`la fruta es = ${fruit}`))
const animals = ["horse", "cat", "roster", "dog"];
let [animal1, animal2, animal3, animal4] = animals;
// empuja el elemento al final  del array
animals.push("elephant");
console.log(animal1, animal2, animal3, animal4);
for (const key in animals) {
  console.log(animals[key]);
}