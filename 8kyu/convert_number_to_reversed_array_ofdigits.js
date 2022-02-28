function digitize(n) {
  let myArr = [];
  if (n === 0) {
    myArr.push(0);
  } else {
    while (n / 10 != 0) {
      rem = n % 10;
      n = Math.floor(n / 10);
      myArr.push(rem);
    }
  }
  return myArr;
}
