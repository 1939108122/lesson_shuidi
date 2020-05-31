function Tree(val) {
  this.val = val
  this.left = this.right = null
}

var isSymmetric = function(root) {
  var arr = []
  var k = 1
  const recursion = (root, k) => {
    if (!root) return null
    
    recursion(root.left, k+1)
    arr.push(root.val + ',' + k)
    recursion(root.right, k+1)
  }
  recursion(root, k)
  var len = arr.length - 1
  var mid = (arr.length - 1) / 2
  for (var i = 0; i < mid; i++)
  {
    if (arr[i] !== arr[len - i])
    {
      return false
    }
  }
  return true
};

let n1 = new Tree(1)
let n2 = new Tree(2)
let n3 = new Tree(2)
let n4 = new Tree(2)
let n5 = new Tree(2)


n1.left = n2
n1.right = n3

n2.left = n4

n3.left = n5


console.log(isSymmetric(n1))

// 先递归中序遍历放入数组，在判断是否是回文串

// 注意：放入数组要排除 类似 [1, 2, 2, 2, 2,null, 2, null ]的情况

// 参考：https://leetcode-cn.com/problems/symmetric-tree/solution/zuo-zhong-you-shun-xu-shu-chu-zhi-shu-zu-zai-pan-d/