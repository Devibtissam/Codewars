function abbrevName(name) {
  const strArr = name.split(" ");
  const firstLetter = strArr[0][0].toUpperCase();
  const lastLetter = strArr[1][0].toUpperCase();
  const str = firstLetter + "." + lastLetter;

  return str;
}
