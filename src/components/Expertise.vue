<template>
  <b-container fluid class="text-center">
    <div>
      <b-jumbotron id="our-projects-jumbotron" header="Area of Expertise" lead="These are some of the fields we are good at">
        <expertiseCards id="cards-scroll-menu"/>
      </b-jumbotron>
    </div>
  </b-container>
</template>
<script>
  import expertiseCards from './expertiseCards.vue'
  export default {
    components: {
      expertiseCards
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
  background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%), url('https://cdn.mos.cms.futurecdn.net/4Tk6tN9WyfUERK9Z3NGnS3.jpg');
  background-size: cover;
  transition :1s;
  cursor: default;
}
#our-projects-jumbotron:hover{
  box-shadow: 0 64px 128px 0 rgba(0,0,0,0.2);
  transition :0.5s;
}
</style>
