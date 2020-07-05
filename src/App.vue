<template>
  <div id="app">
    <Navbar />
    <router-view></router-view>
    <!-- <HelloWorld/> -->
  </div>
</template>
<script>
 // import HelloWorld from './components/HelloWorld.vue'
  import Navbar from './components/Navbar.vue';
  // import frameWorks from './components/FrameWorks.vue';
  export default {
    name: 'navbar',
    components: {
      Navbar
      // frameWorks
      // HelloWorld
    }
  }
</script>
<style scoped>

</style>
