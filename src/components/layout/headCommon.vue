<script setup lang="ts">
import { ref } from "vue";

const activeIndex = ref("orders");
function handleSelect(e: any) {
  console.log(e);
}
</script>

<template>
  <div class="header-common">
    <img class="logo" src="../../assets/images/layout/logo.png" alt="爱比迎" />
    <ElMenu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      :ellipsis="false"
    >
      <ElMenuItem index="orders">房屋订单中心</ElMenuItem>
      <ElMenuItem index="records"> 历史足迹 </ElMenuItem>
      <ElSubMenu index="international">
        <template #title>国际化切换</template>
        <ElMenuItem index="zh">中文</ElMenuItem>
        <ElMenuItem index="en">英文</ElMenuItem>
      </ElSubMenu>
      <ElMenuItem index="avatar">
        <img
          class="avatar"
          src="../../assets/images/layout/avatar.jpg"
          alt="个人中心"
        />
      </ElMenuItem>
    </ElMenu>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/layout/index.scss";
</style>
