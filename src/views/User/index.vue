<template>
    <div class="user-wrapper">
        <div class="title-wrapper">
            <h3 class="title">人员列表</h3>
            <div class="button-wrapper">
                <div class="button" v-for="item in fnList" :key="item.id">
                    <img :src="getImageUrl(item.icon)" alt="">
                    <span>{{ item.label }}</span>
                </div>
            </div>
        </div>

        <div class="table-wrapper">
            <el-table :data="tableData" style="width: 100%" :row-style="table_row_style"
                :header-row-style="table_header_row_style">
                <el-table-column prop="username" label="姓名" align="center" width="180">
                </el-table-column>
                <el-table-column prop="job_status" label="在职状态" align="center" width="180">
                    <template #default="scope">
                        <p style="color: #67C23A;">{{ scope.row.status }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="level" align="center" label="职级">
                    <template #default="scope">
                        <el-tag type="success">{{ scope.row.level }}</el-tag>
                    </template>
                </el-table-column>
                <el-table-column prop="contact_information" align="center" label="联系方式">
                    <template #default="scope">
                        <p>{{ scope.row.contact_information }}</p>
                    </template>
                </el-table-column>
                <el-table-column prop="department" align="center" label="部门">
                    <template #default="scope">
                        {{ scope.row.department }}
                    </template>
                </el-table-column>
                <el-table-column prop="status" align="center" label="状态">
                    <template #default="scope">
                        {{ scope.row.status }}
                    </template>
                </el-table-column>
                <el-table-column prop="certificate" align="center" label="证书">
                    <template #default="scope">
                        {{ scope.row.certificate }}
                    </template>
                </el-table-column>
                <el-table-column align="center" label="操作">
                    <template #default="scope">
                        <el-link :underline="false" type="primary">查看详情</el-link>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination background layout="prev, pager, next" :total="1000" />
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import { nanoid } from 'nanoid'
import { getImageUrl } from '../../utils'

const fnList = [
    {
        id: nanoid(),
        label: '批量XXX调用',
        icon: 'users'
    },
    {
        id: nanoid(),
        label: '数据导入',
        icon: 'import'
    }
]

const tableData = [
    {
        username: '张XX',
        job_status: '在职',
        level: '高级',
        contact_information: '18612345678',
        department: '技术部',
        status: '在职',
        certificate: 'xxx证书'

    },

]

const table_row_style = {
    backgroundColor: '#071c53',
    opacity: 1,
    border: '1px solid red',
    color: '#fff'
}

const table_header_row_style = {
    background: '#0b2f89',
}
</script>

<style scoped lang='scss'>
.user-wrapper {

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

.table-row-bg {
    background-color: #000;
}
</style>

<style scoped>
:deep(.el-table td.el-table__cell) {
    border-bottom: none;
}

:deep(.el-table th.el-table__cell) {
    background: none;
}

:deep(.is-leaf) {
    border-bottom: none !important;
}

:deep(.el-table::before) {
    height: 0px;
}

/* 
:deep(.el-table__row:hover) {
    background-color: red !important;
} */

:deep(.el-pager li) {
    color: #fff;
    background: rgba(22, 92, 255, 0.4) !important;
}

:deep(.btn-prev) {
    color: #fff;
    background: rgba(22, 92, 255, 0.4) !important;
}

:deep(.btn-next) {
    color: #fff;
    background: rgba(22, 92, 255, 0.4) !important;
}
</style>