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
                                <h6>{{$route.name}}</h6>
                            </div>
                            <!--steps-->

                            <div class="wrap final">
                                <span class="circle rounded-crcl"> 02 </span>
                                <h6>Orden Completa</h6>
                            </div>
                            <!--steps-->
                        </div> 
                    </div>
                </div>
            </section>
            <!--check out steps-->

            <section class="cart-block p-pb">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="woocommerce">
                                <form action="#">
                                    <table class="shop_table shop_table_responsive cart">
                                        <thead>
                                            <tr>
                                                <th class="product-name">Detalle</th>
                                                <th class="product-price">Precio</th>
                                                <th class="product-quantity">Cantidad</th>
                                                <th class="product-subtotal">Total</th>
                                                <th class="product-remove"> </th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr class="cart_item" v-for="item in data" :key="item._id">
                                                <td class="product-name" data-title="Product">
                                                    <a href="#" class="cart-product">
                                                        <img width="145px" :src="item.url" alt="Product thumbnail">
                                                    </a>

                                                    <div class="product-info">
                                                        <h6> {{item.name}}  </h6>
                                                        <!-- <ul class="product-info">
                                                            <li>Categoria: Women’s Wear </li>
                                                            <li>Size: XL </li>
                                                            <li>Color: Orange </li>
                                                        </ul> -->
                                                    </div>
                                                    <!--product info-->
                                                </td>
                                                <td class="product-price" data-title="Price">
                                                    ${{item.price}}
                                                </td>
                                                <td class="product-quantity" data-title="Quantity">
                                                <div class="quantity-wrap">
                                                        <span class="minus" @click="addCant(item, false)"> - </span>
                                                        <input type="number" v-model="item.cant" title="Qty" class="input-text qty" size="4">
                                                        <span class="add" @click="addCant(item, true)"> + </span>
                                                    </div>
                                                </td>
                                                <td class="product-subtotal" data-title="Total">
                                                    ${{(item.price * item.cant).toFixed(2)}}
                                                </td>
                                                <td class="product-remove" data-title="Remove">
                                                    <a @click="removeCart(item)" href="#" class="remove" title="Remove this item">
                                                        <i class="fa fa-close"></i>
                                                    </a>
                                                </td>
                                            </tr>
                                            
                                            <!--cart item-->
                                            <tr>
                                                <td colspan="5" class="actions">
                                                    <router-link to="/catalogo" class="btn btn-default btn-cart">Continuar Comprando</router-link>
                                                    <!-- <a href="#" class="btn btn-default btn-cart">Continuar Comprando </a> -->
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </form>
                                <!--cart form-->

                                <div class="cart-collaterals">
                                    <div class="cart_totals">
                                        <h2>Cart Totals</h2>
                                        <table class="shop_table shop_table_responsive">
                                            <tbody>
                                                <tr class="cart-subtotal">
                                                    <th>Sub-total </th>
                                                    <td data-title="Subtotal">${{total.toFixed(2)}}
                                                    </td>
                                                </tr>

                                                <tr class="order-total">
                                                    <th>Total</th>
                                                    <td data-title="Total"> ${{total.toFixed(2)}}</td>
                                                </tr>
                                            </tbody>
                                        </table> 
                                        <div class="wc-proceed-to-checkout">
                                            <a href="#" @click="proceder()" class="checkout-button button alt wc-forward">Confirmar Pedido</a>
                                        </div>
                                    </div>
                                </div>
                                <!--collaterals-->
                            </div>
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
        var carrito = await this.$pouch.find({
            selector: {inCart: true},
        });

        var _data = carrito.docs||[];

        var cliente = this.$cookies.get('_cl_')||{};

        if(cliente){
            this.data = _data.filter(function(x){return x.cartCliente.map(function(y){return y.id}).indexOf(cliente._id)>-1 });
            // console.log('this.data', this.data);
            // this.data.forEach(element => {
                
            // });
            
            this.total = this.data.reduce(function(x,y){return x + (y.cant * y.price);},0);                
        }

    },
    async proceder(){
        await this.$pouch.bulkDocs(this.data);      
        this.$store.commit('addToCart', {});        
        this.$router.push({ path: 'ordencomplete' });
    }
  },
  watch:{
        "$store.state.cart": function(){
            this.refresh();
        }
  }
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