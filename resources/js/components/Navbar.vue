<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-danger mb-2"><a href="/" class="navbar-brand text-white">Laravel/Vue Weather SPA</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                <li class="nav-item">
                    <router-link class="nav-link" to="/" exact>5 Day Forecast</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/test-forecast">Current Forecast</router-link>
                </li>

                <li class="nav-item">
                    <router-link class="nav-link" to="/current-forecast">Day/Next Day Forecast</router-link>
                </li>





            </ul>
        </div>
    </nav>


</template>


<script>

    export default {
        name: 'Navbar',}

</script>