/**
 * 1) 冒泡排序
 * 2) 插入排序
 * 3) 选择排序
 * */

class Node
{
    constructor (element) {
        this.element = element
        this.next = null
    }
}

class MySort
{
    constructor () {
        this.head = new Node('head')
    }

    // 插入
    insert (element) {

        let elementNode = new Node(element)
        elementNode.next = this.head.next
        this.head.next = elementNode
    }

    // 展示
    display () {

        let currentNode = this.head.next

        while (currentNode !== null) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }

    // 冒泡排序，最好时间复杂度O(n)，最坏时间复杂度O(n^2)，平均时间复杂度O(n^2)，最好空间复杂度O(1)，最坏空间复杂度O(n)，平均空间复杂度O(n)
    bubbleSort () {

        if (this.head.next === null || this.head.next.next === null) {
            return true
        }

        let parentPreNode = this.head
        let preNode = this.head.next
        let currentNode = this.head.next.next
        let exchanged = false

        while (currentNode !== null) {

            if (preNode.element > currentNode.element) {

                // 交换
                parentPreNode.next = preNode.next
                preNode.next = currentNode.next
                currentNode.next = preNode

                // 指针移动
                currentNode = preNode.next

                exchanged = true
            } else {
                preNode = preNode.next
                currentNode = currentNode.next
            }

            parentPreNode = parentPreNode.next

        }

        if (exchanged === false) {
            return true
        } else {
            return this.bubbleSort()
        }
    }

    // 插入排序，最好时间复杂度O(n)，最好时间复杂度O(n)，最坏时间复杂度O(n^2)，平均时间复杂度O(n^2)，空间复杂度O(1)
    insertionSort () {

        if (this.head.next === null || this.head.next.next === null) {
            return true
        }

        let preNode = this.head.next
        let currentNode = this.head.next.next
        let currentIndex = 1

        while (currentNode !== null) {

            let exchanged = false
            let sortedPrevNode = this.head
            let sortedCurrentNode = this.head.next
            let sortedCurrentIndex = 0

            while (sortedCurrentIndex < currentIndex) {
                if (sortedCurrentNode.element > currentNode.element) {

                    // 元素移动
                    preNode.next = currentNode.next
                    currentNode.next = sortedPrevNode.next
                    sortedPrevNode.next = currentNode

                    exchanged = true
                    break
                } else {
                    sortedPrevNode = sortedPrevNode.next
                    sortedCurrentNode = sortedCurrentNode.next
                }
                sortedCurrentIndex ++
            }

            if (exchanged === false) {
                preNode = preNode.next
                currentNode = currentNode.next
            } else {
                currentNode = preNode.next
            }

            currentIndex ++
        }
    }

    // 选择排序，最好时间复杂度O(n^2)，最坏时间复杂度O(n^2)，平均时间复杂度O(n^2)，空间复杂度O(n)
    selectionSort () {

        if (this.head.next === null || this.head.next.next === null) {
            return true
        }

        if (typeof this.sortedCurrentNode === 'undefined') {
            this.sortedCurrentNode = this.head
        }

        if (this.sortedCurrentNode.next === null) {
            return true
        }

        let prevMinNode = this.sortedCurrentNode
        let minNode = null

        let prevNode = this.sortedCurrentNode
        let currentNode = this.sortedCurrentNode.next

        while (currentNode !== null) {

            if (minNode === null || currentNode.element < minNode.element) {
                minNode = currentNode
                prevMinNode = prevNode
            }
            prevNode = prevNode.next
            currentNode = currentNode.next

        }

        prevMinNode.next = minNode.next
        minNode.next = this.sortedCurrentNode.next
        this.sortedCurrentNode.next = minNode

        this.sortedCurrentNode = this.sortedCurrentNode.next
        return this.selectionSort()

    }
}

let mySort = new MySort()

mySort.insert('3')
mySort.insert('2')
mySort.insert('6')
mySort.insert('2')
mySort.insert('5')
mySort.insert('5')

mySort.display()

console.log('=============')

// mySort.bubbleSort()
// mySort.insertionSort()
mySort.selectionSort()

mySort.display()

