import root from "./BinaryTree.js"

function breadthFirst(root){
    let queue = [ root ]

    while(queue.length > 0){
        let current = queue.pop()
        console.log(current.value)
        if(current.left) queue.unshift(current.left)
        if(current.right) queue.unshift(current.right)
    }
}

breadthFirst(root)