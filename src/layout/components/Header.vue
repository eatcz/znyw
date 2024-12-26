<template>
    <header>
        <nav class="navbar flex">
            <HeaderMenu :menu-list="l_menu" />
            <div class="center">
                <ul class="menus flex">
                    <!-- <li class="item">任务告警一览</li> -->
                </ul>
                <div class="header-title flex">
                    <div class="image flex">
                        <img src="../../../assets/imgs/h-1.svg" alt="">
                        <img src="../../../assets/imgs/h-2.svg" alt="">
                    </div>

                    <h3 class="title">智能运维数字化管理平台</h3>

                    <div class="image flex">
                        <img src="../../../assets/imgs/h-3.svg" alt="">
                        <img src="../../../assets/imgs/h-1.svg" alt="">
                    </div>
                </div>
                <ul class="menus flex">
                    <!-- <li class="item">任务告警一览</li> -->
                </ul>
            </div>

            <HeaderMenu :menu-list="r_menu" />
        </nav>
    </header>
</template>

<script setup lang='ts'>
import { nanoid } from 'nanoid';
import HeaderMenu from './HeaderMenu.vue';

const l_menu = [
    {
        id: nanoid(),
        path: '/system',
        label: '系统管理'
    },
    {
        id: nanoid(),
        path: '/',
        label: '人力资源系统管理'
    },
    {
        id: nanoid(),
        path: '/',
        label: '物资设备'
    },
    {
        id: nanoid(),
        path: '/',
        label: '生产计划'
    },


]

const r_menu = [
    {
        id: nanoid(),
        path: '/trackmonitor',
        label: '安全质量'
    },
    {
        id: nanoid(),
        path: '/trackmonitor',
        label: '故障管理'
    },
    {
        id: nanoid(),
        path: '/trackmonitor',
        label: '应急管理'
    },
    {
        id: nanoid(),
        path: '/trackmonitor',
        label: '资料管理'
    },

]

</script>

<style scoped lang='scss'>
header {
    color: #fff;
    margin-bottom: 10px;

    .navbar {
        display: flex;
        justify-content: space-between;
        height: 64px;
    }
}


.center {
    cursor: default;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: url('../../assets/imgs/header-bg.svg') no-repeat center;
    background-position: bottom;

    .header-title {
        display: flex;

        .title {
            font-family: Alimama ShuHeiTi;
            font-weight: bold;
            text-align: center;
            letter-spacing: 0em;
            font-size: 28px;
            font-variation-settings: "opsz" auto;
            font-feature-settings: "kern" on;
            background: linear-gradient(180deg, #FFFFFF 0%, #165CFF 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            // text-fill-color: transparent;
            opacity: 1;
            padding: 0 20px;
        }
    }

    .image {
        align-items: center;
    }


}

.active {
    background-image: url('../../assets/imgs/hover.svg');
    background-size: 100% 100%;
    background-repeat: no-repeat;

    .title {
        font-family: Alimama ShuHeiTi;
        font-size: 16px;
        font-weight: bold;
        line-height: 24px;
        text-align: center;
        letter-spacing: 0em;
        font-variation-settings: "opsz" auto;
        font-feature-settings: "kern" on;
        background: linear-gradient(180deg, #FFFFFF 0%, #165CFF 100%), #FFFFFF;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        // text-fill-color: transparent;
        opacity: 1;
    }
}
</style>