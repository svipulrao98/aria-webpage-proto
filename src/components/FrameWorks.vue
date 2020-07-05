<template>
  <b-container fluid class="text-center">
    <div>
      <b-jumbotron id="jumbotron-frameworks">
        <template v-slot:header id="frameworks-header-title">Frameworks</template>
        <b-row class="text-center">
            <b-col md="6">
              <h2><strong>What we have Used</strong></h2>
              <Used />
            </b-col>
            <b-col md="6">
              <h2><strong>Our contributions</strong></h2>
              <Contributions />
            </b-col>
        </b-row>
      </b-jumbotron>
    </div>
  </b-container>
</template>

<script>
import Used from './Used.vue'
import Contributions from './Contributions.vue'
export default {
  components: {
    Used,
    Contributions
  },
  data() {
    return {
    };
  }
};
</script>
<style scoped>
#jumbotron-frameworks{
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%), url('https://wallpaperaccess.com/full/1560285.jpg');
  background-size: cover;
  cursor: default;
  transition: 2s;
}
#jumbotron-frameworks:hover{
  box-shadow: 0 64px 128px 0 rgba(0,0,0,0.2);
  transition: box-shadow 0.5s;
}

#frameworks-header-title {
  cursor: pointer;
  cursor: hand;
  box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
  transition: box-shadow 1s ;
}
</style>
