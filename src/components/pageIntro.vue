<template>
  <b-container fluid class="text-center">
    <div>
      <b-jumbotron id="jumbotron-page-intro">
        <template v-slot:header  id="frameworks-header-title">Who are we?</template>
        <vue-typed-js :typeSpeed="25" :showCursor="false" :strings="['We are a Artificial intelligence based company providing machine learning based solutions for your business to give you a cutting edge over others.']">
          <h2 class="typing" style="box-shadow: 0 64px 128px 0 rgba(0,0,0,0.2);"></h2>
        </vue-typed-js>
        <div class="row">
          <div class="col-md-6" style="padding:20px">
            <vue-typed-js :backSpeed="5" :typeSpeed="10" backDelay="2500" :showCursor="false" :smartBackspace="true" :strings=we_also_believe :loop="true" :contentType="'html'">
              <b-card no-body class="text-center bg-secondary text-light"><div class="typing"></div></b-card>
            </vue-typed-js>
          </div>
          <div class="col-md-6" style="padding:20px">
            <vue-typed-js :showCursor="false" :strings="['Any sufficiently advanced technology is indistinguishable from the magic']">
              <b-card no-body class="text-center bg-secondary text-light">
                <h4 class="typing"></h4>
                <vue-typed-js :showCursor="false" :startDelay="5000" :strings="['<strong>-Arthur clark</strong>']" :contentType="'html'">
                  <div class="d-flex ml-auto"><h3 class="typing"></h3></div>
                </vue-typed-js>
              </b-card>
            </vue-typed-js>
          </div>
        </div>
        <b-container fluid class="text-center" style="padding:40px">
          <b-row>
            <div class="span-6" style="float: none; margin: 0 auto;">
              <vue-typed-js :showCursor="false" :strings="['<h2><strong>We Believe,</strong></h2>']" :contentType="'html'">
                <div class="typing"></div>
              </vue-typed-js>
            </div>
          </b-row>
          <b-row>
            <div class="span-6"
            style="float: none;
            margin: 0 auto;
            box-shadow: 0 32px 64px 0 rgba(0,0,0,0.2);"
            >
              <vue-typed-js :typeSpeed="25" :showCursor="false" :strings="[what_we_believe]" :contentType="'html'">
                <div class="typing" style="width: 400px;"></div>
              </vue-typed-js>
            </div>
          </b-row>
        </b-container>
      </b-jumbotron>
    </div>
  </b-container>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      what_we_believe: '<h5>Machines when organised with our models can perceive that what is beyond human perception to give your business that cutting edge over others</h5>',
      we_also_believe: ['<h5>Machines can interact understand and provide services way better than than human crypted algorithms as Machines have a trillion time more memory and computational capabilities than a group of great intellectuals</h5>',
                        '<h5>Where they lack is organization we in Aria attempt to bring that organization within machines to outperform human intellectual capabilities with our machine learning models for your specific application</h5>']
    };
  }
};
</script>
<style scoped>
#jumbotron-page-intro{
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%), url('https://thumbs.dreamstime.com/b/artificial-deep-neural-network-structure-frontal-view-digital-illustration-schematic-blue-model-d-render-artificial-deep-105381062.jpg');
  background-size: cover;
  cursor: default;
  transition: 2s;
}
#jumbotron-page-intro:hover{
  box-shadow: 0 64px 128px 0 rgba(0,0,0,0.2);
  transition: box-shadow 0.5s;
}
#arthur-clark{
  height: 150px;
  width: auto !important;
  box-shadow: 0 64px 128px 0 rgba(0,0,0,0.2);
  padding:40px;
}
b-card{
  opacity: 0.5;
  transition: 1s;
}
b-card:hover{
  opacity: 1;
  transition: 1s;
}
</style>
