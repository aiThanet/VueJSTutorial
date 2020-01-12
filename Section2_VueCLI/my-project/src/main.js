import Vue from "vue";
import App from "./App.vue";

//create global filter
Vue.filter("snippet", val => {
  if (!val || typeof val != "string") return "";
  return val.slice(0,50)
});

new Vue({
  el: "#app",
  render: h => h(App)
});
