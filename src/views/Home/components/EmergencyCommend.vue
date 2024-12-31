<template>

    <!-- <Card :width="752" :height="249" :top="340" :left="48" :isTitle="true" color="#fff"> -->
    <!-- <Card :width="752" :height="249" :top="550" :left="48" :isTitle="true" color="#fff"> -->
    <!-- <Card :width="752" :height="206" :top="480" :left="48" :isTitle="true" color="#fff"> -->
    <!-- <Card :width="600" :height="206" :top="480" :left="48" :isTitle="true" color="#fff"> -->
    <Card :width="472" :height="206" :top="480" :left="48" :isTitle="true" color="#fff">
        <!-- <Card :width="473" :height="206" :top="480" :left="48" :isTitle="true" color="#fff"> -->
        <template #title>
            <div class="des flex">
                <h3 class="title">应急指挥</h3>
                <div class="video flex">
                    <router-link to="/">远程视频</router-link>
                    <el-icon>
                        <VideoCameraFilled />
                    </el-icon>
                </div>
            </div>
        </template>

        <template #content>
            <div class="task-wrap">
                <div class="left">
                    <div class="task-item" v-for="item in 4" :key="item">
                        <p class="info">调度中心确认紧急事件类别 (<span class="done">√</span>)</p>
                    </div>
                </div>
                <div class="right">
                    <div class="button-wrapper flex">
                        <div class="button finished">
                            <p>已完成</p>
                        </div>
                        <div class="button unfinished">
                            <p>已完成</p>
                        </div>
                    </div>

                    <div class="list-wrapper">
                        <el-scrollbar style="height: 155px;">
                            <div class="list" v-for="item in 2" :key="item">
                                <p class="title">更换部件</p>
                                <div class="info">
                                    <p class="handler">处理人:张</p>
                                    <p class="datetime">2024/7/4</p>
                                </div>
                            </div>
                        </el-scrollbar>
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
.des {
    justify-content: space-between;
    height: 42px;
    border-bottom: 1px solid #0E9CFF;
    color: #fff;
    line-height: 42px;
    margin-bottom: 18px;

    .title {
        font-size: 22px;
        font-weight: bold;
    }

    .video {
        align-items: center;
        gap: 3px;
        font-size: 14px;
    }
}

.task-wrap {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding-top: 13px;

    .left {
        padding-top: 5px;

        .task-item {
            height: 40px;

            .info {
                color: #fff;
            }
        }
    }

    .right {

        .button-wrapper {
            gap: 11px;

            .button {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100px;
                height: 31px;
                border-radius: 4px;
                opacity: 1;
                font-family: Alimama ShuHeiTi;
                font-size: 14px;
                font-weight: bold;
                text-align: center;
                letter-spacing: 0em;
                font-feature-settings: "kern" on;
                color: #FFFFFF;
            }

            .finished {
                background: rgba(47, 109, 255, 0.2);
                border: 1px solid #2F6DFF;
            }

            .unfinished {
                background: rgba(239, 89, 90, 0.31);
                border: 1px solid #EF595A;
            }
        }

        .list-wrapper {

            .list {

                height: 48px;
                padding-left: 20px;
                margin-top: 6px;
                border-bottom: 1px solid rgba(255, 255, 255, 0.2);

                .title {
                    color: #fff;
                    font-size: 14px;
                    margin-bottom: 8px;
                }

                .info {
                    display: flex;
                    justify-content: space-between;
                    font-size: 14px;
                    color: rgba(255, 255, 255, 0.6);
                    padding-bottom: 5px;
                }
            }
        }
    }
}
</style>