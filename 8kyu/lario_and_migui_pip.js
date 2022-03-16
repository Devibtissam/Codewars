function pipeFix(numbers) {
  const fixedPip = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    fixedPip.push(i);
  }
  return fixedPip;
}
