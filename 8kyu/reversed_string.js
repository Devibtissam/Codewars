function solution(str) {
  const rvstr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    rvstr.push(str[i]);
  }
  return rvstr.join('');
}
