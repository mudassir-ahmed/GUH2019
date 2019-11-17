<template>
  <div class="header">
    <div class="data-group">
      <FontAwesomeIcon class="data-group__icon" icon="user" />
      <div class="data-group__data">Mudassir Ahmed</div>
    </div>
    <div class="data-group">
      <FontAwesomeIcon class="data-group__icon" :icon="['fab', 'bitcoin']" />
      <div class="data-group__data">0.0103673</div>
    </div>
    <div class="data-group">
      <FontAwesomeIcon class="data-group__icon" icon="user-friends" />
      <div class="data-group__data">1</div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
import { faBitcoin } from "@fortawesome/free-brands-svg-icons";
library.add(fas, faBitcoin);

export default {
  components: {
    FontAwesomeIcon
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 40px;
}

.data-group {
  display: inline-flex;
  align-items: center;
  margin-right: 20px;

  &__icon {
    color: #ffffff;
    opacity: 0.5;
    margin-right: 10px;
  }

  &__data {
    color: #ffffff;
    line-height: 1;
    font-weight: bold;
    justify-content: center;
    font-size: 14px;
  }
}
</style>
