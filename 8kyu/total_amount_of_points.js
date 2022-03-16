function points(games) {
  let count = 0;
  for (let i = 0; i < games.length; i++) {
    const x = parseInt(games[i][0]);
    const y = parseInt(games[i][games[i].length - 1]);
    if (x > y) {
      count += 3;
    } else if (x < y) {
      count += 0;
    } else {
      count += 1;
    }
  }
  return count;
}
