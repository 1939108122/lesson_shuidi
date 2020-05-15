function Tree(val) {
  this.val = val;
  this.left = this.right = null;
}

var levelOrder = function (root) {
  if (!root) return []
  let quete = [root]
  let res = []
  while (quete.length)
  {
    let subRes = []
    let len = quete.length
    for (let i = 0; i<len; i++)
    {
      let cur = quete.shift()
      subRes.push(cur.val)
      if (cur.left) quete.push(cur.left)
      if (cur.right) quete.push(cur.right)
    }
    res.push(subRes)
  }
  return res
}

const t1 = new Tree(1)
const t2 = new Tree(2)
const t3 = new Tree(3)
const t4 = new Tree(4)
const t5 = new Tree(5)

t1.left = t2
t1.right = t3
t3.left = t4
t3.right = t5

console.log(levelOrder(t1))