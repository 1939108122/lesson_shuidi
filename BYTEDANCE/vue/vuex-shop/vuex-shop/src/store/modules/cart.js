const state = {
    items: [],
    checkoutStatus:null
    }
    const mutations = {
        pushProductToCart(state, {id}) {
            state.items.push( {
                id,
                quantity: 1
            })
        },
        incrementItemQuantity(state, {id}){
            const cartItem = state.items.find( item=> item.id === id)
            cartItem.quantity++
        }
    }
    const actions = {
        addProductToCart( {commit }, product) {
            // console.log(payload)
            // return state.items.map(({ id, inventory})=>{
            //     // const product = rootState.products.all.find(
            //     //     product=> product.id == id)

            // }) 
            if(product.inventory >0){
                const cartItem = state.items.find(item=> item.id === product.id)
                if(!cartItem) {
                    commit( 'pushProductToCart', { id: product.id })
                }
                else{
                    commit('incrementItemQuantity', cartItem)
                }
            }
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