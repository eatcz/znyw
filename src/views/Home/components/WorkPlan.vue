<template>
    <Card :width="440" :height="251" :top="485" :left="48" :isTitle="true">
        <template #title>
            <h3 class="title">工作计划</h3>
        </template>
        <template #content>
            <div class="date-section" v-for="item in 3" :key="item">
                <div class="fir flex">
                    <h3 class="date">年</h3>
                    <el-progress :percentage="50" />
                </div>

                <!-- 一车间 -->
                <div class="space" v-for="item in 3" :key="item">
                    <div class="info flex">
                        <p class="title">一车间</p>
                        <div class="progress">
                            <el-progress :percentage="50" />
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </Card>
</template>

<script setup lang='ts'>
import Card from '../../../components/Card.vue';
</script>

<style scoped lang='scss'>
.date-section {
    padding-top: 5px;

    .fir {

        .date {
            font-size: 14px;
            font-weight: bold;
            color: #fff;
            margin-right: 6px;
            margin-bottom: 4px;
        }

        :deep(.el-progress-bar__outer) {
            height: 12px !important;
            border-radius: 0;
        }

        :deep(.el-progress-bar__inner) {
            height: 12px !important;
            border-radius: 0;
        }
    }

    .space {
        margin-left: 20px;

        .info {

            align-items: center;

            .title {
                color: #fff;
                font-size: 12px;
                text-wrap: nowrap;
                margin-right: 6px;
            }

            .progress {
                width: 100%;
                // padding: 3px 0
            }

            :deep(.el-progress-bar__outer) {
                height: 6px !important;
                border-radius: 0;
            }

            :deep(.el-progress-bar__inner) {
                height: 6px !important;
                border-radius: 0;
            }
        }
    }
}
</style>
<style scoped>
:deep(.el-progress) {
    width: 100%;
}

:deep(.el-progress__text) {
    color: #fff;
}
</style>