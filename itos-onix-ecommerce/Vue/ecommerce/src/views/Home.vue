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
            <a href="#" class="btn btn-default bdr text-uppercase faa-parent animated-hover trigger-modal left" @click="showmodal">
              Crear Ruta <i class="fa fa-long-arrow-right faa-passing"></i>
            </a>

            <input v-model="filtro" type="text" class="mle-1 left" style="width:auto;" placeholder="Nombre o Pais">
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
                                          <th></th>
                                          <th>Logo</th>
                                          <th>Nombre</th>
                                          <th>Pais</th>
                                          <th>Clase</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr class="cart_item" v-for="item in data.filter(function(x){return !filtro || 
                                        x.name.toUpperCase().indexOf(filtro.toUpperCase())>-1 || 
                                        (x.pais.name||'').toUpperCase().indexOf(filtro.toUpperCase())>-1 || 
                                        (x.clase.name||'').toUpperCase().indexOf(filtro.toUpperCase())>-1;})" 
                                        :key="item.id">
                                          <td class="pl-1">
                                            <input type="checkbox" v-model="item.checked">
                                          </td>
                                          <td>
                                            <img :src="item.logo" alt="">
                                          </td>
                                          <td>
                                            {{item.name}}
                                          </td>
                                          <td>
                                            {{item.pais.name}}
                                          </td>
                                          <td>
                                            {{item.clase.name}}
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
import $ from 'jquery';
import FUNCIONES from '../conexion';

export default {
  name: 'Home',
  components: {
    myHeader,
    myFooter,
  },
  data(){
    return {
      data:[],
      ruta:'',
      ck: null,
      filtro: null,
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
    crearRuta(){
      this.loading = true;
      this.ck.action = '6';
      var data = this.data.filter(function(x){return x.checked});
      var rec = {clientes: data, name: this.ruta}
      this.ck.rec = rec;
      // console.log(this.ck);

      // fetch(CONSTANTES.URL, {
      //   method: 'POST', // or 'PUT'
      //   body: JSON.stringify(this.ck), // data can be `string` or {object}!
      //   headers:{
      //     'Content-Type': 'application/json'
      //   }
      // }).then(res => res.json())
      // .catch(error => console.error('Error:', error))
      // .then(response => {
      //   if(response.ok)
      //     alert('Ruta Creada');
      //   else {
      //     alert(response.error);
      //   }
      // });

      FUNCIONES.getData(this.ck).then(() =>
        alert('Ruta Creada')
      )
      .catch(error => console.error('Error:', error))
      .finally(()=>{
        this.closeModal();
        this.loading = false;
      });

    },
    getClientes(data){
      data.action = '3';

      FUNCIONES.getData(data).then(response => {
        this.data = response;

        const _data = response.map(function(x){
            x.type = 'clientes';
            // x.selected = false;
          
            return x;
        });

        console.log('Datos de cliente ',_data);

        for(var i= 0; i< this.data.length; i++){
          console.log('Nombre de cliente ',this.data[i].name)
        }
        

        this.$pouch.bulkDocs(_data).catch(function (err) {
            console.log(err);
        });
      })
      .catch(error => console.error('Error:', error))

      // fetch(CONSTANTES.URL, {
      //   method: 'POST', // or 'PUT'
      //   body: JSON.stringify(data), // data can be `string` or {object}!
      //   headers:{
      //     'Content-Type': 'application/json'
      //   }
      // }).then(res => res.json())
      // .catch(error => console.error('Error:', error))
      // .then(response => {
      //   if(response.ok) this.data = response.data;
      //   else {
      //     alert(response.error);
      //     this.$router.push({ path: 'login' });
      //   }
      // });
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

/*  Crear Los roles para filtrar los clientes */
</style>