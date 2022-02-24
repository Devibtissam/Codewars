function longest(s1, s2) {
  const sortedString = [];
  // your code
  for (let i = 97; i <= 122; i++) {
    let j = 0;
    while ((j < s1.length) | (j < s2.length)) {
      if ((s1.charCodeAt(j) === i) | (s2.charCodeAt(j) === i)) {
        sortedString.push(String.fromCharCode(i));
        break;
      }
      j += 1;
    }
  }
  return sortedString.join('');
}
