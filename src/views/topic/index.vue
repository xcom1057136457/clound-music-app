<template>
  <div class="scroll-wrapper" ref="scroll">
    <div class="scroll-content">
      <div v-for="item in hotTopic" :key="item.actId" class="topic-item">
        <div class="image-box" :style="{ backgroundImage: `url(${ item.sharePicUrl })` }"></div>

        <div class="detail-wrapper">
          <div>{{ item.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { getTopic } from '@/api';
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  reactive,
  Ref,
  ref
} from 'vue';
import { PageParams } from '@/types/Api.interface';
import BScroll from 'better-scroll';
export default defineComponent({
  setup() {
    const { proxy }: any = getCurrentInstance();

    // 获取话题
    let pageParams: PageParams = reactive({
      limit: 10,
      offset: 0
    });
    let hotTopic: Ref<any[]> = ref([]);
    let getTopichandler = async () => {
      let { code, hot }: any = await getTopic(pageParams);
      if (code == 200) {
        hotTopic.value = hot;
        proxy.$nextTick(() => {
          init();
        });
      }
    };

    let scroll: Ref<any> = ref(null);
    let bs: Ref<unknown> = ref(null);
    let init = () => {
      bs.value = new BScroll(scroll.value, {
        probeType: 3,
        click: true
      });
    };

    onMounted(() => {
      getTopichandler();
    });

    return {
      hotTopic,
      scroll
    };
  }
});
</script>

<style lang="scss" scoped>
.image-box {
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 10px;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    background: inherit;
    background-position: center center;
    filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.5)) blur(20px);
    z-index: -1;
  }
}

.scroll-wrapper {
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  .scroll-content {
    padding: 10px;
  }
  .topic-item {
    display: flex;
    margin-bottom: 10px;
    > .detail-wrapper {
      flex: 1;
    }
  }
}
</style>
