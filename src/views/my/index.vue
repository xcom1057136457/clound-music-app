<template>
  <div class="my-wrapper">
    <div class="top-wrapper">
      <div class="user-info">
        <div class="avatar-image">
          <img :src="userInfo.avatarUrl" alt="" />
        </div>

        <div class="user-detail">
          <div class="nick-name">{{ userInfo.nickname }}</div>
        </div>

        <div class="follow-btn" @click="isFollow = !isFollow">
          {{ isFollow ? '已关注' : '关注' }}
        </div>
      </div>
      <div
        class="bg-image"
        :style="{ backgroundImage: `url(${userInfo.backgroundUrl})` }"
        v-once
      ></div>
    </div>

    <div class="grid-wrapper">
      <div class="grid-item">
        <div class="icon-box">
          <svg class="symbolIcon" aria-hidden="true">
            <use xlink:href="#icon-xihuan"></use>
          </svg>
        </div>
        <div class="grid-text">粉丝数</div>
        <div class="count-total">{{ userInfo.followeds }}</div>
      </div>

      <div class="grid-item">
        <div class="icon-box">
          <svg class="symbolIcon" aria-hidden="true">
            <use xlink:href="#icon-biaoqian"></use>
          </svg>
        </div>
        <div class="grid-text">关注人数</div>
        <div class="count-total">{{ userInfo.follows }}</div>
      </div>

      <div class="grid-item">
        <div class="icon-box">
          <svg class="symbolIcon" aria-hidden="true">
            <use xlink:href="#icon-dengji1"></use>
          </svg>
        </div>
        <div class="grid-text">歌单数</div>
        <div class="count-total">{{ userInfo.playlistCount }}</div>
      </div>

      <div class="grid-item">
        <div class="icon-box">
          <svg class="symbolIcon" aria-hidden="true">
            <use xlink:href="#icon-jilu"></use>
          </svg>
        </div>
        <div class="grid-text">收藏DJ</div>
        <div class="count-total">{{ userInfo.djStatus }}</div>
      </div>
    </div>

    <div class="cell-wrapper">
      <van-cell-group inset>
        <van-cell title="开通会员" is-link clickable center>
          <template #icon>
            <svg class="symbolIcon" aria-hidden="true">
              <use xlink:href="#icon-dengji"></use>
            </svg>
          </template>
        </van-cell>
        <van-cell title="我要帮助" is-link clickable center>
          <template #icon>
            <svg class="symbolIcon" aria-hidden="true">
              <use xlink:href="#icon-yiwen"></use>
            </svg>
          </template>
        </van-cell>
        <van-cell title="附近的人" is-link clickable center>
          <template #icon>
            <svg class="symbolIcon" aria-hidden="true">
              <use xlink:href="#icon-dingwei"></use>
            </svg>
          </template>
        </van-cell>
        <van-cell title="听歌时长" is-link clickable center>
          <template #icon>
            <svg class="symbolIcon" aria-hidden="true">
              <use xlink:href="#icon-shijian"></use>
            </svg>
          </template>
        </van-cell>
        <van-cell title="上传歌曲" is-link clickable center>
          <template #icon>
            <svg class="symbolIcon" aria-hidden="true">
              <use xlink:href="#icon-chongzhi"></use>
            </svg>
          </template>
        </van-cell>
      </van-cell-group>
    </div>

    <div class="logout-wrapper" @click="logout">退出登录</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { computed, onMounted, ref, Ref } from '@vue/runtime-core';
import { useStore, Store } from 'vuex';
import { Dialog } from 'vant';
import { removeToken } from "@/utils/auth"
import { useRouter, Router } from 'vue-router';
export default defineComponent({
  setup() {
    const store: Store<any> = useStore();
    const router: Router = useRouter()

    // 获取用户头像
    let userInfo: any = computed(() => {
      return store.state.user.userInfo.profile;
    });

    let isFollow: Ref<boolean> = ref(false);

    // 登出
    let logout = () => {
      Dialog.confirm({
        message: '是否退出登录？'
      })
        .then(() => {
          // on confirm
          removeToken()
          setTimeout(() => {
            router.push({
              name: 'Login'
            })
          }, 100)
        })
        .catch(() => {
          // on cancel
        });
    };

    return {
      userInfo,
      isFollow,
      logout
    };
  }
});
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
    color: #fff;
    font-size: 14px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .avatar-image {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    overflow: hidden;
    margin-bottom: 10px;
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
.follow-btn {
  display: inline-block;
  padding: 5px 18px;
  margin-top: 5px;
  font-size: 12px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(10px);
}

.grid-wrapper {
  background-color: #fff;
  display: flex;
  align-items: center;
  margin: 20px var(--van-padding-md) 0;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  border-radius: var(--van-cell-group-inset-border-radius);
  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
    flex-direction: column;
    flex: 1;
    > div {
      margin-bottom: 3px;
      &:last-child {
        margin-bottom: 0px;
        font-weight: bold;
      }
      &:nth-child(1) {
        .symbolIcon {
          width: 25px;
          height: 25px;
        }
      }
      &:nth-child(2) {
        font-size: 14px;
      }
      &:nth-child(3) {
        font-size: 12px;
      }
    }
  }
}

.cell-wrapper {
  margin-top: 20px;

  .van-cell-group {
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }

  ::v-deep .van-cell__title {
    margin-left: 10px;
  }
}

.logout-wrapper {
  margin: 0 var(--van-padding-md);
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  box-shadow: 0 2px 12px 0 rgba(184, 20, 20, 0.3);
  background-color: rgba(184, 20, 20, 0.8);
  color: #fff;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  backdrop-filter: blur(10px);
  position: absolute;
  left: 0;
  right: 0;
  bottom: 10px;
}

.my-wrapper {
  height: 100%;
  position: relative;
}
</style>
