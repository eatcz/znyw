<template>
    <Dialog :width="766" :height="592" v-if="dialogVisible" title="人员信息">
        <template #content>
            <div class="content-info">
                <div class="info">
                    <div class="item">
                        <p class="title">昵称: </p>
                        <span>{{ infoData!.nickName }}</span>
                    </div>
                    <div class="item">
                        <p class="title">用户名: </p>
                        <span>{{ infoData!.username }}</span>
                    </div>
                    <div class="item">
                        <p class="title">性别: </p>
                        <span>{{ infoData!.gender }}</span>
                    </div>
                    <div class="item">
                        <p class="title">联系方式: </p>
                        <span>{{ infoData!.phone }}</span>
                    </div>
                    <div class="item">
                        <p class="title">邮箱: </p>
                        <span>{{ infoData!.email }}</span>
                    </div>
                    <div class="item">
                        <p class="title">在职状态: </p>
                        <span class="status">{{ infoData!.enabled ? '在职' : '离职' }}</span>
                    </div>
                    <!-- <div class="item">
                        <p class="title">是否为领导: </p>
                        <span class="status">{{ infoData!.leader ? '是' : '否' }}</span>
                    </div> -->
                    <!-- <div class="item">
                        <p class="title">职级:</p>
                        <el-tag type="danger">高级</el-tag>
                    </div> -->
                    <div class="item">
                        <p class="title">部门: </p>
                        <span>{{ infoData!.dept.name }}</span>
                    </div>
                    <div class="item">
                        <p class="title">部门: </p>
                        <span>{{ infoData!.dept.name }}</span>
                    </div>
                    <div class="item">
                        <p class="title">岗位名称: </p>
                        <span>{{ (infoData?.jobs.length as number > 0) ? infoData?.jobs[0].name : '' }}</span>
                    </div>
                    <!-- <div class="item">
                        <p class="title">XX调用: </p>
                        <span>张XX</span>
                    </div>
                    <div class="item">
                        <p class="title">XX到期: </p>
                        <span>张XX</span>
                    </div> -->
                    <div class="item">
                        <p class="title">证书: </p>
                        <el-tag type="danger">高血压</el-tag>
                    </div>
                </div>
                <div class="avator">
                    <img :src="infoData!.avatarPath" alt="">
                </div>
            </div>
        </template>
        <template #footer>
            <div class="btn" @click="handleClose">关闭</div>
        </template>
    </Dialog>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
import type { UserData } from '../types';

const infoData = ref<null | UserData>(null)

const dialogVisible = ref(false)

// 显示弹窗
const handleShow = (row: any) => {
    dialogVisible.value = true
    console.log(row)
    infoData.value = row
}

// 隐藏弹窗
const handleClose = () => {
    dialogVisible.value = false
}

defineExpose({
    handleShow,
    handleClose
})
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

.btn {
    cursor: pointer;
    width: 120px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    background: rgba(47, 109, 255, 0.2);
    border-radius: 4px;
    opacity: 1;
    box-sizing: border-box;
    border: 1px solid #2F6DFF;
    color: #fff;
}

img {
    width: 100%;
    height: 100%;
}
</style>