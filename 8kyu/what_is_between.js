function between(a, b) {
  let ordredArr = [];
  if (a < b) {
    for (let i = a; i <= b; i++) {
      ordredArr.push(i);
    }
  }
  return ordredArr;
}
