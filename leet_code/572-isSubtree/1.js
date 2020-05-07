function Tree (val)
{
  this.val = val
  this.left = this.right = null
}

var isSubtree = function(s, t) {
  return JSON.stringify(s).indexOf(JSON.stringify(t))>-1  //投机取巧 不可取
};

var s1 = new Tree(3)
var s2 = new Tree(4)
var s3 = new Tree(5)
var s4 = new Tree(1)
var s5 = new Tree(2)

s1.left = s2
s1.right = s3

s2.left = s4
s2.right = s5


var t1 = new Tree(4)
var t2 = new Tree(1)
var t3 = new Tree(2)

t1.left = t2
t1.right = t3


console.log(isSubtree(s1, t1))
