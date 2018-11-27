/**
 * 二叉分查找
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

// 求一个数的平方根，保留小数点后6位
const squareRoot = (number, min, max) => {

    let middle = min + ((max - min ) / 2)

    let section = 1 / 1000000

    if ((middle + section) * (middle + section) >= number && (middle - section) * (middle - section) <= number) {
        return middle.toFixed(6)
    }

    if (middle * middle > number) {
        return squareRoot(number, min, middle)
    } else {
        return squareRoot(number, middle, max)
    }
}

// 查找第一个值等于给定值的元素
const searchFirst = (array, element, min, max) => {

    let mid = min + ((max - min) >> 1)

    // 考虑前面是否有相等的值
    if (array[mid] == element) {
        let mid_tmp = mid
        while (array[mid_tmp-1] == element) {
            mid_tmp--
        }
        return mid_tmp
    } else if (mid >= max) {
        return -1
    }

    if (array[mid] <= element) {
        return searchFirst(array, element, min+1, max)
    } else {
        return searchFirst(array,element, min, mid-1)
    }

}

// 查找最后一个值等于给定值的元素
const searchLast = (array, element, min, max) => {

    let mid = min + ((max - min) >> 1)

    // 考虑前面是否有相等的值
    if (array[mid] == element) {
        let mid_tmp = mid
        while (array[mid_tmp+1] == element) {
            mid_tmp++
        }
        return mid_tmp
    } else if (mid >= max) {
        return -1
    }

    if (array[mid] <= element) {
        return searchLast(array, element, min+1, max)
    } else {
        return searchLast(array,element, min, mid-1)
    }

}

// 查找第一个值大于等于给定值的元素
const searchFirstGe = (array, element, min, max) => {

    let mid = min + ((max - min) >> 1)

    // 考虑前面是否有相等的值
    if (array[mid] >= element) {
        let mid_tmp = mid
        while (array[mid_tmp-1] >= element) {
            mid_tmp--
        }
        return mid_tmp
    } else if (mid >= max) {
        return -1
    }

    if (array[mid] <= element) {
        return searchFirstGe(array, element, min+1, max)
    } else {
        return searchFirstGe(array,element, min, mid-1)
    }

}

// 查找最后一个值小于等于给定值的元素
const searchFirstLe = (array, element, min, max) => {

    let mid = min + ((max - min) >> 1)

    // 考虑前面是否有相等的值
    if (array[mid] <= element) {
        let mid_tmp = mid
        while (array[mid_tmp+1] <= element) {
            mid_tmp++
        }
        return mid_tmp
    } else if (mid >= max) {
        return -1
    }

    if (array[mid] <= element) {
        return searchFirstLe(array, element, min+1, max)
    } else {
        return searchFirstLe(array,element, min, mid-1)
    }

}

// 循环有序数组查找
const searchCircle = (array, element, min, max) => {

    

}

// let number = 101
//
// let root = squareRoot(number, 0, number)
//
// console.log(root)

// let ages = []
//
// for (var i=0; i<100; i++) {
//     ages.push(Math.floor(Math.random()*100) + 1)
// }
//
// ages = ageBucketSort(ages)
//
// console.log(ages)

// let searchFirstRes = searchFirst(ages,66,0,99)
// let searchLastRes = searchLast(ages,66,0,99)
// let searchFirstGeRes = searchFirstGe(ages,66,0,99)
// let searchFirstLeRes = searchFirstLe(ages,66,0,99)

// console.log(searchFirstRes)
// console.log(searchLastRes)
// console.log(searchFirstGeRes)
// console.log(ages[searchFirstGeRes])
// console.log(searchFirstLeRes)
// console.log(ages[searchFirstLeRes])
// console.log(ages[searchFirstLeRes-1])

let circle = [5,6,7,8,1,2,3,4]






