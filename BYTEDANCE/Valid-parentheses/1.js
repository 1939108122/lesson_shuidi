var isValid = function(s){
    if(!s || s.length <1)  //字符串为空
    {
        return true
    }
    var n = s.length;  //字符串的长度
    var sum =0;  //这样不用定义数组  空间复杂度为O（1）
    for(var i =0; i<n; i++)
    {   
        var c= s[i];
        if(c== '(')
        {
            sum++;  // 左括号存入sum中
        }
        else{  //反之则为右括号
            if(sum>=1)
            {
                sum--; // 消除左括号
            }
            else{
                return false;
            }
        }
    }
    return sum>0? false: true;  //返回true 和 false
};
console.log(isValid('()'));