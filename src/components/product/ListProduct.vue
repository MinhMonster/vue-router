<template>
  <div id="product">
    <div class="pricing-header px-3 py-3 pt-md-5 pd-md-4 mx-auto text-center">
      <h2 class="display-4">Product Management</h2>
      <p><router-link to="/add-product">Add New</router-link></p>
    </div>
      <div class="container">
      <div class="card-deck mb-3 text-center">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col" >Product name</th>
              <th scope="col" @click="changeCurrentDir()">Price</th>
              <th scope="col">Time</th>
            </tr>
          </thead>

          <tbody >
            <tr v-for="(product, index) in products" :key="index">
              <td scope="row">{{index}}</td>
              <td>{{product.name}}</td>
              <td>{{product.price}}</td>
              <td>{{product.time}}</td>
              <td>
                <b-button variant="primary">Edit</b-button>
                <b-button variant="danger" @click="onDelete(product.id)">Delete</b-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <!-- <router-view/> -->
</template>
<script>
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'ProductForm',
  data () {
    return {
      list: [],
      products: [],
      currentSort: 'time',
      currentSortDir: 1
    }
  },
  created () {
    this.getAll()
  },
  mounted () {
    // this.products = this.products.sort((a, b) => a.price - b.price)
  },
  methods: {
    getAll () {
      this.$request.get('http://localhost:8000/api/products').then(res => {
        // sort price down
        // this.products = this.products.sort((a, b) => a.price - b.price)
        this.products = res.data
        // sort reverse
        this.products = this.products.reverse()
      })
    },
    onDelete (productId) {
      this.$swal.fire({
        title: 'Delete?',
        text: "You won't be able to revert this!",
        icon: 'question',
        type: 'warning',
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, cancel please!',
        timer: 5000
        // closeOnConfirm: false,
        // closeOnCancel: false
      }).then((result) => {
        if (result.isConfirmed) {
          this.$request.delete(`http://localhost:8000/api/products/${productId}`).then(res => {
            if (res.data.success) {
              this.$swal.fire('Đã Xóa', '', 'success', '#3085d6')
              this.getAll()
            }
          })
        }
      })
    },
    sort: function (s) {
    // if s == current sort, reverse
      if (s === this.currentSort) {
        this.currentSortDir = this.currentSortDir === 'asc' ? 'desc' : 'asc'
      }
      this.currentSort = s
    },
    changeCurrentDir () {
      this.currentSortDir = -(this.currentSortDir)
    }
    // setTimeout(changeCurrentDir, 1000)
  },
  watch: {
    currentSortDir (value) {
      console.log(this.products)
      this.products.sort((a, b) => this.currentSortDir)
    }
  },
  computed: {
  }
}
</script>
<style>

</style>
