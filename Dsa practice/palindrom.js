
let str='abcba'
function Pallin(){
    let i= 0;
    let j=str.length-1;
    while(i<j){
        if(str[i]!=str[j]) return false;
        i++
        j--
    }
    return true

}
console.log(Pallin(str))