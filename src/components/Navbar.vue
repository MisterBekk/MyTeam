<template>
    <div class="w-full bg-midnightGreen overflow-auto p-2">
        <div class="container mx-auto flex justify-between md:justify-start">
            <div>
                <h2 class="text-white text-lg mt-6 md:text-3xl font-bold tracking-wider md:mt-7">myteam</h2>
            </div>
            <div :class="[open ? 'left-0': 'left-[-100%]']" class="flex flex-col text-white absolute z-10 bg-midnightGreen w-2/4 h-2/3 md:static md:mt-6 md:flex-row md:justify-between md:w-full md:h-auto ">
                <div class="md:flex">
                   <li class="list-none mt-9 ml-8 md:ml-12 md:mt-4 hover:text-raptureBlue md:text-sm"><router-link to="/">Home</router-link></li>
                   <li class="list-none mt-4 ml-8 hover:text-raptureBlue md:text-sm md:ml-6"><router-link to="/about">About</router-link></li>  
                </div>
                <div><li class="list-none mt-9 md:mt-4 ml-8"><router-link class="border-2 py-1 px-4 rounded-2xl hover:bg-white hover:border-none hover:text-midnightGreen font-semibold" to="/contact">Contact</router-link></li></div>
            </div>
            <div @click="openMenu" class="text-white mt-7 block md:hidden">
                <i :class='[open ? "fa-solid fa-xmark" : "fa-solid fa-bars"]'></i>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {

    setup() {
        let open = ref(false)

        const openMenu = () => {
            open.value = !open.value
        }
        return{open, openMenu}
    }
}
</script>
<style>

</style>