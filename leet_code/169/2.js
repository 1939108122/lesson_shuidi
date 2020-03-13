var majorityElement = function (nums) {
    var len = nums.length
    let arr = nums.sort()
    return arr[parseInt(len/2)]
}

console.log(majorityElement([2,2,1,1,1,2,2]))