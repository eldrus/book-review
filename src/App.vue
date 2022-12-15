<!-- <template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
</template> -->


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  
}

nav {
  padding: 30px;
  padding-left: 5%;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">Book List</router-link> |
    <router-link to="/create">Book create</router-link>
  </nav>

  <div class="container">
    <router-view />
  </div>
</template>