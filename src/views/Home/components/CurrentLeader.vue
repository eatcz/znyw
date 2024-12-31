<template>
    <!-- <Card :width="426" :height="222" :top="48" :right="48" :isTitle="false"> -->
    <Card :width="472" :height="222" :top="48" :right="48" :isTitle="false">
        <template #content>
            <div class="current-leader flex">
                <div class="current flex">
                    <p class="leader-des">当前领导:</p>
                    <p class="leader-name">刘</p>
                </div>

                <!-- 值班领导 -->
                <div class="duty-leader" v-for="item in 3" :key="item">
                    <div class="current flex">
                        <p class="leader-des">综合一车间值班领导:</p>
                        <p class="leader-name">刘</p>
                    </div>
                </div>

                <!-- 当前通告 -->
                <div class="current-note">
                    <div class="current flex">
                        <p class="cyrrent-des">当前通告:</p>
                        <p class="note">下午14:30会议室开会</p>
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
.current-leader {
    flex-direction: column;
    gap: 18px;
    height: 222px;
    margin-bottom: 22px;
    padding: 15px 0 0 11px;

}

.current {
    gap: 15px;
    font-family: Alimama ShuHeiTi;
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: 0em;
    font-variation-settings: "opsz" auto;
    font-feature-settings: "kern" on;

    .leader-name {
        color: #0098FA;
    }

    .cyrrent-des,
    .note {
        font-weight: normal;
    }

    .note {
        color: #FDCC00;
    }
}

.duty-leader {
    .current {
        font-size: 16px;
    }
}
</style>