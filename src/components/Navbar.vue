<template>
    <div>
      <b-navbar  toggleable="lg" type="dark" variant="info">
        <b-container>
          <b-navbar-brand href="#">
            <img src="../assets/aria_logo.jpeg" alt="arai.ai" class="d-inline-block align-top" id="logo" />
          </b-navbar-brand>
          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
              <b-button href="/" v-smoothscroll pill size="md" class="my-2 my-sm-0" type="submit" variant="info">Home</b-button>
              <b-button href="#projects" v-smoothscroll pill size="md" class="my-2 my-sm-0" type="submit" variant="info">Our Projects</b-button>
              <b-button href="#expertise" v-smoothscroll pill size="md" class="my-2 my-sm-0" type="submit" variant="info">Expertise</b-button>
              <b-button href="#frameworks" v-smoothscroll pill size="md" class="my-2 my-sm-0" type="submit" variant="info">Frameworks</b-button>
              <b-button href="#contactus" v-smooth-scroll pill size="md" class="my-2 my-sm-0" type="submit" variant="info">Contact us</b-button>
            </b-navbar-nav>
          </b-collapse>
        </b-container>
      </b-navbar>
    </div>
</template>
<script>
export default {
  data() {
      return {
      };
  },
  methods: {
  }
}
</script>

<style scoped>
#logo{
  height:40px;
  width:80px;
  opacity: 0.5;
  transition: opacity 1s, width 1s, height 1s;
}
#logo:hover {
  box-shadow: 0 0 20px 10px rgba(0, 140, 186, 0.5);
  height:80px;
  width:160px;
  opacity: 1;
  transition: opacity 1s, width 1s, height 1s, box-shadow 2s;
}
.b-navbar{
  position: sticky;
}
.stuck .sticky-top{
    background-color: #222;
    padding-top: 3px;
    padding-bottom: 3px;
}
</style>
