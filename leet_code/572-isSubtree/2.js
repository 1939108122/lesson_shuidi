var isSubtree = function (s, t) {
  if (!s && t) return false

  var  subtree = function (s1, t1) {
    if (!s1 && t1) return false
    if (s1 && !t1) return false
    if (!s1 && !t1) return true
    if (s1.val === t1.val)
    {
      return subtree(s1.left, t1.left) && subtree(s1.right, t1.right)
    }
    else
    {
      return false
    }
  }

  return subtree(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t)
}