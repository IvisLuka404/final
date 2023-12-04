import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createWebHistory, createRouter } from "vue-router";

import inicio from "./components/inicio.vue";
import HechizoInicio from "./components/HechizoInicio.vue";
import DetallePersonaje from "./components/DetallePersonaje.vue";

//definir rutas
const routes = [
  {
    path: "/",
    name: "inicio",
    component: inicio,
  },
  {
    path: "/personaje/:id",
    name: "Personaje",
    component: DetallePersonaje,
  },
  {
    path: "/hechizo",
    name: "Hechizo",
    component: HechizoInicio,
  },
  /*  {
    path: "/meal/:id",
    name: "Meals",
    component: MealsDetails,
  } */
  /* {
        path:"/categoryDetails", //title se pasa como parametro
        name:"Category",
        component:CategoryDetails
    },
    {
        path:"/mealsDetails",
        name:"Meals",
        component:MealsDetails
    }, */
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

createApp(App).use(router).mount("#app");
