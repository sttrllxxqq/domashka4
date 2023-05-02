// 1
let result = "";
for (let i = 10; i <= 20; i++) {
  result += i + ",";
}
result = result.slice(0, -1); 
console.log(result);
// 2
for (let i = 10; i <= 20; i++) {
  console.log(i * i);
}
// 3
for (let i = 1; i <= 10; i++) {
  console.log(i + " * 7 = " + (i * 7));
}
// 4
let sum = 0;
for (let i = 1; i <= 15; i++) {
  sum += i;
}
console.log(sum);
// 5
let product = 1;
for (let i = 15; i <= 35; i++) {
  product *= i;
}
console.log(product);
// 6
let sum = 0;
for (let i = 1; i <= 500; i++) {
  sum += i;
}
let average = sum / 500;
console.log(average);
// 7
let sum = 0;
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sum += i;
  }
}
console.log(sum);
// 8 
for (let i = 100; i <= 200; i++) {
  if (i % 3 === 0) {
    console.log(i);
  }
}
// 9
const number = 12;
for (let i = 1; i <= number; i++) {
  if (number % i === 0) {
    console.log(i);
  }
}
// 10
const number = 12;
let count = 0;
for (let i = 1; i <= number; i++) {
  if (number % i === 0 && i % 2 === 0) {
    count++;
  }
}
console.log(count);
// 11
const number = 24;
let sum = 0;
for (let i = 1; i <= number; i++) {
  if (number % i === 0 && i % 2 === 0) {
    sum += i;
  }
}
console.log(`Сума парних дільників числа ${number} дорівнює ${sum}.`);
// 12
let table = "";
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    table += `${i} * ${j} = ${i * j}\t`;
  }
  table += "\n";
}
console.log(table);
