var sortArray = function(nums) {
  function sortNumber(a,b)
{
return a - b
}
  return nums.sort(sortNumber)
};
console.log(sortArray([12,8,23,15,89,56]))