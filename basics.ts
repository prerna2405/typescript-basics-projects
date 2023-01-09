function add(n1: number, n2: number) {
  if (typeof n1 !== "number" || typeof n2 !== "number") {
    throw new Error("Incorrect Input");
  }
  return n1 + n2;
}

let number1 = 5; // number
const number2 = 2.8; // literal

const result = add(number1, number2);
console.log(result);
