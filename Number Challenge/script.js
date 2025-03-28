const random1 = Math.floor(Math.random() * 100 + 1);
const random2 = Math.floor(Math.random() * 50 + 1);

const sumOutput = document.getElementById('sumOutput');
sumOutput.innerHTML = `${random1} + ${random2} = ${random1 + random2}`;

const differenceOutput = document.getElementById('differenceOutput');
differenceOutput.innerHTML = `${random1} - ${random2} = ${random1 - random2}`;

const productOutput = document.getElementById('productOutput');
productOutput.innerHTML = `${random1} * ${random2} = ${random1 * random2}`;

const quotientOutput = document.getElementById('quotientOutput');
quotientOutput.innerHTML = `${random1} / ${random2} = ${random1 / random2}`;

const remainderOutput = document.getElementById('remainderOutput');
remainderOutput.innerHTML = `${random1} % ${random2} = ${random1 % random2}`;