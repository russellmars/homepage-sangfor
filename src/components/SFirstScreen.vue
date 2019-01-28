<style lang="less" scoped>
.first-screen {
  width: 100%;
  position: relative;
  overflow: hidden;
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: auto;
    z-index: -1;
  }
  &__bg-people {
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 8;
  }
  &__bg-slogan {
    height: 400px;
    position: absolute;
    top: 150px;
    right: 15%;
    z-index: 8;
  }
  &__bottom {
    background: linear-gradient(
      0deg,
      rgba(41, 48, 53, 0.9) 0%,
      rgba(41, 48, 53, 0.1) 100%
    );
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 30px;
    z-index: 20;
    text-align: center;
  }
  &__card {
    display: inline-block;
    &:not(:last-of-type) {
      margin-right: 35px;
    }
  }
}
@media screen and (min-width: 1700px) {
  .first-screen {
    &__bg {
      width: 100%;
      height: auto;
    }
  }
}
</style>

<template>
  <div class="first-screen" :style="{height: `${height}px`}">
    <s-navbar theme="white"/>
    <video class="first-screen__bg" :src="bgVideo" autoplay loop muted></video>
    <img class="first-screen__bg-people" :src="bgPeople" alt>
    <img class="first-screen__bg-slogan" :src="bgSlogan" alt>
    <div class="first-screen__bottom">
      <div class="first-screen__card" v-for="card in cardList" :key="card.key">
        <s-introduce-card :card="card" :type="card.type" />
      </div>
    </div>
  </div>
</template>
<script>
import SNavbar from "./SNavbar";
import SIntroduceCard from "./SIntroduceCard";
export default {
  components: {
    SNavbar,
    SIntroduceCard
  },
  data() {
    return {
      height: 0,
      bgVideo:
        "http://download.sangfor.com.cn/Source/default/20181212/home/bg.mov?t=5a",
      bgPeople:
        "http://download.sangfor.com.cn/Source/default/20181212/home/image/banner-p.png",
      bgSlogan:
        "http://download.sangfor.com.cn/Source/default/20181212/home/image/slogan-12.jpg",
      cardList: [
        {
          key: 1,
          type: "rich",
          poster:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/edr.jpg",
          icon: "",
          title: "终端检测响应平台EDR",
          desc: "洞察威胁本质，迅捷灵动处置"
        },
        {
          key: 2,
          type: "simple",
          poster: "",
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-icon.png",
          title: "深信服云IT成功故事",
          desc: "以业务为中心，关注关键应用上云的过程，让IT云化更简单"
        },
        {
          key: 3,
          type: "simple",
          poster: "",
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-icon.png",
          title: "新型智慧城市解决方案",
          desc: "立体融合、安全服务、智能可视 — 守护新型智慧城市安全稳运行"
        },
        {
          key: 4,
          type: "rich",
          poster:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/sis.jpg?t=181225",
          icon: "",
          title: "安全感知平台解决方案",
          desc: "让IT更简单、更安全、更有价值"
        }
      ]
    };
  },
  created() {
    this.height = window.innerHeight;
  }
};
</script>
