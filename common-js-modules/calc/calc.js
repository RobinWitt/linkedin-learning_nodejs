// export via commonJS Standard "exports" / module.exports
// "exports" is an object
// using package.json file to route the import

function ggT(a, b) {
  // validate args

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("ggT: Only numbers are allowed!");
  }

  //______________________________

  if (a === 0) return b;

  while (b !== 0) {
    let temp = a % b;
    a = b;
    b = temp;
  }
  return a;
}

//________________________________

try {
  ggT("35", 10);
} catch (error) {
  console.error(error.message);
}

//________________________________

function kgV(a, b) {
  if (a === 0 || b === 0) return 0;
  return (a * b) / ggT(a, b);
}

//________________________________

exports.ggT = ggT;
exports.kgV = kgV;
