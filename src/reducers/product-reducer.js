import types from '../actions/types'


const initialState = {
    products: [],
    error:null,
    loading:false
}
const productReducer = (state, action) => {
    if (typeof state === 'undefined') {
        return Object.assign({}, initialState);
    }
    console.log('prevstate', state.products);
    switch (action.type) {
       
        case types.PRODUCT_SELECTED:
            return Object.assign({}, state, {
                products: [...state.products, action.product]
            });
        case types.PRODUCT_DESELECTED:
            const products = [...state.products]
            const index = products.findIndex((product)=>{return action.product.name===product.name})
            products.splice(index, 1)
            return Object.assign({}, state, { products });
        default:
            return state;
    }
}

export default productReducer;


