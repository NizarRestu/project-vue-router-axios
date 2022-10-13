<template>
  <div class="all">
    <div class="all-base">
      <div>
        <SidebarComp />
      </div>
      <div class="router">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import SidebarComp from "./components/SidebarComp.vue";

export default {
  name: "App",
  components: {
    // NavbarComp,
    SidebarComp,
  },
};
</script>

<style scoped>
.all-base {
  display: flex;
}
.all-base {
  max-height: 100vh;
}
.router {
  margin: auto;
  max-height: 100vh;
  overflow: scroll;
  padding-top: 30px;
  scroll-behavior: smooth;
}
h1 {
  text-align: center;
}
</style>
