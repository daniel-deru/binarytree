import root from "./BinaryTree.js"

// Iterative
function depthFirst(root){
    let stack = [ root ]

    while(stack.length > 0){
        let current = stack.pop()

        console.log(current.value)
        if(current.left) stack.push(current.left)
        if(current.right) stack.push(current.right)
    }
}


function depthFirstRecur(root){
    if(root === null) return
    console.log(root.value)
    depthFirstRecur(root.right)
    depthFirstRecur(root.left)
}

// depthFirst(root)
depthFirstRecur(root)