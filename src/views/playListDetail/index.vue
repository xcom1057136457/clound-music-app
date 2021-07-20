<template>
  <div class="core-specified-content-container">
    <div class="scroll-wrapper" ref="scroll">
      <div
        class="ignore-content"
        :style="{
          backgroundImage: `url(${playListDetail.backgroundCoverUrl})`
        }"
      ></div>
      <div class="scroll-content"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, Ref, ref } from 'vue';
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
import { getPlayListDetail } from '@/api';
import BScroll from 'better-scroll';

export default defineComponent({
  setup() {
    const route: RouteLocationNormalizedLoaded = useRoute();

    // 获取数据
    let playListDetail: Ref<Record<string, unknown>> = ref({});
    let getData = async () => {
      let { code, playlist }: any = await getPlayListDetail({
        id: route.query.id as unknown as number
      });
      if (code == 200) {
        playListDetail.value = playlist;
      }
    };

    let scroll = ref();
    let bs = ref();

    let init = () => {
      bs.value = new BScroll(scroll.value, {
        specifiedIndexAsContent: 1,
        probeType: 3
      });
    };

    onMounted(() => {
      getData();
      init();
    });

    return {
      scroll,
      playListDetail
    };
  }
});
</script>

<style lang="scss" scoped>
.core-specified-content-container {
  height: 100%;
  .scroll-wrapper {
    height: 100%;
    overflow: hidden;
  }

  .ignore-content {
    // background-color: #2c3e50;
    height: 200px;
    background-repeat: no-repeat;
    background-size: 100%;
    // background-position: center;
  }
}
</style>
