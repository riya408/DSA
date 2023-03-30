
function frequency(str){
let count={}
for(let i=0;i<str.length;i++){
    const char=str[i]
    count[char]=(count[char]||0)+1
   
}
return count
}
console.log(frequency("abcbaba"))
