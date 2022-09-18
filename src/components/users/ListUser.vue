<template>
  <div class="body">
    <section id="main-body">
      <div class="pricing-header px-3 py-3 pt-md-5 pd-md-4 mx-auto text-center">
        <h2 class="display-4">Users Management</h2>
        <p><router-link to="/admin/users/create">Add New</router-link></p>
      </div>
      <div class="container">
        <div class="card-deck mb-3 text-center scroll-x">
          <table class="table table-primary table-bdrs-5px">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">User Name</th>
                <th scope="col" @click="changeCurrentDir()">Email</th>
                <th scope="col">Time</th>
                <th scope="col">Action</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <td scope="row">{{ index }}</td>
                <td>{{ user.username }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.password }}</td>
                <td class="gap-10px">
                  <router-link :to="{ name: 'users.edit', params: { id: user.id } }">
                    <b-button variant="primary">
                      <i class="fa fa-edit"></i>
                    </b-button>
                  </router-link>
                  <b-button variant="danger" @click="onDelete(user.id)">
                    <i class="fa fa-trash"></i>
                  </b-button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  </div>
  <!-- <router-view/> -->
</template>
<script>
// import "@/assets/js/style.js";
// import HeaderTest from "@/components/incfiles/HeaderTest.vue";
export default {
  name: "ProductForm",
  components: {
    // HeaderTest,
  },
  data() {
    return {
      list: [],
      users: [],
      currentSort: "time",
      currentSortDir: 1,
    };
  },
  created() {
    this.getAll();
  },
  mounted() {
    // this.products = this.products.sort((a, b) => a.price - b.price)
  },
  methods: {
    getAll() {
      this.$request.get("http://localhost:8000/api/users").then((res) => {
        this.users = res.data;
        // sort price
        // this.products = this.products.sort((a, b) => a.price - b.price);
        // sort reverse
        this.users = this.users.reverse();
      });
    },
    onDelete(userId) {
      this.$swal
        .fire({
          title: "Delete?",
          text: "You won't be able to revert this!",
          icon: "question",
          type: "warning",
          showDenyButton: false,
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
          cancelButtonText: "No, cancel please!",
          timer: 5000,
          // closeOnConfirm: false,
          // closeOnCancel: false
        })
        .then((result) => {
          if (result.isConfirmed) {
            this.$request
              .delete(`http://localhost:8000/api/users/${userId}`)
              .then((res) => {
                if (res.data.success) {
                  this.$swal.fire("Đã Xóa", "", "success");
                  this.getAll();
                }
              });
          }
        });
    },
    sort: function (s) {
      // if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === "asc" ? "desc" : "asc";
      }
      this.currentSort = s;
    },
    changeCurrentDir() {
      this.currentSortDir = -this.currentSortDir;
    },
    // setTimeout(changeCurrentDir, 1000)
  },
  watch: {
    currentSortDir(value) {
      console.log(this.users);
      this.users.sort((a, b) => this.currentSortDir);
    },
  },
  computed: {},
  // components: { HeaderApp },
};
</script>
<style>
table {
  border-radius: 6px;
}
table td,
table th {
  border: 1px solid #f5f5f5;
}
table th {
  background: var(--primary) !important;
  color: var(--white);
}
</style>
