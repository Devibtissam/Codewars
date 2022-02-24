function findNeedle(haystack) {
  // your code here
  if (haystack.includes('needle')) {
    return `found the needle at position ${haystack.indexOf('needle')}`;
  }
}
