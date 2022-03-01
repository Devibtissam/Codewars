function descendingOrder(n) {
  let numArr = [];
  let sortedNum = "";

  do {
    rem = n % 10;
    n = Math.floor(n / 10);
    numArr.push(rem);
  } while (n / 10 != 0);

  numArr.sort().reverse();

  for (let i = 0; i < numArr.length; i++) {
    sortedNum += numArr[i];
  }

  return Number(sortedNum);
}
