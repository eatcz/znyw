<template>
    <nav class="navbar flex">
        <div class="nav-left flex">
            <div class="show-menu flex" @click="menuStore.toggleLeftMenu">
                <el-icon :size="30">
                    <DArrowRight v-if="!menuStore.isShowLeftMenu" />
                    <DArrowLeft v-else />
                </el-icon>
            </div>

            <div class="selector">
                <Selector :project-list="projectList" />
                <Selector :project-list="projectList" />
            </div>
        </div>
        <div class="datetime-weather">
            <div class="datetime primary flex">
                <div class="time fir">
                    <p>{{ dayjs(new Date()).format('HH:mm:ss') }}</p>
                </div>
                <div class="date sec">
                    <p>{{ dayjs(new Date()).format('YYYY:MM:DD') }}</p>
                </div>
            </div>
            <div class="weather flex">
                <img src="../../../assets/imgs/weather.svg" alt="">
                <div class=" primary flex">
                    <div class="degree fir">
                        <p>25度</p>
                    </div>
                    <div class="now sec">
                        <p>多云转晴</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-right">
            <div class="show-menu flex" @click="menuStore.toggleRightMenu">
                <el-icon :size="30">
                    <DArrowLeft v-if="!menuStore.isShowRightMenu" />
                    <DArrowRight v-else />
                </el-icon>
            </div>
        </div>
    </nav>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import Selector from '../../../components/Selector.vue';
import { useMenuStore } from '../../../store/modules/menu';
const menuStore = useMenuStore()


const projectList = ref([
    {
        id: nanoid(),
        label: 'xx项目'
    }
])
</script>

<style scoped lang='scss'>
.navbar {
    justify-content: space-between;
    align-items: center;

    .show-menu {
        cursor: pointer;
        justify-content: center;
        align-items: center;
        width: 43px;
        height: 43px;
        border-radius: 4px 0px 0px 4px;
        opacity: 1;
        background: rgba(22, 92, 255, 0.4);
        color: rgba(22, 92, 255, 0.902);
        font-weight: bold;
    }

    .nav-left {
        flex: 1;
        gap: 4px;

        .selector {
            // height: 42px;
            background: rgba(22, 92, 255, 0.4);
            padding: 5px 6px;
        }
    }

    .datetime-weather {
        cursor: default;
        display: flex;
        height: 44px;


        .primary {
            flex-direction: column;
            text-align: right;

            .fir {
                height: 24px;
                color: #FFFFFF;
            }

            .sec {
                height: 20px;
                color: rgba(255, 255, 255, 0.6);
                font-size: 12px;
            }
        }

        .datetime {
            position: relative;

            padding-right: 21px;
            margin-right: 20px;

            &::after {
                position: absolute;
                top: 25%;
                right: 0;
                display: block;
                width: 1px;
                height: 20px;
                content: '';
                background-color: #fff;
                opacity: 1;
            }
        }

        .weather {
            gap: 5px;
        }
    }

    .nav-right {
        display: flex;
        justify-content: flex-end;
        flex: 1;
    }

}
</style>