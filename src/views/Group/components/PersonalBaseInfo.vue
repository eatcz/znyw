<template>
    <!-- <Card :width="472" :height="235" :top="820" isTitle> -->
    <Card :width="472" :height="210" :top="779" isTitle>
        <template #title>
            <h3>人员基础信息</h3>
        </template>
        <template #content>
            <v-chart class="charts" :option="option" autoresize />
        </template>
    </Card>

</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers';
import { BarChart } from 'echarts/charts';
import { LegendComponent, TooltipComponent } from 'echarts/components';
import VChart from 'vue-echarts'
use([CanvasRenderer, BarChart, LegendComponent, TooltipComponent])

// const yAxisData = ['职工', '合同工', '实习生', '外聘', '其他']
const yAxisData = ['全国', '昆明', '武汉', '上海', '西安']

const option = ref({
    legend: {},
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    xAxis: {
        type: 'value',
        // bound
    },
    yAxis: {
        type: 'category',
        data: yAxisData
    },
    series: [
        {
            name: '职工',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            data: [18203, 23489, 29034, 104970, 131744]
        },
        {
            name: '合同工',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            data: [18203, 23489, 29034, 104970, 131744]
        },
        {
            name: '实习生',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            data: [18203, 23489, 29034, 104970, 131744]
        },
        {
            name: '外聘',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            data: [18203, 23489, 29034, 104970, 131744]
        },
        {
            name: '其他',
            type: 'bar',
            barWidth: 5,
            stack: 'Search Engine',
            emphasis: {
                focus: 'series'
            },
            data: [18203, 23489, 29034, 104970, 131744]
        },
    ]
})
</script>

<style scoped lang='scss'></style>