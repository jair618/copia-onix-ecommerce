<template>
  <div>    
    <my-header></my-header>
     <main class="main primary-padding">
        <div class="product-list">
            <div class="p-1">
                <div class="row">                
                    <div class="col-md-2 col-sm-2 col-xs-12 sidebar shop-sidebar left-block">
                        <div class="box mbe-1">
                            <h5 class="sec-title">Marca <span @click="vermarca=!vermarca"><i :class="'fa ' + (vermarca?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.clases" class="mre-1" @click="setFiltro('clases', '')"><i class="fa fa-trash"></i></span> </h5>
                            <ul class="shop-sidebar" v-if="vermarca">
                                <li v-for="item in marcas" :key="item._id" :class="filtro.clases==item._id?'selected':''" @click="setFiltro('clases', item._id)">
                                    <a href="#">{{item.name}} 
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--marca-->

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

                        <div class="box mbe-1">
                            <h5 class="sec-title">Lineas <span @click="verlineas=!verlineas"><i :class="'fa ' + (verlineas?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.lineas" class="mre-1" @click="setFiltro('lineas', '')"><i class="fa fa-trash"></i></span> </h5>
                            <ul class="shop-sidebar" v-if="verlineas">
                                <li v-for="item in lineas" :key="item._id" :class="filtro.lineas==item._id?'selected':''" @click="setFiltro('lineas', item._id)">
                                    <a href="#">{{item.name}} 
                                        <!-- <span class="no">[10]</span> -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--lineas-->                       

                        <div class="box mbe-1">
                            <h5 class="sec-title">Grupos <span @click="vergrupos=!vergrupos"><i :class="'fa ' + (vergrupos?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.grupos" class="mre-1" @click="setFiltro('grupos', '')"><i class="fa fa-trash"></i></span></h5>
                            <ul class="shop-sidebar" v-if="vergrupos">
                                <li v-for="item in grupos" :key="item._id" :class="filtro.grupos==item._id?'selected':''" @click="setFiltro('grupos', item._id)">
                                    <a href="#">{{item.name}} 
                                        <!-- <span class="no">[10]</span> -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--grupos-->

                        <div class="box mbe-1">
                            <h5 class="sec-title">Sub Grupos <span @click="versubgrupos=!versubgrupos"><i :class="'fa ' + (versubgrupos?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.subgrupos" class="mre-1" @click="setFiltro('subgrupos', '')"><i class="fa fa-trash"></i></span> </h5>
                            <ul class="shop-sidebar" v-if="versubgrupos">
                                <li v-for="item in subgrupos" :key="item._id" :class="filtro.subgrupos==item._id?'selected':''" @click="setFiltro('subgrupos', item._id)">
                                    <a href="#">{{item.name}} 
                                        <!-- <span class="no">[10]</span> -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--subgrupos-->

                        <div class="box mbe-1">
                            <h5 class="sec-title">Fits <span @click="verfits=!verfits"><i :class="'fa ' + (verfits?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.fits" class="mre-1" @click="setFiltro('fits', '')"><i class="fa fa-trash"></i></span></h5>
                            <ul class="shop-sidebar" v-if="verfits">
                                <li v-for="item in fits" :key="item._id" :class="filtro.fits==item._id?'selected':''" @click="setFiltro('fits', item._id)">
                                    <a href="#">{{item.name}} 
                                        <!-- <span class="no">[10]</span> -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--fits-->

                        <div class="box mbe-1">
                            <h5 class="sec-title">Colección <span @click="vertemporadas=!vertemporadas"><i :class="'fa ' + (vertemporadas?'fa-arrow-circle-right':'fa-arrow-circle-down')"></i></span><span v-if="filtro.temporadas" class="mre-1" @click="setFiltro('temporadas', '')"><i class="fa fa-trash"></i></span></h5>
                            <ul class="shop-sidebar" v-if="vertemporadas">
                                <li v-for="item in temporadas" :key="item._id" :class="filtro.temporadas==item._id?'selected':''" @click="setFiltro('temporadas', item._id)">
                                    <a href="#">{{item.name}} 
                                        <!-- <span class="no">[10]</span> -->
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <!--temporadas-->

                        <div class="box mbe-1">
                            <h5 class="sec-title">Saldo<input type="checkbox" v-model="checkSaldo" id="checkSaldo" class="right" @change="setFiltro()"></h5>
                        </div>
                        <!--saldo-->

                        <div class="box mbe-1">
                            <h5 class="sec-title">Disponible</h5>
                            <ul class="shop-sidebar">
                                <li>
                                    <input type="number" placeholder="Saldo" v-model="saldo" @change="setFiltro()">
                                </li>
                            </ul>
                        </div>
                        <!--Disponible-->
                    </div>                    
                    <!--left-->

                    <div class="col-md-10 col-sm-10 col-xs-12 pull-right">
                        <div class="storefront-sorting">
                            <form class="woocommerce-ordering" method="get">
                                <select name="orderby" class="orderby">
                                    <option value="menu_order" selected="selected">Ordenar Default</option>
                                    <option value="rating">Precio Ascendente</option>
                                    <option value="date">Precio descendente</option>
                                </select> 

                            </form>
                            <!--form-->

                            <div class="woocommerce-result-count pl-1">
                              {{data.filter(function(x){return x.principal}).length}} Resultados
                            </div>
                            <!--result-->

                            <div class="woocommerce-result-count pl-1">
                              <input type="checkbox" v-model="matrix" id="matrix"> <label for="matrix">Matrix</label>
                            </div>
                        </div>
                        <!--storefront-sorting-->

                        <ul class="products clearfix">
                            <li class="product col-md-2" v-for="item in data.filter(function(x){return x.principal})" :key="item._id">
                                <figure>
                                    <div class="icons">
                                        <!-- <a href="#" class="btn" @click="setToCart(item)"><i class="pe-7s-cart"></i></a> -->
                                        <a href="#" class="btn" data-toggle="modal" :data-target="matrix?'#quick-view2':'#quick-view'" @click="openView(item)"><i class="pe-7s-look"></i></a>
                                    </div>
                                    <!--icons-->
                                    
                                    <div class="product-wrap base-align">
                                        <a href="#" data-toggle="modal" :data-target="matrix?'#quick-view2':'#quick-view'" @click="openView(item)">&nbsp;</a>
                                        <img :src="item.url" alt="Product">
                                    </div>
                                </figure>
                                <!--figure-->

                                <div class="content">
                                    <h6><a href="#">{{item.name}}</a></h6>
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

    <div class="modal fade" id="quick-view" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="array_actual=[],doc_actual={}"><span aria-hidden="true">&times;</span></button>
                
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12">                        
                            <div class="product">
                                <div class="images">
                                    <!-- <ul class="thumb-slider-modal">
                                        <div v-for="item in array_actual" :key="item._id">
                                            <li>
                                                <img :src="item.url" alt="image" height="390px">
                                            </li>
                                        </div>
                                    </ul>

                                    <div id="thumb-pager">
                                        <a :data-slide-index="index" href="" v-for="(item, index) in array_actual" :key="item._id" @click="setDoc(item)">
                                            <img :src="item.url" alt="thumb">
                                        </a>
                                    </div> -->
                    
                                    <div id="viewer">
                                        <img :src="doc_actual.url" alt="image" height="390px">
                                        <div class="bx-caption">
                                            {{doc_actual.name}}
                                        </div>
                                    </div>


                                    <div id="thumb-pager">
                                        <a :style="item._id==doc_actual._id?'opacity:1':''" :data-slide-index="index" href="#" v-for="(item, index) in array_actual" :key="item._id" @click="setDoc(item)">
                                            <img :src="item.url" alt="thumb">
                                        </a>
                                    </div>

                                </div>
                                <!--images-->

                                <div class="summary entry-summary">
                                    <h4 class="product_title entry-title mb-10">
                                        {{doc_actual.name}}
                                        <!-- <span class="product-code">{{doc_actual.name}}</span> -->
                                    </h4>

                                    <div class="price">
                                      <ins>${{doc_actual.price}}</ins>
                                    </div>
                                    <!--price--> 

                                    <!-- <div class="stock-info mb-15">
                                        <span>
                                            <i class="fa fa-check-square"></i> Instock
                                        </span>
                                    </div> -->

                                    <div class="item-desc mb-25">
                                        <p>
                                          {{doc_actual.description}}
                                        </p>
                                    </div>
                                    <!--item desc-->

                                    <form action="#" class="variations_form cart">
                                        <div class="single_variation_wrap">
                                            <div class="variations_button">
                                                <div class="quantity">
                                                    <div class="label">
                                                        <label>Cantidad</label>
                                                    </div>

                                                    <div class="quantity-wrap">
                                                        <span class="minus" @click="addCant(false)"> - </span>
                                                        <input type="number" v-model="doc_actual.cant" title="Qty" class="input-text qty" size="4">
                                                        <span class="add" @click="addCant(true)"> + </span>
                                                    </div>
                                                </div>

                                                <button type="button" class="button alt" @click="setToCart(doc_actual)">
                                                <!-- <button type="button" class="button alt" data-dismiss="modal" aria-label="Close" @click="setToCart(doc_actual)"> -->
                                                    <i class="fa fa-shopping-cart"></i> Agregar a Compras
                                                </button>
                                            </div>
                                        </div>
                                        <!--single variation-->
                                    </form>
                                    <!--form-->
                                </div>
                                <!--summery-->
                            </div>
                            <!--product-->
                        </div>
                    </div>
                </div>
                <!--model body-->
            </div>
        </div>
    </div>
    <!--quick view-->

    <div class="modal fade" id="quick-view2" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document" style="width:90%;">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="array_actual=[],doc_actual={}"><span aria-hidden="true">&times;</span></button>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <table class="shop_table shop_table_responsive cart">
                                <thead>
                                    <tr>
                                        <th></th><th></th>
                                        <th class="product-name">Detalle</th>
                                        <th class="product-price">Precio</th>
                                        <th class="product-quantity">Disponible</th>
                                        <th class="product-quantity">Cantidad</th>
                                        <th class="product-subtotal">Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr class="cart_item" v-for="item in array_actual" :key="item._id">
                                        <td class="product-price" data-title="Price">
                                            <input type="checkbox" v-model="item.inCart">
                                        </td>
                                        <td>{{item.pack}}</td>
                                        <td class="product-name" data-title="Product">
                                            <a href="#" class="cart-product" data-toggle="modal" data-target="#quick-img" @click="openImg(item)">
                                                <img width="145px" :src="item.url" alt="Product thumbnail" >
                                            </a>

                                            <div class="product-info">
                                                <h6> {{item.name}}  </h6>
                                                <!-- <ul class="product-info">
                                                    <li>Categoria: Women’s Wear </li>
                                                    <li>Size: XL </li>
                                                    <li>Color: Orange </li>
                                                </ul> -->
                                            </div>
                                            <!--product info-->
                                        </td>
                                        <td class="product-price" data-title="Price">
                                            ${{item.price}}
                                        </td>
                                        <td class="product-subtotal" data-title="Total">
                                            {{(item.disponible * 1).toFixed(2)}}
                                        </td>
                                        <td class="product-quantity" data-title="Quantity">
                                            <div class="quantity-wrap">
                                                <span class="minus" @click="addCant(false, item)"> - </span>
                                                <input type="number" v-model="item.cant" title="Qty" class="input-text qty" size="4">
                                                <span class="add" @click="addCant(true, item)"> + </span>
                                            </div>
                                        </td>
                                        
                                        <td class="product-subtotal" data-title="Total">
                                            ${{(item.price * item.cant).toFixed(2)}}
                                        </td>
                                    </tr>
                                    
                                    <!--cart item-->
                                    <tr>
                                        <td colspan="6" class="actions">
                                             <div class="wc-proceed-to-checkout text-center">
                                                <a href="#" @click="setToCartArray()" class="checkout-button button alt wc-forward p-1">
                                                    <i class="fa fa-shopping-cart"></i> Agregar a Compras
                                                </a>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>                            
                        </div>
                    </div>
                </div>
                <!--model body-->
            </div>
        </div>
    </div>
    <!--quick view2-->

    <div class="modal fade" id="quick-img" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document" style="width:1100px;">
            <div class="modal-content">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="doc_actual={}"><span aria-hidden="true">&times;</span></button>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="product">
                                <div class="images">                                    
                                    <img :src="doc_actual.url">
                                </div>
                                <!--images-->

                                <div class="summary entry-summary">
                                    <h4 class="product_title entry-title mb-10">
                                        {{doc_actual.name}}
                                    </h4>

                                    <div class="price">
                                      <ins>${{doc_actual.price}}</ins>
                                    </div>

                                    <div class="item-desc mb-25">
                                        <p>
                                          {{doc_actual.description}}
                                        </p>
                                    </div>
                                    <form action="#" class="variations_form cart">
                                        <div class="single_variation_wrap">
                                            <div class="variations_button">
                                                <div class="quantity">
                                                    <div class="label">
                                                        <label>Cantidad</label>
                                                    </div>

                                                    <div class="quantity-wrap">
                                                        <span class="minus" @click="addCant(false)"> - </span>
                                                        <input type="number" v-model="doc_actual.cant" title="Qty" class="input-text qty" size="4">
                                                        <span class="add" @click="addCant(true)"> + </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!--single variation-->
                                    </form>
                                    <!--form-->
                                </div>
                                <!--summery-->
                            </div>
                            <!--product-->
                        </div>
                    </div>
                </div>
                <!--model body-->
            </div>
        </div>
    </div>
    <!--quick img-->
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
            doc_actual: {},
            array_actual: [],
            cid: {},
            marcas: [],
            vermarca: false,
            generos: [],
            verGenero: false,
            lineas: [],
            verlineas: false,
            fits: [],
            verfits: false,
            grupos: [],
            vergrupos: false,
            subgrupos: [],
            versubgrupos: false,
            temporadas: [],
            vertemporadas: false,
            saldo: '',
            checkSaldo: false,
            matrix:true,
            filtro: {
                generos: '',
                lineas: '',
                fits: '',
                grupos: '',
                subgrupos: '',
                clases: '',
                temporadas: ''
            }
        }
    },
    async created(){
        var ck = this.$cookies.get("_us_");
        this.cid = this.$cookies.get('_cl_');
        
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

        this.data = catalogo.docs;

        console.log(this.data);
        this.fillData();
    },

    methods: {
        async setFiltro(type, valor){
            console.log('filtrando');
            if(type)this.filtro[type] = valor;

            var catalogo = await this.$pouch.find({
                selector: {
                    type: 'catalogo',
                },
            });
            
            var docs = catalogo.docs;
            if(docs){
                var filtro = this.filtro;
                if(this.filtro.generos)
                    docs = docs.filter(function(x){return x.genero.id == filtro.generos;});
                if(this.filtro.lineas)
                    docs = docs.filter(function(x){return x.linea.id == filtro.lineas;});
                
                if(this.filtro.fits)
                    docs = docs.filter(function(x){return x.fit.id == filtro.fits;});

                if(this.filtro.grupos)
                    docs = docs.filter(function(x){return x.grupo.id == filtro.grupos;});

                if(this.filtro.subgrupos)
                    docs = docs.filter(function(x){return x.subgrupo.id == filtro.subgrupos;});

                if(this.filtro.clases)
                    docs = docs.filter(function(x){return x.clase.id == filtro.clases;});

                if(this.filtro.temporadas)
                    docs = docs.filter(function(x){console.log(filtro.temporadas,x.temporada);return x.temporada.id == filtro.temporadas;});

                if(this.saldo){
                    var saldo = this.saldo;
                    docs = docs.filter(function(x){return x.principal || parseFloat(x.disponible) >= saldo});
                }

                if(this.checkSaldo){
                    docs = docs.filter(function(x){return x.principal || x.saldo});
                }

                if(this.$store.state.busqueda){
                    var store = this.$store.state.busqueda;
                    docs = docs.filter(function(x){return !x.principal || x.name.toLowerCase().indexOf(store.toLowerCase()) > -1; });
                }
                
                this.data = docs;
            }
        },
        async fillData(){
            var filtros = await this.$pouch.find({
                selector: {type: 'filtros'},
            });    

            if(filtros.docs[0]){
                this.generos =  filtros.docs[0].data.generos;
                this.lineas= filtros.docs[0].data.lineas;
                this.fits= filtros.docs[0].data.fits;
                this.grupos= filtros.docs[0].data.grupos;
                this.subgrupos= filtros.docs[0].data.subgrupos;
                this.temporadas= filtros.docs[0].data.temporadas;
                this.marcas= filtros.docs[0].data.clases;
            }

        },
        addCant(add, item){
            if(add) {
                if(item) item.cant = parseInt(item.cant||0)+1;
                else this.doc_actual.cant = parseInt(this.doc_actual.cant||0)+1;
                
            }
            else if(this.doc_actual.cant > 0) {
                if(item) item.cant = parseInt(item.cant||0)-1;
                else this.doc_actual.cant = parseInt(this.doc_actual.cant||0)-1;
            }
        },
        async setToCartArray(){
            var arraycart = this.array_actual.filter(function(x){return x.inCart});
            for(var i=0;i<arraycart.length;i++){
                var item = arraycart[i];
                item.cartCliente.push({id:this.cid._id, cant:item.cant});
                item.cant = 1;
                await this.$pouch.put(item);      
            }

            this.$store.commit('addToCart', {});
            alert('Agregados al Carrito');
        },
        async setToCart(item){
            item.inCart = true; 
            item.cartCliente.push({id:this.cid._id, cant:item.cant});
            item.cant = 1;

            await this.$pouch.put(item);      
            this.$store.commit('addToCart', item);
            alert('Agregado al Carrito');
        },
        setDoc(doc){
            this.doc_actual = doc;
        }, 
        openView(doc){
            var id = doc._id.split('_')[1];
            this.array_actual = this.data.filter(function(x){return x.parent.id == id;});

            if(this.array_actual.length==0)       
                this.array_actual = [doc];

            this.doc_actual = this.array_actual[0];
        },
        openImg(doc){
            this.doc_actual = doc;
        }
    },
    watch:{
        "$store.state.busqueda": async function(){
            this.setFiltro();
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

/* Mostar solo los principales, en el boton de ver, mostrar solo los hijos si es que tienen, los que tienen hijos no se venden */
</style>