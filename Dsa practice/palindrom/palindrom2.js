function isPalindrom(s){
    s=s.replace(/[^a-z0-9]/gi, '').toLowerCase();
    if(s.length<=1){
        return true;
    }
    if(s[0]===s[s.length-1]){
        return  isPalindrom(s.slice(1,-1));
    }
    return false;
    
} 
console.log(isPalindrom("aba"))
