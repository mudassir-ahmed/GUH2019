<template>
  <div id="app">
    <router-view></router-view>
    <!--<div @click="toggleFullscreen()">full</div>-->
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
  methods: {
    toggleFullscreen() {
      let elem = document.body;

      if (!document.fullscreenElement) {
        elem.requestFullscreen().catch(err => {
          alert(
            `Error attempting to enable full-screen mode: ${err.message} (${err.name})`
          );
        });
      } else {
        document.exitFullscreen();
      }
    }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  background-color: black;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  width: 100%;
  height: 100%;
}

* {
  box-sizing: border-box;
}
</style>
