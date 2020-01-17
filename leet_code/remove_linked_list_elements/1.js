function ListNode(val) {
    this.val = val;
    this.next = null;
}

const n1 = new ListNode(6);
const n2 = new ListNode(6);
const n3 = new ListNode(6);
const n4 = new ListNode(3);
const n5 = new ListNode(4);
const n6 = new ListNode(5);
const n7 = new ListNode(6);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n7;
function removeElements (head, val) { // 头结点  val(要检查的值)
    // 如果当前结点的下一个结点为val ， 把当前节点的next指向next.next 
    //如果头结点值为val？？ 特殊情况 
    const dummy = { //哨兵结点 假 val属性为空
        next:head // 哨兵结点为头结点 可能是val 的结点服务
    }
    let current = dummy;//当前结点先指向哨兵结点
    while(current && current.next) //遍历 尾结点 
    {
        let next = current.next;
        if(next.val == val)
        {
            current.next = next.next; //值为val 下一个结点从链表链式关系中移除了
        }
        if(next.val !== val)
        {
            current = next;
        }
    }
    return dummy.next //返回dummy指向下一个next
  }
  console.log(removeElements(n1, 6));