<style lang="less" scoped>
.content-box-text {
  line-height: 24px;
  &--left &__top {
    text-align: left;
  }
  &--right &__top {
    text-align: right;
  }
  &__top {
  }
  &__title {
    font-size: 26px;
    font-weight: bold;
  }
  &__sub-title {
    font-size: 14px;
    margin-top: 5px;
  }
  &__bottom {
    margin-top: 20px;
  }
}
</style>

<template>
  <div class="content-box-text" :class="[modifierClass]">
    <div class="content-box-text__top">
      <div class="content-box-text__title">{{ title }}</div>
      <div class="content-box-text__sub-title">{{ subTitle }}</div>
    </div>
    <div class="content-box-text__bottom">{{ desc }}</div>
  </div>
</template>

<script>
export default {
  props: {
    align: {
      type: String,
      default: "left",
      validator(val) {
        return ["left", "right"].indexOf(val) > -1;
      }
    },
    title: String,
    subTitle: String,
    desc: String
  },
  computed: {
    modifierClass() {
      return `content-box-text--${this.align}`;
    }
  }
};
</script>
