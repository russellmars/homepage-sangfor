<style lang="less" scoped>
.rotate360 {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transition: transform 2s ease-out;
  &--circle {
    transform: rotate(360deg) translateZ(0);
  }
  &--semicircle {
    transform: rotate(180deg) translateZ(0);
  }
}
</style>

<template>
  <div class="rotate360" :class="[modifierClass]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "circle",
      validator(val) {
        return ["circle", "semicircle"].indexOf(val) > -1;
      }
    },
    active: Boolean
  },
  computed: {
    modifierClass() {
      return this.active ? `rotate360--${this.type}` : "";
    }
  }
};
</script>
