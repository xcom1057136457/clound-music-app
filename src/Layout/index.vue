<template>
  <div class="layout-wrapper">
    <div class="detail-wrapper">
      <router-view v-if="!$route.meta.keepAlive" />
      <router-view v-slot="{ Component }" v-else>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div
      class="tabBar-wrapper"
      v-if="$route.meta && $route.meta.tabBar !== false"
    >
      <tab-bar />
    </div>
  </div>
</template>

<script>
import tabBar from './components/tabBar.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  components: {
    tabBar
  },
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
.layout-wrapper {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  .detail-wrapper {
    flex: 1;
    overflow: auto;
  }
}
</style>
