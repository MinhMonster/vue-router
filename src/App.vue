<template>
  <div id="nav">
    <div class="d-flex flex-column flex-md-row justify-content-between align-items-center shadow  p-3 px-md-4 mb-3 bg-white">
      <h5 class="my-0 mr-md-auto font-weight-normal"> <router-link to="/" class="p-2 text-dark">Project 01</router-link></h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <router-link to="/product" class="p-2 text-dark">Produck management</router-link>
        <a href="#" class="p-2 text-dark">User management</a>
        <a href="" class="btn btn-outline-primary" routerlink="cart">Administrator</a>
      </nav>
    </div>
    <router-view/>
  </div>
</template>

<style>
#nav {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav a{
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
