<template>
  <div>
    <pageIntro />
    <Projects id="projects"/>
    <Expertise id="expertise" />
    <frameWorks id="frameworks"/>
    <contactUs id="contactus" />
  </div>
</template>
<script>
  import Projects from './Projects.vue';
  import frameWorks from './FrameWorks.vue';
  import Expertise from './Expertise.vue';
  import pageIntro from './pageIntro.vue';
  import contactUs from './contactUs.vue';
  export default {
    components: {
      frameWorks,
      Projects,
      Expertise,
      pageIntro,
      contactUs
    }
  }
</script>
