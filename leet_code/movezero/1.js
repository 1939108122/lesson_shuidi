let obj ={
    name : '林家豪',
    leetcode: 90
}

const changeleetcode =(o)
=> {
    o.leetcode =100;
}
changeleetcode(obj); //引用式赋值  0 obj 内存空间一致
console.log(obj);