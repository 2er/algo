/**
 * 1) 单链表反转
 * 2) 链表中环的检测
 * 3) 两个有序的链表合并
 * 4) 删除链表倒数第n个节点
 * 5) 求链表的中间节点
 * */

class Node {
    constructor (elment) {
        this.element = elment
        this.next = null
    }
}

class LinkedList {

    constructor () {
        this.head = new Node('head')
    }

    // 根据value查到节点
    findByValue (value) {

        let currentNode = this.head
        while (currentNode !== null && currentNode.element !== value) {
            currentNode = currentNode.next
        }

        return currentNode === null ? -1 : currentNode
    }

    // 根据index查到节点
    findByIndex (index) {

        let currentNode = this.head
        let pos = 0

        while (currentNode !== null && pos !== index) {
            currentNode = currentNode.next
            pos++
        }

        if (currentNode === null) {
            console.log('未找到')
            return -1
        }

        return currentNode
    }

    // 指定元素后插入
    insert (newElement, element) {

        const elementNode = this.findByValue(element)

        if (elementNode === -1) {
            console.log('指定元素不存在')
            return
        }

        const newElementNode = new Node(newElement)

        newElementNode.next = elementNode.next
        elementNode.next = newElementNode

    }

    // 根据value查找之前的节点
    findPrev (value) {

        let currentNode = this.head

        while (currentNode !== null && currentNode.next.element !== value) {
            currentNode = currentNode.next
        }

        return currentNode === null ? -1 : currentNode
    }

    // 删除指定的元素
    remove (element) {

        const elementNode = this.findByValue(element)

        if (elementNode === -1 || element === 'head') {
            console.log('指定元素不存在')
            return
        }

        const prevNode = this.findPrev(element);
        prevNode.next = elementNode.next

    }

    // 遍历所有节点
    display () {

        let currentElement = this.head
        while (currentElement !== null) {
            console.log(currentElement.element)
            currentElement = currentElement.next
        }

    }

    // 单链表反转
    reverseList () {

        let newList = new LinkedList()
        let currentElement = this.head

        while (currentElement !== null) {
            if (currentElement.element != 'head') {
                newList.insert(currentElement.element, 'head')
            }
            currentElement = currentElement.next
        }

        return newList

    }

    reverseList2 () {

        let root = new Node('head')

        let currentElement = this.head.next

        while (currentElement !== null) {

            const next = currentElement.next
            currentElement.next = root.next
            root.next = currentElement
            currentElement = next

        }

        this.head = root
    }

    // 环验证（快慢指针）
    checkCircle () {

        let fast = this.head.next
        let slow = this.head

        while (fast !== null && fast.next !== null) {
            slow = slow.next
            fast = fast.next.next

            if (slow === fast) {
                return true
            }
        }

        return false

    }

    // 删除倒数第k个节点
    removeByIndexFromEnd (k) {

        let currentNode = this.head.next
        let removeNode = null
        let removeNodePrev = null
        let sum = 0

        while (currentNode !== null) {
            sum ++
            if (sum >= k) {
                removeNode = removeNode === null ? this.head.next : removeNode.next
                removeNodePrev = removeNodePrev === null ? this.head : removeNodePrev.next
            }
            currentNode = currentNode.next
        }

        if (removeNode !== null && removeNodePrev !== null) {
            removeNodePrev.next = removeNode.next
        } else {
            console.log('该节点不存在')
        }

    }

    // 求中间节点
    findMiddleNode () {

        let currentNode = this.head.next

        // 当前存在的中间节点
        let currentMiddleNode = null
        // 实时获取的中间节点
        let middleNode = null
        let sum = 0

        while (currentNode !== null) {
            sum ++
            // 节点数大于2才有可能存在中间节点
            if (sum > 2) {
                // 节点为奇数，更新当前中间节点和实时中间节点
                if (sum % 2 === 1) {
                    currentMiddleNode = currentMiddleNode === null ? this.head.next.next : currentMiddleNode.next
                    middleNode = currentMiddleNode
                // 节点数为偶数，实时中间节点为null
                } else {
                    middleNode = null
                }
            }
            currentNode = currentNode.next
        }

        return middleNode
    }

    // 求中间节点（快慢指针）
    findMiddleNode1 () {

        let fast = this.head
        let slow = this.head
        while (fast.next !== null && fast.next.next !== null) {
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }

    // 两个有序链表的合并
    mergeSortedLinkList (linkList1, linkList2) {

        if (linkList1.head.next === null) {
            this.head.next = linkList2.head.next
            return
        }

        if (linkList2.head.next === null) {
            this.head.next = linkList1.head.next
            return
        }

        let root = null

        let appendCurrentElementPrev = null

        let baseCurrentElement = null
        let appendCurrentElement = null

        // 判断以哪个链表为基础
        if (linkList1.head.next.element <= linkList2.head.next.element) {
            root = linkList1
            appendCurrentElementPrev = linkList2.head

            baseCurrentElement = linkList1.head.next
            appendCurrentElement = linkList2.head.next
        } else {
            root = linkList2
            appendCurrentElementPrev = linkList1.head

            baseCurrentElement = linkList2.head.next
            appendCurrentElement = linkList1.head.next
        }

        while (baseCurrentElement.next !== null && appendCurrentElement !== null) {

            if (baseCurrentElement.next.element <= appendCurrentElement.element) {
                baseCurrentElement = baseCurrentElement.next
            } else {

                // 删除后链表中的节点
                appendCurrentElementPrev.next = appendCurrentElement.next

                // 将删除后的节点接入前链表
                appendCurrentElement.next = baseCurrentElement.next
                baseCurrentElement.next = appendCurrentElement

                // 更新指针
                baseCurrentElement = baseCurrentElement.next
                appendCurrentElement = appendCurrentElementPrev.next
            }

        }

        if (appendCurrentElementPrev.next !== null) {
            baseCurrentElement.next = appendCurrentElementPrev.next
        }

        this.head.next = root.head.next
    }
}

let linkList = new LinkedList()
let linkList1 = new LinkedList()
let linkList2 = new LinkedList()

// let node = new Node('wu')
// linkList.head.next = node
// node.next = linkList.head

linkList1.insert(20, 'head')
linkList1.insert(16, 'head')
linkList1.insert(8, 'head')
linkList1.insert(7, 'head')
linkList1.insert(3, 'head')
linkList1.insert(2, 'head')

linkList2.insert(21, 'head')
linkList2.insert(15, 'head')
linkList2.insert(8, 'head')
linkList2.insert(7, 'head')
linkList2.insert(3, 'head')
linkList2.insert(2, 'head')

linkList.mergeSortedLinkList(linkList1,linkList2)
linkList.display()

// linkList.insert('车', 'head')
// linkList.insert('上1', 'head')
// linkList.insert('上2', 'head')
// linkList.insert('上3', 'head')
// linkList.insert('上4', 'head')
// linkList.insert('上5', 'head')
// linkList.insert('上6', 'head')
// linkList.insert('上7', 'head')
// linkList.insert('马', 'head')

// linkList.display()
//
// console.log(linkList.findMiddleNode())
// console.log(linkList.findMiddleNode1())

// linkList.removeByIndexFromEnd(5)

// linkList.display()

// reverseList = linkList.reverseList()
// reverseList.display()

// linkList.reverseList2()
// linkList.display()

// console.log(linkList.checkCircle())