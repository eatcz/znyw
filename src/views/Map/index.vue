<template>
    <baidu-map class="map" :zoom="12" :mapStyle="mapStyle" :center="{ lng: 114.394035, lat: 28.667105 }"
        @buslisthtmlset="handlerr" @getbuslinecomplete="handle" :scroll-wheel-zoom="true">
        <!-- <bm-polyline :path="path" stroke-color="blue" :stroke-weight="1" :stroke-opacity="0.5"></bm-polyline> -->
        <bm-bus keyword="昆明五号线" :auto-viewport="true" location="昆明" :selectFirstResult="true" :panel="false"
            @getbuslinecomplete="handle" :autoViewport="true" @buslisthtmlset="handlerr"></bm-bus>
    </baidu-map>
</template>
<!--   <bm-polyline :path="path" stroke-color="blue" :stroke-weight="6" :stroke-opacity="0.5"></bm-polyline> -->
<script setup>

const path = [
    { lng: 114.394035, lat: 28.667105 },
    {
        lat: 114.3873312,
        lng: 28.6569347
    },
    {
        lat: 114.3793716,
        lng: 28.648073
    }
    // {
    //     lat: 102.719264,
    //     lng: 24.933218
    // },
    // ... 更多坐标点
]

function handler({ BMap, map }) {
    // 此处可以获取地图实例，进行更多操作
    // 例如：map.centerAndZoom(new BMap.Point(116.404, 39.915), 11)
}

function handlerr(data) {
    console.log(data.children[0].children[0].children[0].click())
}

function handle(data) {
    console.log(data)
}
</script>

<style>
.map {
    width: 100%;
    height: 500px;
}
</style>