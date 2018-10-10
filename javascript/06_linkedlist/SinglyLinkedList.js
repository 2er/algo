/**
 * 1) 单链表的插入、删除、查找操作
 * 2) 链表中存储的是int类型的数据
 * */

class Node {

    constructor (element) {
        this.element = element
        this.next = null
    }

}

class LinkedList {

    constructor () {
        this.head = new Node('head')
    }

    // 根据value查找节点
    findByValue (value) {
        let currentNode = this.head
        while (currentNode !== null && currentNode.element !== value) {
            currentNode = currentNode.next
        }
        console.log(currentNode)
        return currentNode === null ? -1 : currentNode
    }

    // 根据index查找节点
    findByIndex (index) {
        let currentNode = this.head
        let pos = 0

        while (currentNode !== null && pos !== index) {
            currentNode = currentNode.next
            pos++
        }

        console.log(currentNode)

        return currentNode === null ? -1 : currentNode
    }

    // 指定元素向后插入
    insert (newElement, element) {
        const elementNode = this.findByValue(element)

        if (elementNode !== -1) {
            const newElementNode = new Node(newElement)
            newElementNode.next = elementNode.next
            elementNode.next = newElementNode
        } else {
            console.log('没找到插入位置')
            return
        }
    }

    // 查找前一个
    findPrev (item) {
        let currentNode = this.head
        while (currentNode !== null && currentNode.next.element !== item) {
            currentNode = currentNode.next
        }

        console.log(currentNode)

        return currentNode.next === null ? -1 : currentNode
    }

    // 根据值删除
    remove (item) {

        const itemElement = this.findByValue(item)

        // 找不到要删除的节点
        if (itemElement === -1 || itemElement.element == 'head') {
            console.log('该值不存在')
            return
        }

        // 获取之前的节点
        const prevElement = this.findPrev(item)

        prevElement.next = itemElement.next

    }

    // 遍历所有节点
    display () {

        let currentNode = this.head

        while (currentNode !== null) {
            console.log(currentNode.element)
            currentNode = currentNode.next
        }
    }

}

// test

const linkList = new LinkedList()
linkList.insert('wu','head')
linkList.insert('chuan','wu')
linkList.insert('er', 'head')
linkList.insert('goods', 'head')

console.log(linkList)

// 根据索引查找节点
console.log(linkList.findByIndex(5))

// 删除节点
linkList.remove('chuan')

linkList.display()