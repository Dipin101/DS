let arr =[1,2,3,4,5,6,7,8,9]
let n = 5


function linearSearch (arr, n) {
    let index = 0
    for(let i = 0;i < arr.length; i++) {
        if(arr[i] === n){
            index = i
        }
    }
    if(index > 0){
     return console.log(`The ${n} is in the index of ${index}`)
    }
    return console.log(-1)
}
linearSearch(arr, n)