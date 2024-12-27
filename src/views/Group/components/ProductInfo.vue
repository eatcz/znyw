<template>
    <Card :width="472" :height="300" :right="0" isTitle>
        <template #title>
            <h3>生产信息汇总</h3>
        </template>
        <template #content>
            <v-chart class="chart" :option="option" autoresize />
        </template>
    </Card>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers';
import { LineChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent } from 'echarts/components';
import VChart from 'vue-echarts'

use([CanvasRenderer, LineChart, TooltipComponent, LegendComponent])

const xAxisData = ['一月', '三月', '五月', '七月', '九月', '十二月']

const data = [820, 921, 552, 340, 652, 752]

const option = ref({
    xAxis: {
        type: 'category',
        data: xAxisData
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            type: 'line',
            smooth: true,
            data: data
        }
    ]
})
</script>

<style scoped lang='scss'></style>