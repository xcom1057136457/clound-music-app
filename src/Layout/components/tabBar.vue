<template>
  <van-tabbar
    :fixed="false"
    v-model="active"
    active-color="#ee0a24"
    inactive-color="#000"
    border
    @change="changeHandler"
  >
    <van-tabbar-item
      v-for="(item, index) in tabBarList"
      :key="index"
      :icon="item.icon"
      :name="item.name"
    >
      <template #icon>
        <svg class="symbolIcon" aria-hidden="true">
          <use :xlink:href="'#' + item.icon"></use>
        </svg>
      </template>
      <span>{{ item.label }}</span>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { TabBarList } from '@/types/Layout.Interface';
export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();

    // 活动的active
    let active: unknown = route.meta.activeTab || ref(route.name);

    // tabBar列表
    let tabBarList: Array<TabBarList> = reactive([
      {
        name: 'Home',
        icon: 'icon-shezhi',
        label: '主页'
      },
      {
        name: 'Topic',
        icon: 'icon-duanxin',
        label: '话题'
      },
      {
        name: 'DJ',
        icon: 'icon-diantai',
        label: '电台'
      },
      {
        name: 'MV',
        icon: 'icon-shipinzhongxin',
        label: 'MV'
      },
      {
        name: 'My',
        icon: 'icon-youxi',
        label: '我的'
      }
    ]);

    // 切换页面
    let changeHandler = (active: any) => {
      router.push({
        name: active
      });
    };

    return {
      tabBarList,
      active,
      changeHandler
    };
  }
});
</script>

<style></style>
