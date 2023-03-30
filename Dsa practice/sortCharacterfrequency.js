var frequencysort=function(s){
    let obj={}
    let arr=s.split("")
    arr=arr.sort
    for(let i in s){
        obj[s[i]]=(obj[s[i]]||0)+1
    }
    arr=arr.sort((a,b)=>obj[b]-obj[a])
    return arr.join("")
}

console.log(frequencysort("tree"))