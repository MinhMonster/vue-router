<template>
  <div class="add-product">
    <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
      <h3 class="display-5">Product Information</h3>
      <router-link to="/product">Back</router-link>
    </div>
    <div class="container">
      <form action="" @submit.prevent="save()" class="needs-validation text-left" novalidate>
        <div class="form-group row">
          <label for="inputName" class="col-md-3 col-form-label">Product Name</label>
          <div class="col-md-9">
            <input type="text" class="form-control"  v-model="product.name" @blur="validate()" v-bind:class="{'is-invalid': errors.name}" required>
          </div>
          <div class="feedback-invalid" v-if="errors.name">{{ errors.name }}</div>
        </div>
        <div class="form-group row">
          <label for="inputPrice" class="col-md-3 col-form-label">Product Price</label>
          <div class="col-md-9">
            <input type="text" class="form-control" v-model="product.price" @blur="validate()" v-bind:class="{'is-invalid': errors.price}" required>
          </div>
          <div class="feedback-invalid" v-if="errors.price">{{ errors.price }}</div>
        </div>
        <div class="form-group row">
          <label for="inputDescription" class="col-md-3 col-form-label">Product Description</label>
          <div class="col-md-9">
            <textarea type="text" class="form-control"  v-model="product.description" @blur="validate()" v-bind:class="{'is-invalid': errors.description}" required></textarea>
          </div>
          <div class="feedback-invalid" v-if="errors.description">{{ errors.description }}</div>
        </div>
        <div class="form-group row">
          <label for="inputDescription" class="col-md-3 col-form-label"></label>
          <div class="col-md-9">
            <div class="left group-btn">
              <b-button type="submit" variant="primary " >Save</b-button>
              <b-button variant="danger mgl-10px">Cancel</b-button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ProductDta',
  data () {
    return {
      errors: {
        name: 'loi name'
      },
      product: [
        { id: 1, name: 'name 1', price: 1200, description: 'abc' },
        { id: 2, name: 'name 2', price: 1300, description: 'cba' }
      ]
    }
  },
  methods: {
    validate () {
      let isValid = true
      this.errors = {
        name: '',
        price: '',
        description: ''
      }
      if (!this.product.name) {
        this.errors.name = 'Loi name'
        isValid = false
      }
      if (!this.product.price) {
        this.errors.price = 'Error price'
        isValid = false
      } else if (!this.isNumber(this.product.price)) {
        this.errors.price = 'price is Number'
        isValid = false
      }
      if (!this.product.description) {
        this.errors.description = 'Loi description'
        isValid = false
      }
      return isValid
    },
    isNumber (value) {
      return /^\d*$/.test(value)
    },
    save () {
      console.log(this.validate())
    }
  }
}
</script>
