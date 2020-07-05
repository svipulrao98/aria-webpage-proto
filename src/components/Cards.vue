<template>
  <b-container>
    <div v-if="projects.length">
      <b-row class="mb-3">
        <div v-bind:key="data" v-for="(data, index) in projects">
          <b-col l=3>
            <b-overlay :show="show" rounded="sm">
              <b-card
                id="our-project-cards"
                v-bind:title="data.title"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                v-b-toggle="'project-side-card-'+index+1">
                <b-sidebar :id="'project-side-card-'+index+1" bg-variant="light" t :title="data.title" backprop shadow="lg">
                  <template v-slot:footer="{ show }">
                   <!-- <div class="d-flex bg-dark text-light align-items-center px-3 py-2"> -->
                    <!-- <strong class="mr-auto" @click="show=false">Close</strong> -->
                    <b-button block size="lg" @click="show=false" variant="danger">Close</b-button>
                   <!-- </div> -->
                  </template>
                  <div class="px-3 py-2">
                    <p>{{data.content}}</p>
                    <!-- <b-img src="https://picsum.photos/500/500/?image=54" fluid thumbnail></b-img> -->
                  </div>
                  <router-link v-bind:to="'/projects/' + data.id">
                    <b-button :disabled="show" @click="show=true" variant="primary">View Complete Project Description</b-button>
                  </router-link>
                </b-sidebar>
                <b-card-text>{{ `${data.content.slice(0,100)}...` }}</b-card-text>
                <router-link v-bind:to="'/projects/' + data.id">
                  <b-button :disabled="show" @click="show=true" variant="primary">View Complete Project Description</b-button>
                </router-link>
              </b-card>
            </b-overlay>
          </b-col>
        </div>
      </b-row>
    </div>
    <div v-else>
      <h3><b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>Loading...</h3>
    </div>
  </b-container>
</template>

<script>
// import axios from "axios";
export default {
  data() {
    return {
      show: false,
      projects: []
    };
  },
  created(){
    this.$http.get('XXXXXXXXXXXXXXXXXXXXXX').then(function(data){
      return data.json()
    }).then(function(data){
      var projectsArray = [];
      for (let key in data){
        data[key].id = key;
        projectsArray.push(data[key]);
      }
      this.projects = projectsArray;
    });
  }
};
</script>
<style scoped>
#our-project-cards{
  margin-top: 30px;
  margin-bottom: 30px;
  transition: box-shadow 0.5s;
}
#our-project-cards:hover{
  background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.5) 100%), url('https://pbs.twimg.com/media/DIHAAPpWsAAPDu1.jpg');
  background-size: cover;
  box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
  transition: box-shadow 0.5s;
  cursor: default;
}
</style>
