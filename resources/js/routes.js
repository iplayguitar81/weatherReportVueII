import Forecast from './components/Forecast.vue';
import TodayForecast from './components/TodayForecast.vue';


export default {

    mode: 'history',

    linkActiveClass: 'active',


    routes: [
        {
            path: '/',
            component: Forecast

        },

        {
            path: '/current-forecast',
            component: TodayForecast

        },


    ]

};