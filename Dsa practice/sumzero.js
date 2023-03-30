// let arr=[-3,1,3,4,5,7]
// let ieft=0
// let right=arr.length-1
// while(left<right){
//    let sum =arr[left]+arr[right];
//    if(sum===0){
//     return [arr[left],arr[right]]
//    }else if(sum>0){
//     right--
//    }else{
//     left++
//    }
// }

function sumZero(arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
      let sum = arr[left] + arr[right];
      if(sum === 0){
          return [arr[left], arr[right]];
      } else if(sum > 0){
          right--;
      } else {
          left++;
      }
    }
  }
console.log(sumZero[-3,-2,-1,0,1,2,3])