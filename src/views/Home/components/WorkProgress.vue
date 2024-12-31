<template>
    <!-- <Card :width="685" :height="251" :top="632" :left="48" :isTitle="true"> -->
    <!-- <Card :width="685" :height="220" :top="632" :left="48" :isTitle="true"> -->
    <!-- <Card :width="685" :height="220" :top="685" :right="48" :isTitle="true"> -->
    <Card :width="635" :height="220" :top="685" :right="48" :isTitle="true">
        <template #title>
            <h3 class="title">工作进度</h3>
        </template>
        <template #content>
            <div class="chart-wrapper">
                <div class="pie">
                    <!-- <h3 class="title">整体进度</h3> -->
                    <v-chart class="chart" :option="pieOption" autoresize />
                </div>

                <div class="line">
                    <v-chart class="chart" :option="lineOption" autoresize />
                </div>
            </div>
        </template>


    </Card>

</template>

<script setup lang='ts'>
import { ref } from 'vue';
import Card from '../../../components/Card.vue';
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, LineChart } from 'echarts/charts';
import { TooltipComponent, LegendComponent, AxisPointerComponent, GridComponent, TitleComponent } from 'echarts/components';
import VChart from 'vue-echarts'
use([CanvasRenderer, PieChart, TooltipComponent, LegendComponent, AxisPointerComponent, TitleComponent, GridComponent, LineChart])

// 环形图配置
const pieOption = ref({
    title: {
        text: '整体进度',
        textAlign: 'center',
        left: '50%',
        textStyle: {
            color: '#ffffff',
            fontSize: 14
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['本日计划', '整体进度', '年度计划', '本月计划']
    },

    series: [
        {
            name: 'demo',
            type: 'pie',
            radius: ['40%', '70%'],
            // center: ['40%', '70%'],
            data: [
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 234, name: 'Ad Networks' },
                { value: 135, name: 'Video Ads' },
                { value: 1548, name: 'Search Engines' },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        }
    ]

}

)

// 折线图配置
const lineOption = ref({
    // backgroundColor: '#001e3c',
    title: {
        text: '走势变化',
        textAlign: 'center',
        left: '50%',
        textStyle: {
            color: '#ffffff',
            fontSize: 14
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['8:00', '10:00', '12:00', '14:00', '16:00'],
        axisLine: { lineStyle: { color: '#fff' } },
    },

    yAxis: {
        type: 'value',
        axisLine: { lineStyle: { color: '#fff' } },
        splitLine: { show: false },
    },

    series: [
        {
            data: [38, 43, 60, 35, 40],
            type: 'line',
            smooth: true,
            areaStyle: {
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [
                        { offset: 0, color: '#4fc3f7' }, // 顶部渐变颜色
                        { offset: 1, color: '#001e3c' }, // 底部渐变颜色
                    ],
                },
            },
            lineStyle: {
                color: '#4fc3f7',
                width: 2,
            },
        },
    ],

    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'line'
        }
    }
})

</script>

<style scoped lang='scss'>
.chart-wrapper {
    padding-top: 5px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin-left: 8px;

    .pie {
        width: 300px;
        height: 180px;

        .title {
            color: #fff;
            text-align: center;
            font-size: 14px;
            font-weight: bold;
        }
    }
}
</style>