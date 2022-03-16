function squareSum(numbers) {
  let squareSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    squareSum += numbers[i] ** 2;
  }
  return squareSum;
}
