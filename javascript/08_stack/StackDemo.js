/**
 * 1) 入栈
 * 2) 出栈
 * */

class Stack {

    constructor (length) {

        this.items = []
        this.length = length
        this.head = 0
        this.tail = 0

    }

    // 入栈
    pushStack (item) {

        if (this.tail > this.length - 1) {
            console.log('该栈已满，无法入栈')
            return false
        }

        this.items[this.tail] = item
        this.tail ++
    }

    // 出栈
    popStack () {

        if (this.head === this.tail) {
            console.log('栈为空')
            return false
        }

        let value = this.items[this.tail - 1]

        this.items.length = this.tail - 1

        this.tail --

        console.log(value)

        return value
    }

    // 展示
    display () {
        // for (var i=0;i<this.items.length;i++) {
        //     console.log(this.items[i])
        // }
        console.log(this.items)
    }

}



let stack = new Stack(3)

stack.pushStack('wu')
stack.pushStack('chuan')
stack.pushStack('chuan1')
stack.popStack()
stack.popStack()
stack.popStack()
stack.popStack()

stack.display()