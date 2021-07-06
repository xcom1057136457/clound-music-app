<template>
  <div class="top-wrapper">
    <div class="user-info">
      <div class="avatar-image">
        <img :src="userInfo.avatarUrl" alt="" />
      </div>

      <div class="user-detail">
        <div class="nick-name">{{ userInfo.nickname }}</div>
      </div>
    </div>
    <div
      class="bg-image"
      :style="{ backgroundImage: `url(${userInfo.backgroundUrl})` }"
    ></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex';

const store = useStore();

// 获取用户头像
let userInfo: any = computed(() => {
  return store.state.user.userInfo.profile;
});

onMounted(() => {});
</script>

<style lang="scss" scoped>
.top-wrapper {
  height: 150px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  .user-info {
    z-index: 2;
  }
  .avatar-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    > img {
      width: 100%;
      height: 100%;
    }
  }
  .bg-image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(1px);
  }
}
</style>
