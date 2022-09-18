<template>
  <div class="body">
    <section id="main-body">
      <div class="add-product">
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h3 class="display-5">Users Information</h3>
          <router-link to="/users">Back</router-link>
        </div>
        <div class="container">
          <form
            action=""
            @submit.prevent="save()"
            class="needs-validation text-left"
            novalidate
          >
            <div class="form-group row">
              <label for="inputName" class="col-md-3 col-form-label">Username</label>
              <div class="col-md-9">
                <input
                  type="text"
                  class="form-control"
                  v-model="user.username"
                  @blur="validate()"
                  v-bind:class="{ 'is-invalid': errors.username }"
                  required
                />
                <div class="feedback-invalid" v-if="errors.username">
                  {{ errors.username }}
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputPrice" class="col-md-3 col-form-label">Email:</label>
              <div class="col-md-9">
                <input
                  type="email"
                  class="form-control"
                  v-model="user.email"
                  @blur="validate()"
                  v-bind:class="{ 'is-invalid': errors.email }"
                  required
                />
                <div class="feedback-invalid" v-if="errors.email">{{ errors.email }}</div>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputDescription" class="col-md-3 col-form-label"
                >Password</label
              >
              <div class="col-md-9">
                <input
                  type="password"
                  class="form-control"
                  v-model="user.password"
                  @blur="validate()"
                  v-bind:class="{ 'is-invalid': errors.password }"
                  required
                />
                <div class="feedback-invalid" v-if="errors.password">
                  {{ errors.password }}
                </div>
              </div>
            </div>
            <div class="form-group row">
              <label for="inputDescription" class="col-md-3 col-form-label"></label>
              <div class="col-md-9">
                <div class="left group-btn">
                  <b-button type="submit" variant="primary ">Save</b-button>
                  <b-button variant="danger mgl-10px" @click="reset()">Reset</b-button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  name: "ProductData",
  data() {
    return {
      errors: {
        name: "",
        username: "",
        password: "",
        email: "",
      },
      user: {
        id: "",
        name: "",
        username: "",
        password: "",
        email: "",
        time: "",
      },
    };
  },
  created() {
    const userId = this.$route.params.id;
    console.log(userId);
    if (userId) {
      this.getUsers(userId);
    }
  },
  methods: {
    validate() {
      let isValid = true;
      this.errors = {
        username: "",
      };
      if (!this.user.username) {
        this.errors.username = "Error username";
        isValid = false;
      }
      //       if (!this.product.price) {
      //         this.errors.price = "Error price";
      //         isValid = false;
      //       } else if (!this.isNumber(this.product.price)) {
      //         this.errors.price = "price is Number";
      //         isValid = false;
      //       }
      // if (!this.user.description) {
      //   this.errors.description = "Loi description";
      //   isValid = false;
      // }
      return isValid;
    },
    // isNumber(value) {
    //   return /^\d*$/.test(value);
    // },
    save() {
      if (this.validate()) {
        if (this.user.id) {
          this.$request
            .put(`http://localhost:8000/api/users/${this.user.id}`, this.user)
            .then((res) => {
              if (res.data.success) {
                this.$router.push({ name: "users.list" });
                return;
              }
              alert("Errors");
            });
          return;
        }
        // let max = 0
        // let newID = 0
        // // console.log(newID)
        // for (let i = 0; i < this.products.length; i++) {
        //   console.log(this.products.length)
        //   if (this.products[i].id > max) {
        //     max = this.products[i].id
        //   }
        //   // return this.product.id
        // }
        // newID = max + 1
        // this.product.id = newID
        // console.log(newID)
        this.user.time = new Date().toLocaleString();
        this.$request.post("http://localhost:8000/api/users", this.user).then((res) => {
          if (res.data.success) {
            this.$router.push({ name: "users.list" });
          } else if (!res.data.success) {
            alert("Đã Tồn Tại");
          }
        });
      }
    },
    getUsers(userId) {
      this.$request.get(`http://localhost:8000/api/users/${userId}`).then((res) => {
        this.user = res.data;
        // console.log(this.product)
      });
    },
    reset() {
      this.user.name = "";
      this.user.username = "";
      this.user.email = "";
      this.user.password = "";
    },
  },
};
</script>
<style>
.form-group {
  margin-bottom: 10px;
}
</style>
