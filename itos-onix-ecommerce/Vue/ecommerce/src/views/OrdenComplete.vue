<template>
    <div>    
        <my-header></my-header>
        <main class="main primary-padding">
            <section class="checkout-steps">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="wrap first active">
                                <span class="circle rounded-crcl"> 01 </span>
                                <h6>Pedido</h6>
                            </div>
                            <!--steps-->
                            <div class="wrap final active full ">
                                <span class="circle rounded-crcl"> 02 </span>
                                <h6>Orden Completa</h6>
                            </div>
                            <!--steps-->
                        </div>
                    </div>
                </div>
            </section>
            <!--check out steps-->

            <section class="thank-you p-pb">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12 text-center ">
                            <figure class="mb-45">
                                <img src="assets/images/thank-you-icon.jpg" alt="">
                            </figure>

                            <h4 class="mb-70">La order está completa!</h4>

                            <router-link to="/home" class="btn btn-default btn-bg text-uppercase">inicio</router-link>
                            <router-link to="/catalogo" class="btn btn-default btn-bg text-uppercase">Continuar Comprando</router-link>

                        </div>
                    </div>
                </div>
            </section>
            <!--cart block-->
        </main>
        <!--main-->

        <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import myHeader from '../components/myHeader.vue';
import myFooter from '../components/myFooter.vue';
export default {
  name: 'Pedido',
  components: {
    myHeader,
    myFooter
  },
  data(){
    return {
      data:[],
      total: 0
    }
  },
  created: function(){
    var ck = this.$cookies.get("_us_");
    
    if(!ck || !ck.ok)
      this.$router.push({ path: 'login' });
      
    this.refresh();
  },
  methods: {
     addCant(item, add){
        if(add) item.cant = parseInt(item.cant||0)+1;
        else if(item.cant > 1) item.cant = parseInt(item.cant||0)-1;

        this.total = this.data.reduce(function(x,y){return x + (y.cant * y.price);},0);
    },
    async removeCart(item){
        item.inCart = false; 
        await this.$pouch.put(item);      
        this.$store.commit('addToCart', item);
    },
    async refresh(){
        // var carrito = await this.$pouch.find({
        //     selector: {inCart: true},
        // });

        // var _data = carrito.docs||[];
        

        // this.data = _data.map(function(x){return {
            
        // }})

        this.total = this.data.reduce(function(x,y){return x + (y.cant * y.price);},0);                
    }
  },
}
</script>
<style scoped>
ul.products li.product figure, li.product figure .product-wrap{
  height: 95px !important;
}
ul.products li.product .content{
  padding-bottom: 26px !important;
  word-break: break-all;
  max-height: 70px;
  min-height: 70px;
}
</style>