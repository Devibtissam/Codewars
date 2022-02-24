function highAndLow(numbers) {
  const num1 = numbers.split(' ');

  const num2 = [];
 

  for (let i = 0; i < num1.length; i++) {
    const intNum = parseInt(num1[i]);
    num2.push(intNum);
  }
  console.log(num2);
  let min = num2[0];
  let max = num2[0];
  // find the min elt
  for (let i = 0; i < num2.length; i++) {
    if (num2[i] <= min) {
      min = num2[i];
    }
  }
  // find the max elt
  for (let i = 0; i < num2.length; i++) {
    if (num2[i] >= max) {
      max = num2[i];
    }
  }

  const maxMin = [max, min];

  return maxMin.join(' ');
}
