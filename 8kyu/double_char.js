function doubleChar(str) {
  let dbStr = "";
  const len = str.length;
  for (let i = 0; i < len; i++) {
    dbStr += str[i].repeat(2);
  }
  return dbStr;
}
