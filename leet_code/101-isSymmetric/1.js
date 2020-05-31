function Tree(val) {
  this.val = val
  this.left = this.right = null
}

var isSymmetric = function(root) {
   const check = (left, right) => {  //参数接收左右子树
    if (!left && !right) return true  // 左右子树为空

    if (left && right)  // 左右子树都存在，再继续判断
    {
      return left.val === right.val &&  // 左右节点值相等
      check(left.left, right.right) && // 递归判断 左子树的左节点和右子树的右节点相等
      check(left.right, right.left)    // 递归判断 左子树的右节点和右子树的左节点相等
    }
    return false  // 左右子树有一个不存在
   }
   return !root || check(root.left, root.right)   // root为null也对称  并调用check函数传值
};

let n1 = new Tree(1)
let n2 = new Tree(2)
let n3 = new Tree(2)
let n4 = new Tree(3)
let n5 = new Tree(4)
let n6 = new Tree(4)
let n7 = new Tree(3)

n1.left = n2
n1.right = n3

n2.left = n4
n2.right = n5

n3.left = n6
n3.right = n7

console.log(isSymmetric(n1))


//https://leetcode-cn.com/problems/symmetric-tree/solution/di-gui-zhan-mo-ni-di-gui-bfs-by-hyj8/