// import { createRouter, createWebHistory, RouterLink } from "vue-router";
import MotorVue from "../view/Motor.vue";
import MobilVue from "../view/Mobil.vue";
import BusVue from "../view/Bus.vue";
import KapalVue from "../view/Kapal.vue";
import ProdukVue from "../view/Pesawat.vue";


import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)
const routes = [
  {
    path: "/",
    name: "home",
    component: MotorVue,
  },
  {
    path: "/mobil",
    name: "about",
    component: MobilVue,
  },
  {
    path: "/bus",
    name: "contact",
    component: BusVue,
  },
  {
    path: "/kapal",
    name: "detail",
    component: KapalVue,
  },
  {
    path: "/pesawat",
    name: "produk",
    component: ProdukVue,
  },
];
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });


const router =new Router({
  routes,
  mode: "history",
});

export default router;
