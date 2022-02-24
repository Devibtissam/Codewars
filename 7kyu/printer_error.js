function printerError(s) {
  // your code
  let er = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charCodeAt(i) > 109) {
      er += 1;
    }
  }
  return `${er}/${s.length}`;
}
