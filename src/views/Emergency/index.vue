<template>
    <div class="system-container">
        <Sidebar />

        <div class="list-wrapper">
            <RouterView />
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import Sidebar from './components/Sidebar.vue';
</script>

<style scoped lang='scss'>
.system-container {
    display: flex;
    height: 100%;
    padding: 0 14px 15px 17px;
    // background-color: #fff;
}

.sidebar,
.list-wrapper {
    height: calc(100% - 94px);
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
    position: relative;
    flex: 1;
    padding: 12px 12px 0 10px;

    .title-wrapper {
        display: flex;
        justify-content: space-between;
        padding-bottom: 7px;
        border-bottom: 1px solid #0e9cff;

        .title {
            font-size: 18px;
            color: #fff;
            font-weight: bold;
        }

        .button-wrapper {
            display: flex;
            gap: 12px;

            .button {
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;
                width: 140px;
                border-radius: 4px;
                opacity: 1;
                padding: 3.5px 6px;
                gap: 4px;
                background: rgba(47, 109, 255, 0.2);
                color: #fff;

                box-sizing: border-box;
                border: 1px solid #2F6DFF;
            }
        }
    }

    .pagination {
        position: absolute;
        right: 16px;
        bottom: 16px;

    }

}

.views {
    flex: 1;
    background-color: #fff;
}
</style>