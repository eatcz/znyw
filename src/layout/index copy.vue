<template>
    <!-- <div class="layout-container"> -->
    <baidu-map class="bm-view" :zoom="12" :mapStyle="mapStyle"
        :center="{ lat: 24.93685520002406, lng: 102.72960724248914 }" :scroll-wheel-zoom="true">
    </baidu-map>
    <Header />
    <div class="content">
        <RouterView />
    </div>
    <!-- </div> -->
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
import Header from './components/Header.vue';
import { mapStyle } from '../config/map_style';
</script>

<style scoped lang='scss'>
.layout-container {
    height: 100%;
    // background-color: #fff;
}

.bm-view {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
}

.content {
    height: 100%;
}
</style>