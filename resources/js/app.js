/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App.vue';
Vue.use(VueAxios, axios);

import HomeComponent from './components/HomeComponent.vue';
import CreateComponent from './components/CreateComponent.vue';
import IndexComponent from './components/IndexComponent.vue';
import EditComponent from './components/EditComponent.vue';

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

const routes = [
        {
            name: 'home',
            path: '/',
            component: HomeComponent
        },
        {
            name: 'create',
            path: '/create',
            component: CreateComponent
        },
        {
            name: 'tasks',
            path: '/tasks',
            component: IndexComponent
        },
        {
            name: 'edit',
            path: '/edit/:id',
            component: EditComponent
        }
    ];

// const app = new Vue({
//     el: '#app',
// });

// const router = new VueRouter({ mode: 'history'});
const router = new VueRouter({
     mode: 'history',
     routes: routes}
     );
// const app = new Vue(Vue.util.extend({ router })).$mount('#app');
const app = new Vue(
    Vue.util.extend(
        { router }, App
    )
).$mount('#app');
