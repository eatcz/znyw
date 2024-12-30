<template>
    <!-- <Card :width="472" :height="365" :right=0 :top="635" isTitle> -->
    <Card :width="472" :height="398" :right=48 :top="590" isTitle>
        <template #title>
            <h3>项目重要信息</h3>
        </template>
        <template #content>
            <ul class="list">
                <li class="item" v-for="item in 6" :key="item">
                    <img src="../../../assets/imgs/red-tip.svg" alt="">
                    <span>[上海]</span>
                    <span>XX线路发生XXX风险预警</span>
                </li>
            </ul>
        </template>
    </Card>
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.list {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-top: 19px;
    color: #165CFF;

    .item {
        cursor: pointer;
        display: flex;
        gap: 5px;
        margin-bottom: 5px;
        font-size: 20px;

    }
}
</style>