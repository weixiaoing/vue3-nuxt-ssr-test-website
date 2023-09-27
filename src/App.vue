<script setup lang="ts">
import en from "element-plus/dist/locale/en.mjs";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { locale: localeLanguage } = useI18n();
const locale = ref();
const changeLanguage = (language: any) => {
  locale.value = language;
  localeLanguage.value = language.name;
  console.log("language:", language);
};
</script>

<template>
  <headCommon></headCommon>

  <button @click="changeLanguage(zhCn)">中文</button>
  <button @click="changeLanguage(en)">英文</button>
  <!-- <RouterLink to="/home">首页</RouterLink>
  <RouterLink to="/mine">个人中心</RouterLink> -->
  <!-- <RouterView></RouterView> -->
</template>

<style scoped lang="scss">
// #app {
//   color: black;
//   margin-top: 60px;

//   button {
//     font-size: 40px;
//   }
// }
</style>
