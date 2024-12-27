<template>
    <div class="map-container">
        <baidu-map class="bm-view" :zoom="12" :mapStyle="mapStyle" :center="{ lng: 102.10, lat: 24.23 }"
            :scroll-wheel-zoom="true">
        </baidu-map>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { mapStyle } from '../../../config/map_style';
</script>

<style scoped lang='scss'>
.map-container {
    height: 785px;
    margin-bottom: 18px;
    background: rgba(22, 92, 255, 0.2);
    border: 1px solid #0E9CFF;
    box-shadow: inset 0px 0px 87px 0px rgba(1, 194, 255, 0.4);
}

.bm-view {
    width: 100%;
    height: 100%;
}
</style>