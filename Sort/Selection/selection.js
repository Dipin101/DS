////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Selection Sort
// let array =[5,8,7,9,6,3,2,4,1,59,60,54,84,5,22,34,15,21,54,656,548,22]
let array = [5,2,7,8,9]
// function selectionSort(arr) {
//     let min
//     for (let i = 0; i < arr.length; i++) {
//         min = i
//         for(let j = i+1; j < arr.length; j++) {
//             if(arr[j] < arr[min]) min = j
//         }
//         if(i !== min){
//             console.log(i,min)
//             let temp = arr[i]
//             arr[i] = arr[min]
//             arr[min] = temp
//         }
//     }
//     return arr
// }
// let a = selectionSort(array)
// console.log(a)

//if done in es5
function selectionSort(arr) {
    const swap = (arr, idx1, idx2) =>([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])
    let min
    for (let i = 0; i < arr.length; i++) {
        min = i
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) min = j
        }
        if(i !== min) swap(arr, i, min)
    }
    return arr
}

let a = selectionSort(array)
console.log(a)


