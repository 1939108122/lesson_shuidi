import shop from '../../api/shop'
const state = {
all:[
]
}
const mutations = {
    setProducts(state, products) {
        state.all = products
    }
}
const actions = {
    getAllProducts( { commit }) {
        // console.log('get products')
        shop
        .getProducts( products =>{
            commit ('setProducts', products)
        }

        )
    }
}
const getters = {} 
export default {
    namespaced:true, //命名空间
    state,
    mutations,
    actions,
    getters
}