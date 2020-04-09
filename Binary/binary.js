let arr =[1,2,3,4,5,6,7,8,9]
let n = 10
let min, max, mid

function binarySearch (arr, n) {
    min = 0
    max = arr.length-1
    mid = Math.floor((min+max)/2)
    while(arr[mid] !== n && min<=max){
        if(arr[mid] > n){
            max = mid - 1
        } else if(arr[mid] < n) {
            min = mid + 1
        }
        mid = Math.floor((min+max)/2)
    }
    if(arr[mid] === n){
        return console.log(`The index of ${n} is ${mid}`)
    }
    return console.log(-1)
}
binarySearch(arr, n)