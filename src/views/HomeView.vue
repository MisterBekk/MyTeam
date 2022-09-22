<template>

  <!-- header section  -->
  <section id="header" class="bg-midnightGreen">

    <div class="container mx-auto flex flex-col items-center md:flex-row md:justify-between ">

      <div class="md:w-2/5">
        <h1 class="mt-16 text-4xl font-bold text-center text-white md:text-left md:text-6xl md:-mt-32 lg:text-7xl">Find
          the best <span class="text-lightColor">talent</span></h1>
      </div>

      <div class="md:w-2/4 md:mt-24">
        <div class="hidden w-10 bg-raptureBlue h-1 mt-10 md:block"></div>
        <p class="text-center text-white text-sm m-3 leading-6 mt-5 md:text-left md:m-0 md:mt-16">Finding the right
          people and building high performing teams can be hard. Most companies aren’t tapping into
          the abundance of global talent. We’re about to change that.</p>
        <img src="../assets/HomeImage/img2.png" class="mt-20 mx-auto md:float-right md:mt-32">
      </div>

    </div>

  </section>

  <!-- Build & Manage section  -->

  <section class="bg-stateGreen">

    <div class="container mx-auto flex flex-col lg:flex-row lg:justify-between">

      <div class=" lg:w-2/4">
        <div class="w-10 bg-lightColor h-1 mt-16 mx-auto md:ml-0 lg:mt-36"></div>
        <h1
          class="text-white text-2xl font-bold text-center mx-20 mt-7 mb-2 md:text-left md:text-3xl md:mx-auto md:mr-72 lg:mr-48 lg:mt-12 ">
          Build & manage distributed teams like no one else.</h1>
      </div>

      <div class="mb-24 lg:mt-40 lg:w-2/4">
        <div v-for="item in benefits" :key="item.id" class="text-center md:flex md:text-left ">
          <div class="w-20 mx-auto md:w-24">
            <img :src="item.img" class="w-16 h-16 rounded-full mx-auto mt-12 md:ml-0">
          </div>
          <div>
            <h3 class="text-base text-lightColor font-bold mt-4 md:mt-10 md:ml-5">{{item.title}}</h3>
            <p class="text-white font-medium leading-6 mt-2 mx-5 text-sm md:mr-60 lg:mr-auto">{{item.info}}</p>
          </div>
        </div>
      </div>
    </div>

  </section>

  <!-- Success Stories Section  -->

  <section class="bg-midnightGreen inline-block w-full">
    <img src="../assets/HomeImage/img4.png" class="w-32">
    <h1 class="text-white text-2xl text-center font-bold w-80 mx-auto mt-10 md:w-96 lg:text-4xl lg:w-1/2">Delivering real results for top companies. Some of our <span class="text-raptureBlue">success stories</span></h1>
    <div class="container mx-auto flex flex-col lg:flex-row">
      <div v-for="staff in staffs" class="w-80 mx-auto text-center mt-20 md:w-auto lg:w-72">
        <p class="text-base text-white leading-6 md:mx-20 lg:mx-auto">{{staff.info}}</p>
        <h3 class="text-lg font-bold text-raptureBlue mt-4">{{staff.name}}</h3>
        <span class="text-sm font-semibold text-white">{{staff.status}}</span>
        <img :src="staff.img" class="w-16 h-16 rounded-full border-2 border-raptureBlue mx-auto mt-4">
      </div>
    </div>
    <img src="../assets/HomeImage/img5.png" class="float-right w-36">
  </section>

  <!-- Get Started Section  -->

  <GetStart/>

  <!-- Footer Section  -->

  <Footer/>
</template>

<script>
import GetStart from "../components/getStart.vue";
import Footer from "@/components/Footer.vue";
import axios from "axios"

export default {
    name: "HomeView",
    data() {
        return {
            benefits: [],
            staffs: []
        };
    },
    async created() {
      try {
        const res = await axios.get("http://localhost:3000/benefits");
        this.benefits = res.data;

        const ans = await axios.get("  http://localhost:3000/staffs");
        this.staffs = ans.data;

      } catch (e) {
        console.log(e);
      }
    },

    components: { GetStart, Footer }
}
</script>
