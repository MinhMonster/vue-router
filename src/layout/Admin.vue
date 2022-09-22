<template>
  <div id="admin">
    <!-- <h1>{{ $store.state.count }}</h1> -->
    <!-- <client-app></client-app> -->
    <header-app></header-app>
    <menu-app></menu-app>

    <router-view />
    <!-- <FooterApp /> -->
  </div>
</template>
<script>
// import MenuLeft from "@/components/incfiles/MenuLeft.vue";
// import FooterApp from "@/components/incfiles/FooterApp.vue";
// import "./assets/js/style.js";
// import ClientApp from "@/components/incfiles/ClientApp.vue";
import HeaderApp from "@/components/incfiles/HeaderApp.vue";
import MenuApp from "@/components/incfiles/MenuApp.vue";

export default {
  // name: "App",
  components: {
    headerApp: HeaderApp,
    menuApp: MenuApp,
    // clientApp: ClientApp,
  },
  methods: {
    toggle() {
      document.getElementsByClassName("sold").classList.toggle("hide");
    },
    // checklogin() {
    //   if (localStorage.getItem("login") === "offline") {
    //     console.log(localStorage.getItem("login"));
    //     return (window.location.href = "/admin/login");
    //   }
    // },
  },
  computed: {},
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app a {
  text-decoration: none;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
