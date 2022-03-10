function findDifference(a, b) {
  const vOfA = a.reduce(function (v, item) {
    return (v *= item);
  }, 1);
  const vOfB = b.reduce(function (v, item) {
    return (v *= item);
  }, 1);

  return Math.abs(vOfA - vOfB);
}
