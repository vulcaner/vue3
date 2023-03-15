<script setup lang="ts">
import TheWelcome from "../components/TheWelcome.vue";
</script>

<template>
  <main>
    <button @click="increment">+1</button>
    <br>
    <p>{{ count }}</p>
    <br>
    <p>{{ double }}</p>
    <TheWelcome />
  </main>
</template>
<script lang="ts">
import { useUserStore } from "@/stores/user";
import { mapActions, mapGetters, mapState } from "pinia";
export default {
  data() {
    return {
      data: "",
    };
  },
  mounted() {
    // this.increment();
  },
  computed: {
    ...mapState(useUserStore, ["count"]),
    ...mapGetters(useUserStore, ["double"]),
  },
  methods: {
    ...mapActions(useUserStore, ["increment"]),
  },
};
</script>
