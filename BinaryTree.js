let list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let list2 = [ 1, 2, 3, 4, 5, 6, 6, 6, 6 ]

class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right == null
    }
}

function createTree(list, index, root=null){
    if(index < list.length){
        root = new Node(list[index])
        root.left = createTree(list, 2 * index + 1, root.left)
        root.right = createTree(list, 2 * index + 2, root.right)
    }
    return root
   
}

function displayTree(root){
    if(root === null) return

    console.log(root.value)

    displayTree(root.left)
    displayTree(root.right)
}

let root = createTree(list, 0)
export default root