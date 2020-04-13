/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Insertion Sort
let array = [5,7,2,8,9]

function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        let val, j
        val = arr[i]
        for(let j = i-1; j > -1 && arr[j] > val; j--) {
            arr[j+1] = val
        }
        arr[j+1] = arr[val]
    }
    return arr
}

let a = insertionSort(array)
console.log(a)