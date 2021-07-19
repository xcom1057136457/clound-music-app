<template>
  <div class="horizontal-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, nextTick, onMounted, Ref, ref } from 'vue';
import BScroll from 'better-scroll';

export default defineComponent({
  setup() {
    let bs: Ref<any> = ref(null);
    let scroll: Ref<any> = ref(null);
    let { proxy }: any = getCurrentInstance()

    let init = () => {
      bs.value = new BScroll(scroll.value, {
        scrollX: true,
        scrollY: false,
        click: true,
        stopPropagation: true,
        probeType: 3 // listening scroll event
      });
    };

    onMounted(() => {
      proxy.$bus.on('refresh', () => {
        init()
      })

      setTimeout(() => {
        init()
      }, 2000)
    });

    return {
      scroll
    };
  }
});
</script>

<style lang="scss" scoped>
.horizontal-container {
  > .scroll-wrapper {
    position: relative;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    > .scroll-content {
      display: inline-block;
    }
  }
}
</style>
