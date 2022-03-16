function twoHighest(arr) {
  const max2Value = [];
  let round = 1;
  function removeMax(arr, maxValue) {
    return arr.filter(function (ele) {
      return ele != maxValue;
    });
  }
  while (round <= 2 && arr.length !== 0) {
    const max = Math.max(...arr);
    max2Value.push(max);
    const results = removeMax(arr, max);
    arr = results;
    round += 1;
  }

  if (max2Value.length !== 0) {
    return max2Value;
  } else {
    return [];
  }
}
