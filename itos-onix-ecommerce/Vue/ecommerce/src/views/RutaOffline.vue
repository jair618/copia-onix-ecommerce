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
      </div>
        <section class="cart-block">
            <div class="container">
                <div class="row">
                    <div class="col-md-12 col-sm-12 col-xs-12">
                        <div class="woocommerce">
                            <form action="#">
                                <table class="shop_table shop_table_responsive cart wish-list">
                                    <thead>
                                        <tr>
                                          <th class="width-50px">Imagen</th>
                                          <th>Nombre</th>
                                          <th>Precio</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="cart_item" v-for="item in data" :key="item.id">
                                          <td >
                                            <img width="50px" :src="item.url" alt="Product thumbnail">
                                          </td>
                                          <td>
                                            {{item.name}}
                                          </td>
                                          <td>
                                            {{item.price}}
                                          </td>
                                        </tr>
                                        <!--cart item--> 
                                    </tbody>
                                </table>
                            </form>
                            <!--cart form--> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--cart block-->
    </main>
    <!--main-->

    <div class="modal fade in" id="thismodal" tabindex="-1" style="padding-right: 17px;">
        <div class="modal-dialog" role="document" style="width:360px">
            <div class="modal-content"> 
                <div class="modal-body text-center p-1"> 
                    <div>
                        <label>Nombre de la Ruta <span>*</span></label>
                        <input v-model="ruta" type="text" placeholder="Nombre de la Ruta">
                    </div>

                    <div class="pt-1">
                      <button :disabled="loading" class="btn btn-sm btn-danger mre-1" @click="closeModal()"><i class="fa fa-times"></i></button>
                      <button :disabled="loading || !ruta" class="btn btn-sm btn-primary" @click="crearRuta()"><i class="fa fa-save"></i></button>
                    </div>
                </div>
                <!--modal body-->
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
import CONSTANTES from '../constantes';

export default {
  name: 'RutaOffline',
  components: {
    myHeader,
    myFooter,
  },
  data(){
    return {
      data:[],
      ruta:'',
      ck: null,
      loading: false
    }
  },
  created: function(){
    this.ck = this.$cookies.get("_us_");

    if(this.$router.currentRoute.query.ids){
      this.getData(this.$router.currentRoute.query.ids)
    }

    if(!this.ck || !this.ck.ok)
      this.$router.push({ path: 'login' });
    
      
  },
  methods: {
    getData(ids){
      this.ck.action = '5';
      this.ck.rec = ids;
      this.ck.mc = this.$cookies.get("_mc_");

      fetch(CONSTANTES.URL, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(this.ck), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        if(response.ok){
          this.data = response.data;
          
          this.$pouch.createIndex({
            index: {
              fields: ['type','inCart']
            }
          });
          const _data = this.data.map(function(x){
            x.type = 'catalogo';
            x.inCart = false;
            x.cant = 1;
            x.cartCliente = [];
            return x;
          });

          this.$pouch.bulkDocs(_data).catch(function (err) {
            console.log(err);
          });
        }
        else {
          alert(response.error);
        }
      });
    },
    removeAllDocs(){
      
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
  max-height: 78px;
  min-height: 78px;
}

/* del articulo el campo existente en inventario, descargar articulos y pedidos desde aca, de todos los clientes elegidos.*/
</style>