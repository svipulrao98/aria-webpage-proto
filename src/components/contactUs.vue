<template>
  <b-container fluid class="text-center">
    <div>
      <b-jumbotron id="contact-us-jumbotron" header="Connect with us!" class="text-dark">
        <hr class="my-4">
        <div class="span-6" style="float: none; margin: 0 auto;">
          <b-link href="mailto:aria.intelligent@gmail.com" target="_blank"><h5>Email</h5></b-link>
        </div>
        <hr class="my-4">
        <div class="span-6" style="float: none; margin: 0 auto;">
          <b-link href=" https://api.whatsapp.com/send?phone=+919309901731" target="_blank"><h5>Whatsapp</h5></b-link>
        </div>
        <hr class="my-4">
        <div class="span-6" style="float: none; margin: 0 auto;">
          <b-link href="https://t.me/joinchat/AAAAAFZkOWiK-uSuKrqjkg" target="_blank"><h5>Telegram Channel</h5></b-link>
        </div>
        <hr class="my-4">
        <div class="span-6" style="float: none; margin: 0 auto;">
          <b-link href="https://www.linkedin.com/company/aria-ai/" target="_blank"><h5>Linked IN</h5></b-link>
        </div>
        <hr class="my-4">
        <div class="span-6" style="float: none; margin: 0 auto;">
          <b-link href="#" target="_blank"><h5>Facebook[coming soon]</h5></b-link>
        </div>
      </b-jumbotron>
    </div>
  </b-container>
</template>
<script>
export default {
  components: {
  }
}

</script>
<style scoped>
#contact-us-jumbotron{
  background-image: linear-gradient(to bottom, rgba(255,255,255,0.6) 0%,rgba(255,255,255,0.6) 100%), url('https://previews.123rf.com/images/olegdudko/olegdudko1803/olegdudko180302178/96906673-red-telephone-receiver-on-yellow-background.jpg');
  background-size: cover;
  transition :1s;
  cursor: default;
}
#contact-us-jumbotron:hover{
  box-shadow: 0 64px 128px 0 rgba(0,0,0,0.2);
  transition :0.5s;
}
</style>
