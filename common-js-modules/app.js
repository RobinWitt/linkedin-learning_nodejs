// import via commonJS Standard "require"

const calc = require("./calc");
const kgV = calc.kgV;
const ggT = calc.ggT;

console.log(kgV(12, 18));
console.log(ggT(35, 10));

const gcd = require("@stdlib/math-base-special-gcd");

console.log(gcd(48, 18));
