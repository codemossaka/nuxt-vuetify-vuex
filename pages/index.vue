<template>
  <p @click="dat">ddjhjfhf</p>
</template>
<script>
import AppLogo from '~/components/AppLogo.vue'
import {GET_PRODUCTS} from "../store/types";

export default {
  components: {
    AppLogo
  },

  created(){
    this.$store.dispatch(GET_PRODUCTS);
  },
  data(){
    return {
      name: null,

    }
  },

  mounted() {
    console.log("process.env.baseUrl ", process.env.baseUrl)
  },
  computed: {

    products(){
      return this.$store.state.products;
    }
  },
  methods: {

    dat(){
      // return this.$axios.get(`http://localhost:9999/Produits`)
      console.log(this.$store.state.products)
    }
  }
}
</script>

<style scoped>

</style>

