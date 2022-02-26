function sumMul(n,m){
//your idea here
  let sum = 0; 
  const pas = n;
  if(m>0){
    for (let i = n ; i<=m; i+=pas){
      sum += i;
      console.log(sum);
      }
    return sum;
      
    }
    
  
  else {
    return 'INVALID';
    
  }
    
}