import root from "./BinaryTree.js"

// Iterative 
function min(root){
    let min = Infinity
    let queue = [ root ]

    while(queue.length > 0){
        let current = queue.pop()
        if(current !== null){
            if(current.value < min) min = current.value
            queue.unshift(current.left)
            queue.unshift(current.right)
        }

    }
    return min
}

// Recursive solution
function minRecur(root, min=Infinity){
    if(root === null) return min
    if(root.value < min) min = root.value
    return Math.min(minRecur(root.left, min), minRecur(root.right, min))
    
}

console.log(minRecur(root))

console.log(min(root))