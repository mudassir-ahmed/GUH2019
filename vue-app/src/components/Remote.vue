<template>
  <div class="remote">
    <div class="btn-autopilot center-all">
      <FontAwesomeIcon icon="robot" size="lg" />
      <div @click="toggleAutoPilot()" class="btn-autopilot__trigger center-all">
        <FontAwesomeIcon class="" icon="random" size="sm" />
      </div>
    </div>

    <div class="btn-temperature center-all">
      <FontAwesomeIcon icon="thermometer-quarter" size="lg" />
      <div
        @click="incrementTemp()"
        class="btn-temperature__trigger-increment"
      ></div>
      <div
        @click="decrementTemp()"
        class="btn-temperature__trigger-decrement"
      ></div>
    </div>

    <div @click="toggleFullscreen()" class="toggle-fullscreen center-all">
      <FontAwesomeIcon icon="expand" size="sm" />
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

import config from "@/assets/project-config.json";
import io from "socket.io-client";
const socket = io(config.URL);

export default {
  components: {
    FontAwesomeIcon
  },
  created() {
    //window.addEventListener("deviceorientation", this.handleOrientation);
  },
  destroyed() {
    //window.removeEventListener("deviceorientation", this.handleOrientation);
  },
  methods: {
    handleOrientation(event) {
      var x = event.beta; // In degree in the range [-180,180]
      var y = event.gamma; // In degree in the range [-90,90]

      const MAX_SPEED = 120;

      // Because we don't want to have the device upside down
      // We constrain the x value to the range [-90,90]
      if (x > 90) {
        x = 90;
      }
      if (x < -90) {
        x = -90;
      }

      // To make computation easier we shift the range of
      // x and y to [0,180]
      x += 90;
      y += 90;

      // emit an event to change speed by factor
      socket.emit("change-speed", (y / 180) * MAX_SPEED);

      alert("speed cahnge");
    },
    buttonSFX() {
      // Enable sound by uncommenting below
      //const sound = new Audio(require("../assets/sound/button-sfx.mp3"));
      //sound.play();
      window.navigator.vibrate(150);
    },
    incrementTemp() {
      // emit an event to increase temp
      socket.emit("increment-temp", {});
      this.buttonSFX();
    },
    decrementTemp() {
      // emit an event to decrease temp
      socket.emit("decrement-temp", {});
      this.buttonSFX();
    },
    toggleAutoPilot() {
      // trigger an event to toggle autopilot
      socket.emit("toggle-auto-pilot", {});
      this.buttonSFX();
    },
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
.remote {
  display: flex;
  justify-content: space-around;
  align-items: center;
  max-width: 80%;
  margin: auto;
  width: 100%;
  height: 100%;
}

.btn-autopilot {
  color: #000000;
  background-color: #ffffff;
  position: relative;

  &__trigger {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #ffffff;
    border: 4px solid #000;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
}

.btn-autopilot,
.btn-temperature {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.btn-temperature {
  position: relative;
  background-color: rgba($color: #fff, $alpha: 0.1);
  color: #ffffff;

  &__trigger-increment,
  &__trigger-decrement {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 4px solid #000;
    position: absolute;
  }

  &__trigger-increment {
    background-color: #dd2872;
    top: 0;
    right: 0;
  }

  &__trigger-decrement {
    background-color: #22b7f7;
    bottom: 0;
    left: 0;
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
