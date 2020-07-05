<template>
  <b-container fluid class="text-center">
    <div>
      <b-jumbotron bg-variant="light" id='my-project-jumbotron-for-css'>
        <template v-slot:header>{{project.title}}</template>
        <template v-slot:lead>{{project.content}}</template>
        <hr class="my-4">
        <div class="row">
          <div class="col-md-6">
            <label>Frameworks Used:</label>
            <b-list-group :key="frameWork" v-for="frameWork in project.frameworks_used">
              <b-list-group-item href='#'>{{frameWork}}</b-list-group-item>
            </b-list-group>
          </div>
          <div class="col-md-6">
            <label>Technologies Used(Tech-Stack):</label>
            <b-list-group :key="techstack" v-for="techstack in project.tech_stack">
              <b-list-group-item href='#'>{{techstack}}</b-list-group-item>
            </b-list-group>
          </div>
        </div>
        <hr class="my-4">
        <b-link v-if="project.github_link!=null" :href="project.github_link" target="_blank">
          <b-img id="icon_iamge" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" rounded="circle" alt="Github"/>
          View this project on github
        </b-link>
        <hr class="my-4">
        <!-- <youtube-media :video-id="project.youtubeID" /> -->
        <video-embed :src="project.youtube_link" />
      </b-jumbotron>
    </div>
</b-container>
</template>


<script>
// Imports
export default {
    data () {
        return {
            id: this.$route.params.id,
            project: {}
        }
    },
    created() {
        this.$http.get('XXXXXXXXXXXXXXXXXXXXXXXXXXXX' + this.id + '.json').then(function(data){
            return data.json();
        }).then(function(data){
            this.project = data;
        });
    }
}
</script>

<style>
#my-project-jumbotron-for-css{
  cursor: default;
  transition: 2s;
}
#my-project-jumbotron-for-css:hover{
  box-shadow: 0 64px 128px 0 rgba(0,0,0,0.2);
  transition: box-shadow 0.5s;
}
#icon_iamge{
  height:auto;
  width:50px;
  transition: height 1s, width 1;
}
</style>
