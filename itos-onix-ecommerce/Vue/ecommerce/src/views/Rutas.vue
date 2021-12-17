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
            <router-link to="/home" class="btn btn-default bdr text-uppercase faa-parent animated-hover trigger-modal left">
                Crear Ruta <i class="fa fa-long-arrow-right faa-passing"></i>
            </router-link>

            <!-- <a href="#" @click="showmodal" class="btn btn-default bdr text-uppercase faa-parent animated-hover right" data-show="#login">
              Aplicar Selección <i class="fa fa-check faa-passing"></i>
            </a> -->
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
                                          <!-- <th></th> -->
                                          <th>Nombre</th>
                                          <th>Subsidiaria</th>
                                          <th class="pr-1">Clientes</th>
                                          <th class="pr-1">Acción</th>
                                      </tr>
                                  </thead>

                                  <tbody>
                                      <tr class="cart_item" v-for="item in data" :key="item.id">
                                        <!-- <td class="pl-1">
                                          <input type="checkbox" v-model="item.checked">
                                        </td> -->
                                        <td>
                                          {{item.name}}
                                        </td>
                                        <td>
                                          {{item.subsidiaria.name}}
                                        </td>
                                        <td class="p-1">
                                          <button @click="showClientes(item.clientes)" class="btn-primary btn-sm" title="Abrir">
                                            <i class="fa fa-eye"></i> Ver
                                          </button>
                                        </td>
                                        <td class="p-1">
                                          <button @click="dataOffline(item.clientes)" class="btn-success btn-sm" title="Abrir">
                                            <i class="fa fa-cloud-download"></i> Descargar
                                          </button>
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
    <div class="modal fade in" id="thismodal" tabindex="-1" style="padding-right: 17px;">
        <div class="modal-dialog" role="document" style="width:360px">
            <div class="modal-content"> 
                <div class="modal-body text-center p-1"> 
                    <div>
                        <label>Seleccionar Marca <span>*</span></label>  
                        <select v-model="marca">
                          <option v-for="item in marcas" :key="item._id" :value="item._id">{{item.name}}</option>
                        </select>
                    </div>

                    <div class="pt-1">
                      <button :disabled="loading" class="btn btn-sm btn-danger mre-1" @click="closeModal()"><i class="fa fa-times"></i></button>
                      <button :disabled="loading || !marca" class="btn btn-sm btn-primary" @click="setDataRutas"><i class="fa fa-save"></i></button>
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
// import FUNCIONES from '../conexion';
import $ from 'jquery';

export default {
  name: 'Rutas',
  components: {
    myHeader,
    myFooter,
  },
  data(){
    return {
      data:[],
      ck: null,
      marca: '',
      marcas: [],
      loading: false
    }
  },
  created: function(){
    this.ck = this.$cookies.get("_us_");
    
    if(!this.ck || !this.ck.ok)
      this.$router.push({ path: 'login' });
    else
      {
        this.getRutas();
        this.getMarcas();
      }
  },
  methods: {
    showmodal(){
      $('#thismodal').show();
    },
    closeModal(){      
      $('#thismodal').hide();
    },
    setDataRutas(){
      this.setCokies('_mc_',this.marca);
      // var resultado = this.data.filter(function(x){ return x.checked }).map(function(x){return x.id}); 
      // this.$router.push({ path: 'dataruta', query: {ids:resultado} }); 
    },
    showClientes(items){
      this.$cookies.set('_cls_',items.id.split(','));
      this.$router.push({ path: 'clientes'});
    },
    dataOffline(items){
      this.$cookies.set('_cls_',items.id.split(','));
      this.$router.push({ path: 'offline', query: {ids:[]} });
    },
    async getRutas(){
      var rutas = await this.$pouch.find({
        selector: {type: 'rutas'},
      });    

      this.data = rutas.docs;
    },
    getMarcas(){
      if(this.$cookies.get("_mcs_")){
        this.marcas = JSON.parse(this.$cookies.get("_mcs_"));
      }
    },
    setCokies(cachename,data){
      this.$cookies.set(cachename,data);
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

</style>