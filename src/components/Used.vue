<template>
  <div>
    <b-jumbotron id="used-framework-1" lead="These are some of the frameworks that we have used for our work">
      <b-row class="mb-3">
        <b-col>
          <!-- <b-link href="https://tensorflow.org/"> -->
          <b-img v-b-toggle.collapse-1 id="logo_images" v-b-popover.hover.title.top="'Tensorflow'" src="https://www.gstatic.com/devrel-devsite/prod/v7edd884088d642c108fc8ea1bd75617f2dc0af2fd196f78fa8668ffffb81a7bc/tensorflow/images/lockup.svg" alt="Tensorflow"></b-img>
          <b-collapse id="collapse-1" class="mt-2" accordion="used-frameworks-one-at-a-time" role="tabpanel">
            <b-card>
              <b-link href="https://github.com/tensorflow/tensorflow" target="_blank">
                <b-img id="icon_iamge" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" rounded="circle" alt="Github"/>
                Visit Github
              </b-link>
              <br />
              <b-link href="https://tensorflow.org" target="_blank">
                <b-img id="icon_iamge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Tensorflow_logo.svg/1200px-Tensorflow_logo.svg.png" alt="Tensorflow" rounded="circle"/>
                Official Documentation
              </b-link>
            </b-card>
          </b-collapse>
          <!-- </b-link> -->
        </b-col>
        <b-col>
          <b-img v-b-toggle.collapse-2 id="logo_images" v-b-popover.hover.top="'Scikit-learn'" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/1200px-Scikit_learn_logo_small.svg.png" alt="Scikit-learn"></b-img>
          <b-collapse id="collapse-2" class="mt-2" accordion="used-frameworks-one-at-a-time" role="tabpanel">
            <b-card>
              <b-link href="https://github.com/scikit-learn/scikit-learn" target="_blank">
                <b-img id="icon_iamge" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" rounded="circle" alt="Github"/>
                Visit Github
              </b-link>
              <br />
              <b-link href="https://scikit-learn.org/" target="_blank">
                <b-img id="icon_iamge" src="https://www.python.org/static/opengraph-icon-200x200.png" alt="Tensorflow" rounded="circle"/>
                Official Documentation
              </b-link>
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
      <b-row class="mb-5" />
      <b-row class="mb-3">
        <b-col>
          <b-img v-b-toggle.collapse-3 id="logo_images" v-b-popover.hover.title="'PyTorch'" src="https://pytorch.org/assets/images/pytorch-logo.png" alt="PyTorch"></b-img>
          <b-collapse id="collapse-3" class="mt-2" accordion="used-frameworks-one-at-a-time" role="tabpanel">
            <b-card>
              <b-link href="https://github.com/pytorch/pytorch" target="_blank">
                <b-img id="icon_iamge" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" rounded="circle" alt="Github"/>
                Visit Github
              </b-link>
              <br />
              <b-link href="https://pytorch.org/" target="_blank">
                <b-img id="icon_iamge" src="https://pytorch.org/assets/images/pytorch-logo.png" alt="Tensorflow" rounded="circle"/>
                Official Documentation
              </b-link>
            </b-card>
          </b-collapse>
        </b-col>
        <b-col>
          <b-img v-b-toggle.collapse-4 id="logo_images" v-b-popover.hover.title="'Keras'" src="https://s3.amazonaws.com/keras.io/img/keras-logo-2018-large-1200.png" alt="Keras"></b-img>
          <b-collapse id="collapse-4" class="mt-2" accordion="used-frameworks-one-at-a-time" role="tabpanel">
            <b-card>
              <b-link href="https://github.com/keras-team/keras" target="_blank">
                <b-img id="icon_iamge" src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" rounded="circle" alt="Github"/>
                Visit Github
              </b-link>
              <br />
              <b-link href="https://keras.io/" target="_blank">
              <b-img id="icon_iamge" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Keras_logo.svg/1200px-Keras_logo.svg.png" alt="Tensorflow" rounded="circle"/>
              Official Documentation
              </b-link>
            </b-card>
          </b-collapse>
        </b-col>
      </b-row>
    </b-jumbotron>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
    };
  }
};
</script>
<style scoped>
#icon_iamge{
  height:20px;
  width:20px;
}
#logo_images{
  height: 50px;
  width: auto;
  transition: height 1s;
}
#logo_images:hover {
  height: 55px;
  transition: height 1s;
}
#used-framework-1{
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.9) 0%,rgba(255,255,255,0.4) 100%), url('https://wallpapercave.com/wp/wp3205204.jpg');
  background-size: cover;
  transition :1s;
}
#used-framework-1:hover{
  background-image: linear-gradient(to bottom, rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%), url('https://wallpapercave.com/wp/wp3205204.jpg');
  box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
  transition: box-shadow 1s ;
}
</style>
