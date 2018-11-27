/**
 * 快速排序
 * */

// 筛选pivot点
function partition (A) {

    if (A.length <= 1) {
        return A
    }

    let i = 0
    let j = 0
    let pivot = A[A.length - 1]

    while (A[j] && j < A.length - 1) {

        if (A[j] <= pivot) {

            let tmp = A[i]
            A[i] = A[j]
            A[j] = tmp
            i++
        }

        j++
    }

    let finalTmp = A[i]
    A[i] = pivot
    A[A.length - 1] = finalTmp

    return partition(A.slice(0,i)).concat([A[i]]).concat(partition(A.slice(i+1)))

}

let Arr = []

for (var i = 1; i <= 10; i++) {
    Arr.push(Math.floor(Math.random()*10) + 1)
}

console.log(Arr)

let MergeArr = partition(Arr);

console.log(MergeArr)