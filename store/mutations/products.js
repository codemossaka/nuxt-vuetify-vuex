import * as type from "../types";
import Vue from 'vue';

export default {

  [type.GET_PRODUCTS]: (state, products) =>{
    Vue.set(state, 'products', products)
  },

  [type.SAVE_PRODUCT]:(state, product) =>{
    state.products.push(product);
  },

}
