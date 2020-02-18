function treeNode(val){ // 形成一棵树的根节点
    this.val = val;
    this.left = this.right = null; // 左节点和右节点先设置为空
}
function inorderTraversal (root){  //
    var arr = [];
    const inorder = root => {
        if(root === null) return null;
        arr.push(root.val); //根节点进入数组
       
        inorder(root.left); // 根节点的左节点递归
        inorder(root.right);  // 根节点的右节点递归
        
       
    }
    inorder(root); 
    return arr;  // 返回数组
}
var a1 = new treeNode(1);
var a2 = new treeNode(2);
var a3 = new treeNode(3);
var a4 = new treeNode(4);
var a5 = new treeNode(5);
var a6 = new treeNode(6);
var a7 = new treeNode(7);

a1.left = a2;
a1.right = a3;
a2.left = a4;
a2.right = a5;
a3.left = a6;
a3.right = a7;
console.log(inorderTraversal(a1));