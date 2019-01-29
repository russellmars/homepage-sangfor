<style lang="less" scoped>
.rotate360 {
  position: absolute;
  width: 650px;
  height: 650px;
  left: 0;
  top: 0;
  transition: transform 2s ease-out;
  &--circle {
    transform: rotate(360deg);
  }
  &--semicircle {
    transform: rotate(180deg);
  }
}
</style>

<template>
  <div class="rotate360" :class="[modifierClass]"></div>
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
