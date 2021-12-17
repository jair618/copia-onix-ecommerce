<template>
  <header class="home-header">
    <div id="headerMarcas">
        <!-- <span @click="setMarca(item._id)" :class="$cookies.get('_mc_')==item._id?'text-primary':''" v-for="item in marcas" :key="item._id">{{item.name}}</span> -->
    </div>
    <nav class="navbar navbar-default">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <!--button-->

            <router-link to="/home" class="navbar-brand" :title="cliente.name">
                <img v-if="cliente.logo" :src="cliente.logo" alt="Logo">
            </router-link>

            <!-- <a class="navbar-brand" href="/home" :title="cliente.name">
                <img v-if="cliente.logo" :src="cliente.logo" alt="Logo">
            </a> -->
        </div>
        <!-- Collect the nav links, forms, and other content for toggling -->

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li class="current-menu-item dropdown">
                       <router-link to="/home" class="primary-color pull-right">Inicio</router-link>
                    </li>
                    <li class="dropdown">
                       <router-link to="/clientes" class="primary-color pull-right">Clientes</router-link>
                    </li>

                    <!-- <li class="mega-link dropdown">
                      <a href="#" class="dropdown-toggle" >Women’s </a>
                        <div class="mega-menu dropdown-menu">
                            <div class="mega-wrap row">
                                <div class="col-sm-3">
                                    <h6>Title</h6>
                                    <ul>
                                        <li><a href="#">Opcion &amp; Opcion</a></li>
                                        <li><a href="#">Opcion &amp; Opcion</a></li>
                                        <li><a href="#">Opcion &amp; Opcion</a></li>
                                        <li><a href="#">Opcion &amp; Opcion</a></li>
                                        <li><a href="#">Opcion &amp; Opcion</a></li>
                                        <li><a href="#">Opcion &amp; Opcion</a></li>
                                        <li><a href="#">Opcion &amp; Opcion</a></li>
                                        <li><a href="#">Opcion &amp; Opcion</a></li>
                                    </ul>
                                </div>

                                <div class="col-sm-3">
                                    <h6>Title</h6>
                                    <ul>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                    </ul>
                                </div>

                                <div class="col-sm-3">
                                    <h6>Opcion</h6>
                                    <ul>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                    </ul>
                                </div>

                                <div class="col-sm-3">
                                  <figure>
                                      <a href="#"><img src="assets/images/sidebar-banner.jpg" alt=""></a>
                                  </figure>  
                                </div>
                            </div> 
                        </div>
                    </li>

                    <li class="mega-link dropdown">
                        <a href="#" class="dropdown-toggle">Men’s </a>
                        <div class="mega-menu dropdown-menu">
                            <div class="mega-wrap row">
                                <div class="col-sm-3">
                                    <h6>Opcion</h6>
                                    <ul>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                    </ul>
                                </div>

                                <div class="col-sm-3">
                                    <h6>Title</h6>
                                    <ul>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                        <li><a href="#">Opcion</a></li>
                                    </ul>
                                </div>

                                <div class="col-sm-3">
                                  <figure>
                                      <a href="#"><img src="assets/images/sidebar-banner.jpg" alt=""></a>
                                  </figure>  
                                </div>
                            </div> 
                        </div>
                    </li>

                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Comprar</a>
                        <ul class="sub-menu dropdown-menu">
                            <li><a href="">Comprar #1</a></li>
                            <li><a href="">Comprar #2</a></li>
                            <li><a href="">Comprar #3</a></li>
                            <li><a href="">Comprar #4</a></li>
                        </ul>
                    </li> -->

                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle">Vistas</a>
                        <ul class="sub-menu dropdown-menu">
                            <li><router-link to="/rutas" class="primary-color">Rutas</router-link></li>
                            <li><router-link to="/catalogo" class="primary-color">Catálogo</router-link></li>
                            <li><router-link to="/vencidos" class="primary-color">Pedidos Vencidos</router-link></li>
                            <li><router-link to="/pdf" class="primary-color">Generar PDF</router-link></li>
                        </ul>
                    </li>
                </ul>
            </div>
            <!--container-->                
        </div>
        <!-- /.navbar-collapse -->

        <div class="header-right"> 
            <form class="searchbox navbar-form">
                <input type="search" placeholder="Search..." name="search" class="searchbox-input" required v-model="$store.state.busqueda">
                <!-- <input type="submit" class="searchbox-submit" value=""> -->
                <span class="searchbox-icon"><i class="pe-7s-search"></i></span>
            </form>

            <ul class="site-header-cart menu">
                <li class="dropdown">
                    <a href="#" data-toggle="dropdown" title="Enviar Data" @click="SubirData()">
                        <!-- <span class="count rounded-crcl">1</span> -->
                        <i class="fa fa-cloud-upload"></i>
                    </a>
                </li>
                <!--wish list-->
                <li class="dropdown">
                    <a href="#" data-toggle="dropdown" title="">
                        <span class="count rounded-crcl">{{cart.length}}</span>
                        <i class="pe-7s-shopbag icon"></i>
                    </a>

                    <div class="dropdown-menu widget woocommerce widget_shopping_cart canvas">

                        <button type="button" class="close">
                            <span>&times;</span>
                        </button>
                        <!--close-->

                        <div class="widget_shopping_cart_content">
                            <h6 class="title">Compra Pendiente</h6>
                            <ul class="cart_list product_list_widget ">
                                <li class="mini_cart_item" v-for="item in cart" :key="item.id">
                                    <table>
                                        <tr>
                                            <td class="figure">
                                                <figure>
                                                    <img :src="item.url" alt="">
                                                </figure>
                                            </td>

                                            <td class="content">
                                                <a href="#" class="remove" title="Remove this item" @click="removeCart(item)">
                                                    <i class="fa fa-close"></i>
                                                </a>

                                                <h6 class="product-title">
                                                    {{item.name}}
                                                </h6>

                                                <ul class="product-info m-0">
                                                    <li>Precio : ${{item.price}}</li>
                                                    <li>Cant : {{item.cant}} </li>
                                                    <li>Total : {{item.price * item.cant}}</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </table>
                                </li>
                                <!--single item-->

                                
                            </ul>
                            <!-- end product list -->

                            <div class="cart-collaterals">
                                <div class="cart_totals"> 
                                    <table class="shop_table shop_table_responsive">
                                        <tbody>
                                            <!-- <tr class="cart-subtotal">
                                                <th>Cant subtotal </th>
                                                <td data-title="Subtotal">$378.00
                                                </td>
                                            </tr> -->

                                            <!-- <tr class="shipping">
                                                <th> Shipping + Handling  </th>
                                                <td data-title="Shipping">
                                                    <span class="shipping text-green">$18.00</span>
                                                </td>
                                            </tr> -->

                                            <tr class="order-total">
                                                <th>Total</th>
                                                <td data-title="Total"> ${{total.toFixed(2)}}</td>
                                            </tr>
                                        </tbody>
                                    </table>  
                                </div>
                            </div>

                            <div class="buttons">
                                <router-link to="/cart" class="button">Ver Pedido</router-link>
                                <!-- <a href="#" class="button">Ver Pedido</a> -->
                                <a href="#" class="button checkout">Procesar</a>
                            </div>
                            <!--buttons-->
                        </div>
                    </div>
                </li>
                <!--cart-->
            </ul>

            <ul class="login menu">
                <li>
                <a href="#" class="btn-login" @click="logOut"><i class="pe-7s-users"></i><span>Cerrar Sessión</span></a>
                </li>
            </ul> 
        </div>

        <!--right-->
    </nav>
  </header>
  <!--header-->
</template>

<script>
import FUNCIONES from '../conexion';

export default {
    name: 'myHeader',
    props: {
        msg: String
    },
    data(){
        return {
            cart: [],
            total: 0,
            cliente: {},
            marcas: [],
        }
    },
    created: function(){
        this.refresh();
    },
    methods: {
        async SubirData(){
            var ventas = await this.$pouch.find({
                selector: {inCart: true},
            });

            console.log('ventas', ventas.docs);

            var pagos = await this.$pouch.find({
                selector: {pagar: true},
            });
            console.log('pagos', pagos.docs);

            var data = this.$cookies.get("_us_");

            data.action = '8';

            data.pagos = pagos.docs;
            data.ventas = ventas.docs;
            if((data.pagos && data.pagos.length>0) || (data.ventas && data.ventas.length>0))
            FUNCIONES.getData(data)
            .then(response => {
                console.log(response);   
                this.limpiarDatos();             
                alert('Cambios Aplicados');
            }).catch(response =>{
                console.log(response);
                alert(response.error);
            });
            else alert('No hay datos para Subir');
        },
        async limpiarDatos(){
            var ventas = await this.$pouch.find({
                selector: {inCart: true},
            });

            ventas.docs.forEach(element => {
                element.inCart = false;
                element.cartCliente = [];
            });

            for(var i=0; i<ventas.docs.length; i++){
                await this.$pouch.put(ventas.docs[i]);
            }

            var pagos = await this.$pouch.find({
                selector: {pagar: true},
            });

            for(var j=0; j<pagos.docs.length; j++){
                await this.$pouch.remove(pagos.docs[j]);
            }

            this.$store.commit('addToCart', {});
        },
        logOut(){
            this.$router.push({ path: 'login' });
        },
        setMarca(id){
            this.$cookies.set('_mc_', id);
            this.$router.go();
        },
        async removeCart(item){
            item.inCart = false; 
            await this.$pouch.put(item);      
            this.$store.commit('addToCart', item);
        },
        async refresh(){            
            var carrito = await this.$pouch.find({
                selector: {inCart: true},
            });

            var _cart = carrito.docs||[];

            this.cliente = this.$cookies.get('_cl_')||{};
            var cliente = this.cliente;

            if(cliente){
                this.cart = _cart.filter(function(x){return x.cartCliente.map(function(y){return y.id}).indexOf(cliente._id)>-1 })
                this.total = this.cart.reduce(function(x,y){return x + (y.cant * y.price);},0);
            }

            // var marcas = await this.$pouch.find({
            //     selector: {type: 'filtros'},
            // });

            // if(marcas.docs[0])
            //     this.marcas = marcas.docs[0].data.clases;
        }
    },
    watch:{
        "$store.state.cart": async function(){
            this.refresh();            
        }
    }
}
</script>
