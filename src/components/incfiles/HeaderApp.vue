<template>
  <div id="nav" :class="{ active: isOn, on: isOn, off: isOff }">
    <section id="header-mobile">
      <header>
        <div class="logo-header">
          <img src="/images/logo.png" alt="" />
        </div>

        <div class="form-search flex-row-space-between hidden">
          <div class="flex-row-space-between rel">
            <i class="icon-search fa fa-search abs"></i>
            <input type="text" class="input-search" placeholder="Search" />
          </div>
          <a class="icon default" href="#">
            <img src="/images/User.png" alt="" />
          </a>
        </div>
        <client-app></client-app>
        <button class="menu-toggle hidden" @click="(isOn = !isOn), (isOff = !isOff)">
          <i class="fa fa-bars"></i>
        </button>
      </header>
    </section>
    <!-- <div
        class="d-flex flex-column flex-md-row justify-content-between align-items-center shadow p-3 px-md-4 mb-3 bg-white"
      >
        <h5 class="my-0 mr-md-auto font-weight-normal">
          <router-link to="/" class="p-2 text-dark">Project 01</router-link>
        </h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <router-link to="/product" class="p-2 text-dark"
            >Produck management</router-link
          >
          <a href="#" class="p-2 text-dark">User management</a>
          <a href="" class="btn btn-outline-primary" routerlink="cart">Administrator</a>
        </nav>
      </div> -->
  </div>
</template>

<script>
import ClientApp from "@/components/incfiles/ClientApp.vue";

export default {
  components: {
    clientApp: ClientApp,
  },
  data() {
    return {
      isOn: false,
      isOff: true,
      // id: "",
      // username: "",
      // email: "",
      // password: "",
      // client: {
      //   email: $store.state.user.email,
      //   token: localStorage.getItem("token"),
      //   username: "",
      // },
    };
  },
  created() {
    // console.log(this.user.email);
    // this.test();
    // this.checkUser();
  },
  mounted() {
    window.addEventListener("resize", this.getWindowWidth);
    this.windowWidth = document.documentElement.clientWidth;

    if (this.windowWidth >= 576) {
      this.isOn = true;
      this.isOff = false;
    } else {
      this.isOn = false;
      // this.isOff = true;
    }
  },
  methods: {
    // checkUser() {
    //   console.log(this.user.email);
    //   this.$request
    //     .post("http://localhost:8000/api/client", {
    //       email: this.client.email,

    //       // password: this.password,
    //     })
    //     .then((res) => {
    //       // console.log(res);

    //       if (!res.data.success) {
    //         console.log(res.data.success);
    //         console.log(res.status);
    //       }

    //       if (res.data.success) {
    //         // console.log(res.data.token);
    //         console.log(res.data.user.login);
    //         // localStorage.setItem("token", res.data.user.token);
    //         localStorage.setItem("login", "online");
    //         this.user.username = res.data.user.username;
    //         this.user.password = res.data.user.password;

    //         // this.user.name = res.data.user.name;
    //         // console.log(this.user.name);
    //         // this.user.token = localStorage.getItem("token");
    //         // this.user.name = res.data.user.name;
    //         // console.log(token);
    //         // this.$router.push("/products");
    //       }
    //     });
    // },
    getWindowWidth(event) {
      this.windowWidth = document.documentElement.clientWidth;
      if (this.windowWidth >= 576) {
        this.isOn = true;
        this.isOff = false;
      } else {
        this.isOn = false;
        // this.isOff = true;
      }
    },
  },
};
</script>

<style></style>
