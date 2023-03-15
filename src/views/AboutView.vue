<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ counter.count }}</h1>
    <h1>{{ counter.doubleCount }}</h1>
    <hr />
    <span
      >组件内初始 val:<i>{{ val }}</i></span
    >
    <br />
    <button @click="add">val+1</button>
    <br />
    <span
      >组件内val+1:<i>{{ val }}</i></span
    >
    <br />
    <span>组件内随机计算val:{{ getComVal }}</span>
  </div>
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
import { onMounted, ref, computed, watchEffect } from "vue";
import { useCounterStore } from "@/stores/counter";
import { useUserStore } from "@/stores/user";
const counter = useCounterStore();
const userStore = useUserStore();

const val = ref(11);
const getComVal = computed(() => val.value + Math.random());
function add() {
  val.value++;
  counter.increment();
  userStore.increment();
}
watchEffect(() => {
  console.log("val变化了,操作counter store：", val, val.value);
  // counter.increment();
});
onMounted(() => {
  console.log("onMounted");
  // counter.increment();
  console.log(counter);
  console.log(import.meta.env);
});
</script>
