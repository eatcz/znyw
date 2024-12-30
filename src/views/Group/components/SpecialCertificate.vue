<template>
    <!-- <Card :width="472" :height="250" :top="370" :right="0" isTitle> -->
    <Card :width="472" :height="250" :top="320" :right="48" isTitle>
        <template #title>
            <h3>特种证件统计</h3>
        </template>
        <template #content>
            <v-chart class="charts" :option="option" autoresize /> </template>
    </Card>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { TooltipComponent } from 'echarts/components';
import VChart from 'vue-echarts'

use([CanvasRenderer, BarChart, TooltipComponent])

const data = [300, 500, 461, 265, 852, 556, 456, 475, 996, 562]
const yAxisData = ['建安证', '低压电工证', '登高证', '高压证', '消防操作员证', '熔焊切割证', '制冷设备操作证', '试验员证', '特种作业证']

const option = ref({
    tooltip: {},
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'category',
        data: yAxisData
    },
    series: [
        {
            type: 'bar',
            data
        }
    ]
})
</script>

<style scoped lang='scss'></style>