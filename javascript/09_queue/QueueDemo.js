/**
 * 1) 入队
 * 2) 出队
 * */

// 顺序队列
class ArrayQueue {

    constructor (length) {
        this.items = []
        this.length = length
        this.head = this.tail = 0
    }

    // 入队
    enqueue (item) {

        if (this.tail === this.length) {

            if (this.head === 0) {
                console.log('队列已满，无法入队')
                return false
            } else {
                for (var i = this.head; i < this.tail; i++) {
                    this.items[i - this.head] = this.items[i]
                }

                this.tail -= this.head
                this.head = 0
                this.items.length = this.tail
            }
        }

        this.items[this.tail] = item
        this.tail ++

    }

    // 出队
    dequeue () {

        if (this.head === this.tail) {
            console.log('队列为空，无法出队')
            return false
        }

        let value = this.items[this.head]

        this.items[this.head] = null

        this.head ++

        console.log(value)

        return value
    }

    // 展示
    display () {
        console.log(this.items)
    }

}

class Node {
    constructor (element) {
        this.element = element
        this.next = null
    }
}

// 链式队列
class LinkedQueue {

    constructor (length) {

        this.head = new Node('head')
        this.length = length
        this.tail = this.head
        this.currentLenth = 0
    }

    // 入队
    enqueue (item) {

        if (this.currentLenth === this.length) {
            console.log('队列已满，无法入队')
            return false
        }

        let currentNode = this.head

        while (currentNode.next !== null && this.tail.element !== currentNode.element) {
            currentNode = currentNode.next
        }

        currentNode.next = new Node(item)

        this.tail = currentNode.next

        this.currentLenth ++
    }

    // 出队
    dequeue () {

        if (this.head.next === null) {
            console.log('队列为空，无法出队')
            return false
        }

        this.head.next = this.head.next.next
        this.currentLenth --
    }

    // 展示
    diplay () {

        let currentNode = this.head
        while (currentNode !== null) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }
}

// 循环队列
class CircleQueue {

    constructor (length) {
        this.items = [];
        this.length = length
        this.head = this.tail = 0
    }

    // 入队
    enqueue (item) {

        if (this.head === (this.tail + 1) % this.length) {
            console.log('队列已满')
            return false
        }

        this.items[this.tail] = item
        this.tail = (this.tail + 1) % this.length

        return true
    }

    // 出队
    dequeue () {

        if (this.tail === this.head) {
            console.log('队列为空')
            return false
        }

        var value = this.items[this.head]

        this.items[this.head] = null
        this.head = (this.head + 1) % this.length

        console.log(value)

        return true
    }

    // 展示
    display () {
        console.log(this.items)
    }

}

// let arrayQueue = new ArrayQueue(3)
//
// arrayQueue.enqueue('wu')
// arrayQueue.enqueue('chuan')
// arrayQueue.enqueue('quan')
//
// arrayQueue.display()
//
// arrayQueue.dequeue()
// arrayQueue.dequeue()
// arrayQueue.dequeue()
//
// arrayQueue.enqueue('guo')
//
// console.log(arrayQueue)

// let linkedQueue = new LinkedQueue(3)
//
// linkedQueue.enqueue('wu')
// linkedQueue.enqueue('er')
// linkedQueue.enqueue('chuan')
//
// linkedQueue.dequeue()
//
// linkedQueue.enqueue('wu')
//
// linkedQueue.diplay()

let circleQueue = new CircleQueue(4)

circleQueue.enqueue('a')
circleQueue.enqueue('b')
circleQueue.enqueue('c')
circleQueue.dequeue()
circleQueue.enqueue('a')
circleQueue.enqueue('d')

circleQueue.display()