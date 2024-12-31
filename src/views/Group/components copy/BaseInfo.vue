<template>
    <!-- <Card :width="472" :height="300" :top="58" :is-title="true"> -->
    <Card :width="472" :height="300" :left="48" :is-title="true">
        <template #title>
            <h3>项目基本信息</h3>
        </template>

        <template #content>
            <v-chart :option="options" />
        </template>
    </Card>

</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { use } from 'echarts/core';
import * as echarts from 'echarts'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts';
// import { LinearGradient } from 'echarts/types/src/util/graphic.js';
import VChart from 'vue-echarts'

use([CanvasRenderer, BarChart])

const dataAxis = ref(['地铁运维', '光伏运维', '改造工程', '其他'])

const options = ref({
    xAxis: {
        data: dataAxis.value,
        axisLine: {
            show: false
        },
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisLabel: {
            color: "#999"
        },
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    series: [
        {
            type: 'bar',
            barWidth: 30,
            showBackground: true,
            itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [

                    { offset: 0, color: '#0085FF ' },
                    { offset: 0.5, color: '#3f5a76' },
                    { offset: 1, color: '#1c2532' }
                ])
            },
            emphasis: {
                itemStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#2378f7' },
                        { offset: 0.7, color: '#2378f7' },
                        { offset: 1, color: '#83bff6' }
                    ])
                }
            },
            data: [470, 320, 230, 430]
        },

    ]
})

// import 
</script>

<style scoped lang='scss'></style>