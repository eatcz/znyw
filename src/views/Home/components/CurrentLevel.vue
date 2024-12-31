<template>
    <!-- <Card :width="685" :height="200" :top="632" :right="48" :isTitle="true"> -->
    <!-- <Card :width="685" :height="200" :top="480" :right="48" :isTitle="true"> -->
    <Card :width="472" :height="200" :top="480" :right="48" :isTitle="true">
        <template #title>
            <h3 class="title">当前值守等级</h3>
        </template>
        <template #content>
            <div class="list">
                <el-scrollbar>
                    <div class="item" v-for="item in 3" :key="item">
                        <div class="title">当前维保设备总数</div>
                        <div class="count">874</div>
                    </div>
                </el-scrollbar>
            </div>
        </template>


    </Card>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.list {
    max-height: 150px;
    overflow-y: auto;
    padding-top: 9px;
    color: #fff;
    font-size: 18px;

    .item {
        display: flex;
        justify-content: space-between;
        height: 32px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        margin-bottom: 10px;

        .count {
            color: #0098FA;
        }
    }
}
</style>