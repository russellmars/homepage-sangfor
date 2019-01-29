<style lang="less" scoped>
.ib-list {
  border-bottom: 3px solid #fafafa;
  position: relative;
  display: inline-block;
  font-size: 0;
  margin-top: 20px;
  &__item {
    display: inline-block;
  }
  &__indicator {
    display: none;
    position: absolute;
    top: 100%;
    height: 3px;
    width: 50px;
    left: 0;
    background: #aad571;
    transform: translateX(20px);
    transition: all 0.25s ease;
    z-index: 0;
  }
}
</style>

<template>
  <div class="ib-list" @mouseleave="activeIndex = -1">
    <div class="ib-list__indicator" :style="indicatorStyle"></div>
    <div v-for="(item, index) in list" class="ib-list__item" :key="item.text">
      <s-icon-button
        :icon="item.icon"
        :active-icon="item.activeIcon"
        :title="item.title"
        :descs="item.descs"
        @mouseover="activeIndex = index"
      />
    </div>
  </div>
</template>

<script>
import SIconButton from "./SIconButton";
export default {
  props: {
    list: Array
  },
  components: {
    SIconButton
  },
  data() {
    return {
      activeIndex: -1
    };
  },
  computed: {
    indicatorStyle() {
      const style = {};
      if (this.activeIndex > -1) {
        style.left = `${this.activeIndex * 90}px`;
        style.display = "block";
      }
      return style;
    }
  }
};
</script>
