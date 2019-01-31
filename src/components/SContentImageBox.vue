<style lang="less" scoped>
.img-box {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: no-repeat center / 100% 100%;
  overflow: hidden;
  &--active {
    animation: fade-show 2s linear 3s infinite alternate;
  }
  &__item-img {
    position: absolute;
  }
  &__item-img--semicircle {
    transform: rotate(180deg);
  }
  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 90px;
    transform: translate3d(-50%, -50%, 0);
  }
}
@keyframes fade-show {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0.3;
  }
}
</style>

<template>
  <div
    class="img-box"
    :class="[modifierClass]"
    :style="{ backgroundImage: `url(${bg})` }"
    ref="root"
  >
    <s-rotate360-box v-for="img in items" :active="active" :type="img.type" :key="img.src">
      <img
        class="img-box__item-img"
        :class="{'img-box__item-img--semicircle': img.type === 'semicircle'}"
        :style="img.style"
        :src="img.src"
        alt
      >
    </s-rotate360-box>
    <img class="img-box__logo" :src="logo" alt="">
  </div>
</template>

<script>
import hasOwnProperties from "@/utils/extends/hasOwnProperties";
import SRotate360Box from "./SRotate360Box";
import scrollMonitor from "scrollmonitor";
export default {
  props: {
    bg: String,
    logo: String,
    items: {
      type: Array,
      validator(val) {
        return val.every(item =>
          hasOwnProperties(item, ["type", "style", "src"])
        );
      }
    }
  },
  data() {
    return {
      active: false
    };
  },
  computed: {
    modifierClass() {
      if (this.active) {
        return "img-box--active";
      }
      return "";
    }
  },
  components: {
    SRotate360Box
  },
  mounted() {
    const root = this.$refs.root;
    var elementWatcher = scrollMonitor.create(root, -200);

    elementWatcher.enterViewport(() => {
      this.active = true;
    });
  }
};
</script>
