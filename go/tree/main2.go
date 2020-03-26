// go    tree
package main

import "fmt"
// 树节点  
type Node struct {
  value int
  left *Node
  right *Node
}
// 找节点 时间复杂度  链表的 O(N) -> O(logN)  递归 
func (node *Node)FindNode(n *Node, x int) *Node {
  // 在一棵树找节点  很多小事情 每三个节点里    
  if n == nil {
    return nil
  } else if n.value == x {
    // 退出条件
    return n
  } else {
    p := node.FindNode(n.left, x) //递  沿着左子树
    if p != nil { //找到了
      return p
    }
    return node.FindNode(n.right, x)
  }
}

func (node *Node) GetTreeHeight( n *Node) int {
	if n == nil {
		return 0
	}else {
		lHeight := node.GetTreeHeight(n.left)
		rHeight := node.GetTreeHeight(n.right) 
		if lHeight > rHeight {
			return lHeight +1
		} else {
			return rHeight +1
		}
	}
}
func (node *Node)GetLeafNode (n *Node) {
	if n != nil {
		if n.left == nil && n.right == nil {
			fmt.Printf("%d", n.value)

		}
		node.GetLeafNode(n.left)
		node.GetLeafNode(n.right)
	}
}

func CreateNode(value int) *Node {
  return &Node{value, nil, nil} // nil 为空 & 取地址
}

func (node *Node) FirstOrder( n *Node) {
	if n == nil {
		return 
	} else {
		
		fmt.Print(n.value, "")
		node.FirstOrder(n.left)
		node.FirstOrder(n.right)
	}
}
func (node *Node) MiddleOrder( n *Node) {
	if n == nil {
		return 
	} else {
		
		
		node.MiddleOrder(n.left)
		fmt.Print(n.value, "")
		node.MiddleOrder(n.right)
	}
}
func (node *Node) LastOrder( n *Node) {

	if n == nil {
		return 
	} else {
		
		
		node.LastOrder(n.left)
		node.LastOrder(n.right)
		fmt.Print(n.value, "")
	}
}

// tree treeNode   递归的概念来定义的 
func main() {
      //      5
      // 2         4     
      //    7   8     9
      //  6   
  root := CreateNode(5) // 根节点
  root.left = CreateNode(2) 
  // CreateNode 生成的结点可以作为其他节点的左子针
  root.right = CreateNode(4)
  root.left.right = CreateNode(7)
  root.left.right.left = CreateNode(6)
  root.right.left = CreateNode(8)
  root.right.right = CreateNode(9)
  
  // fmt.Printf("%d\n", root.FindNode(root, 4).value)  // 4的节点
	// fmt.Printf("%d\n", root.GetTreeHeight(root))  // 树的高度  递归
	// root.GetLeafNode (root)
	fmt.Printf("%s", "前序遍历为：")
	root.FirstOrder (root)
	fmt.Println()
	fmt.Printf("%s", "中序遍历为：")
	root.MiddleOrder (root)
	fmt.Println()
	fmt.Printf("%s", "后序遍历为：")
	root.LastOrder (root)
}