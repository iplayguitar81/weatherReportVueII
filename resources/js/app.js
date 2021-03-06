import Vue from 'vue';

//import VueRouter...
import VueRouter from 'vue-router';

import axios from 'axios';

import VueAxios from 'vue-axios'

const compiler = require('vue-template-compiler');

//import routes file for use in project...
import routes from './routes';

//use VueRouter as a plugin...
Vue.use(VueRouter);

//use Moment as a plugin...
Vue.use(VueAxios,axios);

import Forecast from './components/Forecast.vue';
import TodayForecast from './components/TodayForecast.vue';
import CurrentForecast from './components/CurrentForecast.vue';

import Navbar from './components/Navbar.vue';
import StickyFooter from './components/StickyFooter.vue';



let app = new Vue({

    el: '#app',

    router: new VueRouter(routes),

    components: {
        Forecast,
        Navbar,
        StickyFooter,
        TodayForecast,
        CurrentForecast


    },

});