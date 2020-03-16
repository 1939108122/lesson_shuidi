var compressString = function(S) {
    var a = S.split('')
    var b = ''
    for (var i=0, j =0; j<S.length; j++)
    {
        if(a[j+1] !== a[i])
        {
            b+= a[i] +(j+1-i)
            i=j+1
        }
    }
    return b.length< S.length? b:S

};
console.log(compressString("aabcccccaaa"))