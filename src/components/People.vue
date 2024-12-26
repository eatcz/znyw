<template>
    <div class="fir">
        <div class="des">
            <h3>人、车、料</h3>
        </div>

        <!-- 数量 -->
        <div class="item-wrap">
            <div class="item" v-for="item in 5" :key="item">
                <div class="item-top"></div>
                <div class="item-bottom"></div>
            </div>
        </div>

        <!-- 车间 -->
        <div class="workspace">
            <div class="work" v-for="item in 4" :key="item">
                <div class="title flex">
                    <div class="icon"></div>
                    <h3 class="workname">综合一车间</h3>
                </div>

                <div class="workinfo">
                    <div class="content" v-for="item in 3" :key="item">
                        <div class="info-wrap">
                            <div class="info-icon"></div>
                            <p class="rank">职工</p>
                        </div>
                        <div class="count">
                            <p class="num">20人</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
</script>

<style scoped lang='scss'>
.fir {
    height: 493px;
    margin-bottom: 24px;
    padding: 5px 10px 0;
    border: 1px solid #0E9CFF;
    opacity: 1;
    background: #00000A;
    box-shadow: inset 0px 0px 87px 0px rgba(1, 194, 255, 0.4);

    // 人、车、料
    .des {
        height: 42px;
        border-bottom: 1px solid #0E9CFF;
        color: #fff;
        font-size: 22px;
        font-weight: bold;
        line-height: 42px;
    }

    // 数量

    .item-wrap {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        margin-bottom: 15px;

        .item {
            width: 124px;
            height: calc(70px + 4px + 24px);
            padding-top: 20px;
            margin-bottom: 18px;

            .item-top,
            .item-bottom {
                background: rgba(255, 255, 255, 0.2);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }

            .item-top {
                height: 70px;
                margin-bottom: 4px;

            }

            .item-bottom {
                height: 24px;

            }
        }
    }

    // 车间
    .workspace {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        max-height: calc(98px * 2);
        overflow-y: auto;

        .work {
            height: 98px;

            .title {
                align-items: center;
                gap: 5px;
                margin-bottom: 5px;

                .icon {
                    width: 12px;
                    height: 12px;
                    opacity: 1;

                    box-sizing: border-box;
                    border: 3px solid #FFFFFF;
                    border-radius: 50%;
                }

                .workname {
                    font-family: Alimama ShuHeiTi;
                    font-size: 16px;
                    font-weight: bold;
                    line-height: 24px;
                    letter-spacing: 0em;

                    font-feature-settings: "kern" on;
                    color: #FFFFFF;
                }
            }

            .workinfo {
                display: flex;
                gap: 15px;
                margin-left: 27px;


                .content {

                    .info-wrap {
                        display: flex;
                        align-items: center;
                        gap: 5px;
                        margin-bottom: 10px;

                        .info-icon {
                            width: 4px;
                            height: 4px;
                            opacity: 1;
                            background: #FFFFFF;
                        }

                        .rank {
                            font-size: 14px;
                            font-variation-settings: "opsz" auto;
                            color: #FFFFFF;
                        }
                    }

                    .count {
                        .num {
                            font-size: 20px;
                            font-weight: bold;
                            font-variation-settings: "opsz" auto;
                            font-feature-settings: "kern" on;
                            color: #0098FA;
                        }
                    }
                }
            }
        }
    }
}
</style>