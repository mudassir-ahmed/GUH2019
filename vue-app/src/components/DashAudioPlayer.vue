<template>
  <div>
    <div>Stronger</div>
    <div>Kanye West</div>
  </div>
</template>

<script>
// https://github.com/goldfire/howler.js#quick-start
import { Howl } from "howler";
//import { Howler } from "howler";

export default {
  mounted() {
    const sound = new Howl({
      src: ["../assets/sound/kanye-west-stronger.mp3"],
      autoplay: true,
      loop: true,
      volume: 0.5,
      onend: function() {
        //console.log("Finished!");
      }
    });

    sound.play();
  }
};
</script>

<style></style>
