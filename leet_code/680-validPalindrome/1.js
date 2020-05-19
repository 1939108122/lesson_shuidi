var validPalindrome = function(s) {
  var l = 0
  var r = s.length-1
  while (l<r)
  {
    if (s[l] !== s[r])
    {
      return valid(s, l+1, r) || valid(s, l, r-1)
    }
    l++
    r--
  }
  return true
};

function valid(s, l, r)
{
  while (l<r)
  {
    if (s[l] !== s[r])
    {
      return false
    }
    l++
    r--
  }
  return true
}
console.log(validPalindrome("cbbcc"))
// 左右指针分别从最左边和最右边慢慢中间靠拢， 每次都判断值是否相当
// 不相等则左右分别加一在判断一次（也就是删除一个字符判断）,此时要是遇到不相等的直接false
