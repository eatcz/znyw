<template>
    <!-- <Card :width="472" :height="178" :top="382" :isTitle="true" color="#fff"> -->
    <Card :width="472" :height="178" :top="320" :isTitle="true" color="#fff">
        <template #title>
            <h3 class="title">指标测评</h3>
        </template>
        <template #content>
            <div class="progress">
                <el-progress v-for="item in percentageList" :key="item.id" type="circle" :percentage="item.percentage"
                    :color="item.color">
                    <template #default="{ percentage }">
                        <div class="circle">
                            <p style="margin-bottom: 8px;">{{ item.label }}</p>
                            <p>{{ percentage }}%</p>
                        </div>
                    </template>
                </el-progress>
            </div>
        </template>
    </Card>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import Card from '../../../components/Card.vue';
import { nanoid } from 'nanoid';

const percentageList = ref([
    {
        id: nanoid(),
        label: '工作及时',
        percentage: 20,
        color: '#165cff'
    },
    {
        id: nanoid(),
        label: '复检达标',
        percentage: 20,
        color: '#4fd272'
    },
    {
        id: nanoid(),
        label: '轨道健康',
        percentage: 20,
        color: '#ef595a'
    },
    {
        id: nanoid(),
        label: '接触网健康',
        percentage: 20,
        color: '#f3c605'
    },
])
</script>

<style scoped lang='scss'>
.progress {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    padding-top: 13px;

    .circle {
        position: absolute;
        top: 50%;
        left: 45%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 70px;
        height: 70px;
        border: 1px solid #0E9CFF;
        border-radius: 50%;
        color: #FFFFFF;
        font-size: 14px;
        font-weight: 250;
    }
}
</style>

<style scoped>
:deep(.el-progress-circle) {
    width: 102px !important;
    height: 102px !important;
}
</style>