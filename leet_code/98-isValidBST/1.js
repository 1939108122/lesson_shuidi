function Tree(val) {
  this.val = val;
  this.right = this.left = null
}
// Infinity为一个无穷大的值
// 先序遍历
var isValidBST = function(root, min = -Infinity, max = Infinity) {
  if (!root) return true
  if(root.val >=max || root.val <= min) return false
  return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max)

  
};

var n1 = new Tree(2)
var n2 = new Tree(1)
var n3 = new Tree(3)


n1.left = n2
n1.right = n3


console.log(isValidBST(n1))


