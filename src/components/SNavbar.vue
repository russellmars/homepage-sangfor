<style lang="less" scoped>
@navbar-height: 80px;

.navbar {
  position: relative;
  z-index: 20;
  color: black;
  height: @navbar-height;
  text-align: center;
  &.navbar--white {
    color: white;
  }

  &__logo {
    height: 50px;
    vertical-align: middle;
  }

  &__list {
    display: inline-block;
    margin: 0;
    list-style: none;
    padding-inline-start: 0;
    margin-left: 40px;
  }

  &__item {
    position: relative;
    list-style-type: none;
    display: inline-block;
    line-height: @navbar-height;
    padding: 0 15px;
    cursor: pointer;
    &:not(:last-of-type) {
      margin-right: 25px;
    }
    &:hover:after {
      content: " ";
      position: absolute;
      width: 100%;
      height: 4px;
      bottom: 0;
      left: 0;
      background: #345abc;
    }
  }
}
</style>

<template>
  <div class="navbar" :class="[modifierClass]">
    <img class="navbar__logo" :src="logo" alt>
    <ul class="navbar__list">
      <li class="navbar__item">产品与解决方案</li>
      <li class="navbar__item">如何购买</li>
      <li class="navbar__item">服务支持</li>
      <li class="navbar__item">合作发展</li>
      <li class="navbar__item">关于我们</li>
      <li class="navbar__item">互动社区</li>
      <li class="navbar__item">中文</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: "black",
      validator(val) {
        return ["black", "white"].indexOf(val) > -1;
      }
    }
  },
  computed: {
    modifierClass() {
      return `navbar--${this.theme}`;
    },
    logo() {
      if (this.theme === "black") {
        return "http://download.sangfor.com.cn/Source/default/20181212/home//image/logo1.png";
      }
      return "http://download.sangfor.com.cn/Source/default/20181212/home//image/logo2.png";
    }
  }
};
</script>
