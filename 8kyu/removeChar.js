function removeChar(str){
 //You got this!
  let arrstr = str.split('');
  console.log(arrstr);
  arrstr.pop();
  arrstr.shift();
  return arrstr.join('');
};