<template>
  <div class="nav-all">
    <div class="btn">
      <button v-on:click="seen = !seen">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>
    <div class="all" v-if="seen" id="hide">
      <ul>
        <li><router-link class="a" to="/">Motor</router-link></li>
        <li><router-link class="a" to="/mobil">Mobil</router-link></li>
        <li><router-link class="a" to="/bus">Bus</router-link></li>
        <li><router-link class="a" to="/kapal">Kapal</router-link></li>
        <li><router-link class="a" to="/pesawat">Pesawat</router-link></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavComp",
  data() {
    return {
      seen: true,
    };
  },
};
</script>
<style scoped>
.all {
  background-color: rgb(245, 244, 244);
  width: 200px;
  text-align: center;
}
ul {
  padding: 0px;
  margin-top: 30px;
}
li a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  padding: 14px 16px;
  display: block;
  text-align: center;
}

li .a:hover {
  background-color: #dddddd;
}
i {
  font-size: 32px;
  background-color: #dddddd;
}
button {
  border: none;
  background-color: #dddddd;
}
</style>
