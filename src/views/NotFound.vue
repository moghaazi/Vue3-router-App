<!-- =========================== Template ===================================== -->
<template>
  <div class="not-found">
    <div class="error-page"></div>
    <div class="title">Error<span>404</span></div>
  </div>
</template>

<!-- =========================== Script ===================================== -->
<script>
export default {}
</script>

<!-- =========================== Style ===================================== -->
<style lang="scss" scoped>
// Font ------------------------------------------------------------
@import url('https://fonts.googleapis.com/css2?family=Dosis:wght@700;800&display=swap');

.not-found {
  // Image ------------------------------------------------------------
  .error-page {
    // Background
    height: 100vh;
    width: 100vh;
    background: linear-gradient(#c00a747a, #000000),
      url(https://i.gifer.com/Pybu.gif);
    background-position: center;
    background-size: cover;
    // Positions
    display: flex;
    justify-content: center;
    align-items: flex-end;

    // Title =====================
    .title {
      // Error
      color: #ffffff;
      font: 12em 'Dosis', sans-serif;

      // 404
      span {
        color: #d81b89;
        margin-left: 20px;
        font-size: 17rem;
      }
    }
  }
}
</style>
