/**
 * 线性排序
 * */


// 根据年龄排序
function ageBucketSort (ages) {

    let tmp = []

    for (var i=1; i<=100; i++) {
        tmp[i] = []
    }

    for (var j=0; j<ages.length; j++) {
        tmp[ages[j]].push(j)
    }

    let sorted = []

    for (var key in tmp) {
        for (var z=0; z<tmp[key].length; z++) {
            sorted.push(ages[tmp[key][z]])
        }
    }

    return sorted
}

// 计数排序
function countingSort (scores) {

    let countArr = {}

    for (var i=0; i<scores.length; i++) {
        if (countArr[scores[i]]) {
            countArr[scores[i]] = countArr[scores[i]] + 1
        } else {
            countArr[scores[i]] = 1
        }
    }

    let tmpCounter = 0

    for (var j in countArr) {
        countArr[j] = countArr[j] + tmpCounter
        tmpCounter = countArr[j]
    }

    let sorted = {}

    for (var j=scores.length - 1; j>=0; j--) {
        sorted[countArr[scores[j]] - 1] = scores[j]
        countArr[scores[j]] --
    }

    let finalSorted = []

    for (var z in sorted) {
        finalSorted.push(sorted[z])
    }

    return finalSorted

}

// 大小写字母排序
function charSort (chars) {

    let A_Z = []
    let a_z = []

    for (var i=0; i<chars.length; i++) {
        if (chars[i] >= 'A' && chars[i] <= 'Z') {
            A_Z.push(chars[i])
        }
        if (chars[i] >= 'a' && chars[i] <= 'z') {
            a_z.push(chars[i])
        }
    }

    return a_z.concat(A_Z)
}

// let ages = []
//
// for (var i=0; i<100; i++) {
//     ages.push(Math.floor(Math.random()*100) + 1)
// }

// console.log(ages)

// sortedAges = ageBucketSort(ages)
// sortedCouner = countingSort(ages)
//
// console.log(sortedAges)
// console.log(sortedCouner)

// let chars = []
//
// let source = ['a','b','c','d','e','f','G','H','A','C'];
//
// for (var i=0; i<10; i++) {
//     let index = Math.floor(Math.random()*10)
//     chars.push(source[index])
// }
//
// console.log(chars)
//
// sortedChars = charSort(chars)
//
// console.log(sortedChars)

// console.log(1 > 'a')
