<template>
    <baidu-map class="bm-view" :zoom="12" :mapStyle="mapStyle" :center="{ lng: 102.10, lat: 24.23 }"
        :scroll-wheel-zoom="true">
    </baidu-map>
    <Header />
    <RouterView />
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
import Header from './components/Header.vue';
import { mapStyle } from '../config/map_style';
</script>

<style scoped lang='scss'>
.bm-view {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}
</style>