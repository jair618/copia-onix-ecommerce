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
                                          <th>Nombre</th>
                                          <th>Subsidiaria</th>
                                          <th class="width-50px"></th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="cart_item" v-for="item in data" :key="item.id">
                                          <td>
                                            {{item.name}}
                                          </td>
                                          <td>
                                            {{item.subsidiary.name}}
                                          </td>
                                          <td class="p-1">
                                            <button class="btn-radius btn-success btn-sm" title="Abrir" @click="setCliente(item)">
                                              <i class="fa fa-external-link-square"></i>
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
    <!--main-->

   

    <my-footer></my-footer>
    
  </div>
</template>

<script>
// @ is an alias to /src
import myHeader from '../components/myHeader.vue';
import myFooter from '../components/myFooter.vue';
import $ from 'jquery';
// import FUNCIONES from '../conexion';

export default {
  name: 'Clientes Ruta',
  components: {
    myHeader,
    myFooter,
  },
  data(){
    return {
      data:[],
      selected: [],
      ruta:'',
      ck: null,
      loading: false
    }
  },
  created: function(){
    this.ck = this.$cookies.get("_us_");

    if(!this.ck || !this.ck.ok)
      this.$router.push({ path: 'login' });
    else
      this.getClientes(this.ck);      
  },
  methods: {
    setCliente(item){
 
      
      this.$cookies.set('_cl_', JSON.stringify(item));
      
      alert('Cliente seleccionado==', this.data[0].name);
      //location.reload();
      //this.$router.push({ path: 'dataruta', query: {ids:[]} });
    },
    showmodal(){
      $('#thismodal').show();
    },
    closeModal(){      
      $('#thismodal').hide();
    },
    goto(id){
      this.setCokiesLogin("_cm_",id);
      this.$router.push({ path: 'class', query: {id:id} });
    },
    async getClientes(){
      var selected = this.$cookies.get("_cls_").split(',');

      console.log('Seleccionado ?',selected);

      var catalogo = await this.$pouch.find({
        selector: {type: 'clientes'},
      });  

      this.data = catalogo.docs.filter(function(x){
        return selected.indexOf(x._id.split('_')[1]) > -1
      });
    },
    cleanData(){
      this.data.forEach(function(x){
        x.checked=false;
      });
      this.ruta = '';
    },
    setCokiesLogin(cachename,data){
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