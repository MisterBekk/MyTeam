<template>
    <section class="bg-darkGreen md:h-44">
        <div class="container mx-auto flex flex-col md:flex-row md:justify-between">
            <div class="text-white text-center">
                <h2 class="text-2xl font-bold mt-16 mb-5 md:mt-10">myteam</h2>
                <router-link class="text-sm font-medium " to="/">home</router-link>
                <router-link class="text-sm font-medium ml-5 " to="/about">about</router-link>
            </div>
            <div class="text-gray-500 text-center mt-6 md:text-left md:text-xs md:mt-12">
                <p>987 Hillcrest Lane</p> 
                <p>Irvine, CA</p>
                <p>California 92714</p>
                <p>Call Us : 949-833-7432</p> 
            </div>
            <div class="text-center mt-10 md:text-right">
                <i class="fa-brands fa-square-facebook text-white text-lg"></i>
                <i class="fa-brands fa-square-instagram text-white text-lg mx-5"></i>
                <i class="fa-brands fa-twitter text-white text-lg"></i>
                <p class="text-gray-500 mt-3 mb-3 md:mb-0 md:mt-6 md:text-xs">Copyright 2020. All Rights Reserved</p>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style>
    
</style>