<template>
  <!-- S 顶部搜索 -->
  <van-sticky>
    <van-search v-model="searchValue" placeholder="请输入搜索关键词" />
  </van-sticky>
  <!-- E 顶部搜索 -->

  <!-- S Banner -->
  <div class="top-banner">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in bannerList" :key="item.bannerId">
        <van-image fit="cover" :src="item.pic" lazy-load />
        <span class="top-title" :style="{ backgroundColor: item.titleColor }">{{
          item.typeTitle
        }}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
  <!-- E Banner -->

  <!-- S 进口 -->
  <div class="ball-wrapper">
    <div v-for="item in ballList" :key="item.id" class="ball-item">
      <div class="ball-icon">
        <img v-lazy="item.iconUrl" />
      </div>
      <div class="ball-text">{{ item.name }}</div>
    </div>
  </div>
  <!-- E 进口 -->

  <!-- S 推荐歌单 -->
  <div class="recommond-songs-list">
    <div class="top-text">
      <div>推荐歌单</div>
      <div>
        <span>更多</span>
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="bottom-songs-detail">
      <div
        v-for="item in resourceList"
        :key="item.id"
        class="bottom-songs-item"
      >
        <div class="top-image">
          <img v-lazy="item.picUrl" />
        </div>
        <div class="bottom-text">{{ item.name }}</div>
      </div>
    </div>
  </div>
  <!-- E 推荐歌单 -->

  <!-- S 推荐歌曲 -->
  <div class="recommond-songs">
    <div class="top-text">
      <div>推荐歌曲</div>
      <div>
        <span>更多</span>
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="bottom-songs-detail">
      <div
        v-for="item in recommondSongs"
        :key="item.al.id"
        class="bottom-songs-item"
      >
        <div class="top-image">
          <img v-lazy="item.al.picUrl" />
        </div>
        <div class="bottom-text">{{ item.name }}</div>
      </div>
    </div>
  </div>
  <!-- E 推荐歌曲 -->

  <!-- S 推荐MV -->
  <div class="recommond-MV">
    <div class="top-text">
      <div>推荐MV</div>
      <div>
        <span>更多</span>
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="bottom-songs-detail">
      <div
        v-for="item in mvList"
        :key="item.id"
        class="bottom-songs-item"
      >
        <div class="top-image">
          <img v-lazy="item.picUrl" />
        </div>
        <div class="bottom-text">{{ item.name }}</div>
      </div>
    </div>
  </div>
  <!-- E 推荐MV -->

  <!-- S 推荐节目 -->
  <div class="recommond-songs-list">
    <div class="top-text">
      <div>推荐节目</div>
      <div>
        <span>更多</span>
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="bottom-songs-detail">
      <div
        v-for="item in programList"
        :key="item.id"
        class="bottom-songs-item"
      >
        <div class="top-image">
          <img v-lazy="item.coverUrl" />
        </div>
        <div class="bottom-text">{{ item.name }}</div>
      </div>
    </div>
  </div>
  <!-- E 推荐节目 -->

  <!-- S 推荐DJ -->
  <div class="recommond-songs-list">
    <div class="top-text">
      <div>推荐DJ</div>
      <div>
        <span>更多</span>
        <van-icon name="arrow" />
      </div>
    </div>

    <div class="bottom-songs-detail">
      <div
        v-for="item in djList"
        :key="item.id"
        class="bottom-songs-item"
      >
        <div class="top-image">
          <img v-lazy="item.picUrl" />
        </div>
        <div class="bottom-text">{{ item.name }}</div>
      </div>
    </div>
  </div>
  <!-- E 推荐DJ -->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from "vue";
import {
  getBanner,
  getHomePageBall,
  getHomeResource,
  getHomeRecommondSongs,
  getHomeMV,
  getHomeProgram,
  getHomeDj
} from "@/api/index";
export default defineComponent({
  setup() {
    // banner
    let bannerList: Ref<any> = ref([]);

    // 获取banner
    let getBannerHandler = async () => {
      let { code, banners }: any = await getBanner({
        type: 2
      });
      if (code == 200) {
        bannerList.value = banners;
      }
    };

    // 搜索内容
    let searchValue = ref("");

    // 首页圆形图标
    let ballList: Ref<any> = ref([]);

    // 获取首页圆形图标
    let getHomePageBallHandler = async () => {
      let { code, data }: any = await getHomePageBall();
      if (code == 200) {
        ballList.value = data;
      }
    };

    // 每日歌单
    let resourceList: Ref<any> = ref([]);

    // 获取每日歌单
    let getHomeResourceHandler = async () => {
      let { code, recommend }: any = await getHomeResource();
      if (code == 200) {
        resourceList.value = recommend;
      }
    };

    // 每日推荐歌曲
    let recommondSongs: Ref<any> = ref([]);

    // 获取每日推荐歌曲
    let getHomeRecommondSongsHandler = async () => {
      let { code, data }: any = await getHomeRecommondSongs();
      if (code == 200) {
        recommondSongs.value = data.dailySongs;
      }
    };

    // 推荐mv
    let mvList: Ref<any> = ref([])
    // 获取推荐MV
    let getHomeMVHandler = async () => {
      let { code, result }: any = await getHomeMV();
      if (code == 200) {
        mvList.value = result
      }
    };

    // 推荐节目
    let programList: Ref<any> = ref([])
    let getHomeProgramHandler = async () => {
      let { code, programs }: any = await getHomeProgram()
      if (code == 200) {
        programList.value = programs
      }
    }

    // 推荐电台
    let djList: Ref<any> = ref([])
    let getHomeDjHandler = async () => {
      let { code, result }: any = await getHomeDj()
      if (code == 200) {
        djList.value = result
      }
    }

    onMounted(() => {
      getBannerHandler();
      getHomePageBallHandler();
      getHomeResourceHandler();
      getHomeRecommondSongsHandler();
      getHomeMVHandler();
      getHomeProgramHandler();
      getHomeDjHandler()
    });

    return {
      bannerList,
      searchValue,
      ballList,
      resourceList,
      recommondSongs,
      mvList,
      programList,
      djList
    };
  }
});
</script>

<style lang="scss" scoped>
.van-swipe {
  height: 145px;
  border-radius: 5px;
  overflow: hidden;
}
.van-image {
  width: 100%;
  height: 100%;
}
.top-banner {
  padding: 0 10px 10px 10px;
  background-color: #fff;
  .van-swipe-item {
    position: relative;
  }
  .top-title {
    position: absolute;
    bottom: -3px;
    right: -6px;
    color: #fff;
    font-size: 12px;
    padding: 5px 7px;
    transform: scale(0.8);
    border-top-left-radius: 10px;
  }
}

.ball-wrapper {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  overflow-y: hidden;
  padding: 10px;
  background-color: #fff;
  margin-top: 10px;
  .ball-text {
    font-size: 12px;
    margin-top: 5px;
    transform: scale(0.9);
  }
}

.ball-item {
  flex: 0 0 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  > .ball-icon {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 50%;
    background-image: linear-gradient(120deg, #f093fb 0%, #f5576c 100%);
    > img {
      width: 100%;
      height: 100%;
    }
  }
}

.recommond-songs-list {
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
  > .top-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    > div {
      &:first-child {
        font-weight: bold;
      }

      &:last-child {
        font-size: 12px;
      }
    }
  }
  .bottom-songs-detail {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 10px;
    > .bottom-songs-item {
      flex: 0 0 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      .top-image {
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 4px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .bottom-text {
        font-size: 12px;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-top: 5px;
        line-height: 1.5em;
        height: 38px;
      }
    }
  }
}

.recommond-songs {
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
  > .top-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    > div {
      &:first-child {
        font-weight: bold;
      }

      &:last-child {
        font-size: 12px;
      }
    }
  }
  .bottom-songs-detail {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 10px;
    > .bottom-songs-item {
      flex: 0 0 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      .top-image {
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 4px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .bottom-text {
        font-size: 12px;
        margin-top: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 106px;
        text-align: center;
      }
    }
  }
}

.recommond-MV {
  padding: 10px;
  margin-top: 10px;
  background-color: #fff;
  > .top-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    > div {
      &:first-child {
        font-weight: bold;
      }

      &:last-child {
        font-size: 12px;
      }
    }
  }
  .bottom-songs-detail {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    overflow-y: hidden;
    margin-top: 10px;
    > .bottom-songs-item {
      flex: 0 0 30%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      &:last-child {
        margin-right: 0;
      }
      .top-image {
        width: 100%;
        height: auto;
        overflow: hidden;
        border-radius: 4px;
        > img {
          width: 100%;
          height: 100%;
        }
      }
      .bottom-text {
        font-size: 12px;
        margin-top: 10px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        width: 106px;
        text-align: center;
      }
    }
  }
}
</style>
