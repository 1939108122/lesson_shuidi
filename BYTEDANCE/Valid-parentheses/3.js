var longestValidParentheses = function(s) {
    var max = 0
    var stack =[]
    if(s.length == 0 || s.length== 1) return max  //字符串为空或者一个无效的单独括号情况
    for(var i =0; i<s.length;i++)
    {
        var tmpMax = 0 //当前位 括号的匹配长度 重新开始
        for(var j= i; j<s.length; j++) // 从i开始第一重循环匹配
        {
            if(s[j] =='(') // 左括号
            {
                stack.push('(')  //入栈
                tmpMax++
            }
            else if(s[j] == ')')  // 右括号
            {
                if(stack.length <1) //栈空 当前位置不符合匹配退出这次循环并记录有效字符
                {
                    max=max<tmpMax? tmpMax:max
                    break;
                }
                else
                {
                    stack.pop()  //出栈
                    tmpMax++
                }
            }
        }
        if(stack.length ==0)  //考虑这种情况  s= ‘()()()’
        {
            max=max<tmpMax? tmpMax:max
        }
        stack= []  //清空本次循环的栈
    }
    return max
}
console.log(longestValidParentheses('()))()())')) 