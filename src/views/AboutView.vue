<template>

  <!-- header section  -->

  <section class="bg-midnightGreen inline-block w-full">
    <div class="container mx-auto text-center flex flex-col lg:flex-row ">
      <div>
        <h1 class="text-4xl font-bold text-white mt-20 mb-4 lg:mt-32">About</h1>
      </div>
      <div class="lg:text-left lg:w-2/3 lg:ml-52">
        <div class="hidden w-10 h-1 bg-lightColor lg:block mt-28"></div>
        <p class="text-white text-sm font-medium leading-7 md:mx-20 lg:font-normal lg:mx-auto lg:mt-10">We help
          companies build dynamic teams made up of top global talent. Using our network of passionate professionals we
          drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and
          experiences. We’ll bring those teams to you.</p>
      </div>
    </div>

    <img src="../assets/HomeImage/img7.png" class="w-20 float-right lg:-mt-10">
  </section>

  <!-- Meet the Directors Section  -->

  <section class="bg-deepGreen inline-block w-full">
    <img src="../assets/HomeImage/img8.png">
    <h1 class="text-3xl font-bold text-center text-white lg:text-4xl">Meet the Directors</h1>
    <div class="container mx-auto flex flex-col md:flex-row flex-wrap">
      <div v-for="person in people" class="w-72 h-64 mx-auto text-center bg-darkGreen mt-11 rounded md:mt-16">
        <img :src="person.img" class="w-24 h-24 mx-auto rounded-full border-2 border-raptureBlue mt-8">
        <h3 class="text-lg font-semibold text-raptureBlue mt-4">{{person.name}}</h3>
        <p class="text-sm text-white">{{person.status}}</p>
        <button class="w-14 h-14 rounded-full bg-lightColor border-none mt-8"><i class="fa-solid fa-plus"></i></button>
      </div>
    </div>
    <img src="../assets/HomeImage/img9.png" class="float-right mt-10">
  </section>

  <!-- Clients Section  -->

  <section class="bg-stateGreen inline-block w-full">
    <img src="../assets/HomeImage/img10.png" alt="">
    <h1 class="text-center text-3xl font-bold text-white lg:text-4xl">Some of our clients</h1>
    <div class="container mx-auto mb-32 flex flex-col items-center md:flex-row justify-between">
      <img src="../assets/HomeImage/verge.png" class="w-32 mt-12">
      <img src="../assets/HomeImage/jakarta.png" class="w-32 mt-12">
      <img src="../assets/HomeImage/guardian.png" class="w-32 mt-12">
      <img src="../assets/HomeImage/techradar.png" class="w-32 mt-12">
      <img src="../assets/HomeImage/gatget.png" class="w-24 mt-12">
    </div>
  </section>

  <!-- Get Start Section  -->

  <GetStart/>

  <!-- Footer Section  -->

  <Footer/>



</template>
<script>
import GetStart from '@/components/getStart.vue';
import Footer from '@/components/Footer.vue';
import axios from 'axios'
export default {
  components: { GetStart, Footer },
    data() {
        return {
            people: []
        };
    },
    
    async created() {
      try {
        const res = await axios.get(" http://localhost:3000/people");

        this.people = res.data;
      } catch (e) {
        console.log(e);
      }
    }
}
</script>
<style>

</style>
