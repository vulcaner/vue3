<template>
  <main>
    <el-select v-model="$i18n.locale" class="m-2" placeholder="Select">
      <el-option v-for="item in langArr" :key="item.value" :label="item.label" :value="item.value" />
    </el-select>
    <p>{{ $i18n.locale }}</p>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
<script setup lang="ts">
import i18n from "../lang";
// import { useI18n } from 'vue-i18n'
// import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { onMounted, ref, watchEffect } from "vue";
// const { t } = useI18n()//t('message.home')
// const route = useRoute()
// const router = useRouter()
const langArr = ref([
  {
    label: "英文",
    value: "en"
  }, {
    label: "中文",
    value: "zh"
  }
])
watchEffect(() => {
  console.warn(i18n.global.locale)
})
onMounted(() => {
  console.log(i18n.global)
});
</script>
