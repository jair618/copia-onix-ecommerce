<template>
  <div>    
    <my-header></my-header>
     <main class="main primary-padding">
        <div class="product-list">
            <div class="p-1">
                <div class="row">   
                    <!-- SideBar Right              -->
                    <div class="col-md-2 col-sm-2 col-xs-12 sidebar shop-sidebar left-block">
                        <div class="box mbe-1">
                            <button v-on:click="show = !show" @click="loadData" type="button" class=" btn btn-default filter-btn faa-parent animated-hover">
                                Descargar <i class="fa fa-long-arrow-right faa-passing"></i>
                            </button>
                        </div>
                        <div class="box mbe-1">
                            <h5 class="sec-title">Género <span @click="verGenero=!verGenero"><i :class="'fa ' + (verGenero?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.generos" class="mre-1" @click="setFiltro('generos', '')"><i class="fa fa-trash"></i></span> </h5>
                            <ul class="shop-sidebar" v-if="verGenero">
                                <li v-for="item in generos" :key="item._id" :class="filtro.generos==item._id?'selected':''" @click="setFiltro('generos', item._id)">
                                    <a href="#">{{item.name}} 
                                        <!-- <span class="no">[10]</span> -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--category-->
                            <!-- <div class="box mbe-1">
                                <h5 class="sec-title">Lineas <span @click="verlineas=!verlineas"><i :class="'fa ' + (verlineas?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.lineas" class="mre-1" @click="setFiltro('lineas', '')"><i class="fa fa-trash"></i></span> </h5>
                                <ul class="shop-sidebar" v-if="verlineas">
                                    <li v-for="item in lineas" :key="item._id" :class="filtro.lineas==item._id?'selected':''" @click="setFiltro('lineas', item._id)">
                                        <a href="#">{{item.name}} 
                                        </a>
                                    </li>
                                </ul>
                            </div> -->
                            <!--lineas-->

                            <!-- <div class="box mbe-1">
                                <h5 class="sec-title">Fits <span @click="verfits=!verfits"><i :class="'fa ' + (verfits?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.fits" class="mre-1" @click="setFiltro('fits', '')"><i class="fa fa-trash"></i></span></h5>
                                <ul class="shop-sidebar" v-if="verfits">
                                    <li v-for="item in fits" :key="item._id" :class="filtro.fits==item._id?'selected':''" @click="setFiltro('fits', item._id)">
                                        <a href="#">{{item.name}} 
                                        </a>
                                    </li>
                                </ul>
                            </div> -->
                        <!--fits-->

                        <div class="box mbe-1">
                            <h5 class="sec-title">Grupos <span @click="vergrupos=!vergrupos"><i :class="'fa ' + (vergrupos?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.grupos" class="mre-1" @click="setFiltro('grupos', '')"><i class="fa fa-trash"></i></span></h5>
                            <ul class="shop-sidebar" v-if="vergrupos">
                                <li v-for="item in grupos" :key="item._id" :class="filtro.grupos==item._id?'selected':''" @click="setFiltro('grupos', item._id)">
                                    <a href="#">{{item.name}} 
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--grupos-->

                        <!-- <div class="box mbe-1">
                            <h5 class="sec-title">Sub Grupos <span @click="versubgrupos=!versubgrupos"><i :class="'fa ' + (versubgrupos?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.subgrupos" class="mre-1" @click="setFiltro('subgrupos', '')"><i class="fa fa-trash"></i></span> </h5>
                            <ul class="shop-sidebar" v-if="versubgrupos">
                                <li v-for="item in subgrupos" :key="item._id" :class="filtro.subgrupos==item._id?'selected':''" @click="setFiltro('subgrupos', item._id)">
                                    <a href="#">{{item.name}} 
                                    </a>
                                </li>
                            </ul>
                        </div> -->
                        <!--subgrupos-->

                        <div class="box mbe-1">
                            <h5 class="sec-title">Temporada <span @click="vertemporadas=!vertemporadas"><i :class="'fa ' + (vertemporadas?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.temporadas" class="mre-1" @click="setFiltro('temporadas', '')"><i class="fa fa-trash"></i></span> </h5>
                            <ul class="shop-sidebar" v-if="vertemporadas">
                                <li v-for="item in temporadas" :key="item._id" :class="filtro.temporadas==item._id?'selected':''" @click="setFiltro('temporadas', item._id)">
                                    <a href="#">{{item.name}} 
                                        <!-- <span class="no">[10]</span> -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--temporadas-->
                    </div>                    
                    <!--left-->

                    <div class="col-md-10 col-sm-10 col-xs-12 pull-right">
                        
                        <div class="storefront-sorting">
                            <button @click="aplicarCambios()" class="btn btn-sm btn-success">
                                <i class="fa fa-save"></i> Guardar Cambios
                            </button>
                            <div v-if="data.length == 0" class="woocommerce-result-count pl-1">
                            <transition name = "fade" v-if= "data">
                                <span v-if="show">Cargando... </span>
                            </transition>
                              {{data.length}} Resultados
                            </div>
                             <div v-else class="woocommerce-result-count pl-1">
                                <p>{{data.length}} Resultados</p>
                             </div>
                            <!--result-->
                        </div>
                        <!--storefront-sorting-->

                        <!-- <div class="col-md-2 offline-item" v-for="item in data" :key="item._id">
                            <img :src="item.url" alt="Product">
                            <label>{{item.name}}</label>
                        </div> -->
                        <table class="shop_table shop_table_responsive cart">
                            <thead>
                                <tr>
                                    <th class="product-name">Detalle</th>
                                    <th class="product-price">Precio</th>
                                    <th class="product-quantity">Disponible</th>
                                    <th class="product-remove"> </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr class="cart_item" v-for="(item, indice) in data" :key="item._id">
                                    <td class="product-name" data-title="Product">
                                        <a href="#" class="cart-product">
                                            <img width="145px" :src="item.url" alt="Product thumbnail">
                                        </a>

                                        <div class="product-info">
                                            <h6> {{item.name}}  </h6>
                                        </div>
                                    </td>
                                    <td class="product-price" data-title="Price">
                                        ${{item.price}}
                                    </td>
                                    <td class="product-quantity" data-title="Quantity">
                                       {{item.disponible}}
                                    </td>
                                    <td class="product-remove" data-title="Remove">
                                        <a @click="removeCart(indice)" href="#" class="remove" title="Remove this item">
                                            <i class="fa fa-close"></i>
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    
                    <!--right-->
                </div>
            </div>
        </div>
    </main>
    <!--main-->
    <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import myHeader from '../components/myHeader.vue';
import myFooter from '../components/myFooter.vue';
import FUNCIONES from '../conexion';


export default {
    name: 'Catalogo Offline',
    components: {
        
        myHeader,
        myFooter,
    },
    data(){
        return {
            show:false,

            data:[],
            doc_actual: {},
            array_actual: [],
            cid: {},
            ck: {},
            generos: [],
            verGenero: false,
            // lineas: [],
            // verlineas: false,
            // fits: [],
            // verfits: false,
            grupos: [],
            vergrupos: false,
            // subgrupos: [],
            // versubgrupos: false,
            temporadas: [],
            vertemporadas: false,
            filtro: {
                generos: '',
                // lineas: '',
                // fits: '',
                grupos: '',
                // subgrupos: '',
                temporadas: '',
            }
        }
    },
    
    async created(){
        this.ck = this.$cookies.get("_us_");
        this.cid = this.$cookies.get('_cl_');
        
        if(!this.ck || !this.ck.ok)
        this.$router.push({ path: 'login' });


        
        // this.data = JSON.parse(this.$cookies.get("_ct_"));
    
        // var _this = this;
        // this.$pouch.find('catalogo').then(function (result) {
        //     // handle result
        //     _this.data = result.data;
        // }).catch(function (err) {
        //     console.log(err);
        // });

        // var catalogo = await this.$pouch.find({
        //     selector: {type: 'catalogo'},
        // });    

        // this.data = catalogo.docs;

        // console.log(this.data);
        this.fillData();
    },
    

    methods: {
        async aplicarCambios(){
            this.$pouch.bulkDocs(this.data).then(alert('Cambios Guardados')).catch(function (err) {
                console.log(err);
            });
        },
        async removeCart(indice){
            this.data.splice(indice, 1);
        },
        async setFiltro(type, valor){
            this.filtro[type] = valor;
        },
        async fillData(){
            var filtros = await this.$pouch.find({
                selector: {type: 'filtros'},
            });    

            if(filtros.docs[0]){
                this.generos =  filtros.docs[0].data.generos;
                // this.lineas= filtros.docs[0].data.lineas;
                // this.fits= filtros.docs[0].data.fits;
                this.grupos= filtros.docs[0].data.grupos;
                // this.subgrupos= filtros.docs[0].data.subgrupos;
                this.temporadas= filtros.docs[0].data.temporadas;
            }

        },
        
        loadData(){
            this.ck.action = '5';
            // var rec = this.$cookies.get('_cls_');
            
            this.ck.filtros = [{
                name: 'isinactive',
                operator: "is",
                values: ['F']
            },{
                name: 'custitem_itos_url_img_3',
                operator: "isnotempty",
                values: []
            }];


            if(this.filtro.generos)
            this.ck.filtros.push({
                name: 'custitem_itos_genero',
                operator: "anyof",
                values: this.filtro.generos
            });

            // if(this.filtro.lineas)
            // this.ck.filtros.push({
            //     name: 'custitem_itos_linea',
            //     operator: "anyof",
            //     values: this.filtro.lineas
            // });
            
            // if(this.filtro.fits)
            // this.ck.filtros.push({
            //     name: 'custitem_itos_fit',
            //     operator: "anyof",
            //     values: this.filtro.fits
            // });

            if(this.filtro.grupos)
            this.ck.filtros.push({
                name: 'custitem_itos_grupo',
                operator: "anyof",
                values: this.filtro.grupos
            });

            // if(this.filtro.subgrupos)
            // this.ck.filtros.push({
            //     name: 'custitem_itos_subgrupo',
            //     operator: "anyof",
            //     values: this.filtro.subgrupos
            // });
            
            if(this.filtro.temporadas)
            this.ck.filtros.push({
                name: 'custitem_itos_temporada',
                operator: "anyof",
                values: this.filtro.temporadas
            });

            this.deleteData();

            FUNCIONES.getData(this.ck)
            .then(response => {
                const _data = response.map(function(x){
                    x.type = 'catalogo';
                    x.inCart = false;
                    x.cant = 1;
                    x.price = x.price||100;
                    x.disponible = x.disponible||0;
                    x.cartCliente = [];
                    return x;
                });

                this.data = _data;
            }).catch(response =>{
                console.log(response);
                alert(response.error);
            });
        },
        async deleteData(){
            var catalogo = await this.$pouch.find({
                selector: {type: 'catalogo'},
            });    

            // this.data = catalogo.docs;
            for(var i=0; i<catalogo.docs.length; i++){
                await this.$pouch.remove(catalogo.docs[i]);     
            }
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


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

/* Mostar solo los principales, en el boton de ver, mostrar solo los hijos si es que tienen, los que tienen hijos no se venden */
</style>