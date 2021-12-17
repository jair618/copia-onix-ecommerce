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

      <ul class="products clearfix">
        <li class="product no-css col-md-2 col-xs-6" v-for="item in data" :key="item.id">
          <figure>
            <div class="product-wrap base-align">
              <a href="#">&nbsp;</a>
              <img src="assets/images/fashion/cat-parallax.jpg" alt="Product">
            </div>
          </figure>
          <!--figure-->

          <div class="content">
              <p><a href="#">{{item.name.substr(0,78)}}</a></p>
          </div>
        </li>
        <!--single product--> 
      </ul>
    </main>
    <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import myHeader from '../components/myHeader.vue';
import myFooter from '../components/myFooter.vue';
export default {
  name: 'Class',
  components: {
    myHeader,
    myFooter
  },
  data(){
    return {
      data:[],
    }
  },
  created: function(){
    var ck = this.$cookies.get("_us_");
    
    if(!ck || !ck.ok)
      this.$router.push({ path: 'login' });
     
     this.getMarcas(ck);
  },
  methods: {
    getMarcas(data){
      data.action = '4';

      fetch('http://3.19.12.191:9000/api', {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
          'Content-Type': 'application/json'
        }
      }).then(res => res.json())
      .catch(error => console.error('Error:', error))
      .then(response => {
        if(response.ok) this.data = response.data;
        else {
          alert(response.error);
          this.$router.push({ path: 'login' });
        }
      });      
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