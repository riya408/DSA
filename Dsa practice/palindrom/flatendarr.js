function flatEndArr(arr) {
  let flatArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr.isArray(arr[i]) === false) flatArr.push(arr[i]);
    else {
      flatArr = flatArr.concat(flatEndArr(arr[i]));
    }

  }
  return flatArr;
}
console.log(flatEndArr([1,2,[3,4]]))