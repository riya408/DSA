// let nums=[1,2,3,4,5,5,1,3,4]
// let mp=new Map();
// for(let i=0;i<nums.length;i++){
//     let x=nums[i]
//     if(mp.has(x)==true){
//         let v=mp.get(x)
//         v++
//     }else{
//         mp.set(x,1)
//     };
//     let index=0
//     mp.forEach((value,key)=>{
//         nums[index]=key;
//         index++
//     })
//     return index;
// }
// console.log(nums[1,2,5,4,6,9,1,2,1])

// let mp=new Map();
// for(let i=0;i<arr.length;i++){
//     let x=arr[i]
//     if( Map.has(x)==true){
//         let v=map.get(x)
//         v++

//     }else{
//         Map.set(x,1)
//     }
//     let index=0
//     map.forEach((value,key)=>{
//         arr[index]=key;
//         index++
//     })
// }
// return index;

var removeDuplicates = function(nums) {
    let count =1

    for(let i = 0 ; i<nums.length-1 ; i++){
        if(nums[i]!=nums[i+1]){
            nums[count]= nums[i+1]
            count++
        }
    }
    nums.length=count   // array after removing duplicates
    return nums
    // return count :-length of array after removing duplicates
    };
   console.log( removeDuplicates([0,0,1,1,1,2,2,3,3,4,4,11,45]))
