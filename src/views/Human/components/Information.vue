<template>
    <div class="content-info">
        <div class="info">
            <div class="item">
                <p class="title">姓名: </p>
                <span>张XX</span>
            </div>
            <div class="item">
                <p class="title">联系方式: </p>
                <span>张XX</span>
            </div>
            <div class="item">
                <p class="title">在职状态: </p>
                <span class="status">职工</span>
            </div>
            <div class="item">
                <p class="title">职级:</p>
                <el-tag type="danger">高级</el-tag>
            </div>
            <div class="item">
                <p class="title">部门: </p>
                <span>张XX</span>
            </div>
            <div class="item">
                <p class="title">岗位名称: </p>
                <span>张XX</span>
            </div>
            <div class="item">
                <p class="title">XX调用: </p>
                <span>张XX</span>
            </div>
            <div class="item">
                <p class="title">XX到期: </p>
                <span>张XX</span>
            </div>
            <div class="item">
                <p class="title">证书: </p>
                <el-tag type="danger">高血压</el-tag>
            </div>
        </div>
        <div class="avator">

        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.content-info {
    display: flex;
    justify-content: space-between;
}

.info {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .item {
        display: flex;
        align-items: center;
        gap: 10px;

        .title {
            font-size: 22px;
            font-weight: bold;
        }

        span {
            font-size: 20px;
        }

        .status {
            color: #67C23A;
        }
    }
}

.avator {
    width: 229px;
    height: 280px;
    border-radius: 4px;
    opacity: 1;
    background: rgba(255, 255, 255, 0.6);
}
</style>