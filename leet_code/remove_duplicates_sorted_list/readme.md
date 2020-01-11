# 删除有序数组中的重复项
前端容易入门
我出身不好 教养也差 但一直努力尝试去做一个体面的人
读题： 
sortedArr[1,1,2]
return length 2 
一次遍历  ？
res []    空间复杂度   o（n） 
for 排好序  后面的项一定大于或等于前面的 
等于要原地删除 
res  length 
抽象  数理逻辑 
动图  
两个指针  pre  cur 
cur 一直往前跑  一次循环的每一项遍历 
pre  在后面追
pre  cur arr 前一个 后一个  
不等于 pre +1 
想等 时 pre不走 会慢下来 
如果cur pre不一样 那么pre+1 值等于cur
牛，从头到尾都是排好序的不重复数
每个位置放什么数？
pre 指针 每次没有跟上cur的速度 表示有重复 
pre cur  n个空位  
pre+1 删除 把当前cur的值交给 pre
- 快慢指针 
1. 一次循环  cur ++ 一直跑 
2。 cur跟pre  arr[] 不等的话 
相等的话 pre不动  
3、 cur再走的时候 继续比较
新的cur 跟旧的pre 
不等时 ， pre++  并且把新的cur值 赋值给 新的pre 
把因为之前的重复空出来的位置给填上。
4. cur>length 
数据结构 链表 
[1,,1,2] 链表 
LinkedList next  
1 1 1 next 指向一  改成指向2
把数组要维持位置  快慢指针