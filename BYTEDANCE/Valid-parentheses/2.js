var isValid = function(s){
    if(!s || s.length <1)  
    {
        return true
    }
    var n = s.length; 
    var stack = [];  
    for(var i =0; i<n; i++)
    {   
        var c= s[i];
        d = stack[stack.length - 1];
        if(c== '(' || c =='{' || c=='[')
        {
            stack.push(c);  
        }
            d = stack[stack.length - 1]
            if(c==')')
            {
                if(stack.length<1)return false
                    if(d=='(')
                    {
                        stack.pop()
                    }
                    else
                    {
                        return false
                    }
            }
            if(c==']')
            {
                if(stack.length<1)return false
                   
                    if(d=='[')
                    {
                        stack.pop()
                    }
                    else
                    {
                        return false
                        
                    }
            }
            if(c=='}')
            {
                if(stack.length<1)return false
                    d = stack[stack.length - 1];
                  
                    if(d=='{')
                    {
                        stack.pop()
                    }
                    else
                    {
                        
                        return false
                    }
            }
    }
    
    return stack.length>0? false: true;  
};
console.log(isValid('(])'));