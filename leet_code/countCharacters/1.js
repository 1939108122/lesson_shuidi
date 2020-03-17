// var countCharacters = function(words, chars) {
//     var count2 = 0
//       for(var j =0; j<words.length; j++)
//         {
//             var char = chars
//             var count =0
//          for(var y =0; y<words[j].length; y++)
//          {
//             if(char.indexOf(words[j][y]) !=-1 )
//             {
//               count++
//               char = char.replace(new RegExp(words[y]),'+')
//             }
//             else{
//                 break
//             }
//          }
//          if(count == words[j].length)
//               {
//                 count2+= words[j].length
//               }
         
//         }
//     return count2
// };
var countCharacters = function(words, chars) {
    let charMap = new Map(); // 用于存放chars字符串中每个字母出现的频率
    let size = 0; // 存放长度之和
    for (let char of chars) {
      charMap.set(char, (charMap.has(char) ? charMap.get(char) + 1 : 1));
    }
  
    for (let word of words) {
      let wordMap = new Map(); // 用于存放每个单词中每个字母出现的频率
      for (let char of word) { // 遍历单词中的字母
        wordMap.set(char, (wordMap.has(char) ? wordMap.get(char) + 1 : 1));
      }
      let success = true;
      for (let char of word) {
        if (wordMap.get(char) > charMap.get(char) || charMap.get(char) === undefined) {
          success = false;
          break;
        } 
      }
      if (success) {
        size += word.length
      }
    }
    return size;
  };
console.log(countCharacters(["dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin","ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb","ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl","boygirdlggnh","xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx","nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop","hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx","juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr","lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo","oxgaskztzroxuntiwlfyufddl","tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp","qnagrpfzlyrouolqquytwnwnsqnmuzphne","eeilfdaookieawrrbvtnqfzcricvhpiv","sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz","yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue","hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv","cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo","teyygdmmyadppuopvqdodaczob","qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs","qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs"]
,"usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp"))
// if(char.includes(words[j].split("")[y]))