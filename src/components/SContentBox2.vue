<style lang="less" scoped>
.content-box1 {
  &__main {
    position: absolute;
    top: 150px;
    right: 0;
    width: 560px;
    // transform: translateY(-50%);
  }
  &__rotate-wrapper {
    position: absolute;
    top: -50px;
    left: -160px;
    height: 650px;
    width: 650px;
  }
}
</style>

<template>
  <s-content-box class="content-box1">
    <div class="content-box1__main">
      <s-content-box-text align="left" :title="title" :sub-title="subTitle" :desc="desc"/>
      <s-icon-button-list :list="buttons"/>
    </div>
    <div class="content-box1__rotate-wrapper">
      <s-content-image-box :bg="images.bg" :logo="images.logo" :items="images.items"/>
    </div>
  </s-content-box>
</template>

<script>
import SContentBox from "./SContentBox";
import SContentBoxText from "./SContentBoxText";
import SIconButtonList from "./SIconButtonList";
import SContentImageBox from "./SContentImageBox";
export default {
  components: {
    SContentBox,
    SContentBoxText,
    SIconButtonList,
    SContentImageBox
  },
  data() {
    return {
      title: "深信服云 IT 业务",
      subTitle: "SANGFOR CLOUD BUSINESS",
      desc:
        "打造极简、稳定、高性能的云IT新架构，助力数字化转型。深信服云IT为用户量身定制的“三朵云”整体解决方案，为政府及企事业单位提供从数据中心、分支机构到云终端三方面完整的云计算产品、解决方案及服务。让企业的关键应用上云更简单、IT服务更高效、让每个组织的IT更具价值创造力。",
      buttons: [
        {
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-1s.png",
          activeIcon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-1s.png",
          title: "企业级云",
          descs: []
        },
        {
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-2s.png",
          activeIcon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-2s.png",
          title: "公有云",
          descs: []
        },
        {
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-3s.png",
          activeIcon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-3s.png",
          title: "桌面云",
          descs: []
        }
      ],
      images: {
        bg:
          "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-bg.jpg",
        logo:
          "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud.png",
        items: [
          {
            type: "circle",
            src:
              "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-1m.png",
            style: {
              width: "130px",
              top: "240px",
              left: "500px"
            }
          },
          {
            type: "circle",
            src:
              "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-2m.png",
            style: {
              width: "90px",
              top: "445px",
              left: "345px"
            }
          },
          {
            type: "circle",
            src:
              "http://download.sangfor.com.cn/Source/default/20181212/home/image/cloud-3m.png",
            style: {
              width: "100px",
              top: "100px",
              left: "320px"
            }
          }
        ]
      }
    };
  }
};
</script>
