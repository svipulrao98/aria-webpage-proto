<template>
  <b-container>
    <div v-if="expertises.length">
      <b-row class="mb-3">
        <div v-bind:key="data" v-for="(data, index) in expertises">
          <b-col l=3>
            <b-overlay :show="show" rounded="sm">
              <b-card
                id="our-expertise-cards"
                v-bind:title="data.title"
                tag="article"
                style="max-width: 20rem;"
                class="mb-2"
                v-b-toggle="'expertise-side-card-'+index+1">
                <b-sidebar :id="'expertise-side-card-'+index+1" bg-variant="light" t :title="data.title" backprop shadow="lg">
                  <template v-slot:footer="{ show }">
                    <b-button block size="lg" @click="show=false" variant="danger">Close</b-button>
                  </template>
                  <div class="px-3 py-2">
                    <p>{{data.content}}</p>
                    <b-img :src="data.architecture_img_link" fluid thumbnail></b-img>
                  </div>
                </b-sidebar>
                <b-card-text>{{ `${data.content.slice(0,100)}...` }}</b-card-text>
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
      expertises: []
    };
  },
  created(){
    this.$http.get('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX').then(function(data){
      return data.json()
    }).then(function(data){
      var expertisesArray = [];
      for (let key in data){
        data[key].id = key;
        expertisesArray.push(data[key]);
      }
      this.expertises = expertisesArray;
    });
  }
};
</script>
<style scoped>
#our-expertise-cards{
  margin-top: 30px;
  margin-bottom: 30px;
  transition: box-shadow 0.5s;
}
#our-expertise-cards:hover{
  background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0.5) 100%), url('https://previews.123rf.com/images/ampolsandeee/ampolsandeee1710/ampolsandeee171000346/89990652-tea-in-a-cup-besides-a-laptop-computer-on-a-wooden-table.jpg');
  background-size: cover;
  box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
  transition: box-shadow 0.5s;
  cursor: default;
}
</style>
