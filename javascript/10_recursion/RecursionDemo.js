/**
 * 1) 电影院中自己在第几排
 * 2) n个台阶有几种走法
 * */

class Recursion {

    constructor () {
        this.solvedList = []
    }

    solvedListItem (n) {

        for (var index in this.solvedList) {
            if (index === n) {
                return this.solvedList[n]
            }
        }

        return false
    }

    // 电影院中自己在第几排
    lineNo (n) {
        if (n === 1) {
            return 1
        }

        return this.lineNo(n -1) + 1
    }

    // n级台阶有几种走法
    methodCount (n) {

        if (n === 1) {
            return 1
        }
        if (n === 2) {
            return 2
        }

        // let solved = this.solvedListItem(n)
        //
        // if (solved) {
        //     return solved
        // }

        let ret = this.methodCount(n -1) + this.methodCount(n -2)

        // this.solvedList[n] = ret

        return ret
    }

}

let recursion = new Recursion()

// console.log(recursion.lineNo(100))
console.log(recursion.methodCount(30))