/**
 * 二叉树
 * */

class Node {

    constructor (element) {
        this.element = element
        this.left = null
        this.right = null
    }

}

class LinkedBinaryTree {

    constructor (root, arr) {
        this.root = root
        for (var i = 0; i < arr.length; i++) {
            let node = new Node(arr[i])
            this.upToTree(this.root, node)
        }

    }

    // 上树
    upToTree (currentNode, node) {

        if (node.element < currentNode.element) {
            if (currentNode.left === null) {
                currentNode.left = node
                return
            } else {
                return this.upToTree(currentNode.left, node)
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = node
                return
            } else {
                return this.upToTree(currentNode.right, node)
            }
        }
    }

    // 查找
    find (element, currentNode) {

        currentNode = currentNode === undefined ? this.root : currentNode

        if (element === currentNode.element) {
            return currentNode
        } else if (element < currentNode.element) {
            if (currentNode.left === null) {
                return -1
            } else {
                return this.find(element,currentNode.left)
            }
        } else {
            if (currentNode.right === null) {
                return -1
            } else {
                return this.find(element,currentNode.right)
            }
        }

    }

    // 插入
    insert (insertNode, currentNode) {
        currentNode = currentNode === undefined ? this.root : currentNode
        if (insertNode.element < currentNode.element) {
            if (currentNode.left === null) {
                currentNode.left = insertNode
                return
            } else {
                this.insert(insertNode, currentNode.left)
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = insertNode
                return
            } else {
                this.insert(insertNode, currentNode.right)
            }
        }
    }

    // 查找父节点
    findParent (element, currentNode, currentParent) {
        currentNode = currentNode === undefined ? this.root : currentNode
        currentParent = currentParent === undefined ? this.root : currentParent

        if (element === currentNode.element) {
            return {current:currentNode, parent:currentParent}
        } else if (element < currentNode.element) {
            if (currentNode.left === null) {
                return -1
            } else {
                return this.findParent(element,currentNode.left,currentNode)
            }
        } else {
            if (currentNode.right === null) {
                return -1
            } else {
                return this.findParent(element,currentNode.right,currentNode)
            }
        }
    }

    // 查找右子树中的最小节点
    findRightMin (node, parentNode) {
        if (node.left === null) {
            return {node:node, parent:parentNode}
        } else {
            return this.findRightMin(node.left, node)
        }
    }

    // 删除
    remove (element) {

        let nodes = this.findParent(element)

        if (nodes === -1) {
            return false
        }

        let foundNode = nodes.current
        let foundParentNode = nodes.parent

        if (foundNode.left === null && foundNode.right === null) {  // 没有子节点
            if (foundParentNode.left.element === foundNode.element) {
                foundParentNode.left = null
                return
            } else {
                foundParentNode.right = null
                return
            }
        } else if (foundNode.left === null) {                       // 只有右子树
            if (foundParentNode.left.element === foundNode.element) {
                foundParentNode.left = foundNode.right
                return
            } else {
                foundParentNode.right = foundNode.right
                return
            }
        } else if (foundNode.right === null) {                      // 只有左子树
            if (foundParentNode.left.element === foundNode.element) {
                foundParentNode.left = foundNode.left
                return
            } else {
                foundParentNode.right = foundNode.left
                return
            }
        } else {                                                    // 既有左子树又有右子树

            if (foundNode.right.left === null) {
                foundNode.right.left = foundNode.left
                if (foundParentNode.left.element === foundNode.element) {
                    foundParentNode.left = foundNode.right
                } else {
                    foundParentNode.right = foundNode.right
                }
            } else {
                let rightMinNode = this.findRightMin(foundNode.right,foundNode)

                let tmpRight = rightMinNode.node.right
                rightMinNode.node.left = foundNode.left
                rightMinNode.node.right = foundNode.right
                if (foundParentNode.left.element === foundNode.element) {
                    foundParentNode.left = rightMinNode.node
                } else {
                    foundParentNode.right = rightMinNode.node
                }
                rightMinNode.parent.left = tmpRight
            }
        }
    }

    // 高度
    getHeight (tree) {
        if (tree.left === null && tree.right === null) {
            return 1
        } else {
            let leftHeight = tree.left === null ? 0 : this.getHeight(tree.left)
            let rightHeight = tree.right === null ? 0 : this.getHeight(tree.right)
            return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1
        }
    }

    display () {
        console.log(this.root)
    }

}

let root = new Node(9)
let linkedBinaryTree = new LinkedBinaryTree(root, [4,7,14,21,3,1,5,8,11,10,17,25])
// let findNode = linkedBinaryTree.find(21)
// console.log(findNode)
// linkedBinaryTree.insert(new Node(6))
// linkedBinaryTree.display()

// linkedBinaryTree.remove(8)
// linkedBinaryTree.remove(17)
// linkedBinaryTree.remove(11)
// linkedBinaryTree.remove(14)
// linkedBinaryTree.remove(14)

// linkedBinaryTree.display()
let height = linkedBinaryTree.getHeight(linkedBinaryTree.root)
console.log(height)