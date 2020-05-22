var buildTree = function(preorder, inorder) {
  if (preorder.length === 0) return null
  const node = new TreeNode(preorder[0])
  const index = inorder.indexOf(preorder[0])

  node.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
  node.right = buildTree(preorder.slice(index+1), inorder.slice(index+1))

  return node
  
};

