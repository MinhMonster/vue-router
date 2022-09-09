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
              <th scope="col">Product name</th>
              <th scope="col">Price</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td></td>
              <td></td>
              <td></td>
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
}
</script>
<style>

</style>
