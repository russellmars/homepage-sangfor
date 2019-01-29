<style lang="less" scoped>
.icon-button {
  width: 90px;
  height: 80px;
  text-align: center;
  position: relative;
  &__wrapper {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    cursor: pointer;
  }
  &__icon {
    width: 30px;
    height: 30px;
  }
  &:hover &__icon {
    display: none;
  }
  &:hover &__icon-active {
    display: inline;
  }
  &__icon-active {
    display: none;
  }
  &__title {
    font-size: 13px;
    line-height: 24px;
    margin-top: 10px;
  }
  &:hover &__title {
    color: rgb(170, 213, 113);
  }
  &:hover &__descs {
    display: block;
  }
  &__descs {
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    padding-top: 15px;
    display: none;
  }
  &__descs-main {
    background: rgba(238, 233, 233, 0.2);
    list-style: none;
    padding-inline-start: 0;
    padding: 18px;
    margin: 0;
  }
  &__descs-item {
    list-style-type: none;
    white-space: nowrap;
    line-height: 24px;
    font-size: 13px;
  }
}
</style>

<template>
  <div class="icon-button" @mouseover="$emit('mouseover')">
    <div class="icon-button__wrapper">
      <div>
        <img class="icon-button__icon" :src="icon" alt>
        <img class="icon-button__icon icon-button__icon-active" :src="activeIcon" alt>
      </div>
      <div class="icon-button__title">{{ title }}</div>
    </div>
    <div class="icon-button__descs" v-if="descs && descs.length">
      <ul class="icon-button__descs-main">
        <li class="icon-button__descs-item" v-for="item in descs" :key="item.text">{{ item.text }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    icon: String,
    activeIcon: String,
    title: String,
    descs: Array
  }
};
</script>
