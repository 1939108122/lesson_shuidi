// 测试驱动开发
// 先写测试代码，在写代码
const EasyDate = require('../../src/EasyDate')
const should = require('should') //断言库
// 你要测试的东西 
describe('想要测试Date合格',() => {
  //  添加测试用例
  // 高级需求 可以给一个当前日期的偏移量
  let date = new EasyDate()
  it("测试实例日期正确", () => {
    // 测试，生成一个日期
    // 写测试代码， 用下src下的代码
    // date.getFullYear()
    some = date.toDate()
    let today = new Date()
    should(some.getFullYear()).equal(today.getFullYear())
    should(some.getMonth()).equal(today.getMonth())
  })

  describe('判断闰年', () => {
    it('是否为闰年', () => {
      should(EasyDate.isLeapYear(2000)).be.True();
    })
  })

  describe('月份', () => {
    it('输出月份, 个位数前面自动补0',() => {
      should(EasyDate.toDouble(11)).equal('11');
      should(EasyDate.toDouble(9)).equal('09');
    })
  })
})