const obj ={
    "1":"a",
    1:"b",
    [1]:"c"
}
console.log(obj["1"])//output is c
console.log(obj[1])//output is c