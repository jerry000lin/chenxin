<template>
  <div id="app">
    <div class="head">
      <router-link class="title" tag="div" to="/">
        chenxin
      </router-link>
    </div>
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="less">
body,
html,
#app {
  height: 100%;
  .head {
    height: 60px;
    line-height: 60px;
    background: linear-gradient(to top, #e4e4e4 0, #fff 50%);
    border-bottom: 1px solid #fff;
    border-top: 1px solid #fff;
    .title {
      font-weight: 600;
      font-size: 24px;
      margin-left: 2%;
      margin-right: 2%;
      color: #c60;
      cursor: pointer;
    }
  }
  .main {
    position: absolute;
    top: 60px;
    bottom: 0;
    width: 100%;
  }
}
</style>
