<template>
    <div>    
        <my-header></my-header>
        <main class="main primary-padding">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="title-main text-uppercase text-center mb-60">
                            <h2>{{$route.name}}</h2>
                        </div>
                    </div>
                    <!--title-->
                </div>
                <div class="col-md-12 col-sm-12 col-xs-12 mbe-1">
                    <input type="checkbox" v-model="filtrar"> Mostrar Solo pagados
                </div>
            </div>
            <section class="cart-block p-pb">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12 col-xs-12">
                            <div class="woocommerce">
                                <form action="#">
                                    <table class="shop_table shop_table_responsive cart">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>Fecha</th>
                                                <th>Días</th>
                                                <th>Total</th>
                                                <th>Pendinte</th>
                                                <th>Referencia</th>
                                                <th>Monto</th>
                                                <th>Estado</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            <tr class="cart_item" v-for="item in data.filter(function(x){return !filtrar || x.pagar})" :key="item._id">
                                                <td>
                                                    {{item.numero}}
                                                </td>
                                                <td>
                                                    {{item.fecha}}
                                                </td>
                                                <td>
                                                    {{item.dias}}
                                                </td>
                                                <td>
                                                    {{item.total}}
                                                </td>
                                                <td>
                                                    {{item.pendiente}}
                                                </td>
                                                <td>
                                                    <input type="text" v-model="item.referencia" placeholder="#">
                                                </td>
                                                <td>
                                                    <input type="text" v-model="item.monto" placeholder="0.00">
                                                </td>
                                                <td>
                                                    <button v-if="!item.pagar" :disabled="!item.monto" data-toggle="modal" class="btn btn-sm btn-success" data-target="#quick-view" @click="setDoc(item)">
                                                        <i class="fa fa-money"></i> Pagar
                                                    </button>
                                                    <span v-else class="text-primary">Pagado</span>
                                                </td>
                                            </tr>
                                            
                                            <!--cart item-->
                                        </tbody>
                                    </table>
                                </form>
                                <!--cart form-->

                                <div class="cart-collaterals" v-if="filtrar">
                                    <div class="cart_totals">
                                        <h2>Cart Totals</h2>
                                        <table class="shop_table shop_table_responsive">
                                            <tbody>
                                                <tr class="order-total">
                                                    <th>Total</th>
                                                    <td data-title="Total"> ${{total.toFixed(2)}}</td>
                                                </tr>
                                            </tbody>
                                        </table> 
                                        <!-- <div class="wc-proceed-to-checkout">
                                            <a href="#" @click="proceder()" class="checkout-button button alt wc-forward">Proceder al Pago</a>
                                        </div> -->
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

        <!-- Modal -->
        <div class="modal fade" id="quick-view" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                    
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-sm-12">                        
                                <div>
                                    <h1 class="text-center">Hacer pago</h1>
                                    <ul>
                                        <li><strong>#:</strong> {{doc_actual.numero}}</li>
                                        <li><strong>Fecha:</strong> {{doc_actual.fecha}}</li>
                                        <li><strong>Total Pagar:</strong> ${{doc_actual.monto}}</li>
                                    </ul>
                                    <button data-dismiss="modal" aria-label="Close" @click="pagar()" class="btn btn-sm btn-success">
                                        <i class="fa fa-money"></i> Pagar
                                    </button>
                                </div>
                                <!--product-->
                            </div>
                        </div>
                    </div>
                    <!--model body-->
                </div>
            </div>
        </div>

        <my-footer></my-footer>
    </div>
</template>

<script>
// @ is an alias to /src
import myHeader from '../components/myHeader.vue';
import myFooter from '../components/myFooter.vue';
import FUNCIONES from '../conexion';

export default {
  name: 'Pedido',
  components: {
    myHeader,
    myFooter
  },
  data(){
    return {
      data:[],
      total: 0,
      ck: null,
      filtrar: false,
      doc_actual: {}
    }
  },
  created: function(){
    this.ck = this.$cookies.get("_us_");

    if(!this.ck || !this.ck.ok)
      this.$router.push({ path: 'login' });
      
    this.getData();
    // this.refresh();
  },
  methods: {
    setDoc(doc){
        console.log('doc',doc);
        this.doc_actual = doc;
        console.log('this.doc_actual',this.doc_actual);
    }, 
    getData(){
        this.ck.action = '7';
        
        FUNCIONES.getData(this.ck).then(response => {
            const _data = response.map(function(x){
                x.type = 'pedidos';
                x.pagar = false;
                return x;
            });

            this.$pouch.bulkDocs(_data).catch(function (err) {
                console.log(err);
            });

            this.refresh();
        }).catch(response =>{
            console.log(response);
            alert(response.error);
        });
    },    
    async pagar(){
        this.doc_actual.pagar = true;
        await this.$pouch.put(this.doc_actual);      
        this.$store.commit('addToCart', this.doc_actual);
        this.refresh();
    },
    async refresh(){
        var carrito = await this.$pouch.find({
            selector: {type: 'pedidos'},
        });

        this.data = carrito.docs||[];
    },
    async proceder(){
        await this.$pouch.bulkDocs(this.data);
        this.$store.commit('addToCart', {});
        this.$router.push({ path: 'ordencomplete' });
    }
  },
  watch: {
      filtrar: function(){
        this.total = this.data.filter(function(x){console.log('x',x);return  x.pagar;}).reduce(function(x,y){return x + parseFloat(y.monto||0);},0);
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