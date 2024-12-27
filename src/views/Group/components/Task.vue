<template>
    <div class="task-wrapper">
        <div class="task" v-for="item in 3" :key="item">
            <div class="title">
                <h3>年度任务数</h3>
            </div>
            <div class="count">
                <h3>1168</h3>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.task-wrapper {
    display: flex;
    justify-content: space-between;
    gap: 36px;
    width: 100%;
    height: 84px;
    margin-bottom: 18px;

    .task {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        flex: 1;
        // width: 279px;
        opacity: 1;
        background: rgba(22, 92, 255, 0.2);

        h3 {
            color: #fff;
            font-size: 28px;
        }
    }
}
</style>