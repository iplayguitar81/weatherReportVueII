<template>

    <div>
        <h1>{{moment(forecastDate).format('MMMM Do, YYYY')}} Forecast <br/><span class="text-muted">{{ cityByIp }}</span> </h1>

        <div class="card card-body mb-2" v-for="cast in forecast">

            <h3> {{moment(cast.dt_txt).format('MMMM Do, YYYY, h:mm:ss a')}}</h3>

            <h2>{{cast.weather[0].description}}</h2>
            <h2><img v-bind:src="'http://openweathermap.org/img/wn/'+cast.weather[0].icon+'@2x.png'" v-bind:title="cast.weather[0].description" ></h2>

            <p>Temp:  {{cast.main.temp}}&#8457;</p>
            <p>Max Temp:  {{cast.main.temp_max}}&#8457;</p>
            <p>Min Temp:  {{cast.main.temp_min}}&#8457;</p>
            <p>Pressure:  {{cast.main.pressure}}</p>
            <p>Sea Level:  {{cast.main.sea_level}}</p>
            <p>Ground Level:  {{cast.main.grnd_level}}</p>
            <p>Humidity:  {{cast.main.humidity}}</p>
            <p>Temp KF:  {{cast.main.temp_kf}}</p>

        </div>

    </div>

</template>

<script>

    import axios from 'axios';

    import VueAxios from 'vue-axios';

    import moment from 'moment'


    export default {
        name: 'TodayForecast',
        data: function() {
            return {

                forecast: [],
                forecastDate: '',
                cityByIp: '',
                moment: moment,
            };

        },

        props:{


        },

        created: function(){ this.fetchForecast();},
        methods: {
            fetchForecast() {

                //set URL for API route...
                let url = '/api/forecasts';
                axios
                    .get(url)
                    .then(response => {

                        //set forecasts array to list object from response...
                       // this.forecasts = response.data.list;
                        this.cityByIp = response.data.city.name;

                        //get and set today's date...
                        let today = moment().format("YYYY-MM-DD");

                        //add one day to current date...
                        let nextDay = moment().add(1, 'day').format("YYYY-MM-DD");

                        //set todayForecast value
                        this.forecast = response.data.list.filter(f => f.dt_txt.includes(today));

                        //set forecastDate to current date
                        this.forecastDate = today;

                        //if object length is 0 then grab the following day's forecast...
                        if( (this.forecast.length === 0)) {

                            //set forecast object to the next day if there is no values set in the forecast object based on current date...
                            this.forecast = response.data.list.filter(f => f.dt_txt.includes(nextDay));
                            //set forecastDate to nextDay if there is no forecast information for current date available...
                            this.forecastDate = nextDay;
                        }

                        //test logging the forecast object...
                        //console.log(this.forecast);


                    })
                    .catch(error => {
                        console.log(error);
                    });
            },


        },

        computed:{

        },
    }
</script>


