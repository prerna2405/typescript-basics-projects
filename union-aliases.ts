// LOGIC 1
// function combine(
//   input1: number | string, // union
//   input2: number | string, // union
//   resultConversion: string
// ) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   if (resultConversion === "as-number") {
//     return +result;
//   } else {
//     return result.toString();
//   }
// }

type Combinable = number | string;
type AsNumber = "as-number";
type ConversionDescriptor = AsNumber | "as-text";

// LOGIC 2
function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: AsNumber | "as-text" // union type combined with literal type
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

console.log(combine(30, 26, "as-number"));
console.log(combine("30", "26", "as-number"));
console.log(combine("Max", "Anna", "as-text"));
