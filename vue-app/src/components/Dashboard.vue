<template>
  <div class="dashboard">
    <DashHeader />
    <div class="dashboard__droplets">
      <DataCircle
        :percentage="75"
        variation="medium"
        color="#40d398"
        primary="90"
        :max="120"
        secondary="KM/H"
        iconName="tachometer-alt"
      />
      <DataCircle variation="small" primary="13" iconName="cloud" />
      <DataCircle
        :percentage="25"
        variation="large"
        color="#FFFFFF"
        primary="10"
        :max="20"
        secondary="REMAINING"
        iconName="stopwatch"
      />
      <DataCircle
        variation="small"
        primary="24"
        iconName="thermometer-quarter"
      />
      <DataCircle
        :percentage="25"
        variation="medium"
        color="#ee9f63"
        primary="104"
        :max="110"
        secondary="KWH"
        iconName="bolt"
      />
    </div>
    <div @click="toggleFullscreen()" class="toggle-fullscreen center-all">
      <FontAwesomeIcon icon="expand" size="sm" />
    </div>
  </div>
</template>

<script>
import DataCircle from "./DataCircle";
import DashHeader from "./DashHeader";
//import DashAudioPlayer from "./DashAudioPlayer";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { faExpand } from "@fortawesome/free-solid-svg-icons";
library.add(faExpand);

export default {
  name: "Dashboard",
  components: {
    DataCircle,
    DashHeader,
    FontAwesomeIcon
    //DashAudioPlayer
  },
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

<style lang="scss" scoped>
.dashboard {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &__droplets {
    max-width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding-bottom: 100px;

    div:nth-child(2n) {
      transform: translate(0, 140px);
    }
  }
}

.toggle-fullscreen {
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba($color: #fff, $alpha: 0.1);
  color: #fff;
  bottom: 80px;
  left: 50%;
  transform: translate(-50%, 50%);
}

.center-all {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
