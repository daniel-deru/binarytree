import root from "./BinaryTree.js"

// Iterative
function sum(root){
    let queue = [ root ]
    let sum = 0

    while(queue.length > 0){
        let current = queue.pop()

        if(current) sum += current.value
        if(current.left) queue.unshift(current.left)
        if(current.right) queue.unshift(current.right)
    }
    return sum
}

// Recursive
function sumRecur(root){
    if(root === null) return 0
    return root.value + sumRecur(root.left) + sumRecur(root.right)
}

// One liner
const s = r => r == null ? 0 : root.value + s(r.left) + s(r.right)

// console.log(sum(root))
console.log(sumRecur(root))