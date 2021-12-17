import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import reset from '../views/Reset.vue';
import clase from '../views/Class.vue';
import rutas from '../views/Rutas.vue';
import rutaoffline from '../views/RutaOffline.vue';
import offline from '../views/Catalogo Offline.vue';
import catalogo from '../views/Catalogo.vue';
import cart from '../views/Cart.vue';
import vencidos from '../views/Vencidos.vue';
import ordencomplete from '../views/OrdenComplete.vue';
import cliente from '../views/Clientes.vue';
import pdf from '../views/PDF.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Clientes',
    component: Home
  },{
    path: '/home',
    name: 'Clientes',
    component: Home
  },{
    path: '/login',
    name: 'Login',
    component: Login
  },{
    path: '/class/:id?',
    name: 'Marca',
    component: clase
  },{
    path: '/reset',
    name: 'Recuperar Contraseña',
    component: reset
  },{
    path: '/rutas',
    name: 'Rutas',
    component: rutas
  },{
    path: '/dataruta:ids?',
    name: 'Data Offline',
    component: rutaoffline
  },{
    path: '/catalogo',
    name: 'Catálogo',
    component: catalogo
  },{
    path: '/cart',
    name: 'Pedido',
    component: cart
  },{
    path: '/vencidos',
    name: 'Pedido',
    component: vencidos
  },{
    path: '/ordencomplete',
    name: 'Orden Completa',
    component: ordencomplete
  },{
    path: '/clientes',
    name: 'Clientes Ruta',
    component: cliente
  },{
    path: '/pdf',
    name: 'PDF',
    component: pdf
  },{
    path: '/offline',
    name: 'Catalogo Offline',
    component: offline
  }
];

// router.beforeEach((to, from, next) => {
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     // this route requires auth, check if logged in
//     // if not, redirect to login page.
//     if (true) {
//       next({ name: 'Login' });
//     } else {
//       next(); // go to wherever I'm going
//     }
//   } else {
//     next(); // does not require auth, make sure to always call next()!
//   }
// });

const router = new VueRouter({
  routes
});
// mode: 'history',
// base: process.env.BASE_URL,

export default router;
