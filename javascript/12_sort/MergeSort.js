/**
 * 归并排序
 * */

// 合并
function mergeArr (ArrA, ArrB) {
    let tmp = []

    let aIndex = 0
    let bIndex = 0

    while (ArrA[aIndex] && ArrB[bIndex]) {
        if (ArrA[aIndex] <= ArrB[bIndex]) {
            tmp.push(ArrA[aIndex])
            aIndex++
        } else {
            tmp.push(ArrB[bIndex])
            bIndex++
        }
    }

    if (ArrA[aIndex]) {
        tmp = tmp.concat(ArrA.slice(aIndex))
    }

    if (ArrB[bIndex]) {
        tmp = tmp.concat(ArrB.slice(bIndex))
    }

    return tmp
}

// 分治
function mergeSort (A) {

    if (A.length <= 1) {
        return A
    }

    let q = Math.floor(A.length / 2)

    let mergeA = A.slice(0, q)
    let mergeB = A.slice(q)

    return mergeArr(mergeSort(mergeA), mergeSort(mergeB))
}


let Arr = []

for (var i = 1; i <= 10; i++) {
    Arr.push(Math.floor(Math.random()*10) + 1)
}

console.log(Arr)

let MergeArr = mergeSort(Arr, 0, 9);

console.log(MergeArr)