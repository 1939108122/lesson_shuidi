//函数去重 
/**
 * 
 * @param {Array} arr 
 * @return {Array}
 */
// function unique(arr){ es5
// function 关键字没有
// es6 箭头函数 ()=>{}
// let fn;
// console.log(typeof fn); //undefine 未定义
// fn=null;
// console.log(typeof fn); //null
// fn=()=>{};
// console.log(typeof fn); //function
const unique=(arr) => {
    let res=[];
    for(let i=0,arrLen=arr.length;i<arrLen;i++)
    {
        var current=arr[i];     //基地 ，局部变量，缓存值，减少了对数组的访问
        if(res.indexOf(current)==-1) //如果res中没有arr[i],加入arr[i]
            res.push(current);
    }

    /*for(var i = 0; i < arr.length; i++) {
        // 如果在res 数组中 就不加入
        // arr[i] 
        // let isIn = false;
    for (var j = 0; j < res.length; j++) {
        if (arr[i] === res[j] ) {
          // isIn = true;
          break;
        }
      }
      //没有出现？ 
      if (j==res.length) {
        res.push(arr[i]);
      }
      // 否则push res
    }*/
    return res;
}


var array=['1',2,3,2,4,1];
// console.log(typeof array);
console.log(unique(array));
// console.log(typeof unique == 'function' && unique(array));
