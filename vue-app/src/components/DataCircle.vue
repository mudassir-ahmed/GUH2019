<template>
  <div :class="`data-droplet data-droplet--${variation}`">
    <svg
      viewBox="0 0 36 36"
      class="data-droplet__chart"
      :stroke="percentage >= 10 ? color : DANGER_COLOR"
    >
      <path
        class="data-droplet__chart-inner"
        :stroke-dasharray="`${percentage >= 0 ? percentage : 0} 100`"
        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        class="data-droplet__chart-outer"
        d="M18 2.0845
      a 15.9155 15.9155 0 0 1 0 31.831
      a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
    <div class="data-droplet__data center-all">
      <div
        class="data-droplet__data-icon center-all"
        :style="variation == 'small' ? `background-color: ${color}` : ``"
      >
        <!-- https://www.npmjs.com/package/@fortawesome/vue-fontawesome#using-solid-icons -->
        <!-- The solid style is implicit -->
        <FontAwesomeIcon :icon="iconName" :size="iconSize" />
      </div>
      <div class="data-droplet__data-primary">
        {{ percentage >= 0 ? animatedNumber : 0 }}
      </div>
      <div class="data-droplet__data-secondary">
        {{ secondary }}
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import TweenLite from "gsap/all";
gsap.registerPlugin(TweenLite);

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    max: {
      type: Number,
      default: 100
    },
    iconName: {
      type: String,
      default: "user-secret" // no icon
    },
    primary: {
      type: Number,
      default: 0
    },
    secondary: {
      type: String,
      default: "-"
    },
    color: {
      type: String,
      default: "#2a2b31"
    },
    variation: {
      type: String,
      default: "medium",
      required: true,
      validator: value => {
        return ["small", "medium", "large"].includes(value);
      }
    }
  },
  computed: {
    percentage() {
      return ((100 * this.primary) / this.max).toFixed(0);
    },
    iconSize() {
      switch (this.variation) {
        case "small":
          return "sm";

        case "medium":
          return "lg";

        case "large":
          return "2x";

        default:
          return "md";
      }
    },
    animatedNumber: function() {
      return this.tweenedNumber.toFixed(0);
    }
  },
  watch: {
    primary: function(newValue) {
      TweenLite.to(this.$data, 0.5, { tweenedNumber: newValue });
    }
  },
  data: function() {
    return {
      tweenedNumber: parseInt(this.primary), // Tweened number should be the value of primary at start,
      DANGER_COLOR: "#c32f2f"
    };
  }
};
</script>

<style lang="scss" scoped>
.data-droplet {
  display: block;
  position: relative;

  &__data {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    color: #ffffff;

    &-icon {
      background-color: inherit;

      svg {
        opacity: 0.6;
      }
    }

    &-primary {
      font-weight: bold;
      font-size: 36px;
      margin: 10px 0;
    }

    &-secondary {
      opacity: 0.2;
      font-weight: bold;
      font-size: 12px;
    }
  }

  &--small {
    width: 110px;

    .data-droplet__chart {
      &-outer {
        opacity: 1;
      }

      &-outer,
      &-inner {
        stroke-width: 2;
      }
    }

    .data-droplet__data {
      &-icon {
        position: absolute;
        right: 0;
        bottom: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;

        svg {
          opacity: 1;
        }
      }

      &-primary {
        font-size: 25px;
      }

      &-secondary {
        display: none;
      }
    }
  }

  &--medium {
    width: 180px;
  }

  &--large {
    width: 280px;

    .data-droplet__data {
      &-icon {
      }

      &-primary {
        font-size: 60px;
      }

      &-secondary {
      }
    }
  }

  &__chart {
    display: block;
    margin: 0;

    &-inner,
    &-outer {
      stroke: inherit;
      fill: none;
      stroke-width: 1.2;
    }

    &-inner {
      /*stroke-linecap: round;*/
      /*stroke-dasharray: 20 100;*/
      transition: 0.5s ease-in-out;
    }

    &-outer {
      opacity: 0.1;
      transition: 0.5s ease-in-out;
    }
  }
}

.center-all {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
</style>
