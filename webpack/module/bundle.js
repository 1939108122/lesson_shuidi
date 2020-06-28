(function(params) {


})({
  './src/a.js': function(params) {
    module.exports = function (params) {
      console.log('a execut');
      return 'a';
    }
  },
  './src/b.js': function(params) {
    module.exports = function (params) {
      console.log('b');
    }
  },
  './src/inde.js':function(params) {
    const a = require('./a.js');
    const b = require('./b.js');
    console.log(a())
    b();
  },
})