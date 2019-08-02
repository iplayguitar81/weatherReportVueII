<template>

    <div>
    <h1>5-Day Weather Forecast <br/><span class="text-muted"> {{ cityByIp }}</span> </h1>

    <nav aria-label="Page navigation example">
        <ul class="pagination">
            <li v-bind:class="[{disabled: pageNumber === 0}]" class="page-item"><a class="page-link" href="#" @click="prevPage">Previous</a></li>

            <li v-bind:class="[{disabled: pageNumber >= pageCount -1}]" class="page-item"><a class="page-link" href="#" @click="nextPage">Next</a></li>
        </ul>
    </nav>

    <div class="card card-body mb-2" v-for="forecast in paginatedData">

        <h3> {{moment(forecast.dt_txt).format('MMMM Do, YYYY, h:mm:ss a')}}</h3>

        <h2>{{forecast.weather[0].description}}</h2>
        <h2><img v-bind:src="'http://openweathermap.org/img/wn/'+forecast.weather[0].icon+'@2x.png'" v-bind:title="forecast.weather[0].description" ></h2>

        <p>Temp:  {{forecast.main.temp}}&#8457;</p>
        <p>Max Temp:  {{forecast.main.temp_max}}&#8457;</p>
        <p>Min Temp:  {{forecast.main.temp_min}}&#8457;</p>
        <p>Pressure:  {{forecast.main.pressure}}</p>
        <p>Sea Level:  {{forecast.main.sea_level}}</p>
        <p>Ground Level:  {{forecast.main.grnd_level}}</p>
        <p>Humidity:  {{forecast.main.humidity}}</p>
        <p>Temp KF:  {{forecast.main.temp_kf}}</p>

    </div>

    </div>

</template>

<script>

    import axios from 'axios';

    import VueAxios from 'vue-axios';

    import moment from 'moment'


    export default {
        name: 'Forecast',
        data: function() {
            return {

                forecasts: [],
                cityByIp: '',
                moment: moment,
                pageNumber: 0,
            };


        },

        props:{

            //pagination default size
            size:{
                type:Number,
                required:false,
                default: 8
            }
        },

        created: function(){ this.fetchForecasts();},
        methods: {
            fetchForecasts() {

                //set URL for API route...
                let url = '/api/forecasts';
                axios
                    .get(url)
                    .then(response => {

                        //set forecasts array to list object from response...
                        this.forecasts = response.data.list;
                        this.cityByIp = response.data.city.name;

                    })
                    .catch(error => {
                        console.log(error);
                    });
            },

            //pagination methods...
            nextPage(){
                this.pageNumber++;
            },
            prevPage(){
                this.pageNumber--;
            },

        },

        computed:{
            pageCount(){
                let l = this.forecasts.length,
                    s = this.size;
                return Math.floor(l/s);
            },
            paginatedData(){
                const start = this.pageNumber * this.size,
                    end = start + this.size;
                return this.forecasts
                    .slice(start, end);
            }
        },
    }
</script>


