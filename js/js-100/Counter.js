class Counter {
  constructor() {
    this.count = 0
  }
  increment () {
    this.count++
  }
}

const counterOne = new Counter()

counterOne.increment()
counterOne.increment()

const counterTwo = counterOne
counterTwo.increment()

console.log(counterOne.count)

// answer  3

// 创建一个新的变量counterTwo并将counterOne的引用地址赋值给他，因为对象受引用地址的影响，
// 因此他们指向同一块内存地址，任何对其的副作用都会影响到counterTwo 
