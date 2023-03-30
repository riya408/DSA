let arr = [-25, -3, -78, -4, -58, -14, 6, 7];
// kadan;s problem
let max_sum = -Infinity;
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
  if (sum > max_sum) {
    max_sum = sum;
  }
  if (sum < 0) {
    sum = 0;
  }
}
console.log(max_sum);


// let max_sum=0
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum=sum+arr[i]
// }
// if(sum>max_sum){
//     max_sum=sum;
// }
// if(sum<0){
//     sum=0;
// }
// console.log(max_sum)
