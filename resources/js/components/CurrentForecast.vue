<template>

    <div>

        <h1>Current Forecast <br/> {{moment(forecast.dt * 1000).format('ddd MMMM Do, YYYY h:mm:ss a')}}<br/> <span class="text-muted"> {{ forecast.name }}</span> </h1>


        <div class="card card-body mb-2">

            <div v-if="forecast.weather">

                <img v-bind:src="'http://openweathermap.org/img/wn/'+forecast.weather[0].icon+'@2x.png'" v-bind:title="forecast.weather[0].description">
                <h2>{{forecast.weather[0].main}}</h2>
            </div>

            <div v-if="forecast.main">

                <p>Max Temp:  {{forecast.main.temp_max}}&#8457;</p>
                <p>Min Temp:  {{forecast.main.temp_min}}&#8457;</p>
                <p>Pressure:  {{forecast.main.pressure}}</p>
                <p>Humidity:  {{forecast.main.humidity}}</p>

            </div>


            <div v-if="forecast.sys">

                <p>Sunrise:  {{moment(forecast.sys.sunrise * 1000).format('h:mm:ss a')}} </p>

                <p>Sunset:  {{moment(forecast.sys.sunset * 1000).format('h:mm:ss a')}}</p>


            </div>



        </div>

    </div>

</template>

<script>

    import axios from 'axios';

    import VueAxios from 'vue-axios';

    import moment from 'moment'


    export default {
        name: 'CurrentForecast',
        data: function() {
            return {

               // forecast: [],
                forecast: [],

                cityByIp: '',
                moment: moment,
                dataPassed: false,

            };


        },

        props:{


        },

        created: function(){ this.fetchForecast(); this.checkForecast();},
        methods: {
             fetchForecast: function() {

                //set URL for API route...
                let url = '/api/current';

                 var vm = this;
                 axios
                    .get(url)
                    .then(response => {

                        //set forecasts array to list object from response...
                        vm.forecast = response.data;

                        console.log(vm.forecast);

                        console.log(typeof vm.forecast);
                       // this.cityByIp = response.data.city.name;

                    })
                    .catch(error => {
                        console.log(error);
                    });
            },

            checkForecast(){
            if(Object.keys(this.forecast).length !== 0 ) {
                this.dataPassed = true;
            }


            },



        },

        computed:{

            // forecastTemp: function () {
            //     return this.forecast.main.temp
            // }

        },
    }
</script>


