

str1 = "hello"
str2 = "world"
str1 = str1 + "|" + str2

arr = str1.split("|")
str1 = arr[1]
str2 = arr[0]
console.log(str1,str2)