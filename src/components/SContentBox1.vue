<style lang="less" scoped>
.content-box1 {
  &__main {
    position: absolute;
    top: 50%;
    left: 0;
    width: 560px;
    transform: translateY(-50%);
  }
  &__rotate-wrapper {
    position: absolute;
    top: -50px;
    right: -160px;
    height: 650px;
    width: 650px;
    background: green;
  }
}
</style>

<template>
  <s-content-box class="content-box1">
    <div class="content-box1__main">
      <s-content-box-text align="right" :title="title" :sub-title="subTitle" :desc="desc"/>
      <s-icon-button-list :list="buttons"/>
    </div>
    <div class="content-box1__rotate-wrapper">
      <s-rotate360-box/>
    </div>
  </s-content-box>
</template>

<script>
import SContentBox from "./SContentBox";
import SContentBoxText from "./SContentBoxText";
import SIconButtonList from "./SIconButtonList";
import SRotate360Box from "./SRotate360Box";
export default {
  components: {
    SContentBox,
    SContentBoxText,
    SIconButtonList,
    SRotate360Box
  },
  data() {
    return {
      title: "深信服智安全业务",
      subTitle: "SANGFOR SECURITY BUSINESS",
      desc:
        "专注做实用的安全，让每个组织的安全建设更有效、更简单。深信服为用户打造持续进化、有效保护的安全架构；在网、端、云，三个点上为用户提供持续进化和有效保护的安全产品和方案。",
      buttons: [
        {
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-1s.png",
          activeIcon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-1sg.png",
          title: "网关安全",
          descs: [
            {
              text: "下一代防火墙NGAF",
              url: "/product/safety-perimeter-security-af.html"
            },
            {
              text: "上网行为管理AC",
              url: "/product/safety-content-security-ac.html"
            },
            {
              text: "SSL VPN",
              url: "/product/net-safe-mobile-security-ssl.html"
            },
            {
              text: "硬件VPN",
              url: "/industry/networking.html"
            },
            {
              text: "EasyConnect",
              url: "/product/net-safe-mobile-security-easyconnect.html"
            },
            {
              text: "行为感知系统BA",
              url: "/product/safety-content-security-ba.html"
            }
          ]
        },
        {
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-6s.png",
          activeIcon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-6sg.png",
          title: "旁路检测",
          descs: [
            {
              text: "安全感知平台",
              url: "/product/net-safe-bigdata-sis.html"
            },
            {
              text: "数据库安全审计",
              url: "/product/net-safe-content-security-das.html"
            }
          ]
        },
        {
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-2s.png",
          activeIcon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-2sg.png",
          title: "终端安全",
          descs: [
            {
              text: "企业移动管理EMM",
              url: "/product/net-safe-mobile-security-emm.html"
            },
            {
              text: "终端检测响应平台EDR",
              url: "/product/edr.html"
            }
          ]
        },
        {
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-5s.png",
          activeIcon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-5sg.png",
          title: "分支组网",
          descs: [
            {
              text: "一体化网关MIG",
              url: "/product/net-safe-perimeter-security-mig.html"
            },
            {
              text: "广域网优化WOC",
              url: "/product/net-safe-network-safe-woc.html"
            }
          ]
        },
        {
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-4s.png",
          activeIcon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-4sg.png",
          title: "安全服务",
          descs: [
            {
              text: "信服云盾",
              url: "/product/safety-saas-saas-protect.html"
            },
            {
              text: "信服云眼",
              url: "/product/safety-saas-saas-eye.html"
            },
            {
              text: "重构入云业务安全边界",
              url: "/product/safety-saas-saas-boundary.html"
            }
          ]
        },
        {
          icon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-3s.png",
          activeIcon:
            "http://download.sangfor.com.cn/Source/default/20181212/home/image/safety-3sg.png",
          title: "安全解决方案",
          descs: [
            {
              text: "等级保护解决方案",
              url: "/product/security-compliance.html"
            },
            {
              text: "等保一体机解决方案",
              url: "/product/industry-home.html"
            }
          ]
        }
      ]
    };
  }
};
</script>
