// import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ count: 1 }),
  getters: {
    double: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
