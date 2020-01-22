function ListNode (val) {
    this.val = val;
    this.next = null;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

// 1 原地  没有两个数组可以用了  O(2n) 
// 2  哨兵结点 假 指向第一个奇结点  奇数链表的头结点
var oddEvenList = function (head) {
    if(!head || !head.next)
    {
        return head
    }
    const dummyHead1 = {
        next: head
    }
    //偶数链表 
    const dummyHead2 = {
        next: head.next
    }
    let odd = dummyHead1.next; //奇数结点
    let even = dummyHead2.next; //偶数结点
    while(odd && odd.next && even && even.next)
    {
        const oddNext = odd.next.next;
        // 下一个奇数结点
        const evenNext =even.next.next; //下一个偶数点
        odd.next = oddNext;
        even.next = evenNext;

        odd = oddNext;
        even = evenNext;
    }
    //拼接奇偶链表
    odd.next = dummyHead2.next;

    return dummyHead1.next;

};
console.log(oddEvenList(n1));