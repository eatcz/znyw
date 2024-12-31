<template>
    <!-- <Card :width="685" :height="200" :top="275" :right="48" :isTitle="true"> -->
    <Card :width="472" :height="200" :top="275" :right="48" :isTitle="true">
        <template #title>
            <h3 class="title">固定值守点</h3>
        </template>
        <template #content>

            <div class="list">
                <div class="item" v-for="item in 3" :key="item">
                    <div class="title-info">
                        <p>真新新村站正常</p>
                    </div>
                    <div class="content">
                        值守人数 <span class="count">18</span>人
                    </div>
                </div>
            </div>

        </template>


    </Card>
</template>

<script setup lang='ts'>
// import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    // place-self: center;
    justify-items: center;
    color: #fff;
}

.item {
    padding-top: 10px;

    .title-info {
        width: 120px;
        height: 40px;
        border-radius: 4px;
        opacity: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 8px 8px;
        gap: 10px;
        background: rgba(47, 109, 255, 0.2);
        border: 1px solid #2F6DFF;
        text-wrap: nowrap;
        box-sizing: border-box;
    }

    .content {
        margin: 10px 0;
    }

    .count {
        color: #FDCC00;
    }
}
</style>