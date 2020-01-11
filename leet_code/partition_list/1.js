function ListNode (val) {
    this.val = val;
    this.next = null;
}
var partition = function (head,x) {
    var smaller = dummySmaller = new ListNode(-1); // -1 正数？小区  
    var greater = dummyGreater  = new ListNode(-1); //大区 
    while(head)
    {
        console.log(head.val);
        // 链表的遍历 
        //head 动态 
        if(head.val <x)
        {
            smaller.next = head //进入 较小值分区
            smaller = smaller.next // 更新smaller
        }else
        {
            greater.next = head //进入 较小值分区
            greater = greater.next // 更新smaller
        }
        head = head.next;
    }
    smaller.next = dummyGreater.next ;
    greater.next = null; // 最后一个节点的next属性为空 
    return dummySmaller.next; 
}
const n1 = new ListNode(1);
const n2 = new ListNode(4);
const n3 = new ListNode(3);
const n4 = new ListNode(2);
const n5 = new ListNode(5);
const n6 = new ListNode(2);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
console.log(n1);
console.log(partition(n1,3));