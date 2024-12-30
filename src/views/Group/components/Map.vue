<template>
    <div class="map-container">
        <baidu-map class="bm-view" :zoom="12" :mapStyle="mapStyle"
            :center="{ lat: 24.93685520002406, lng: 102.72960724248914 }" :scroll-wheel-zoom="true">
            <bm-polyline :path="paths" strokeColor="#908eff" :strokeWeight="3" :strokeOpacity="0.8" />
            <bm-marker v-for="(station, index) in subwayStation" :key="index"
                :position="{ lng: station.lng, lat: station.lat }"
                :icon="{ url: stationIcon, size: { width: 20, height: 20 } }" :title="station.name"
                @click="onClick(station)" @mouseover="mouseover(station.name)"></bm-marker>

            <!-- 点击站点显示信息 -->
            <bm-info-window :position="{ lat: currentPosition.lat, lng: currentPosition.lng }"
                :title="currentPosition.name" :show="show" @close="infoWinClose" @open="infoWinOpen">
                <p>{{ content }}</p>
            </bm-info-window>
        </baidu-map>
    </div>
</template>

<script setup lang='ts'>
import { reactive, ref } from 'vue'
import { mapStyle } from '../../../config/map_style';
import stationIcon from '../../../assets/icons/circle.svg'

interface Station {
    lat: number
    lng: number
    name: string
}

// 站点列表
const subwayStation = ref([
    {
        "lat": 24.93685520002406,
        "lng": 102.72960724248914,
        "name": "宝丰"
    },
    {
        "lat": 24.94518065022431,
        "lng": 102.71484044736825,
        "name": "滇池国际会展中心"
    },
    {
        "lat": 24.95089171011791,
        "lng": 102.70309725876238,
        "name": "福保"
    },
    {
        "lat": 24.96748509148531,
        "lng": 102.69972915208437,
        "name": "金家河"
    },
    {
        "lat": 24.97905248779048,
        "lng": 102.69958030286143,
        "name": "庄家塘立交桥"
    },
    {
        "lat": 24.981114390325047,
        "lng": 102.68666204081836,
        "name": "兴体路"
    },
    {
        "lat": 24.98226868347136,
        "lng": 102.67704594982887,
        "name": "渔户村"
    },
    {
        "lat": 24.98976947963619,
        "lng": 102.6705962060999,
        "name": "迎海路"
    },
    {
        "lat": 25.0006030095599,
        "lng": 102.67108362666946,
        "name": "大坝"
    },
    {
        "lat": 25.009848583765788,
        "lng": 102.6806862430763,
        "name": "广福路西口"
    },
    {
        "lat": 25.016549885537007,
        "lng": 102.691412190523,
        "name": "福海"
    },
    {
        "lat": 25.020032841397395,
        "lng": 102.69692958296346,
        "name": "金兰路"
    },
    {
        "lat": 25.026833849570078,
        "lng": 102.70484958332013,
        "name": "严家地"
    },
    {
        "lat": 25.038412620870698,
        "lng": 102.70632505011977,
        "name": "弥勒寺"
    },
    {
        "lat": 25.044383645186997,
        "lng": 102.71234827839274,
        "name": "五一路"
    },
    {
        "lat": 25.050956522560586,
        "lng": 102.7139787028928,
        "name": "华山西路"
    },
    {
        "lat": 25.060881042679217,
        "lng": 102.71912168159683,
        "name": "圆通山"
    },
    {
        "lat": 25.0630066086809,
        "lng": 102.72958649163185,
        "name": "火车北站"
    },
    {
        "lat": 25.061109999416775,
        "lng": 102.73609210996352,
        "name": "穿金路"
    },
    {
        "lat": 25.059619154341885,
        "lng": 102.74761970524706,
        "name": "石闸"
    },
    {
        "lat": 25.066870434750605,
        "lng": 102.75476985778191,
        "name": "白龙寺"
    },
    {
        "lat": 25.07519197095745,
        "lng": 102.76079191825771,
        "name": "世博园"
    }
])

// 站点坐标列表
const paths = subwayStation.value.map(station => ({ lng: station.lng, lat: station.lat }))

// 当前站点坐标
const currentPosition = reactive<Station>({
    lat: 0,
    lng: 0,
    name: ''
})

// 鼠标点击站点
const onClick = (station: Station) => {
    infoWinOpen()
    currentPosition.lat = station.lat
    currentPosition.lng = station.lng
    currentPosition.name = station.name
}

const mouseover = (title: string) => {
    // console.log(`mouseover ${title}`)
    return
}

const show = ref(false)

// infoWindow content
const content = ref('hhhhh')

const infoWinClose = () => {
    show.value = false
}

const infoWinOpen = () => {
    show.value = true
}

</script>

<style scoped lang='scss'>
.map-container {
    // height: 785px;
    height: 740px;
    margin-bottom: 18px;
    background: rgba(22, 92, 255, 0.2);
    // border: 1px solid #0E9CFF;
    box-shadow: inset 0px 0px 87px 0px rgba(1, 194, 255, 0.4);
}

.bm-view {
    width: 100%;
    height: 100%;
}
</style>