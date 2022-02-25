let num = 123;
let numstr = '';
// loop through the loop to count how many digit we have
let len = 0;
let div = num;
while (div / 10 !== 0) {
  rem = div % 10;
  div = Math.floor(div / 10);
  len++;
}

while (len-1 >= 0) {
  let divs = Math.floor(num / Math.pow(10, len - 1));
  num = Math.floor(num % Math.pow(10, len - 1));
  numstr += divs;
  len--;
}

console.log(numstr);

// By using tostring function you can simply 

console.log(num.toString()); //eaaaaasyyy :p