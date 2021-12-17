import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueCookies from 'vue-cookies';

Vue.use(VueCookies);
Vue.use(Vuex);

import PouchDB from 'pouchdb-browser';
import lf from 'pouchdb-find';
import plf from 'pouchdb-live-find';

import pouchVue from 'pouch-vue';

// PouchDB plugins: pouchdb-find (included in the monorepo) and LiveFind (external plugin)
PouchDB.plugin(lf);
PouchDB.plugin(plf);

Vue.use(pouchVue, {
    pouch: PouchDB,
    defaultDB: '_ct_',
    optionsDB: {}
})

const store = new Vuex.Store({
    state: {
        cart: [],
        refresh: false,
        busqueda: ''
    },
    mutations: {
        refreshCart(state) {
            state.refresh = true;
        },
        addToCart(state, n) {
            state.cart.push(n);
        },
        addToCartAll(state, n) {
            state.cart = n;
        },
    }
});

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
    store
}).$mount('#app')