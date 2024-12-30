<template>
    <!-- <div class="information-summary">

    </div> -->
    <Card :width="472" :height="241" :left="48" :top="518" isTitle>
        <template #title>
            <h3>专业信息汇总</h3>
        </template>
        <template #content>
            <v-chart class="charts" :option="option" autoresize />
        </template>
    </Card>
</template>

<script setup lang='ts'>
import { ref, } from 'vue'
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { TitleComponent, TooltipComponent, LegendComponent } from 'echarts/components';
import VChart from 'vue-echarts'
use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent])

const data = [
    {
        value: 335,
        name: '通信'
    },
    {
        value: 335,
        name: '机电'
    },
    {
        value: 335,
        name: '变电'
    },
    {
        value: 335,
        name: '接触网/轨'
    },
    {
        value: 335,
        name: '电力'
    },
]

const option = ref({
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        top: '20%',
        data: ['通信', '机电', '变电', '接触网/轨', '电力']
    },
    series: [
        {
            // name: ''
            type: 'pie',
            radius: '55%',
            left: '20%',
            center: ['50%', '60%'],
            data: data
        }
    ],
    emphasis: {
        itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0,0,0,0.5)'
        }
    }
})
</script>

<style scoped lang='scss'>
.charts {
    // width: 300px;
    height: 180px;
}
</style>