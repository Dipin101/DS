///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Bubble sort
function bubbleSort(arr){
    for(let i = arr.length; i > 0; i--) {
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]) {
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
             }
        }
    }
    return console.log(arr)
}
bubbleSort([37,45,29,8])

//ES5 version
// function bubbleSort(arr){
//     const swap = (arr, id1, id2) =>{
//         [arr[id1], arr[id2]] = [arr[id2], arr[id1]]
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


