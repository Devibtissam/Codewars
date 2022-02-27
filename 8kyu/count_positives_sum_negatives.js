function countPositivesSumNegatives(input) {
  const posNeg = [];
  let sumZero = 0;
  let sumPos = 0;
  let sumNeg = 0;
  if (input === null) {
    return [];
  }

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== 0) {
      if (input[i] > 0) {
        sumPos += 1;
      } else {
        sumNeg += input[i];
      }
    } else {
      sumZero += 1;
    }
  }

  if (sumZero === input.length) {
    return [];
  }

  posNeg.push(sumPos);
  posNeg.push(sumNeg);
  return posNeg;
}
