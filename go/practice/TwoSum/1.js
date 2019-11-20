var twoSum = (nums,target) =>{
    for(var i= 0, len = nums.length; i<len;i++)
    {
        var dif = target - nums[i];
        var a  =  nums.indexOf(dif);
        if(a!=-1)
        {
         if(a!=i)   
         {
            console.log([i,a]);
            break;
         }
        }
    }
}
var nums1 = [1,2,3];
 var target1 = 5;
 twoSum(nums1,target1);
