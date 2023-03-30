
// factorial

function fac(n){
if (n==1){
    return 1;
}
return n*fac(n-1)
}
console.log(fac(6));


// kth position in fn by recursion.
function fibonacci(k){
  if(k<=1){
    return 1
  }
  return fibonacci(k-1)+fibonacci(k-2)
 }
console.log(fibonacci(10))
