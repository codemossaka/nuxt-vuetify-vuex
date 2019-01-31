
import * as type from "../types";

export default {

  [type.GET_PRODUCTS]: ({commit, getters}) =>
    getters.GET('produits', commit)
      .then(body =>commit(type.GET_PRODUCTS, body)),

  [type.GET_PRODUCT]: ({commit, getters}, produitID) =>
    getters.GET(`produits/${produitID}`, commit)
      .then(body => commit(type.GET_PRODUCT, body)),

  [type.SAVE_PRODUCT]: ({commit, getters}, produit) =>
    getters.POST(`produits`, produit)
      .then(body => {commit(type.SAVE_PRODUCT, body)}),

  [type.UPDATE_PRODUCT]: ({commit, getters}, produits) =>
    getters.PUT(`produits/${produits.id}`, produits,commit)
      .then(body => {}),


  // [type.DELETE_PRODUCT]: ({commit, getters}, order) =>
  //   getters.DELETE(`orders/${order.id}`, order, commit)
  //     .then(body => {commit(type.DELETE_PRODUCT, order.id)}),

}
