<script setup lang="ts">
import { fetchElephant } from "@/api";
import IndexedDB from "@/utils/indexDB";
import { useI18n } from "vue-i18n";
let db = new IndexedDB("airbnb");
const add = () => {
  db.updateItem("elephant", {
    nose: 1,
    ear: 2,
  });
};
const { t } = useI18n();
// 数据库相关操作
function getElephant() {
  fetchElephant().then((res) => {
    console.log(res);
  });
}
db.openStore("elephant", "id", ["nose", "ear"]);
getElephant();
const value1 = "";
// 增/改
</script>

<template>
  {{ t("message.home") }}
  <el-date-picker
    v-model="value1"
    type="week"
    format="[Week] ww"
    placeholder="Pick a week"
  />
  <button @click="add">add</button>
</template>

<style scoped lang="scss">
@import "@/assets/scss/home/index.scss";
</style>
