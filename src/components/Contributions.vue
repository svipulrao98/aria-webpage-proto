<template>
  <div>
    <b-jumbotron id="contributed-framework-1" lead="These are some of our contributions">
      <div id="cards-scroll-menu" v-if="projects.length">
        <h2 v-for="(project, index) in projects" :key="project">
          <b-button block id="contris" class="badge badge-danger" v-b-toggle="'contributed-side-card-'+index+1">{{project.title}}</b-button>
            <b-sidebar :id="'contributed-side-card-'+index+1" bg-variant="light" t :title="project.title" backprop shadow="lg">
              <template v-slot:footer="{ show }">
                <b-button block size="lg" @click="show=false" variant="danger">Close</b-button>
              </template>
              <b-card>
                <b-container>
                  <p class="project-content">{{project.content}}</p>
                  <b-link :href="project.youtube_link" target="_blank" v-if="project.youtube_link!=null">
                    <b-img id="icon_iamge" src="https://cdn.iconscout.com/icon/free/png-256/youtube-85-226402.png" alt="Youtube"/>
                  </b-link>
                  <b-link :href="project.github_link" target="_blank" v-if="project.github_link!=null">
                    <b-img id="icon_iamge" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" rounded="circle" alt="Github"/>
                  </b-link>
                </b-container>
              </b-card>
            </b-sidebar>
        </h2>
      </div>
      <div v-else>
        <h3 v-if="loading_message"><b-spinner variant="primary" type="grow" label="Spinning"></b-spinner>Loading...</h3>
        <h3 v-else>No contributions yet</h3>
      </div>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      show: false,
      projects: [],
      loading_message: true
    };
  },
  created() {
    this.$http.get('XXXXXXXXXXXXXXXXXXXXXXXXX').then(function(data){
      return data.json()
    }).then(function(data){
      var projectsArray = [];
      for (let key in data){
        data[key].id = key;
        projectsArray.push(data[key]);
      }
        this.projects = projectsArray;
        console.log(this.projects);
    });
  },
  methods:{
    timeOutFunc: function(){
      var v=this;
      setTimeout(function () {
        v.loading_message=false;
      }, 5000);
    }
  },
  mounted(){
    this.timeOutFunc()
  }
};
</script>
<style scoped>
.project-content{
  font-size: 50%;
}
#contris{
  width: 320px;
}
#icon_iamge{
  height:auto;
  width:35px;
  transition: height 1s, width 1s;
}
#icon_iamge:hover{
  height:auto;
  width:50px;
  transition: height 1s, width 1s;
}
#contributed-framework-1{
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.4) 100%), url('https://i.pinimg.com/originals/eb/60/82/eb60823cf0dd7c2a92edee36ed2a3fe6.jpg');
  background-size: cover;
  transition :1s;
  cursor: default;
}
#contributed-framework-1:hover{
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.8) 0%,rgba(255,255,255,0.2) 100%), url('https://i.pinimg.com/originals/eb/60/82/eb60823cf0dd7c2a92edee36ed2a3fe6.jpg');
  box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
  transition: box-shadow 1s;
}
#cards-scroll-menu{
  height: 210px;
  overflow-y: scroll;
  transition: 1s;
}
#cards-scroll-menu:hover{
  box-shadow: 0 128px 256px 0 rgba(0,0,0,0.2);
  transition: 0.5s;
}
</style>
