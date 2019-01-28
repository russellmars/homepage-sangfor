<style lang="less" scoped>
.intro-card {
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  overflow: hidden;
  background: white;
  text-align: left;
  &--simple {
    color: white;
  }
  &--rich {
    color: black;
  }
  &__icon {
    position: absolute;
    right: 30px;
    bottom: 20px;
    height: 30px;
  }
  &__top {
    height: 151.5px;
    background: #0647bf no-repeat center / cover;
    color: white;
    padding: 20px;
    box-sizing: border-box;
  }
  &__bottom {
    padding: 20px;
  }
  &:hover &__mask {
    background: linear-gradient(
      27.71deg,
      #2ba8c4 5.16%,
      #3dc5b7 22.11%,
      rgba(96, 208, 182, 0.784) 42.55%,
      rgba(173, 233, 179, 0) 76.17%
    );
    opacity: 1;
  }
  &__mask {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 0.65s;
    opacity: 0;
  }
  &__button {
    position: absolute;
    bottom: 20px;
    left: 30px;
    padding: 6px 13px;
    border-radius: 10px;
    font-size: 12px;
    font-weight: bold;
    color: white;
    background: rgba(255, 255, 255, 0.5);
  }
  &__title {
    font-size: 17px;
    font-weight: bold;
    line-height: 24px;
  }
  &--simple &__title::before {
    content: " ";
    display: block;
    background: white;
    width: 80px;
    height: 2px;
    margin-bottom: 10px;
  }
  &__desc {
    font-size: 13px;
    margin-top: 10px;
    line-height: 24px;
  }
}
</style>

<template>
  <div class="intro-card" :class="[`intro-card--${type}`]">
    <img class="intro-card__icon" v-if="card.icon" :src="card.icon" alt="">
    <div class="intro-card__top" :style="{ backgroundImage: `url(${card.poster})` }">
      <template v-if="type === 'simple'">
        <div class="intro-card__title">{{ card.title }}</div>
        <div class="intro-card__desc">{{ card.desc }}</div>
      </template>
    </div>
    <div class="intro-card__bottom" v-if="type === 'rich'">
      <div class="intro-card__title">{{ card.title }}</div>
      <div class="intro-card__desc">{{ card.desc }}</div>
    </div>
    <a class="intro-card__mask" href="#">
      <div class="intro-card__button">查看详情</div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "simple",
      validator(val) {
        return ["simple", "rich"].indexOf(val) > -1;
      }
    },
    card: Object
  }
};
</script>
