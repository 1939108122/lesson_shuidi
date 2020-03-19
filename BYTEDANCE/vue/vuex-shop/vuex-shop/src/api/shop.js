const _products = [
    {
        id: 1,
        title: 'ipad 4 mini ',
        price : 500.01,
        inventory: 2
    },
    {
        id: 2,
        title: 'H&M T-shirt white ',
        price : 10.99,
        inventory: 10
    },
    {
        id: 3,
        title: 'kyrie Irving 海绵宝宝限量版',
        price : 2200,
        inventory: 5
    },

]
export default {
    getProducts(cb) {
      setTimeout(() => cb(_products), 1000)
    },
    buyProducts(products, cb, errorCb) {
      setTimeout(() => {
        (Math.random() > 0.5)?cb():errorCb()
      }, 1000)
    }
  }