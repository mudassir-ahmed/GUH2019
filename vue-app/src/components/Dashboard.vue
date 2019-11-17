<template>
  <div :class="`dashboard ${isTourActive ? 'dashboard--tour-active' : ''}`">
    <div class="video-tour">
      <video
        ref="video-el"
        class="video-tour__video-element"
        autoplay
        muted
        loop
        playsinline
      >
        <source :src="require('@/assets/video/video.mp4')" />
      </video>
    </div>
    <DashHeader />
    <div class="dashboard__droplets">
      <DataCircle
        :percentage="75"
        variation="medium"
        color="#40d398"
        :primary="90"
        :max="120"
        secondary="KM/H"
        iconName="tachometer-alt"
      />
      <DataCircle
        class="dashboard__droplets--hide-on-tour"
        variation="small"
        :primary="13"
        iconName="cloud"
      />
      <DataCircle
        class="dashboard__droplets--hide-on-tour"
        :percentage="25"
        variation="large"
        color="#FFFFFF"
        :primary="16"
        :max="20"
        secondary="REMAINING"
        iconName="stopwatch"
      />
      <DataCircle
        class="dashboard__droplets--hide-on-tour"
        variation="small"
        :primary="currentTemp"
        iconName="thermometer-quarter"
      />
      <DataCircle
        class="dashboard__droplets--hide-on-tour"
        :percentage="25"
        variation="medium"
        color="#ee9f63"
        :primary="104"
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

import config from "@/assets/project-config.json";
import io from "socket.io-client";
const socket = io(config.URL);

export default {
  name: "Dashboard",
  data() {
    return {
      currentTemp: 23,
      isTourActive: false
    };
  },
  components: {
    DataCircle,
    DashHeader,
    FontAwesomeIcon
    //DashAudioPlayer
  },
  created() {
    socket.on("increment-temp", () => {
      this.currentTemp++;
    });
    socket.on("decrement-temp", () => {
      this.currentTemp--;
    });
    socket.on("toggle-auto-pilot", () => {
      this.isTourActive = !this.isTourActive;

      const promise = this.$refs["video-el"].play();

      if (promise !== undefined) {
        promise
          .then(() => {
            // Autoplay started!
          })
          .catch(() => {
            // Autoplay was prevented.
            // Show a "Play" button so that user can start playback.
          });
      }
    });
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

  .video-tour {
    display: none;

    &__video-element {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
      object-fit: cover;
    }
  }

  &--tour-active {
    .video-tour {
      display: block;
    }

    .dashboard__droplets--hide-on-tour {
      opacity: 0;
      filter: blur(30px);
    }
  }

  &__droplets {
    max-width: 80%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    padding-bottom: 100px;
    opacity: 1;
    transition: 0.8s ease;

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
