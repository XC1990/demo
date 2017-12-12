import types from './types'

function productSelected(product){
    return {
        type:types.PRODUCT_SELECTED,
        product:product
    }
}

function productDeselected(product){
    return {
        type:types.PRODUCT_DESELECTED,
        product:product
    }
}

export default {productSelected,productDeselected }