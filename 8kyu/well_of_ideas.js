function well(x) {
  let countIdeas = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i].includes('good')) {
      countIdeas += 1;
    }
  }
  if ((countIdeas >= 1) & (countIdeas <= 2)) {
    return 'Publish!';
  }
  if (countIdeas > 2) {
    return 'I smell a series!';
  }

  return 'Fail!';
}
