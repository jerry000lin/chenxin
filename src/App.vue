<template>
  <div id="app">
    <div class="head">
      <div class="title">
        chenxin
      </div>
    </div>
    <div class="main">
      <upload-view></upload-view>
    </div>
  </div>
</template>

<script>
import uploadView from "./uploadView";

export default {
  name: "app",
  components: {
    uploadView
  }
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
