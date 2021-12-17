<template>
  <div class="modal fade login in" id="modal-login" tabindex="-1" role="dialog" style="display: block;">
      <div class="modal-dialog" role="document">
         <!-- <div class="content text-center">    
            <div class="top mb-35">
                <h4 class="contact-title">
                    <i class="pe-7s-users primary-color"></i>
                    {{$route.name}}
                </h4> 

                <p>Ingrese su usuario.</p>             
                
            </div>

            <form action="#">
                <div class="row">
                    <div class="form-group col-sm-12">
                        <label>Usuario / Email <span>*</span></label>
                        <input v-model="usuario" type="text" placeholder="Usuario / Email">
                    </div>

                    <div class="form-group col-sm-6 pull-right">
                       <router-link to="/login" class="primary-color pull-right">Iniciar Sesión?</router-link>
                    </div>
                    
                    <div class="form-group col-sm-12">
                        <button :disabled="!usuario || !validEmail" @click="reset()" type="button" class="btn btn-block btn-primary">Enviar</button>
                    </div>
                </div>
            </form>
        </div> -->
        <!-- /.modal-content -->


        <div id="forgot-pass">
              <div class="content text-center forget-password-block">
                <div class="top mb-35">
                    <h4 class="contact-title">
                      <i class="pe-7s-door-lock primary-color"></i>
                      {{$route.name}}
                    </h4>
                    <p>Ingrese su usuario.</p>
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
                          <button :disabled="!usuario || !validEmail" @click="reset()" type="button" class="btn btn-block btn-primary">Enviar</button>
                        </div>
                        <!--button-->
                    </div>
                </form> 

                <router-link to="/login" class="primary-color pull-right">Iniciar Sesión?</router-link>
              </div>
            </div>
      </div>
      <!-- /.modal-dialog -->
  </div>
</template>
<script>
// @ is an alias to /src
export default {
  name: 'Login',
  data(){
    return {
      usuario: null,
      validEmail: false
    }
  },
  created: function(){
    this.$cookies.remove("_us_");
  }, 
  watch: {
    usuario: function(){
      var re = /\S+@\S+\.\S+/;
      this.validEmail = re.test(this.usuario);
    }
  },
  methods: {
    reset(){
      var data = {
        action: '2',
        usr: this.usuario,
      };
      
      fetch('http://localhost:9000/api', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        if(response.ok)
          this.$router.push({ path: 'login' });     
        else   
          alert(response.error);
      });
    }
  }
}
</script>
