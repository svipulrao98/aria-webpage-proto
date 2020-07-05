<template id="projects-1">
  <b-container fluid class="text-center">
    <div>
      <b-jumbotron id="our-projects-jumbotron" header="Projects" lead="These are some of the projects that are done or ongoing">
        <Cards id="cards-scroll-menu"/>
      </b-jumbotron>
    </div>
  </b-container>
</template>
<script>
  import Cards from './Cards.vue'
  export default {
    components: {
      Cards
    }
  }

</script>
<style scoped>
#cards-scroll-menu{
  height: 400px;
  overflow-y: scroll;
  transition: 1s;
}
#cards-scroll-menu:hover{
  box-shadow: 0 128px 256px 0 rgba(0,0,0,0.2);
  transition: 0.5s;
}
#our-projects-jumbotron{
  background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%), url('https://www.intheblack.com/-/media/intheblack/allimages/magazine-2016/05-may/robot-feature.jpg?rev=fba9b83eed57417c9b48fd9d04bd58f3');
  background-size: cover;
  transition :1s;
  cursor: default;
}
#our-projects-jumbotron:hover{
  box-shadow: 0 64px 128px 0 rgba(0,0,0,0.2);
  transition :0.5s;
}
</style>
