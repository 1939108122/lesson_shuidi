function Listnode (val) {//链表节点对象 
    this.val = val;//链表节点 值
    this.next = null; //指针 
    return this 
}

var removeDuplicates = function (head) {
    if(head ==null || head.next == null )return head
    var cur = head;
    while(cur.next != null)
    {
        if(cur.next.val == cur.val)
        {
            cur.next == cur.next.next;
        }
        else
        {
            cur = cur.next;
        }
    }
}

const n1 = new Listnode(1)//头指针 next 
const n2 = new Listnode(1);
const n3 = new Listnode(2);
n1.next = n2;
n2.next = n3;
// console.log(n1);
console.log(removeDuplicates(n1));
