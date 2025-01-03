<template>
    <el-table :data="tableData" style="width: 100%" :row-style="table_row_style"
        :header-row-style="table_header_row_style">
        <el-table-column prop="username" label="用户名" align="center" width="180">
        </el-table-column>
        <el-table-column prop="nickName" label="昵称" align="center" width="180">
            <template #default="scope">
                <p style="color: #67C23A;">{{ scope.row.nickName }}</p>
            </template>
        </el-table-column>
        <el-table-column prop="leader" align="center" label="职级">
            <template #default="scope">
                <el-tag type="success">{{ scope.row.leader ? '领导' : '非领导' }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column prop="phone" align="center" label="联系方式">
            <template #default="scope">
                <p>{{ scope.row.phone }}</p>
            </template>
        </el-table-column>
        <el-table-column prop="dept" align="center" label="部门">
            <template #default="scope">
                <p> {{ scope.row.dept.name }}</p>
            </template>
        </el-table-column>
        <el-table-column prop="createTime" align="center" label="创建时间">
            <template #default="scope">
                <p> {{ scope.row.createTime }}</p>
            </template>
        </el-table-column>
        <el-table-column align="center" label="操作">
            <template #default="scope">
                <el-link :underline="false" type="primary" @click="handleShowDetail(scope.row)">查看详情</el-link>
                <el-link :underline="false" type="primary" style="margin: 0 15px;"
                    @click="handleUpdateShow(scope.row)">修改</el-link>
                <el-link :underline="false" type="primary" @click="handleDelete(scope.row.id)">删除</el-link>
            </template>
        </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination background layout="prev, pager, next" :total="pages.total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
    </div>
</template>

<script setup lang='ts'>

// 分页
const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)
}

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

<style scoped lang='scss'></style>