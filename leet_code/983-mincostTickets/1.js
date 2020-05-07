var mincostTickets = function(days, costs) {
  let dp = new Array(366+30).fill(0),
    len = days.length,
    maxDays = days[len -1],
    minDays = days[0],
    k = len-1;
    
  for (var i =maxDays; i>=minDays; i--)
  {
    if (i === days[k])
    {
      dp[i] = Math.min(
        dp[i+1] + costs[0],
        dp[i+7] + costs[1],
        dp[i+30] + costs[2]
      )
      k--
    }
    else{
      dp[i] = dp[i+1]
    }
  }
  return dp[minDays]

};
console.log(mincostTickets([1,4,6,7,8,365], [2,7,15]))