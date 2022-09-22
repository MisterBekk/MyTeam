<template>
    <!-- Contact page  -->

    <div class="bg-midnightGreen">
        <div class="container mx-auto flex flex-col md:flex-row md:justify-between">
            <!-- Contact us  -->
            <div class="mx-auto text-center mb-12 md:text-left md:ml-0">
                <h1 class="text-white font-bold text-4xl mt-20">Contact</h1>
                <h2 class="text-lightColor text-2xl font-bold mt-3">Ask us about</h2>
                <div class="flex text-white mt-10">
                    <img class="w-10" src="../assets/HomeImage/man.png">
                    <p class="font-semibold text-sm ml-5 mt-2">The quality of our talent network</p>
                </div>
                <div class="flex text-white mt-10">
                    <img class="w-10" src="../assets/HomeImage/setting.png">
                    <p class="font-semibold text-sm ml-5 mt-2">Usage & implementation of our software</p>
                </div>
                <div class="flex text-white mt-10">
                    <img class="w-10" src="../assets/HomeImage/diagram.png">
                    <p class="font-semibold text-sm ml-5 mt-2">How we help drive innovation</p>
                </div>
            </div>
            
            <!-- Register  -->
            
            <div class="mx-auto mb-12 md:mt-16 md:mr-0">
                <input 
                type="text" 
                placeholder="Name" 
                class="w-96 p-3 mt-2 text-white outline-none bg-transparent border-b-white border-b">
                <br>
                <input 
                type="email" 
                placeholder="Email Addres" 
                class="w-96 p-3 mt-2 text-white outline-none bg-transparent border-b-white border-b">
                <br>
                <input 
                type="text" 
                placeholder="Company Name"
                class="w-96 p-3 mt-2 text-white outline-none bg-transparent border-b-white border-b">
                <br>
                <input 
                type="text" 
                placeholder="Title"
                class="w-96 p-3 mt-2 text-white outline-none bg-transparent border-b-white border-b">
                <br>
                <textarea class="w-96 p-3 mt-2 text-white outline-none bg-transparent border-b-white border-b">Message
                </textarea> <br>
                <button class="bg-white text-midnightGreen text-xs font-bold py-2 px-5 rounded-3xl mt-4">Submit</button>
            </div>
        </div>
    </div>

    <!-- footer section  -->

    <Footer/>
</template>
<script>
import Footer from '@/components/Footer.vue';
export default {
    components: { Footer }
}
</script>
<style>
    
</style>