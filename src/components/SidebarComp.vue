<template>
  <div class="all-sidebar">
    <ul>
      <li class="text1">Data</li>
      <li class="text">Transportasi</li>
      <li>
        <router-link class="a" to="/"
          ><i class="fa-solid fa-motorcycle"></i>Motor</router-link
        >
      </li>
      <li>
        <router-link class="a" to="/mobil"
          ><i class="fa-solid fa-car"></i>Mobil</router-link
        >
      </li>
      <li>
        <router-link class="a" to="/bus"
          ><i class="fa-solid fa-bus"></i>Bus</router-link
        >
      </li>
      <li>
        <router-link class="a" to="/kapal"
          ><i class="fa-solid fa-ship"></i>Kapal</router-link
        >
      </li>
      <li>
        <router-link class="a" to="/pesawat"
          ><i class="fa-solid fa-plane"></i>Pesawat</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideComp",
};
</script>

<style scoped>
.all-sidebar {
  background-color: #dddddd;
  height: 100vh;
  width: 200px;
  padding: 2px;
}
ul {
  padding: 0px;
  margin-top: 30px;
  list-style: none;
}
.text1 {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: -35px;
  color: black;
  padding: 10px;
}
.text {
  text-align: center;
  font-weight: bold;
  font-size: 30px;
  margin-top: 10px;
  margin-bottom: 30px;
  color: black;
  padding: 10px;
}
li a {
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  padding: 5px 5px;
  display: block;
  padding-left: 50px;
  line-height: 3;
}

li .a:hover {
  background-color: black;
  color: white;
}
i {
  padding-right: 5px;
}
img {
  width: 150px;
  height: 200px;
}
</style>
