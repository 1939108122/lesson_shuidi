// 广度优先搜索
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}

var rightSideView = function(root) {
  if(!root) return []
  let queue = []        // 队列
  let arr = []
  queue.push(root)
  while(queue.length > 0){
    let len = queue.length
    for(let i = 0; i < len; i++){
      let node = queue.shift()              // 取出队列第一个元素
      if(i === len - 1) arr.push(node.val)  // 把当前队列最后元素 的值 加入arr ，因为从右边看到的总是 那一层最后一个元素
      if(node.left) queue.push(node.left)   // 继续往队列添加元素
      if(node.right) queue.push(node.right)
    }
  }
  return arr
};
var n1 =  new TreeNode(1);
var n2 = new TreeNode(2);
var n3 = new TreeNode(3);
var n4 = new TreeNode(4);
var n5 = new TreeNode(5);
n1.left = n2;
n1.right = n3;
n2.right = n5;
n3.right =n4;
console.log(rightSideView(n1))
