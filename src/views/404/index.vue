<template>
  <div class="container">
    <div class="detail-wrapper">
      <div class="image-box">
        <img src="../../assets/svg/404.svg" alt="" />
      </div>

      <van-button
        color="linear-gradient(to right, #ff6034, #ee0a24)"
        icon="home-o"
        style="margin-top: 20px"
        @click="goToIndex"
      >
        回到首页
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
export default defineComponent({
  setup() {
    const router = useRouter();

    let goToIndex = () => {
      router.push({
        path: '/'
      });
    };

    return {
      goToIndex
    };
  }
});
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  > .detail-wrapper {
    text-align: center;
    margin-top: 100px;
    .image-box {
      width: 200px;
      height: 200px;
      overflow: hidden;
      > img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
