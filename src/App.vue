<script setup lang="ts">
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import en from 'element-plus/dist/locale/en.mjs'
import { ref } from 'vue';
import { useI18n } from "vue-i18n";

const {locale:localeLanguage}=useI18n()
const locale=ref()
const changeLanguage=(language:any)=>{
  locale.value=language
  localeLanguage.value=language.name
  console.log('language:',language);
  
}

</script>

<template>
  <el-config-provider :locale="locale">
    <button @click="changeLanguage(zhCn)">中文</button>
    <button @click="changeLanguage(en)">英文</button>
    <router-link to="/home">首页</router-link>
    <router-link to="/mine">个人中心</router-link>
    <router-view></router-view>
  </el-config-provider>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home/index.scss";

#app {
  color: black;
  margin-top: 60px;

  button {
    font-size: 40px;
  }
}
</style>
