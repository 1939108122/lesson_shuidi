var rotate = function(matrix) {
  // 转序倒置
  for(let i = 0; i< matrix.length; i++) {
      for(let j = i; j<matrix[i].length; j++) {
          ([matrix[i][j], matrix[j][i]] = [matrix[j][i],matrix[i][j]])
      }
  }
  matrix.forEach(row => row.reverse());
  return matrix
};
console.log(rotate([
  [1,2,3],
  [4,5,6],
  [7,8,9]
]))