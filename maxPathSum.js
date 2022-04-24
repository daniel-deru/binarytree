import root from "./BinaryTree.js"

function maxPathSum(root){
    if(root === null) return -Infinity
    if(root.left === null && root.right === null) return root.value
    return root.value + Math.max(maxPathSum(root.left), maxPathSum(root.right))
}

// One Line Solution
const m = r => r == null ? -Infinity : r.left == null && r.right == null ? r.value : r.value + Math.max(m(r.left), m(r.right))
console.log(maxPathSum(root))