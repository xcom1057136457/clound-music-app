<template>
  <div class="core-specified-content-container">
    <div class="nav-bar">
      <van-row>
        <van-col span="4" @click="$router.back()">
          <van-icon name="arrow-left" />
          <span>返回</span>
        </van-col>

        <van-col span="16">
          {{ $route.meta.title || $route.name }}
        </van-col>

        <van-col :span="4"></van-col>
      </van-row>
    </div>
    <div class="scroll-wrapper" ref="scroll">
      <div
        class="ignore-content"
        :style="{
          backgroundImage: `url(${playListDetail.coverImgUrl})`
        }"
      >
      </div>
      <div class="scroll-content">
        <div
          v-for="(item, index) in playListDetail.tracks"
          :key="item.id"
          class="scroll-item"
        >
          <div>
            <span>{{ index + 1 + '.' }}</span>
            <span>{{ item.name }}</span>
          </div>
          <div>
            <span>{{ item.ar.map(item => item.name).join(',') }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, onMounted, Ref, ref } from 'vue';
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';
import { getPlayListDetail } from '@/api';
import BScroll from 'better-scroll';

export default defineComponent({
  setup() {
    const route: RouteLocationNormalizedLoaded = useRoute();
    const { proxy }: any = getCurrentInstance();

    // 获取数据
    let playListDetail: Ref<Record<string, unknown>> = ref({});
    let getData = async () => {
      let { code, playlist }: any = await getPlayListDetail({
        id: route.params.playListId as unknown as number
      });
      if (code == 200) {
        playListDetail.value = playlist;
        proxy.$nextTick(() => {
          init();
        });
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
  position: relative;

  .nav-bar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    height: 50px;
    background-color: transparent;
    padding: 0 10px;
    z-index: 10;
    .van-row {
      width: 100%;
      height: 100%;
      > .van-col {
        display: flex;
        align-items: center;
        &:nth-child(2) {
          justify-content: center;
        }
      }
    }
    > div {
      &:nth-child(2) {
        flex: 1;
        text-align: center;
      }
    }
  }

  .scroll-wrapper {
    height: 100%;
    overflow: hidden;
  }

  .ignore-content {
    height: 400px;
    background-repeat: no-repeat;
    background-size: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    > div {
      padding: 0 20px;
      &:first-child {
        margin-top: 70px;
        font-size: 16px;
        font-weight: bold;
      }
      &:last-child {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-top: 20px;
      }
    }
  }

  .scroll-content {
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(2px);
    position: relative;
    top: -190px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    padding: 10px;
    .scroll-item {
      line-height: 50px;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #f0f0f0;
      > div {
        &:first-child {
          font-weight: bold;
          max-width: 245px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
        &:last-child {
          color: #666;
          max-width: 130px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
