<template>
  <div class="body">
    <section id="main-body">
      <div class="container">
        <!-- <h1>{{ user.username }}</h1>
    <h1>{{ user.email }}</h1>
    <h1>{{ user.password }}</h1>
    <h1>{{ $store.state.user.token }}</h1> -->

        <!-- <br /> -->
        <form action="" class="needs-validation text-left" novalidate>
          <div class="form-group row">
            <label for="inputEmail" class="col-md-3 col-form-label">Email</label>
            <input type="email" class="form-control" v-model="email" />
          </div>

          <div class="form-group row">
            <label for="inputEmail" class="col-md-3 col-form-label">Password</label>
            <input type="password" class="form-control" v-model="password" />
          </div>
          <div class="form-group gap-10px">
            <button class="btn btn-primary" @click="submit">button</button>
            <button class="btn btn-danger" @click="logoutUser">Logout</button>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      username: "",
      email: "",
      password: "",
      user: {
        email: localStorage.getItem("email"),
        token: localStorage.getItem("token"),
        username: "",
      },
    };
  },
  created() {
    console.log(this.user.email);
    this.checkUser();
  },
  mounted() {},

  methods: {
    logoutUser() {
      localStorage.removeItem("email");
      localStorage.removeItem("token");
      localStorage.removeItem("login");
    },
    checkUser() {
      console.log(this.user.email);
      this.$request
        .post("http://localhost:8000/api/client", {
          email: this.user.email,

          // password: this.password,
        })
        .then((res) => {
          // console.log(res);

          if (!res.data.success) {
            console.log(res.data.success);
            console.log(res.status);
          }

          if (res.data.success) {
            // console.log(res.data.token);
            console.log(res.data.user.login);
            // localStorage.setItem("token", res.data.user.token);
            localStorage.setItem("login", "online");
            this.user.username = res.data.user.username;
            this.user.password = res.data.user.password;

            // this.user.name = res.data.user.name;
            // console.log(this.user.name);
            // this.user.token = localStorage.getItem("token");
            // this.user.name = res.data.user.name;
            // console.log(token);
            // this.$router.push("/products");
          }
        });
    },

    submit() {
      //       const axios = require("axios").default;

      //       const self = this;
      //       axios
      console.log(this);
      this.$request
        .post("http://localhost:8000/api/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          // console.log(res);

          if (!res.data.success) {
            console.log(res.data.success);
            console.log(res.status);
          }

          if (res.data.success) {
            console.log(res.data.login);
            console.log(res.data.token);
            console.log(res.data.user.email);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("email", res.data.user.email);
            localStorage.setItem("login", "online");
            this.user.name = res.data.user.name;
            console.log(this.user.name);
            this.user.token = localStorage.getItem("token");
            // this.$router.push({ name: "users.list" });
            window.location.href = "/admin/users";

            // this.user.name = res.data.user.name;
            // console.log(token);
            // this.$router.push("/products");
          }
        });
    },
  },
};
</script>
<style>
.gap-10px {
  gap: 10px;
}
</style>
