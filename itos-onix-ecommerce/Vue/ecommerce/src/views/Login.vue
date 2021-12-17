<template>
  <div class="modal fade login in" id="modal-login" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog" role="document">
        <div class="content text-center">    
            <div class="top mb-35">
                <h4 class="contact-title">
                    <i class="pe-7s-users primary-color"></i>
                    Iniciar Sesión
                </h4> 

                <p>Ingrese su usuario y contraseña.</p>             
                
            </div>
            <!--top-->

            <form action="#">
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label>Usuario / Email <span>*</span></label>
                        <input v-model="usuario" type="text" placeholder="Usuario / Email">
                    </div>
                    <!--user name-->

                    <div class="form-group col-sm-12">
                        <label>Contraseña <span>*</span></label>
                        <input v-model="password" type="password" placeholder="Contraseña">
                    </div>
                    <!--password-->

                    <!-- <div class="form-group col-sm-6 pull-left">
                       <div class="checkbox-wrap">
                            <input type="checkbox" value="1">
                            <label>Recordarme</label>
                        </div>
                    </div> -->
                    <!--checkbox-->

                    <div class="form-group col-sm-6 pull-right">
                       <router-link to="/reset" class="primary-color pull-right">Recuperar Contraseña?</router-link>
                    </div>
                    <!--password-->
                    
                    <div class="form-group col-sm-12">
                        <button @click="logIn()" type="button" class="btn btn-block btn-primary">Entrar</button>
                    </div>
                    <!--button-->
                </div>
            </form>
        </div>
        <!-- /.modal-content -->
      </div>
      <!-- /.modal-dialog -->
    </div>
</template>
<script>
// @ is an alias to /src
import FUNCIONES from '../conexion';

export default {
  name: 'Login',
  data(){
    return {
      usuario:'',
      password:''
    }
  },
  created: function(){
    this.$cookies.remove("_us_");
    this.$cookies.remove("_mcs_");
    this.$cookies.remove("_mc_");
  },
  methods: {
    logIn(){
      var data = {
        action: '1',
        usr: this.usuario,
        pw: this.password
      };

      FUNCIONES.getData(data)
      .then(response => {
        //DATOS DE LOGIN
        this.setCokiesLogin("_us_", response.existe);

        var data = response.data;

        //GUARDAR MARCAS
        this.setCokiesLogin('_mcs_', JSON.stringify(data.clases));

        var rutas = data.rutas.map(function(x){
          x.type = 'rutas';
          return x;
        });

        var filtros = [
          {
            type: 'filtros',
            data: {
              clases: data.clases,
              generos: data.generos,
              temporadas: data.temporadas,
              lineas: data.lineas,
              fits: data.fits,
              grupos: data.grupos,
              subgrupos: data.subgrupos,
            }
          }
        ];

        this.$pouch.bulkDocs(rutas).catch(function (err) {
          console.log(err);
        });

        this.$pouch.bulkDocs(filtros).catch(function (err) {
          console.log(err);
        });

      }).catch(response =>{
        console.log(response);
        alert(response.error);
      });
    },
    setCokiesLogin(cachename,data){
      this.$cookies.set(cachename,data);
      this.$router.push({path: '/'})
    }
  }
}
</script>
