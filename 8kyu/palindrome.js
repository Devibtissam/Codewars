function isPalindrome(x) {
  // your code here
const pal = x.toLowerCase();
const revpal = x.toLowerCase().split('').reverse().join('')

  if ( pal === revpal){
    return true;
  }
  else {
    return false;
  }
  
  
}