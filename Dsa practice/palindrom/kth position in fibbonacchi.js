function fibonacci(k){
  if(k<=1){
   return 1
  }
  return fibonacci(k-1)+fibonacci(k-2)
 
}
console.log(fibonacci(11))