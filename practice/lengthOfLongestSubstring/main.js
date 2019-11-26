var lengthOfLongestSubstring = function(s) {
    let num = 0,res = 0;
    let m = '';
    for (var n of s) {
      if (m.indexOf(n) == -1) {
        m += n;
        num++;
        res = res < num ? num: res;
      }
    else {
        m += n;
        m = m.slice(m.indexOf(n)+1);
        num = m.length;
      }

    

    }
    return res;
  }
   console.log(lengthOfLongestSubstring(['a','a','w','k','q','e','w']));


