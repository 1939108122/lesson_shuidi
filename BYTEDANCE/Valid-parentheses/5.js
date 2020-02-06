function longValidParentheses(s){ 
    var max = left = right =0;  //用两个变量代替模拟栈的意义 left为左括号的数量 right为右括号的数量
    if(s.length == 0 || s.length == 1) return max; //如果为空 
    for (var i =0 ; i<s.length;i++) //一次遍历 时间复杂度为O（n）
    {
        if(s[i] =='(')
        {
            left++; //左括号增加数量
        }
        else{
            right++; // 右括号增加数量
        }
        if(left == right){
            max = Math.max(max, 2*right); // 计算有效括号数量并赋值给max
        }
        else if(right > left)
        {   
            left = right =0  //无效 重新来
        }
    }
    left = right = 0;
    for (var i =s.length-1 ; i>=0;i--) 
    {
        if(s[i] =='(')
        {
            left++; 
        }
        else{
            right++; 
        }
        if(left == right){
            max = Math.max(max, 2*left); 
        }
        else if(right < left)
        {   
            left = right =0  
        }
    }

    return max
}
console.log(longValidParentheses('(()()()()'))