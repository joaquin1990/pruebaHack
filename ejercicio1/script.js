const startArray = [4, 30, 7, 5, 9, 7, 2, 4, 1, 3, 2];

function transformingArray(startArray) {
  const intermediateArray = [];

  for (let x = 0; x < startArray.length; x++) {
    if (x % 2 === 0) {
      intermediateArray.push(startArray[x] * startArray[x]);
    }
  }
  const finalArray = [];
  let lengthArray = intermediateArray.length;
  let variable = 0;
  let index = 0;

  for (let i = 0; i < lengthArray; i++) {
    variable = Math.min(...intermediateArray);
    finalArray.push(variable);
    index = intermediateArray.indexOf(variable);
    intermediateArray.splice(index, 1);
  }
  return finalArray;
}

const result = transformingArray(startArray);

console.log(result);
