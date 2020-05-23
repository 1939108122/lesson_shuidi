// 滑动窗口解法

var minWindow = function(s, t) {
  let minLen = Infinity, resL //minLen为无穷大, 计算长度时可以被改写
  let map = {}  //记录目标字符对应的个数
  let missTypes = 0  //记录目标字符的种类数
  for (let char of t)
  {
    if (!map[char])
    {
      map[char] = 1
      missTypes++
    }
    else { 
      map[char]++
    }
  }

  for (let left = 0, right = 0; right < s.length; right++) // 左右指针 首先右指针移动 扩张窗口
  {
    let rightChar = s[right]
    if (map[rightChar] !== undefined)  map[rightChar]--  //找到目标字符，缺失个数减1

    if (map[rightChar] === 0) missTypes-- //目标个数为0 种类减 1

    while (missTypes === 0) //目标字符已全部找到， 记录产长度和左指针开始移动
    {
      if (right - left + 1 < minLen)
      {
        minLen = right - left + 1
        resL = left
      }
      let leftChar = s[left]
      if (map[leftChar] !== undefined)
        {
          map[leftChar]++   //目标字符被舍弃 缺失个数加 1
        }
      if (map[leftChar] > 0) missTypes++ //缺失个数大于0 缺失种类加 1
      left++  //左指针移动， 收缩窗口
    }
  }
  return s.substring(resL, resL+minLen)
};

console.log(minWindow("ADOBECODEBANC", "ABC"))