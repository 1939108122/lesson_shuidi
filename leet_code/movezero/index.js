// let movezero ;//undefined
var moveZero = function (nums) {
    var notZeroArr = [];
     ZeroArr = [];
    var index =0;
     for(var i=0; i<nums.length; i++)
{

if(nums[i]==0)
ZeroArr.push[0];
else
notZeroArr.push(nums[i]);
}
return notZeroArr.concat(ZeroArr);
}
console.log(moveZero([0,1,0,3,12]));

//console.log('sdad');