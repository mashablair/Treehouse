const fruits = ['apple', 'pear', 'cherry'];

for (let i = 0; i<fruits.length; i++) {
  console.log(fruits[i]);
}

fruits.forEach(function(fruit) {
  console.log(fruit);
});

let capitalizedFruits = [];

fruits.forEach(function(fruit) {
  let capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
  console.log(capitalizedFruit);
});

console.log(capitalizedFruits);

const prices = [1,2,3,4,5]; // 15
let total = 0;
prices.forEach(function(price) {
  total += price;
});

console.log(total);

const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

let sNames = [];

names.forEach(function(name, index) {
  if (name.charAt(0) === 'S') {
    sNames.push(name);
    console.log(`${index + 1}) ${name}`);
  }
});
  
  console.log(sNames);
