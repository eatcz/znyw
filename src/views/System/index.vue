<template>
    <div class="system-wrapper">
        <div class="sidebar">
            <el-input></el-input>
        </div>

        <div class="list-wrapper"></div>
    </div>
</template>

<script setup lang='ts'>
import Card from '../../components/Card.vue';
</script>

<style scoped lang='scss'>
.system-wrapper {
    display: flex;
    padding: 0 14px 15px 17px;

    .sidebar,
    .list-wrapper {
        height: calc(100vh - 64px - 10px);
        border-radius: 4px;
        opacity: 1;
        background: #00000A;
        box-sizing: border-box;
        border: 1px solid #0E9CFF;
        box-shadow: inset 0px 0px 87px 0px rgba(1, 194, 255, 0.4);
    }

    .sidebar {
        width: 450px;
        margin-right: 13px;
        padding: 13px 9px 0;
    }

    .list-wrapper {
        flex: 1;

    }
}
</style>

<style scoped>
:deep(.el-input) {
    height: 42px;
    opacity: 1;

    background: rgba(0, 0, 0, 0.71);

    border: 1px solid rgba(22, 92, 255, 0.28);
}

:deep(.el-input__wrapper) {
    opacity: 1;
    background: rgba(0, 0, 0, 0.71);
    border: 1px solid rgba(15, 24, 202, 0.28) !important;
}
</style>