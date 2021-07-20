<template>
  <router-view />
</template>

<script lang="ts">
import { Toast } from 'vant';
import { defineComponent, watch } from 'vue';
import { useStore } from 'vuex';

declare interface storeVal {
  isLoading: boolean;
}

export default defineComponent({
  setup() {
    const store = useStore();

    // 监听全局toast弹窗
    watch(
      store.state.global,
      (val: storeVal) => {
        if (val.isLoading) {
          Toast.loading({
            message: '加载中...',
            forbidClick: true,
            loadingType: 'spinner'
          });
        } else {
          Toast.clear();
        }
      },
      { deep: true, immediate: true }
    );
  }
});
</script>
