///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bubble sort
// let array =[5,8,7,9,6,3,2,4,1,59,60,54,84,5,22,34,15,21,54,656,548,22]
let array = [5,2,7,8,9]

function bubbleSort(arr) {
    let noSwaps
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true
        for(let j = 0; j < i-1; j++ ){
            console.log(arr,arr[j],arr[j+1])
            let temp
            if(arr[j] > arr[j+1]) {
                temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    return arr
}
let a = bubbleSort(array)
console.log(a)


//ES5 version
// function bubbleSort(arr){
//     const swap = (arr, id1, id2) =>{
//         ([arr[id1], arr[id2]] = [arr[id2], arr[id1]])
//     }
//     for(let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i-1; j++){
//             if(arr[j] > arr[j+1]) {
//                 swap(arr, j, j+1)
//              }
//         }
//     }
//     return console.log(arr)
// }
// bubbleSort(5,6,3,4,8,9,6,5)


// let s = arr.sort((s1,s2) =>  s2-s1) 

// console.log(s)
