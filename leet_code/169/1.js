var majorityElement = function(nums) {
    var majority = nums[0];
    var count =1;
    for(let i =1; i<nums.length; i++)
    {
        if(count== 0)
        {
            majority = nums[i]
        }
        if(nums[i] == majority)
        {
            count++
        }
        else{
            count--
        }
        
    }
    return majority
    
};
console.log(majorityElement([3,2,3]))