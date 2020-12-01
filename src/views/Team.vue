<!-- =========================== Template ===================================== -->
<template>
  <h1>Team</h1>
  <div class="teams">
    <img src="https://picsum.photos/id/50/300/300" />
    <img src="https://picsum.photos/id/60/300/300" />
    <img src="https://picsum.photos/id/70/300/300" />
    <router-link to="/"> <h1>Home</h1> </router-link>
  </div>
</template>

<!-- =========================== Script ===================================== -->
<script>
export default {}
</script>

<!-- =========================== Style ===================================== -->
<style lang="scss" scoped>
h1 {
  color: #f7ec8b;
  font-size: 4rem;
  margin: 10rem;
}

.teams {
  img {
    margin: 2rem;
    border-radius: 2px;
    transition: 0.2s;

    &:hover {
      transform: scale(1.1) rotate(1deg);
      z-index: 999;
    }
  }
}
</style>
