<template>
    <div class="system-wrapper">
        <div class="sidebar">
            <el-input placeholder="请输入部门名称"></el-input>
            <el-tree style="max-width: 600px" :data="data" :props="defaultProps" @node-click="handleNodeClick" />
        </div>

        <div class="list-wrapper">
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
    </div>
</template>

<script setup lang='ts'>
import { nanoid } from 'nanoid';
import Card from '../../components/Card.vue';
import { getImageUrl } from '../../utils';

interface Tree {
    label: string
    children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
    console.log(data)
}

const data: Tree[] = [
    {
        label: 'Level one 1',
        children: [
            {
                label: 'Level two 1-1',

            },
        ],
    },
    {
        label: 'Level one 2',
        children: [
            {
                label: 'Level two 2-1',

            },
            {
                label: 'Level two 2-2',

            },
        ],
    },
    {
        label: 'Level one 3',
        children: [
            {
                label: 'Level two 3-1',

            },
            {
                label: 'Level two 3-2',
            },
        ],
    },
]

const defaultProps = {
    children: 'children',
    label: 'label',
}

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
.system-wrapper {
    display: flex;
    padding: 0 14px 15px 17px;

    .sidebar,
    .list-wrapper {
        height: calc(100vh - 64px - 10px);
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
}

.table-row-bg {
    background-color: #000;
}
</style>

<style scoped>
:deep(.el-input) {
    height: 42px;
    opacity: 1;

    background: rgba(0, 0, 0, 0.71);

    border: 1px solid rgba(22, 92, 255, 0.28);
}

:deep(.el-input__wrapper) {
    opacity: 1;
    background: rgba(0, 0, 0, 0.71);
    border: 1px solid rgba(15, 24, 202, 0.28) !important;
}

:deep(.el-input__wrapper) {
    opacity: 1;
    background: rgba(0, 0, 0, 0.71);

    border: 1px solid rgba(22, 92, 255, 0.28);
    border-radius: 4px;
}

:deep(.el-input__inner) {
    height: 32px;
}

:deep(.el-icon svg) {
    color: #fff;
}

:deep(.el-tree) {
    background: transparent !important;
}

:deep(.el-tree-node__content:hover) {
    background: transparent !important;
}

:deep(.el-tree-node:focus) {
    /* background: transparent !important; */
    background: rgba(22, 92, 255, 0.4);
}

:deep(.el-tree) {
    color: #fff;
}

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