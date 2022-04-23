import root from "./BinaryTree.js"

// Recursive solution
function includes(root, target){
    if(root === null) return false
    if(root.value === target) return true
    return includes(root.left, target) || includes(root.right, target)
}

// This is the one liner
const i=(r,t)=r==null?false:r.value==t?true:i(r.left,t)||i(r.right,t)

console.log(includes(root, 16))