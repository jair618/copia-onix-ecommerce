<template>
  <div>    
    <my-header></my-header>
     <main class="main primary-padding">
        <div class="product-list">
            <div class="p-1">
                <div class="row">                
                    <div class="col-md-12">
                        <div class="storefront-sorting">
                            <div class="woocommerce-result-count">
                                <button @click="checkAll()" class="btn-primary btn-sm" title="Abrir">
                                    <i class="fa fa-check"></i> Marcar Todos
                                </button>
                            </div>
                            

                            <div class="woocommerce-result-count pl-1">
                                <button @click="openpdf()" class="btn-success btn-sm" title="Abrir">
                                    <i class="fa fa-print"></i> PDF
                                </button>
                            </div>
                            <!--result-->
                        </div>
                        <!--storefront-sorting-->

                        <ul class="products clearfix">
                            <li class="product col-md-2" v-for="item in data" :key="item._id" @click="item.checked = true;">
                                <figure>
                                    <div class="icons">
                                        <!-- <a href="#" class="btn" @click="setToCart(item)"><i class="pe-7s-cart"></i></a> -->
                                        <!-- <a href="#" class="btn" data-toggle="modal" data-target="#quick-view" @click="setDoc(item)"><i class="pe-7s-look"></i></a> -->
                                    </div>
                                    <!--icons-->

                                    <input type="checkbox" v-model="item.checked" class="checked">
                                    
                                    <div class="product-wrap base-align">
                                        <!-- <a href="#" data-toggle="modal" data-target="#quick-view" @click="setDoc(item)">&nbsp;</a> -->
                                        <img :src="item.url" alt="Product">
                                    </div>
                                </figure>
                                <!--figure-->

                                <div class="content">
                                    <h6><a href="#">{{item.displayname}}</a></h6>
                                    <div class="bottom">
                                        <div class="price">
                                            <ins>${{item.price}}</ins>
                                        </div>
                                        <!--price-->
                                    </div>
                                </div>
                            </li>
                            <!--single product-->
                        </ul>
                        <!--product list-->
                    </div>
                    <!--right-->
                </div>
            </div>
        </div>
    </main>
    <!--main-->

     <!-- Modal -->
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
      data:{},
      doc_actual:{},
    }
  },
  async created(){
    var ck = this.$cookies.get("_us_");
    
    if(!ck || !ck.ok)
      this.$router.push({ path: 'login' });
      
    // this.data = JSON.parse(this.$cookies.get("_ct_"));
 
    // var _this = this;
    // this.$pouch.find('catalogo').then(function (result) {
    //     // handle result
    //     _this.data = result.data;
    // }).catch(function (err) {
    //     console.log(err);
    // });

    var catalogo = await this.$pouch.find({
        selector: {type: 'catalogo'},
    });
    
    var _data = catalogo.docs.map(function(x){ 
        x.checked = false;
        return x;
    })        
    

    this.data = _data;
  },

  methods: {
    checkAll(){
        var _data = this.data.map(function(x){ x.checked = true; return x;});
        console.log(_data);
        this.data = _data;
    },
    openpdf(){
        var _ids = this.data.filter(function(x){return x.checked;}).map(function(x){return x._id;});
        var url = 'https://6728228-sb1.extforms.netsuite.com/app/site/hosting/scriptlet.nl?script=1754&deploy=1&compid=6728228_SB1&h=c3039efd68ff49a34596&ids='+JSON.stringify(_ids);
        window.open(url);
    },
    addCant(add){
        if(add) this.doc_actual.cant = parseInt(this.doc_actual.cant||0)+1;
        else if(this.doc_actual.cant > 0) this.doc_actual.cant = parseInt(this.doc_actual.cant||0)-1;

        console.log(this.doc_actual);
    },
    async setToCart(item){
        item.inCart = true; 
        await this.$pouch.put(item);      
        this.$store.commit('addToCart', item);
    },
    setDoc(doc){
        console.log(doc);
        this.doc_actual = doc;
    }, 
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

.checked{
    margin: 1em;
    position: absolute;
    cursor: pointer;    
    z-index: 999;
}

</style>