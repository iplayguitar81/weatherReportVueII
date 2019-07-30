<template>


    <nav class="navbar navbar-expand-lg navbar-light bg-danger mb-2"><a href="/weather" class="navbar-brand text-white">Laravel/Vue Challenge</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                <li class="nav-item">
                    <a class="nav-link" href="/weather">Vue/Laravel</a>
                </li>
                <!--<li class="nav-item">-->
                    <!--<a class="nav-link" href="/">Regular Laravel</a>-->
                <!--</li>-->
            </ul></div></nav>


</template>


<script>


    export default {
        name: 'Navbar',}

</script>