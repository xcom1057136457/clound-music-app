<template>mv</template>

<script lang="ts" setup>
import { useRoute, RouteLocationNormalizedLoaded } from 'vue-router';

const route: RouteLocationNormalizedLoaded = useRoute();
console.log('route', route);
</script>

<style></style>
