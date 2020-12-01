<!-- =========================== Template ===================================== -->
<template>
  <nav class="container-fluid">
    <router-link to="/"> Home </router-link>
    <router-link :to="{ name: 'about' }"> About </router-link>
    <router-link :to="{ name: 'team' }"> Team </router-link>
    <router-view />
  </nav>
</template>

<!-- =========================== Script ===================================== -->
<script>
export default {}
</script>

<!-- =========================== Style ===================================== -->
<style lang="scss" scoped>
nav {
  a {
    all: unset;
    color: white;
    font: 2rem monospace;
    margin: 1rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: 2px;

    &:hover {
      text-decoration: underline;
    }
  }

  .router-link-exact-active {
    color: black;
    background-color: orange;
  }
}
</style>
