<style lang="less" scoped>
.content-box {
  width: 1200px;
  height: 650px;
  margin: 0 auto;
  &__main {
    position: relative;
    height: 100%;
  }
}
</style>

<template>
  <div class="content-box">
    <div class="content-box__main">
      <slot></slot>
    </div>
  </div>
</template>
