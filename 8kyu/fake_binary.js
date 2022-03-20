function fakeBin(x) {
  const strDigit = x.split("");
  const fakeBin = strDigit.map((x) => {
    if (x >= 5) {
      x = "1";
    } else {
      x = "0";
    }
    return x;
  });
  return fakeBin.join("");
}
