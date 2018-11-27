/**
 * 堆和堆排序，下标从0开始
 * */

class Heap {

    constructor (arr) {
        this.heap = arr
        this.heapify()
    }

    // 交换（从上往下）
    swapDown (index) {

        let leftChildIndex = index * 2 + 1
        let rightChildIndex = index * 2 + 2

        if (this.heap[leftChildIndex] && this.heap[rightChildIndex]) {

            if (this.heap[leftChildIndex] <= this.heap[rightChildIndex]) {
                if (this.heap[index] <= this.heap[rightChildIndex]) {
                    let changeTmp = this.heap[index]
                    this.heap[index] = this.heap[rightChildIndex]
                    this.heap[rightChildIndex] = changeTmp
                    return this.swapDown(rightChildIndex)
                }

                return

            } else {
                if (this.heap[index] <= this.heap[leftChildIndex]) {
                    let changeTmp = this.heap[index]
                    this.heap[index] = this.heap[leftChildIndex]
                    this.heap[leftChildIndex] = changeTmp
                    return this.swapDown(leftChildIndex)
                }

                return

            }
        } else if (this.heap[leftChildIndex]) {
            if (this.heap[index] <= this.heap[leftChildIndex]) {
                let changeTmp = this.heap[index]
                this.heap[index] = this.heap[leftChildIndex]
                this.heap[leftChildIndex] = changeTmp
                return this.swapDown(leftChildIndex)
            }

            return

        } else {

            return

        }

    }

    // 交换（从下往上）
    swapUp (index) {

        let parentIndex = Math.floor((index - 1) / 2)

        if (this.heap[parentIndex]) {
            if (this.heap[parentIndex] < this.heap[index]) {
                let changeTmp = this.heap[index]
                this.heap[index] = this.heap[parentIndex]
                this.heap[parentIndex] = changeTmp
                return this.swapUp(parentIndex)
            } else {
                return
            }
        } else {
            return
        }


    }

    // 交换（从上往下）
    swapDownLimit (index, limitIndex) {

        let leftChildIndex = index * 2 + 1
        let rightChildIndex = index * 2 + 2

        if (leftChildIndex >= limitIndex || rightChildIndex >= limitIndex) {
            return
        }

        if (this.heap[leftChildIndex] && this.heap[rightChildIndex]) {

            if (this.heap[leftChildIndex] <= this.heap[rightChildIndex]) {
                if (this.heap[index] <= this.heap[rightChildIndex]) {
                    let changeTmp = this.heap[index]
                    this.heap[index] = this.heap[rightChildIndex]
                    this.heap[rightChildIndex] = changeTmp
                    return this.swapDownLimit(rightChildIndex, limitIndex)
                }

                return

            } else {
                if (this.heap[index] <= this.heap[leftChildIndex]) {
                    let changeTmp = this.heap[index]
                    this.heap[index] = this.heap[leftChildIndex]
                    this.heap[leftChildIndex] = changeTmp
                    return this.swapDownLimit(leftChildIndex, limitIndex)
                }

                return

            }
        } else if (this.heap[leftChildIndex]) {
            if (this.heap[index] <= this.heap[leftChildIndex]) {
                let changeTmp = this.heap[index]
                this.heap[index] = this.heap[leftChildIndex]
                this.heap[leftChildIndex] = changeTmp
                return this.swapDownLimit(leftChildIndex, limitIndex)
            }

            return

        } else {

            return

        }

    }

    // 建堆
    heapify () {

        // 如果数组长度小于等于1，则直接返回数组
        let heapLen = this.heap.length
        if (heapLen <= 1) {
            return this.heap
        }

        // 堆化
        for (var index = Math.floor(heapLen / 2) - 1; index >= 0; index --) {
            this.swapDown(index)
        }

    }

    // 插入
    insert (element) {
        let heapLen = this.heap.length
        this.heap[heapLen] = element
        this.swapUp(heapLen)
    }

    // 删除
    delete () {
        let heapLen = this.heap.length
        this.heap[0] = this.heap[heapLen - 1]
        this.heap.length = heapLen - 1
        this.swapDown(0)
    }

    // 排序
    sort () {
        let heapLen = this.heap.length

        for (var index = heapLen - 1; index >= 0; index --) {
            let topTmp = this.heap[0]
            this.heap[0] = this.heap[index]
            this.heap[index] = topTmp
            this.swapDownLimit(0,index)
        }

    }
}


let heap = new Heap([1,3,4,5,6,8,9,31,12,23,45,23,67,45])

console.log(heap.heap)

// heap.insert(46)

// console.log(heap.heap)

// heap.delete()
heap.sort()

console.log(heap.heap)


