var sumNums = function(n) {
 return n && n + sumNums(--n)
};

console.log(sumNums(5))