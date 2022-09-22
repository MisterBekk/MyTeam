<template>
  <div class="min-w-xl mx-auto">
    <Navbar/>
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';
export default {
    components: { Navbar }
}
</script>
<style>
  
</style>
