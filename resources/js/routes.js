import Forecast from './components/Forecast.vue';
import TodayForecast from './components/TodayForecast.vue';


export default {

    mode: 'history',


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