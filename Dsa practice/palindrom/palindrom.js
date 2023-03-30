function reverse(str){
    if(str.length<=1){
        return str
    }
    else return reverse(str.slice(1))+str[0]
}
function Palindrom(s){
    if(reverse(s)===s){
        return true
    }else {
        return false
    }
}
console.log(Palindrom("abc"))